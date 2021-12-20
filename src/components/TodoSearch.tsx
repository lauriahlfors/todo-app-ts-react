import { useTodoContext } from '../store';

// TodoSearch
// search for certain todo items with tags
export default function TodoSearch() {
  const { search, todoSearch } = useTodoContext();

  return (
    <div className='search'>
      <p className='search-icon'>🔍</p>
      <input
        className='search-input'
        type='text'
        value={search}
        onChange={(e) => todoSearch(e.target.value)}
        placeholder='Search by tag names...'
      />
    </div>
  );
}
