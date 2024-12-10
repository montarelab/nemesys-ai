import { theme } from "../styles/theme";

interface BaseChipProps {
  value: string;
}

interface TrendChipProps extends BaseChipProps {
  trend: "up" | "down";
  color?: never;
}

interface ColorChipProps extends BaseChipProps {
  color: "error" | "success" | "secondary";
  trend?: never;
}

type ChipProps = TrendChipProps | ColorChipProps;

const Chip = (props: ChipProps) => {
  const baseStyle = {
    padding: "5px 10px",
    borderRadius: "5px",
    display: "inline-flex",
    alignItems: "center",
    color: theme.colors.textAttention,
  };

  let chipStyle: React.CSSProperties = {};
  let content = <>{props.value}</>;

  if ("trend" in props && props.trend) {
    // Styles for trend
    const trendStyles = TREND_STYLES[props.trend];
    const trendArrow = props.trend === "up" ? "↑" : "↓";
    chipStyle = { ...baseStyle, ...trendStyles };
    content = (
      <>
        <span style={{ marginRight: "5px" }}>{props.value}</span>
        {trendArrow}
      </>
    );
  } else if ("color" in props) {
    // Styles for color

    // console.log("props.color", props.color, hexToRGBA(  );
    chipStyle = { ...baseStyle, ...CUSTOM_COLOR_STYLES[props.color] };
  }

  return <div style={chipStyle}>{content}</div>;
};

const styles = {
  card: {
    border: "1px solid var(--background-light)",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: theme.colors.backgroundSecondary,
    color: theme.colors.text,
    width: "100%",
  },
  title: {
    margin: 0,
    fontSize: "12px",
  },
  value: {
    color: theme.colors.textAttention,
    // fontSize: "24px",
    margin: 0,
  },
};

const baseTrendStyles = {
  fontSize: "14px",
  borderRadius: "5px",
  padding: "5px 10px",
};

const varToRGBA = (variable: string, opacity: number) => {
  const getCSSVariableValue = (variable: string) => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(variable)
      .trim();
  };

  return hexToRGBA(getCSSVariableValue(variable), opacity);
};

const hexToRGBA = (hex: string, opacity: number) => {
  const trimmedHex = hex.replace("#", "");
  const bigint = parseInt(trimmedHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const TREND_STYLES = {
  up: {
    color: theme.colors.success,
    border: "1px solid var(--success)",
    backgroundColor: varToRGBA("--success-opacity", 0.2),
  },
  down: {
    color: theme.colors.error,
    border: "1px solid var(--error)",
    backgroundColor: varToRGBA("--error-opacity", 0.2),
  },
};

const CUSTOM_COLOR_STYLES = {
  error: {
    color: theme.colors.success,
    border: "1px solid var(--success)",
    backgroundColor: varToRGBA("--success-opacity", 0.2),
  },
  success: {
    color: theme.colors.error,
    border: "1px solid var(--error)",
    backgroundColor: varToRGBA("--error-opacity", 0.2),
  },
  secondary: {
    color: theme.colors.secondary,
    border: "1px solid var(--secondary)",
    backgroundColor: varToRGBA("--secondary-opacity", 0.2),
  },
};

export default Chip;
