import { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoSearch from './ToDoSearch';
import useGetAllToDo from './UseGetAllToDo';

const ToDoContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const [title, setTitle] = useState('');
  const { isLoading, data, setData: setToDo } = useGetAllToDo();

  const handleAddToDo = () => {
    if (title.trim()) {
      const newToDo = {
        id: Date.now(),
        title: title,
      };
      setToDo([...data, newToDo]);
      setTitle('');
    }
  };
  const handleDeleteToDo = (id: number) => {
    setToDo(data.filter((item) => item.id !== id));
  };

  const filteredToDo = data.filter((item) => item.title.includes(searchValue));
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ToDoForm onAdd={handleAddToDo} title={title} onTitleChange={setTitle} />
      <ToDoSearch searchValue={searchValue} onSearchChange={setSearchValue} />
      <ToDoList items={filteredToDo} onDelete={handleDeleteToDo} />
    </div>
  );
};

export default ToDoContainer;
