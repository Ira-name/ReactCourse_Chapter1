import { useState } from 'react';
import ToDoForm from './AddContactForm';
import BookList from './BookList';
import ToDoSearch from './AddressBookSearch';

interface Book {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}
const BookContainer = () => {
  const [contacts, setContacts] = useState<Array<Book>>([]);
  const [searchValue, setSearchValue] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleAddContact = () => {
    if (firstName.trim() && lastName.trim() && phone.trim()) {
      const newContact = {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        phone: phone,
      };
      setContacts([...contacts, newContact]);
      setFirstName('');
      setLastName('');
      setPhone('');
    }
  };
  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter((item) => item.id !== id));
  };
  const handleEditBook = (
    id: number,
    firstName: string,
    lastName: string,
    phone: string
  ) => {
    setEditId(id);
    setFirstName(firstName);
    setLastName(lastName);
    setPhone(phone);
    setError('');
  };

  const handleSaveBook = (id: number) => {
    if (!firstName.trim() || !lastName.trim() || !lastName.trim()) {
      setError('All fields are required');
      return;
    }
    setContacts(
      contacts.map((item) =>
        item.id === id
          ? {
              ...item,
              firstName: firstName,
              lastName: lastName,
              phone: lastName,
            }
          : item
      )
    );
    setEditId(null);
    setFirstName('');
    setLastName('');
    setPhone('');
  };
  const filteredContacts = contacts.filter((item) =>
    item.firstName.includes(searchValue)
  );
  return (
    <div>
      <ToDoForm
        onAdd={handleAddContact}
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        onFirstNameChange={setFirstName}
        onLastNameChange={setLastName}
        onPhoneChange={setPhone}
      />
      <ToDoSearch searchValue={searchValue} onSearchChange={setSearchValue} />
      <BookList
        items={filteredContacts}
        onDelete={handleDeleteContact}
        editId={editId}
        editFirstName={firstName}
        editLastName={lastName}
        editPhone={phone}
        setEditFirstName={setFirstName}
        setEditLastName={setLastName}
        setEditPhone={setPhone}
        handleEditBook={handleEditBook}
        handleSaveBook={handleSaveBook}
        error={error}
      />
    </div>
  );
};

export default BookContainer;
