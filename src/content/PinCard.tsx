import { theme } from "../styles/theme";
import Chip from "./Chip";
import { ReactSVG } from "react-svg";

interface PinCardProps {
  title: string;
  value: string;
  trendValue: string;
  trend: "up" | "down";
}

const PinCard = ({ title, value, trendValue, trend }: PinCardProps) => {
  let trendStyles = TREND_STYLES[trend];
  trendStyles = { ...baseTrendStyles, ...trendStyles };

  return (
    <div style={styles.card} className="w-100 mt-3">
      <div className="d-flex justify-content-between row">
        <div style={styles.title} className="m-0 col-9 pr-0">
          {title}
        </div>
        <div className="col-3">
          <ReactSVG
            className="pb-3"
            src={`icons/other/more.svg`}
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>
      <div className="col-12 d-flex justify-content-start mt-3">
        <div className="mr-3 d-flex align-items-center">
          <h3 className="m-0" style={styles.value}>
            {value}
          </h3>
        </div>
        <div className="d-flex row justify-content-start">
          <Chip value={trendValue} trend={trend} size="sm" />
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
  },
  title: {
    fontSize: "12px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  value: {
    color: theme.colors.textAttention,
  },
};

const baseTrendStyles = {
  fontSize: "14px",
  borderRadius: "5px",
  padding: "5px 10px",
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
    border: `1px solid ${theme.colors.success}`,
    backgroundColor: hexToRGBA(theme.colors.success, 0.2),
  },
  down: {
    color: theme.colors.error,
    border: `1px solid ${theme.colors.error}`,
    backgroundColor: hexToRGBA(theme.colors.error, 0.2),
  },
};

export default PinCard;
