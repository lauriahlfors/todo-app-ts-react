import TodoCreate from '../components/TodoCreate';
import TodoSearch from '../components/TodoSearch';
import TodoBoard from '../components/TodoBoard';
import { TodoProvider } from '../store';

export default function Todo() {
  return (
    <div className='todo'>
      <TodoCreate />
      <TodoSearch />
      <TodoBoard />
    </div>
  );
}
