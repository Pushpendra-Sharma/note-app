const Note = () => {
  return (
    <div className='border-2 rounded shadow flex flex-col gap-2 bg-yellow-300 max-w-xs p-4'>
      <header className='flex items-center justify-between px-2'>
        <span className='text-xl'>Title</span>
        <span className='material-symbols-outlined'>push_pin</span>
      </header>
      <section className='p-2 text-left mb-12'>Note content body</section>
      <footer className='flex justify-between px-2'>
        <span className='material-symbols-outlined'>palette</span>
        <span className='material-symbols-outlined'>archive</span>
        <span className='material-symbols-outlined'>label</span>
        <span className='material-symbols-outlined'>delete</span>
        <span className='material-symbols-outlined'>edit</span>
      </footer>
    </div>
  );
};

export default Note;
