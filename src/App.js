import './App.css';
import { Nav, SideBar, NewNote, NoteList } from './components';

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='flex'>
        <SideBar />
        <div className='flex flex-col flex-wrap gap-4'>
          <NewNote />
          <NoteList />
        </div>
      </div>
    </div>
  );
}

export default App;
