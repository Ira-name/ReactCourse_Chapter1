interface ToDo {
  id: number;
  title: string;
}

interface ToDoListProps {
  items: ToDo[];
  onDelete: (id: number) => void;
  editId: number | null;
  editTitle: string;
  setEditTitle: (value: string) => void;
  handleEditToDo: (id: number, currentTitle: string) => void;
  handleSaveToDo: (id: number) => void;
  error: string;
}

const ToDoList = ({
  items,
  onDelete,
  editId,
  editTitle,
  setEditTitle,
  handleEditToDo,
  handleSaveToDo,
  error,
}: ToDoListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '10px',
          }}
        >
          {editId === item.id ? (
            <>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                style={{
                  borderColor: error ? 'red' : 'initial',
                }}
              />
              {error && <span style={{ color: 'red' }}>{error}</span>}
            </>
          ) : (
            <h5>{item.title}</h5>
          )}
          <div>
            <button
              onClick={() =>
                editId === item.id
                  ? handleSaveToDo(item.id)
                  : handleEditToDo(item.id, item.title)
              }
              style={{
                backgroundColor: editId === item.id ? 'Khaki' : 'lightblue',
              }}
            >
              {editId === item.id ? 'Save' : 'Edit'}
            </button>
            <button
              onClick={() => onDelete(item.id)}
              style={{
                backgroundColor: 'Salmon',
                marginLeft: '5px',
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
