import { theme } from "../styles/theme";

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div
      style={{
        marginTop: "20px",
        width: "80%",
      }}
      className="mb-4"
    >
      <h3
        style={{
          margin: 0,
          color: theme.colors.textAttention,
        }}
        className="mb-3"
      >
        {title}
      </h3>
      <p style={{ color: theme.colors.text }}>{description}</p>
    </div>
  );
};

export default PageHeader;
