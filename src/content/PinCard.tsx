import { theme } from "../styles/theme";
import Chip from "./Chip";

interface PinCardProps {
  title: string;
  value: string;
  trendValue: string;
  trend: "up" | "down";
}

const PinCard = ({ title, value, trendValue, trend }: PinCardProps) => {
  let trendStyles = TREND_STYLES[trend];
  trendStyles = { ...baseTrendStyles, ...trendStyles };

  const trendArrow = trend === "up" ? "↑" : "↓";

  return (
    <div style={styles.card}>
      <div className="d-flex justify-content-between">
        <div style={styles.title} className="col-9">
          {title}
        </div>
        <div className="col-3">Options</div>
      </div>
      <div className="col-12 d-flex justify-content-start mt-3">
        <div className="mr-3 d-flex align-items-center">
          <h3 style={styles.value}>{value}</h3>
        </div>
        <div>
          <Chip value={trendValue} trend={trend} />
        </div>
      </div>
    </div>
  );
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
  //   border
};

// Utility function to convert hex color to RGBA
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
    backgroundColor: hexToRGBA("#05C168", 0.2),
  },
  down: {
    color: theme.colors.error,
    border: "1px solid var(--error)",
    backgroundColor: hexToRGBA("#ff5a65", 0.2),
  },
};

export default PinCard;
