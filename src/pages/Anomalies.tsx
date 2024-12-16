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
    { dataType: "string", label: "Anomaly ID", key: "id" },
    { dataType: "string", label: "Status", key: "status" },
    { dataType: "string", label: "Region", key: "region" },
    { dataType: "string", label: "Type", key: "type" },
    { dataType: "string", label: "Timestamp", key: "time" },
    { dataType: "int", label: "Severity", key: "severity" },
  ];
  const data = [
    {
      id: "ANOM-20241118-001",
      status: "Open",
      region: "Afghanistan",
      type: "Outlier",
      time: "2021-07-01",
      severity: 67,
    },
    {
      id: "ANOM-20241118-002",
      status: "Resolved",
      region: "China",
      type: "Cluster",
      time: "2021-07-02",
      severity: 79,
    },
    {
      id: "ANOM-20241118-003",
      status: "Pending",
      region: "Canada",
      type: "Threshold",
      time: "2021-07-03",
      severity: 81,
    },
    {
      id: "ANOM-20241118-004",
      status: "Resolved",
      region: "United Kingdom",
      type: "Outluer",
      time: "2021-07-03",
      severity: 53,
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

      <div
        className="d-flex row justify-content-center m-0"
        style={styles.chart}
      >
        <div className="col-0 col-md-3"></div>
        <div className="col-12 col-md-6">
          <img
            src="icons/charts/geomap.svg"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="col-0 col-md-3"></div>
      </div>

      <div className="col-12 mt-4 p-0">
        <GenericTable
          title="Anomalies Table"
          columns={columns}
          data={data}
          actions
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
