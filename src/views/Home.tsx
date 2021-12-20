import { TodoProvider, useTodoContext } from '../store';

export default function Home() {
  const { todos } = useTodoContext();
  return (
    <div className='home'>
      <h1 className='title'>Home</h1>
      <h1 className='body'>
        This project contains currenctly {todos.length} todos
      </h1>
    </div>
  );
}
