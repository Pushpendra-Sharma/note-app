import './App.css';
import { Nav, SideBar, NewNote, NoteList } from './components';
import { useThemeContext } from './context';

function App() {
  const { darkTheme } = useThemeContext();

  return (
    <div className={darkTheme ? 'darkMode' : 'lightMode'}>
      <Nav />
      <div className='flex pt-4'>
        <SideBar />
        <div className='flex flex-col flex-wrap items-center gap-4 p-4'>
          <NewNote />
          <NoteList />
        </div>
      </div>
    </div>
  );
}

export default App;
