interface SearchProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const BookSearch = ({ searchValue, onSearchChange }: SearchProps) => {
  return (
    <input
      type="text"
      value={searchValue}
      onChange={(e) => onSearchChange(e.target.value)}
      name="search"
    />
  );
};

export default BookSearch;
