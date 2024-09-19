import { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoSearch from './ToDoSearch';
interface ToDo {
  id: number;
  title: string;
}
const ToDoContainer = () => {
  const [toDo, setToDo] = useState<Array<ToDo>>([]);
  const [searchValue, setSearchValue] = useState('');
  const [title, setTitle] = useState('');

  const handleAddToDo = (title: string) => {
    const newToDo = {
      id: Date.now(),
      title: title,
    };
    setToDo([...toDo, newToDo]);
    setTitle('');
  };

  const handleDeleteToDo = (id: number) => {
    setToDo(toDo.filter((item) => item.id !== id));
  };

  const filteredToDo = toDo.filter((item) => item.title.includes(searchValue));
  return (
    <div>
      <ToDoForm onAdd={handleAddToDo} title={title} onTitleChange={setTitle} />
      <ToDoSearch searchValue={searchValue} onSearchChange={setSearchValue} />
      <ToDoList items={filteredToDo} onDelete={handleDeleteToDo} />
    </div>
  );
};

export default ToDoContainer;
