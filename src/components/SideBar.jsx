const SideBar = () => {
  return (
    <>
      <aside>
        <ul className='flex flex-col gap-2 p-2'>
          <li className='flex gap-2 p-2'>
            <span className='material-symbols-outlined'>lightbulb</span>
            <span>Notes</span>
          </li>
          <li className='flex gap-2 p-2'>
            <span className='material-symbols-outlined'>notifications</span>
            <span>Reminders</span>
          </li>
          <li className='flex gap-2 p-2'>
            <span className='material-symbols-outlined'>edit_note</span>
            <span>Edit labels</span>
          </li>
          <li className='flex gap-2 p-2'>
            <span className='material-symbols-outlined'>archive</span>
            <span>Archive</span>
          </li>
          <li className='flex gap-2 p-2'>
            <span className='material-symbols-outlined'>delete</span>
            <span>Trash</span>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
