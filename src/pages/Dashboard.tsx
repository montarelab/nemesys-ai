import { theme } from "../styles/theme";
import PageHeader from "../content/PageHeader";
import Button from "../control/Button";
import PinCard from "../content/PinCard";
import { ReactSVG } from "react-svg";

const Dashboard = () => {
  return (
    <div style={styles.content}>
      <div className="d-flex">
        <div className="col-8">
          <PageHeader
            title="Dashboard"
            description="An interactive hub displaying key metrics, insights, and application performance at a glance."
          />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          <Button text="Export data" variant="primary" />
        </div>
      </div>

      <div className="d-flex justify-content-between" style={styles.pinCards}>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <PinCard
            title="Requests per last week"
            value="32K"
            trendValue="28.4%"
            trend="up"
          />
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <PinCard
            title="Anomalies per last week"
            value="126"
            trendValue="12.6%"
            trend="down"
          />
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <PinCard
            title="Model's efficiency"
            value="73%"
            trendValue="3.4%"
            trend="down"
          />
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <PinCard
            title="Mean Time Between Anoma..."
            value="1.3h"
            trendValue="28.4"
            trend="up"
          />
        </div>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <div className="col-sm-6">
          <div className="d-flex justify-content-center" style={styles.chart}>
            <ReactSVG
              src="icons/charts/main_chart.svg"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div
          style={styles.horizontalCharts}
          className="col-sm-6 d-flex flex-column justify-content-between"
        >
          <div className="" style={styles.chart}>
            <ReactSVG
              src="icons/charts/area_plot.svg"
              width={300}
              height={400}
            />
          </div>
          <div className="" style={styles.chart}>
            <ReactSVG
              src="icons/charts/pie_chart.svg"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      <div className="d-flex mt-5">
        <div className="col-8">
          <PageHeader
            title="Further overview"
            description="A centralized view of detailed analytical reports summarizing system activity and anomalies."
          />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          <Button text="Export data" variant="primary" />
        </div>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <div className="col-sm-6">
          <div className="d-flex justify-content-center" style={styles.chart}>
            <ReactSVG
              src="icons/charts/main_chart.svg"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex justify-content-center" style={styles.chart}>
            <ReactSVG
              src="icons/charts/main_chart.svg"
              width={300}
              height={300}
            />
          </div>
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

export default Dashboard;
