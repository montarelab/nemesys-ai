import { theme } from "../styles/theme";
import FieldHeader from "./FieldHeader";
import React, { useState } from "react";
import Button from "./Button";
import { useRef } from "react";

interface FileUploadProps {
  id: string;
  title: string;
  description: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onTagsChange?: (id: string) => void;
}

const FileUpload = ({
  id,
  title,
  description,
  required,
  value,
  placeholder,
  onTagsChange,
}: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null); // Reference to the hidden file input
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name); // Get the name of the uploaded file
    }
  };

  const handleButtonClick = () => {
    console.log("click");
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically click the hidden file input
    }
  };

  return (
    <div className="input-section my-5">
      <FieldHeader
        id={id}
        title={title}
        description={description}
        required={required}
      />

      <div className="d-flex row m-0" style={{ gap: "0" }}>
        <input
          type="text"
          id={id}
          value={fileName}
          disabled
          className="col-9 "
          placeholder={placeholder}
          style={styles.input}
        />
        <label className="m-0 col-3 d-flex align-items-bottom justify-content-end p-0">
          <Button
            text="Upload"
            variant="secondary"
            onClick={handleButtonClick}
          />

          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }} // Hide the file input visually
          />
        </label>
      </div>
    </div>
  );
};

export default FileUpload;

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
  placeholder: {
    color: theme.colors.text,
  },
};
