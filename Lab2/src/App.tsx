import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoSearch from './components/ToDoSearch';

interface ToDo {
  id: number;
  title: string;
}

function App() {
  const [toDo, setToDo] = useState<Array<ToDo>>([]);
  const [searchValue, setSearchValue] = useState('');

  const handleAddToDo = (title: string) => {
    const newToDo = {
      id: Date.now(),
      title: title,
    };
    setToDo([...toDo, newToDo]);
  };

  const handleDeleteToDo = (id: number) => {
    setToDo(toDo.filter((item) => item.id !== id));
  };

  const filteredToDo = toDo.filter((item) => item.title.includes(searchValue));

  return (
    <>
      <ToDoForm onAdd={handleAddToDo} />
      <ToDoSearch searchValue={searchValue} onSearchChange={setSearchValue} />
      <ToDoList items={filteredToDo} onDelete={handleDeleteToDo} />
    </>
  );
}

export default App;
