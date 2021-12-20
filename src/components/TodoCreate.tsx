import { useTodoContext } from '../store';

// TodoCreate component
// create new todo items with this
export default function TodoCreate() {
  const { title, setTitle, body, setBody, deadline, setDeadline, todoCreate } =
    useTodoContext();
  return (
    <div className='card card-create'>
      <div className='card-content'>
        <input
          className='card-input title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Todo title...'
        />
        <input
          className='card-input date'
          type='date'
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          placeholder='2021/12/12'
        />
        <input
          className='card-input body'
          type='text'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder='Todo body...'
        />
      </div>

      <button className='button' onClick={() => todoCreate()}>
        Create todo
      </button>
    </div>
  );
}
