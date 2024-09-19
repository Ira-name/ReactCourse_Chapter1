interface ToDoFormProps {
  onAdd: (title: string) => void;
  title: string;
  onTitleChange: (value: string) => void;
}

const ToDoForm = ({ onAdd, title, onTitleChange }: ToDoFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
    }
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
        }}
      >
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
