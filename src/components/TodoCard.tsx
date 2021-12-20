import { Draggable } from 'react-beautiful-dnd';
import { ITodo, useTodoContext } from '../store';
import TodoTags from './TodoTags';

// TodoCard component
// ui for todo information
export default function TodoCard({
  todo,
  index,
}: {
  todo: ITodo;
  index: number;
}) {
  const {
    todoUpdateTitle,
    todoUpdateDeadline,
    todoUpdateBody,
    todoDone,
    todoEdit,
    todoDelete,
  } = useTodoContext();

  return (
    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          className={todo.done ? 'card card-done' : 'card'}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          {todo.edit ? (
            <div className='card-content'>
              <input
                className='card-input title'
                type='text'
                value={todo.title}
                onChange={(e) => todoUpdateTitle(todo.id, e.target.value)}
              />
              <input
                className='card-input date'
                type='date'
                value={todo.deadline}
                onChange={(e) => todoUpdateDeadline(todo.id, e.target.value)}
              />
              <input
                className='card-input body'
                type='text'
                value={todo.body}
                onChange={(e) => todoUpdateBody(todo.id, e.target.value)}
              />
            </div>
          ) : (
            <div className='card-content'>
              <h1 className='title'>{todo.title}</h1>
              <p className='date'>📅 {todo.deadline}</p>
              <p className='body'>{todo.body}</p>
            </div>
          )}

          <TodoTags id={todo.id} tags={todo.tags} />

          <div className='card-cta'>
            <button
              className='card-button hover-spin'
              title={todo.done ? 'Set todo to undone' : 'Set todo to done'}
              onClick={() => todoDone(todo.id)}>
              <span className='card-button-icon  hover-animation'>
                {todo.done ? '✅' : '⬜'}
              </span>
            </button>
            <button
              className='card-button hover-spin'
              title={todo.edit ? 'Save changes' : 'Enter edit mode'}
              onClick={() => todoEdit(todo.id)}>
              <span
                className={
                  todo.edit
                    ? 'card-button-icon mode-animation hover-animation '
                    : 'card-button-icon hover-animation'
                }>
                {todo.edit ? '💾' : '📝'}
              </span>
            </button>
            <button
              className='card-button hover-spin'
              title='Delete todo'
              onClick={() => todoDelete(todo.id)}>
              <span className='card-button-icon hover-animation'>🗑️</span>
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
