import { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoSearch from './ToDoSearch';
import useGetAllToDo from '../hooks/useGetAllToDo';
import Loader from './Loader/Loader';

const ToDoContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const [title, setTitle] = useState('');
  const { isLoading, data, setData: setToDo } = useGetAllToDo();
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [error, setError] = useState('');

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

  const handleEditToDo = (id: number, currentTitle: string) => {
    setEditId(id);
    setEditTitle(currentTitle);
    setError('');
  };

  const handleSaveToDo = (id: number) => {
    if (editTitle.trim() === '') {
      setError('Title is required');
      return;
    }
    setToDo(
      data.map((item) =>
        item.id === id ? { ...item, title: editTitle } : item
      )
    );
    setEditId(null);
    setEditTitle('');
  };

  const filteredToDo = data.filter((item) => item.title.includes(searchValue));

  return (
    <div>
      <ToDoForm onAdd={handleAddToDo} title={title} onTitleChange={setTitle} />
      <ToDoSearch searchValue={searchValue} onSearchChange={setSearchValue} />
      <Loader isLoading={isLoading}>
        <ToDoList
          items={filteredToDo}
          onDelete={handleDeleteToDo}
          editId={editId}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          handleEditToDo={handleEditToDo}
          handleSaveToDo={handleSaveToDo}
          error={error}
        />
      </Loader>
    </div>
  );
};

export default ToDoContainer;
