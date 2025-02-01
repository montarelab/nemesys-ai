import React, { ChangeEvent } from "react";
import { theme } from "../styles/theme";
import { ReactSVG } from "react-svg";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const styles = {
  input: {
    fontSize: "16px",
    backgroundColor: "transparent",
    border: 0,
    color: theme.colors.textAttention,
  },
  searchDiv: {
    backgroundColor: theme.colors.backgroundLight,
    border: "0.6px solid var(--text)",
    borderRadius: "4px",
    padding: "14px 0 14px 10px",
    color: theme.colors.textAttention,
  },
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search for...",
  onSearch,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div style={styles.searchDiv} className="d-flex align-items-center ">
      <ReactSVG
        width={16}
        height={16}
        className="ml-2 mr-4"
        src="icons/link-icons/Search.svg"
      />

      <input
        type="text"
        className="pl-1  search-input"
        style={styles.input}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
