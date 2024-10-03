interface ToDoFormProps {
  onAdd: () => void;
  title: string;
  onTitleChange: (value: string) => void;
}

const ToDoForm = ({ onAdd, title, onTitleChange }: ToDoFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        name="Title"
      />
      <button
        type="submit"
        style={{
          backgroundColor: 'lightgreen',
          marginLeft: '5px',
        }}
      >
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
