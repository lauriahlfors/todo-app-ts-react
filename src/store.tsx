import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

// todo interface
export interface ITodo {
  id: number;
  done: boolean;
  edit: boolean;
  tags: string[];
  title: string;
  body: string;
  deadline: string;
}

/**
 * todoCreate
 * @param todos
 * @param title
 * @param body
 * @param deadline
 * @returns
 */
export const todoCreate = (
  todos: ITodo[],
  title: string,
  body: string,
  deadline: string
): ITodo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    done: false,
    edit: false,
    tags: ['Todo'],
    title: title,
    body: body,
    deadline: new Date(deadline).toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
  },
];

/**
 * todoDelete
 * @param todos
 * @param id
 * @returns
 */
export const todoDelete = (todos: ITodo[], id: number): ITodo[] => {
  return todos.filter((todo) => todo.id !== id);
};

/**
 * todoEdit
 * @param todos
 * @param id
 * @returns
 */
export const todoEdit = (todos: ITodo[], id: number): ITodo[] => {
  return todos.map((todo) => ({
    ...todo,
    edit: todo.id === id ? !todo.edit : todo.edit,
  }));
};

/**
 * todoDone
 * @param todos
 * @param id
 * @returns
 */
export const todoDone = (todos: ITodo[], id: number): ITodo[] => {
  return todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));
};

/**
 * todoUpdateTitle
 * @param todos
 * @param id
 * @param title
 * @returns
 */
export const todoUpdateTitle = (
  todos: ITodo[],
  id: number,
  title: string
): ITodo[] => {
  return todos.map((todo) => ({
    ...todo,
    title: todo.id === id ? title : todo.title,
  }));
};

/**
 * todoUpdateBody
 * @param todos
 * @param id
 * @param body
 * @returns
 */
export const todoUpdateBody = (
  todos: ITodo[],
  id: number,
  body: string
): ITodo[] => {
  return todos.map((todo) => ({
    ...todo,
    body: todo.id === id ? body : todo.body,
  }));
};

/**
 * todoUpdateDeadline
 * @param todos
 * @param id
 * @param deadline
 * @returns
 */
export const todoUpdateDeadline = (
  todos: ITodo[],
  id: number,
  deadline: string
): ITodo[] => {
  return todos.map((todo) => ({
    ...todo,
    deadline:
      todo.id === id
        ? new Date(deadline).toLocaleString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        : todo.deadline,
  }));
};

/**
 * todoTagsUpdate
 * @param tag
 * @returns
 */
export const todoTagsUpdate = (tag: string): string => {
  return tag;
};

/**
 * todoTagsCreate
 * returns updated tags array with added tag inside the todo object
 * checks and selects the wanted todo item by id if
 * checks if given tag is already in tags array
 * returns current array of tags if conditions dont apply
 * @param todos
 * @param id
 * @param tag
 * @returns
 */
export const todoTagsCreate = (
  todos: ITodo[],
  id: number,
  tag: string
): ITodo[] => {
  return todos.map((todo) => ({
    ...todo,
    tags:
      todo.id === id
        ? todo.tags.includes(tag)
          ? todo.tags
          : [...todo.tags, tag]
        : todo.tags,
  }));
};

/**
 * todoTagsRemove
 * returns updated tags array with removed tag inside the todo object
 * checks if given tag is in array and removes it
 * returns current array of tags if conditions dont apply
 * @param todos
 * @param id
 * @param tag
 * @returns
 */
export const todoTagsRemove = (
  todos: ITodo[],
  id: number,
  tag: string
): ITodo[] => {
  return todos.map((todo) => ({
    ...todo,
    tags:
      todo.id === id
        ? [...todo.tags.filter((eTags) => eTags !== tag)]
        : todo.tags,
  }));
};

/**
 * todoSearch
 * @param search
 * @returns
 */
export const todoSearch = (search: string) => {
  return search;
};

const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([] as ITodo[]);
  const [title, setTitle] = useState<string>('Title');
  const [body, setBody] = useState<string>('Body');
  const [deadline, setDeadline] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  return {
    // return states
    todos,
    setTodos,
    title,
    setTitle,
    body,
    setBody,
    deadline,
    setDeadline,
    tags,
    setTags,
    search,
    setSearch,

    // returns todoCreate
    todoCreate: useCallback(() => {
      setTodos((todos) => todoCreate(todos, title, body, deadline));
      setTitle('Title');
      setBody('Body');
      setDeadline('');
    }, [title, body, deadline]),

    // returns todoUpdateTitle
    todoUpdateTitle: (id: number, title: string) =>
      setTodos((todos) => todoUpdateTitle(todos, id, title)),

    // returns todoUpdateBody
    todoUpdateBody: (id: number, body: string) =>
      setTodos((todos) => todoUpdateBody(todos, id, body)),

    // returns todoUpdateDeadline
    todoUpdateDeadline: (id: number, deadline: string) =>
      setTodos((todos) => todoUpdateDeadline(todos, id, deadline)),

    // returns todoDelete
    todoDelete: (id: number) => setTodos((todos) => todoDelete(todos, id)),

    // returns todoEdit
    todoEdit: (id: number) => setTodos((todos) => todoEdit(todos, id)),

    // returns todoDone
    todoDone: (id: number) => setTodos((todos) => todoDone(todos, id)),

    // returns todoTagsUpdate
    todoTagsUpdate: (tag: string) => setTags(todoTagsUpdate(tag)),

    // returns todoTagsCreate
    todoTagsCreate: (id: number, tag: string) =>
      setTodos((todos) => todoTagsCreate(todos, id, tag)),

    // returns todoTagsRemove
    todoTagsRemove: (id: number, tag: string) =>
      setTodos((todos) => todoTagsRemove(todos, id, tag)),

    // returns todoSearch
    todoSearch: (search: string) => setSearch(search),
  };
};

const TodoContext = createContext<ReturnType<typeof useTodos> | null>(null);

export const useTodoContext = () => useContext(TodoContext)!;

export function TodoProvider({ children }: { children: ReactNode }) {
  return (
    <TodoContext.Provider value={useTodos()}>{children}</TodoContext.Provider>
  );
}
