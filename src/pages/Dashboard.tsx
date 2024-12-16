import { theme } from "../styles/theme";
import PageHeader from "../content/PageHeader";
import Button from "../control/Button";
import PinCard from "../content/PinCard";
import { ReactSVG } from "react-svg";
import GenericTable from "../content/GenericTable";

const Dashboard = () => {
  return (
    <div style={styles.content}>
      <div className="d-flex row mb-3">
        <div className="col-12 col-md-9 col-lg-8">
          <PageHeader
            title="Dashboard"
            description="An interactive hub displaying key metrics, insights, and application performance at a glance."
          />
        </div>
        <div className="col-12 col-md-3 col-lg-4 d-flex align-items-center justify-content-center justify-content-md-end">
          <Button text="Export data" variant="primary" />
        </div>
      </div>

      <div className="d-flex row " style={styles.pinCards}>
        <div className="col-12 col-sm-6 col-xl-3  ">
          <PinCard
            title="Requests per last week"
            value="32K"
            trendValue="28.4%"
            trend="up"
          />
        </div>

        <div className="col-xl-3 col-sm-6 col-xs-12">
          <PinCard
            title="Anomalies per last week"
            value="126"
            trendValue="12.6%"
            trend="down"
          />
        </div>

        <div className="col-xl-3 col-sm-6 col-xs-12">
          <PinCard
            title="Model's efficiency"
            value="73%"
            trendValue="3.4%"
            trend="down"
          />
        </div>

        <div className="col-xl-3 col-sm-6 col-xs-12">
          <PinCard
            title="Mean Time Between Anoma..."
            value="1.3h"
            trendValue="28.4"
            trend="up"
          />
        </div>
      </div>

      <div className="d-flex row justify-content-between mt-3">
        <div className="col-12 col-lg-7 mt-3">
          <div
            className="d-flex justify-content-center h-100"
            style={styles.chart}
          >
            <img
              src="icons/charts/main_chart.svg"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
        <div
          style={styles.horizontalCharts}
          className="col-12 col-lg-5 d-flex flex-column justify-content-between"
        >
          <div className="mt-3 h-100" style={styles.chart}>
            <img
              src="icons/charts/area_plot.svg"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="mt-3 h-100" style={styles.chart}>
            <img
              src="icons/charts/pie_chart.svg"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>

      <div className="d-flex row mb-3 mt-5">
        <div className="col-12 col-md-9 col-lg-8">
          <PageHeader
            title="Further overview"
            description="A centralized view of detailed analytical reports summarizing system activity and anomalies."
          />
        </div>
        <div className="col-12 col-md-3 col-lg-4 d-flex align-items-center justify-content-center justify-content-md-end">
          <Button text="Export data" variant="primary" />
        </div>
      </div>

      <div
        className="d-flex row justify-content-between "
        style={{ alignItems: "stretch" }}
      >
        <div className="col-12 col-xl-5  mt-3" style={{ flex: 1 }}>
          <div
            className="d-flex justify-content-center h-100"
            style={styles.chart}
          >
            <img
              src="icons/charts/availability_bar.svg"
              style={{
                // margin: "auto 0",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
        <div className="col-12  col-xl-7  mt-3">
          <GenericTable columns={columns} data={data} />
        </div>
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

const columns = [
  { dataType: "string", label: "Application ID", key: "id" },
  { dataType: "string", label: "Type", key: "type" },
  { dataType: "number", label: "Severity", key: "severity" },
  { dataType: "timestamp", label: "Time", key: "time" },
];
const data = [
  {
    id: "123",
    type: "Outlier",
    severity: 67,
    time: "31/12/2022",
  },
  {
    id: "124",
    type: "Anomaly",
    severity: 45,
    time: "31/12/2022",
  },
  {
    id: "125",
    type: "Outlier",
    severity: 89,
    time: "31/12/2022",
  },
  {
    id: "126",
    type: "Cluster",
    severity: 31,
    time: "31/6/2022",
  },
];
// const actions = [];
// const pagination = [];
export default Dashboard;
