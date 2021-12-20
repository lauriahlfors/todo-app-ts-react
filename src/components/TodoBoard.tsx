import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { ITodo, useTodoContext } from '../store';
import TodoCard from './TodoCard';

// TodoBoard component
// renders todo items (TodoCards)
export default function TodoBoard() {
  const { todos, setTodos, search } = useTodoContext();

  const reOrder = (list: ITodo[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    } else {
      const items = reOrder(
        todos,
        result.source.index,
        result.destination.index
      );
      setTodos(items);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='todos'>
        {(provided) => (
          <div
            className='board'
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {todos
              .filter((todo) => (search ? todo.tags.includes(search) : todo))
              .map((todo, index) => {
                return <TodoCard key={index} index={index} todo={todo} />;
              })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
