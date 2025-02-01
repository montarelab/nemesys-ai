import { theme } from "../styles/theme";
import FieldHeader from "./FieldHeader";

interface TextInputProps {
  id: string;
  title: string;
  description: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onTagsChange?: (id: string) => void;
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
};

const TextInput = ({
  id,
  title,
  description,
  required,
  value,
  placeholder,
  onTagsChange,
}: TextInputProps) => (
  <div className="my-5">
    <FieldHeader
      id={id}
      title={title}
      description={description}
      required={required}
    />
    <input
      type="text"
      id={id}
      onChange={(e) => (onTagsChange ? onTagsChange(e.target.value) : e)}
      placeholder={placeholder}
      style={styles.input}
    />
  </div>
);

export default TextInput;
