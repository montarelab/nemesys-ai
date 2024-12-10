import { theme } from "../styles/theme";

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div style={styles.block} className="mb-4">
      <h3 style={styles.header} className="mb-3">
        {title}
      </h3>
      <p style={styles.desc}>{description}</p>
    </div>
  );
};

const styles = {
  block: {
    marginTop: "20px",
    width: "80%",
  },
  header: {
    margin: 0,
    color: theme.colors.textAttention,
  },
  desc: {
    color: theme.colors.text,
  },
};

export default PageHeader;
