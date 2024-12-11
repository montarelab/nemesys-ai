import { theme } from "../styles/theme";
import PageHeader from "../content/PageHeader";
import TextInput from "../control/TextInput";
import AppSlider from "../control/AppSlider";
import FieldSelector from "../control/FieldSelect";
import { ReactSVG } from "react-svg";
import Button from "../control/Button";
import GenericTable from "../content/GenericTable";

const Anomalies = () => {
  let threshold = 0;

  const cpuOptions = [
    "CPU",
    "Memory",
    "Geo location",
    "Severity",
    "Requests per day",
  ];

  const columns = [
    { dataType: "string", label: "Application ID", key: "id" },
    { dataType: "string", label: "Application Name", key: "name" },
    { dataType: "tags", label: "Tags", key: "tags" },
    { dataType: "tags", label: "Health Status", key: "status" },
    { dataType: "timestamp", label: "Last Model Update", key: "time" },
    { dataType: "plot", label: "Performance", key: "peformance" },
  ];
  const data = [
    {
      id: "123",
      name: "App 1",
      tags: [
        { color: "error", value: "Disactive" },
        { color: "success", value: "Active" },
        { color: "secondary", value: "Active" },
      ],
      status: [{ color: "success", value: "Active" }],
      time: "2021-07-01",
      peformance: "icons/charts/performance.svg",
    },
    {
      id: "124",
      name: "App 2",
      tags: [
        { color: "error", value: "Disactive" },
        { color: "success", value: "Active" },
        { color: "secondary", value: "Active" },
      ],
      status: [{ color: "error", value: "Disactive" }],
      time: "2021-07-02",
      peformance: "icons/charts/performance.svg",
    },
    {
      id: "125",
      name: "App 3",
      tags: [
        { color: "error", value: "Disactive" },
        { color: "success", value: "Active" },
        { color: "secondary", value: "Active" },
      ],
      status: [{ color: "success", value: "Active" }],
      time: "2021-07-03",
      peformance: "icons/charts/performance.svg",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Anomaly Detection Model settings"
        description="A page to customize and manage the anomaly detection model's parameters for enhanced accuracy."
      />

      <div className="col-12 d-flex justify-content-center my-4">
        <Button
          text="Configure rules"
          variant="primary"
          size="lg"
          href="/rules"
        />
      </div>

      <div className="d-flex justify-content-center" style={styles.chart}>
        <ReactSVG src="icons/charts/geomap.svg" width={1000} />
      </div>

      <div className="col-12 mt-4 p-0">
        <GenericTable
          title="Applications Table"
          columns={columns}
          data={data}
          // actions={actions}
          // pagination={pagination}
        />
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
    backgroundColor: theme.colors.backgroundSecondary,
    padding: "20px",
    borderRadius: "15px",
    border: "1px solid var(--background-light)",
  },
  horizontalCharts: {
    color: "red",
    // flexDirection: "column",
  },
};

export default Anomalies;
