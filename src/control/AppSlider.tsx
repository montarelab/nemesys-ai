import React from "react";
import { theme } from "../styles/theme";
import FieldHeader from "./FieldHeader";
import { useState } from "react";

interface AppSliderProps {
  id: string;
  title: string;
  description: string;
  placeholder: string;
  required?: boolean;
  initialValue: number;
  onSensitivityChange?: (sensitivity: string) => void;
}

const styles: { [key: string]: React.CSSProperties } = {
  input: {
    width: "100%",
    appearance: "none",
    height: "8px",
    background: "#ccc", // Grey color for the track
    outline: "none",
    opacity: "0.7",
    transition: "opacity .15s ease-in-out",
    borderRadius: "6px",
    border: `1px solid ${theme.colors.backgroundLight}`,
    backgroundColor: theme.colors.backgroundSecondary,
    color: theme.colors.textAttention,
    position: "relative",
  },
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  minMaxLabel: {
    margin: "0 10px",
  },
  valueLabel: {
    position: "absolute",
    top: "35px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: theme.colors.backgroundSecondary,
    color: theme.colors.textAttention,
    padding: "2px 5px",
    borderRadius: "3px",
    fontSize: "12px",
  },
};

// Add the thumb styles using pseudo-elements
const sliderThumbStyles = `
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 24px; /* 2x bigger than default */
    height: 24px; /* 2x bigger than default */
    background: ${theme.colors.textAttention};
    cursor: pointer;
    border-radius: 50%;
  }

  input[type="range"]::-moz-range-thumb {
    appearance: none;
    width: 24px; /* 2x bigger than default */
    height: 24px; /* 2x bigger than default */
    background: ${theme.colors.textAttention};
    cursor: pointer;
    border-radius: 50%;
  }
`;

const AppSlider = ({
  id,
  title,
  description,
  required,
  initialValue,
  placeholder,
  onSensitivityChange,
}: AppSliderProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(parseFloat(newValue));
    if (onSensitivityChange) {
      onSensitivityChange(newValue);
    }
  };
  return (
    <div className="my-5">
      <style>{sliderThumbStyles}</style> {/* Inject the thumb styles */}
      <FieldHeader
        id={id}
        title={title}
        description={description}
        required={required}
      />
      <div style={styles.sliderContainer}>
        <span style={styles.minMaxLabel}>0</span>
        <input
          type="range"
          id={id}
          min="0"
          max="1"
          value={value}
          style={styles.input}
          step="0.01"
          onChange={handleChange}
        />
        <div style={{ ...styles.valueLabel, left: `${value * 100}%` }}>
          {value.toFixed(2)}
        </div>
        <span style={styles.minMaxLabel}>1</span>
      </div>
    </div>
  );
};

export default AppSlider;
