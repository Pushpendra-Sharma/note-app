import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside className='flex flex-col justify-between p-4'>
      <ul className='flex flex-col items-stretch gap-2 px-2'>
        <li>
          <Link to='/' className='flex justify-start gap-2 p-2'>
            <span className='material-symbols-outlined'>lightbulb</span>
            <span>Notes</span>
          </Link>
        </li>
        <li>
          <Link to='/' className='flex justify-start gap-2 p-2'>
            <span className='material-symbols-outlined'>notifications</span>
            <span>Reminders</span>
          </Link>
        </li>
        <li>
          <Link to='/labels' className='flex justify-start gap-2 p-2'>
            <span className='material-symbols-outlined'>edit_note</span>
            <span>Edit labels</span>
          </Link>
        </li>
        <li>
          <Link to='/archieve' className='flex justify-start gap-2 p-2'>
            <span className='material-symbols-outlined'>archive</span>
            <span>Archive</span>
          </Link>
        </li>
        <li>
          <Link to='/trash' className='flex justify-start gap-2 p-2'>
            <span className='material-symbols-outlined'>delete</span>
            <span>Trash</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
