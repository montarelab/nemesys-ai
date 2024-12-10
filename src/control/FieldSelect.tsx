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
  <div className="input-section">
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
      <option value="CPU">CPU</option>
      <option value="Memory">Memory</option>
      <option value="Geo location">Geo location</option>
      <option value="Severity">Severity</option>
      <option value="Requests per day">Requests per day</option>
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
};
