interface BooktFormProps {
  onAdd: () => void;
  firstName: string;
  lastName: string;
  phone: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}

const AddContactForm = ({
  onAdd,
  firstName,
  lastName,
  phone,
  onFirstNameChange,
  onLastNameChange,
  onPhoneChange,
}: BooktFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => onFirstNameChange(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => onLastNameChange(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: 'lightgreen',
          marginLeft: '5px',
        }}
      >
        Add Contact
      </button>
    </form>
  );
};

export default AddContactForm;
