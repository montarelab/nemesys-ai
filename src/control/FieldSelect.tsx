import { theme } from "../styles/theme";
import FieldHeader from "./FieldHeader";

interface FieldSelectorProps {
  id: string;
  title: string;
  description: string;
  placeholder: string;
  required?: boolean;
  value: string;
  options: string[];
  defaultFields?: string[] | null;
  onFieldChange?: (field: string) => void;
}

const styles = {
  input: {
    padding: "10px",
    width: "100%",
    borderRadius: "6px",
    border: `1px solid ${theme.colors.backgroundLight}`,
    backgroundColor: theme.colors.backgroundSecondary,
    color: theme.colors.textAttention,
  },
  placeholder: {
    color: theme.colors.text,
  },
};

const FieldSelector = ({
  id,
  title,
  description,
  required,
  value,
  placeholder,
  options,
  defaultFields,
  onFieldChange,
}: FieldSelectorProps) => (
  <div className="input-section my-5">
    <FieldHeader
      id={id}
      title={title}
      description={description}
      required={required}
    />
    <select
      id={id}
      onChange={(e) => (onFieldChange ? onFieldChange(e.target.value) : e)}
      className="select-input"
      style={styles.input}
    >
      <option style={styles.placeholder} hidden>
        {placeholder}
      </option>
      {options &&
        Array.isArray(options) &&
        options.map((option, index) => (
          <option value={option}>{option}</option>
        ))}
    </select>
  </div>
);

export default FieldSelector;
