import { theme } from "../styles/theme";

interface FieldHeaderProps {
  id: string;
  title: string;
  description: string;
  required?: boolean;
}

const styles = {
  inputTitle: {
    color: theme.colors.textAttention,
  },
  required: {
    color: theme.colors.error,
  },
};

const FieldHeader = ({
  id,
  title,
  description,
  required,
}: FieldHeaderProps) => {
  return (
    <div>
      <h5>
        <label htmlFor={id} style={styles.inputTitle}>
          {title}
          {required && (
            <span style={styles.required} className="ml-2">
              *
            </span>
          )}
        </label>
      </h5>
      <p className="input-description">{description}</p>{" "}
    </div>
  );
};

export default FieldHeader;
