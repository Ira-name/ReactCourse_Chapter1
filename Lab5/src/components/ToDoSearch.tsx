interface SearchProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const ToDoSearch = ({ searchValue, onSearchChange }: SearchProps) => {
  return (
    <input
      type="text"
      value={searchValue}
      onChange={(e) => onSearchChange(e.target.value)}
      name="search"
    />
  );
};

export default ToDoSearch;
