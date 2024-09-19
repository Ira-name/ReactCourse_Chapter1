interface ToDo {
  id: number;
  title: string;
}

interface ToDoListProps {
  items: ToDo[];
  onDelete: (id: number) => void;
}

const ToDoList = ({ items, onDelete }: ToDoListProps) => {
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
          <h5>{item.title}</h5>
          <button
            onClick={() => onDelete(item.id)}
            style={{
              backgroundColor: 'lightgreen',
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
