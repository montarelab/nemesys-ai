import { theme } from "../styles/theme";
import { Link } from "react-router";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  size?: "sm" | "lg";
  href?: string;
}

const Button = ({ text, variant, size, href }: ButtonProps) => {
  const variantStyles = BUTTON_VARIANTS[variant];
  const baseStyles = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    height: "45px",
    // textAlign: "center",
    width: size === "lg" ? "300px" : "150px",
  };
  const styles = { ...baseStyles, ...variantStyles };

  if (href && href.length > 0) {
    return (
      <Link to={href} className="text-center" style={styles}>
        {text}
      </Link>
    );
  }

  return <button style={styles}>{text}</button>;
};

const BUTTON_VARIANTS = {
  primary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textAttention,
  },
  secondary: {
    backgroundColor: theme.colors.backgroundSecondary,
    color: theme.colors.primary,
  },
};

export default Button;
