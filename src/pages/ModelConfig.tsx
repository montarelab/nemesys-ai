import { theme } from "../styles/theme";
import PageHeader from "../content/PageHeader";
import TextInput from "../control/TextInput";
import AppSlider from "../control/AppSlider";
import FieldSelector from "../control/FieldSelect";

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
      <TextInput
        id="tags"
        title="Add or create tags"
        description="Assign or generate tags to group and filter alerts effectively."
        placeholder="Asia-checker, holiday day, ..."
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
        id="field"
        title="Field"
        description="Create specific conditions to determine when an alert should be triggered."
        placeholder="Asia-checker, holiday day, ..."
        options={cpuOptions}
        defaultFields={["CPU"]}
        required
        value=""
      />
    </div>
  );
};

export default ModelConfig;
