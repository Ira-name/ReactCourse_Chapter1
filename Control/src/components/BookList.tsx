interface Book {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}

interface BookListProps {
  items: Book[];
  onDelete: (id: number) => void;
  editId: number | null;
  editFirstName: string;
  editLastName: string;
  editPhone: string;
  setEditFirstName: (value: string) => void;
  setEditLastName: (value: string) => void;
  setEditPhone: (value: string) => void;
  handleEditBook: (
    id: number,
    firstName: string,
    lastName: string,
    phone: string
  ) => void;
  handleSaveBook: (id: number) => void;
  error: string;
}

const BookList = ({
  items,
  onDelete,
  editId,
  editFirstName,
  editLastName,
  editPhone,
  setEditFirstName,
  setEditLastName,
  setEditPhone,
  handleEditBook,
  handleSaveBook,
  error,
}: BookListProps) => {
  return (
    <ul>
      {items.length === 0 ? (
        <li>No data to display</li>
      ) : (
        items.map((item) => (
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
                  value={editFirstName}
                  onChange={(e) => setEditFirstName(e.target.value)}
                  placeholder="First Name"
                  style={{
                    borderColor: error ? 'red' : 'initial',
                  }}
                />
                <input
                  type="text"
                  value={editLastName}
                  onChange={(e) => setEditLastName(e.target.value)}
                  placeholder="Last Name"
                  style={{
                    borderColor: error ? 'red' : 'initial',
                  }}
                />
                <input
                  type="text"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  placeholder="Phone"
                  style={{
                    borderColor: error ? 'red' : 'initial',
                  }}
                />
                {error && <span style={{ color: 'red' }}>{error}</span>}
              </>
            ) : (
              <div>
                <h5>{`${item.firstName} ${item.lastName}`}</h5>
                <p>{item.phone}</p>
              </div>
            )}
            <div>
              <button
                onClick={() =>
                  editId === item.id
                    ? handleSaveBook(item.id)
                    : handleEditBook(
                        item.id,
                        item.firstName,
                        item.lastName,
                        item.phone
                      )
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
        ))
      )}
    </ul>
  );
};

export default BookList;
