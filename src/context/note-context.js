import { useRef, useState, useContext, createContext } from 'react';

const NoteContext = createContext();

function NoteProvider({ children }) {
  const searchFocusRef = useRef(null);

  const [note, setNote] = useState({
    title: '',
    desc: '',
    pin: false,
    editedAt: '',
    edit: false,
    color: '',
    label: '',
  });

  const [label, setLabel] = useState('');
  const [labelsList, setLabelsList] = useState(['']);

  const [search, setSearch] = useState('');

  return (
    <NoteContext.Provider
      value={{
        note,
        setNote,
        search,
        setSearch,
        label,
        setLabel,
        labelsList,
        setLabelsList,
        searchFocusRef,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };
