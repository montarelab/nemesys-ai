import { theme } from "../styles/theme";
import PageHeader from "../content/PageHeader";
import TextInput from "../control/TextInput";
import AppSlider from "../control/AppSlider";
import FieldSelector from "../control/FieldSelect";
import { ReactSVG } from "react-svg";
import Button from "../control/Button";

const ModelConfig = () => {
  let threshold = 0;

  const cpuOptions = [
    "CPU",
    "Memory",
    "Geo location",
    "Severity",
    "Requests per day",
  ];

  return (
    <div>
      <PageHeader
        title="Anomaly Detection Model settings"
        description="A page to customize and manage the anomaly detection model's parameters for enhanced accuracy."
      />
      <div className="d-flex row justify-content-between mt-3">
        <div className="col-12 col-lg-6">
          <div className="d-flex justify-content-center" style={styles.chart}>
            <ReactSVG
              src="icons/charts/pr_curve.svg"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="d-flex justify-content-center" style={styles.chart}>
            <ReactSVG src="icons/charts/heatmap.svg" width={300} height={300} />
          </div>
        </div>
      </div>

      <FieldSelector
        id="model"
        title="Model Selection"
        description="Choose the type of anomaly detection model to be used for monitoring."
        placeholder="Isolation Forest, One-Class SVM, Autoencoders"
        options={["Isolation Forest", "One-Class SVM", "Autoencoders"]}
        defaultFields={[]}
        required
        value=""
      />

      <div className="d-flex row">
        <div className="col-9">
          <TextInput
            id="tags"
            title="Add or create tags"
            description="Assign or generate tags to group and filter alerts effectively."
            placeholder="Asia-checker, holiday day, ..."
            required
            value=""
          />
        </div>
        <div className="col-3 d-flex align-items-bottom">
          <Button text="Upload" variant="secondary" />
        </div>
      </div>
      <FieldSelector
        id="scaling"
        title="Define preprocessing options for normalizing dataset features."
        description="Choose the type of anomaly detection model to be used for monitoring."
        placeholder="Isolation Forest, One-Class SVM, Autoencoders"
        options={[
          "Min-Max Scaling",
          "Standardization (Z-score)",
          "Normalization",
        ]}
        defaultFields={[]}
        required
        value=""
      />

      <AppSlider
        id="sensitivity"
        title="Threshold sensitivity"
        description="Adjust the model’s sensitivity to detect subtle or extreme anomalies."
        placeholder="Asia-checker, holiday day, ..."
        required
        initialValue={threshold}
      />

      <FieldSelector
        id="metrics"
        title="Evaluation Metrics"
        description="Select criteria to assess the model's accuracy and reliability."
        placeholder="Accuracy, precision, recall, F1-score, ROC AUC, etc."
        options={["Accuracy", "Precision", "Recall", "F1-score", "ROC", "AUC"]}
        defaultFields={[]}
        required
        value=""
      />

      <FieldSelector
        id="time_windows"
        title="Time windows"
        description="Configure time intervals for anomaly detection and data aggregation."
        placeholder="Hourly, Daily, Real time monitoring."
        options={["Hourly", "Daily", "Real time monitoring"]}
        defaultFields={[]}
        required
        value=""
      />

      <TextInput
        id="tags"
        title="Add or create tags"
        description="Assign or generate tags to group and filter alerts effectively."
        placeholder="Asia-checker, holiday day, ..."
        required
        value=""
      />

      <FieldSelector
        id="field"
        title="Field"
        description="Create specific conditions to determine when an alert should be triggered."
        placeholder="Asia-checker, holiday day, ..."
        options={cpuOptions}
        defaultFields={["CPU"]}
        required
        value=""
      />

      <div className="d-flex justify-content-end mt-3">
        <div className="mx-2">
          <Button text="Save" variant="primary" />
        </div>
        <Button text="Export settings" variant="secondary" />
      </div>
    </div>
  );
};
const styles = {
  content: {
    // color: theme.colors.text,
  },
  pinCards: {
    // gap: "10px",
  },
  chart: {
    // backgroundColor: theme.colors.backgroundSecondary,
    padding: "20px",
    // borderRadius: "15px",
    // border: "1px solid var(--background-light)",
  },
  horizontalCharts: {
    color: "red",
    // flexDirection: "column",
  },
};

export default ModelConfig;
