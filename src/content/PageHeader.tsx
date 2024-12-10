import { theme } from "../styles/theme";

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div style={styles.block}>
      <h1 style={styles.header}>{title}</h1>
      <p style={styles.desc}>{description}</p>
    </div>
  );
};

const styles = {
  block: {
    marginTop: "20px",
    width: "60%",
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
