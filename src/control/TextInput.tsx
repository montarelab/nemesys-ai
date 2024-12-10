import React, { useState } from "react";
import { theme } from "../styles/theme";
import FieldHeader from "./FieldHeader";

interface TextInputProps {
  id: string;
  title: string;
  description: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onTagsChange?: (id: string) => void;
}

const TextInput = ({
  id,
  title,
  description,
  required,
  value,
  placeholder,
  onTagsChange,
}: TextInputProps) => (
  <div className="my-5">
    <FieldHeader
      id={id}
      title={title}
      description={description}
      required={required}
    />
    <input
      type="text"
      id={id}
      // value={value}
      onChange={(e) => (onTagsChange ? onTagsChange(e.target.value) : e)}
      placeholder={placeholder}
      style={styles.input}
      // className="text-input"
    />
  </div>
);

const styles = {
  inputTitle: {
    color: theme.colors.textAttention,
  },
  required: {
    color: theme.colors.error,
  },
  input: {
    padding: "10px",
    width: "100%",
    borderRadius: "6px",
    border: `1px solid ${theme.colors.backgroundLight}`,
    backgroundColor: theme.colors.backgroundSecondary,
    color: theme.colors.textAttention,
  },
};

// const InputForm = () => {
//   const [tags, setTags] = useState("");
//   const [sensitivity, setSensitivity] = useState(0);
//   const [selectedField, setSelectedField] = useState("CPU");

//   return (
//     <div className="input-form">
//       <TextInput id={tags} onTagsChange={setTags} />
//       <AppSlider
//         sensitivity={sensitivity}
//         onSensitivityChange={setSensitivity}
//       />
//       <FieldSelector
//         selectedField={selectedField}
//         onFieldChange={setSelectedField}
//       />
//     </div>
//   );
// };

// export default InputForm;

export default TextInput;
