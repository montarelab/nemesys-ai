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
  defaultFields: string[];
  onFieldChange?: (field: string) => void;
}

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
  <div className="input-section mt-4">
    <FieldHeader
      id={id}
      title={title}
      description={description}
      required={required}
    />
    <select
      id={id}
      value={defaultFields}
      onChange={(e) => (onFieldChange ? onFieldChange(e.target.value) : e)}
      className="select-input"
      style={styles.input}
    >
      <option style={styles.placeholder} value="" disabled hidden>
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

const styles = {
  inputTitle: {
    color: theme.colors.textAttention,
  },
  required: {
    color: theme.colors.error,
  },
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
