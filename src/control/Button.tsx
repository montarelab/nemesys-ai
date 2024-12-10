import { theme } from "../styles/theme";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  size?: "sm" | "lg";
}

const Button = ({ text, variant, size }: ButtonProps) => {
  const variantStyles = BUTTON_VARIANTS[variant];
  const baseStyles = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    height: "45px",
    width: size === "lg" ? "300px" : "150px",
  };
  const styles = { ...baseStyles, ...variantStyles };
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
