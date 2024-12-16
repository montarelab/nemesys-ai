import { theme } from "../styles/theme";
import PageHeader from "../content/PageHeader";
import TextInput from "../control/TextInput";
import AppSlider from "../control/AppSlider";
import FieldSelector from "../control/FieldSelect";
import { ReactSVG } from "react-svg";
import Button from "../control/Button";

const AddApp = () => {
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
        title="Add New Application"
        description="A streamlined form to register a new application and configure initial settings."
      />

      <TextInput
        id="name"
        title="Application Name"
        description="Enter a unique identifier for the application being registered."
        placeholder="Enter name"
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
        id="scaling"
        title="Feature scaling."
        description="Specify preprocessing methods to normalize input data for better model performance."
        placeholder="Min-Max Scaling, Standardization (Z-score), or Normalization to prepare the data."
        options={[
          "Min-Max Scaling",
          "Standardization (Z-score)",
          "Normalization",
        ]}
        defaultFields={[]}
        required
        value=""
      />

      <div className="my-3 d-block"></div>

      <FieldSelector
        id="metrics"
        title="Metrics to monitor"
        description="Select key performance indicators to track and evaluate application health."
        placeholder="CPU, Error Rate, Response Time, Network Traffic"
        options={["CPU", "Error Rate", "Response Time", "Network Traffic"]}
        defaultFields={[]}
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

export default AddApp;
