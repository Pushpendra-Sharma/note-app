import React from 'react';

function BackgroundOptions({ colors }) {
  const changeBgColor = () => {
    console.log('::: update note background color', colors);
  };

  return (
    <div className=''>
      <input
        id=''
        checked={false}
        type='radio'
        name='note-bg-color'
        value={''}
        onClick={changeBgColor}
        className=''
        title='grey'
      />
    </div>
  );
}

export default BackgroundOptions;
