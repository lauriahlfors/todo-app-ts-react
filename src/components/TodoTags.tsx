import { useState } from 'react';
import { useTodoContext } from '../store';

// TodoTags component
// render todo items tags
export default function TodoTags({ id, tags }: { id: number; tags: string[] }) {
  const { todoTagsCreate, todoTagsRemove } = useTodoContext();
  const [newTag, setNewTag] = useState<string>('');

  return (
    <div className='tags'>
      <ul className='tags-list'>
        {tags.map((tag, index) => (
          <li className='tags-item' key={index}>
            <p>{tag}</p>
            <button
              className='tags-button'
              onClick={() => todoTagsRemove(id, tag)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      <input
        className='tags-input'
        type='text'
        value={newTag}
        onKeyUp={(e) =>
          e.key === 'Enter' ? [todoTagsCreate(id, newTag), setNewTag('')] : null
        }
        onChange={(e) => setNewTag(e.target.value)}
        placeholder='Press enter to add tags'
      />
    </div>
  );
}
