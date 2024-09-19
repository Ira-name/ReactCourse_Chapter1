import React, { useState } from 'react';

interface ToDoFormProps {
  onAdd: (title: string) => void;
}

const ToDoForm = ({ onAdd }: ToDoFormProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="Title"
      />
      <button
        type="submit"
        style={{
          backgroundColor: 'lightgreen',
        }}
      >
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
