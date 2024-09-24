import {  useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoSearch from './ToDoSearch';
import useGetAllToDo from './UseGetAllToDo';
interface ToDo {
  id: number;
  title: string;
}
const ToDoContainer = () => {
  //const [toDo, setToDo] = useState<Array<ToDo>>([]);
  const [searchValue, setSearchValue] = useState('');
  const [title, setTitle] = useState('');
  const { isLoading, data, error } = useGetAllToDo();

  const handleAddToDo = () => {
    if (title.trim()) {
      const newToDo = {
        id: Date.now(),
        title: title,
      };
      const updatedData =([...data, newToDo]);
      setTitle('');
    }
  };
  const handleDeleteToDo = (id: number) => {
    const updatedData =data.filter((item) => item.id !== id);
  };

  const filteredToDo = data.filter((item) => item.title.includes(searchValue));
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
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
