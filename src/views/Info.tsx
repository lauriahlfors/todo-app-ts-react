export default function Info() {
  return (
    <div className='info'>
      <h1 className='title'>Created by Lauri Ahlfors 2021</h1>
      <ul>
        <li>
          <p className='body'>
            Create todos by using the generator card on the top of the page
          </p>
        </li>
        <li>
          <p className='body'>
            Set to done, edit or delete todo cards by clicking the three emojis
            on the bottom right corner
          </p>
        </li>
        <li>
          <p className='body'>
            Filter search results by tags in the search field
          </p>
        </li>
        <li>
          <p className='body'>
            Edit tags by typing tag names to the tag text field or delete them
            by pressing the X on tag
          </p>
        </li>
      </ul>
    </div>
  );
}
