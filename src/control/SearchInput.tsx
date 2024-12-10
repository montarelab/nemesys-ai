import React, { ChangeEvent } from "react";
import { theme } from "../styles/theme";
import { buffer } from "stream/consumers";
import { ReactSVG } from "react-svg";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

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
    <div style={styles.searchDiv} className="d-flex position-relative">
      <ReactSVG
        width={16}
        height={16}
        className="position-absolute"
        style={styles.searchIcon}
        src="icons/link-icons/Search.svg"
      />

      <input
        type="text"
        className="ml-1  search-input"
        style={styles.input}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;

const styles = {
  sidebar: {
    width: "200px",
    backgroundColor: theme.colors.backgroundPrimary,
    padding: "20px",
    height: "100vh",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
  },
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
    padding: "14px 0 14px 50px",
    color: theme.colors.textAttention,
  },
  searchIcon: {
    top: "30%",
    left: "5%",
  },
};
