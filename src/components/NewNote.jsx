import { useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const NewNote = props => {
  const [note, setNote] = useState({ title: '', content: '' });

  const ref = useRef(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setNote(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className='border rounded shadow flex flex-col gap-2 max-w-xs p-4'>
      <div className='flex items-center justify-between px-2'>
        <input
          name='title'
          type='text'
          placeholder='Title'
          className='text-xl'
          value={note.title}
          onChange={handleChange}
          onFocus={() => true}
        ></input>
        <span onClick={handleChange} className='material-symbols-outlined'>
          push_pin
        </span>
      </div>
      <div className='flex flex-col p-2 mb-8'>
        <TextareaAutosize
          ref={ref}
          value={note.text}
          onChange={handleChange}
          name='content'
          className='text-left min-h-fit w-full'
          placeholder='Take a note...'
        />
      </div>
      <div className='flex justify-between px-2'>
        <span className='material-symbols-outlined'>palette</span>
        <span className='material-symbols-outlined'>archive</span>
        <span className='material-symbols-outlined'>label</span>
        <span className='material-symbols-outlined'>delete</span>
        <span className='material-symbols-outlined'>edit</span>
        <span>close</span>
      </div>
    </div>
  );
};

export default NewNote;
