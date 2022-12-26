import { useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/newNote.css';

const NewNote = props => {
  const ref = useRef();

  const handleChange = () => {
    console.log('::: onchange of input, pin, title');
  };
  return (
    <div
      className='border-2 rounded shadow flex flex-col gap-2 max-w-xs p-4'
      onFocus={() => null}
    >
      <header className='flex items-center justify-between px-2'>
        <input
          type='text'
          placeholder='Title'
          className='text-xl'
          value={''}
          onChange={handleChange}
          onFocus={() => true}
        ></input>
        <span onClick={handleChange} className='material-symbols-outlined'>
          push_pin
        </span>
      </header>

      <TextareaAutosize
        ref={ref}
        value={''}
        onChange={handleChange}
        name='content'
        className='p-2 text-left mb-12 createNote_desc'
        placeholder='Take a note...'
      />
      <footer className='flex justify-between px-2'>
        <span className='material-symbols-outlined'>palette</span>
        <span className='material-symbols-outlined'>archive</span>
        <span className='material-symbols-outlined'>label</span>
        <span className='material-symbols-outlined'>delete</span>
        <span className='material-symbols-outlined'>edit</span>
        <span>close</span>
      </footer>
    </div>
  );
};

export default NewNote;
