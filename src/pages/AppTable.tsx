import { theme } from "../styles/theme";
import PageHeader from "../content/PageHeader";
import GenericTable from "../content/GenericTable";
import Button from "../control/Button";

const AppTable = () => {
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
  // const actions = [];
  // const pagination = [];

  return (
    <div>
      <div className="d-flex row">
        <div className="col-12">
          <PageHeader
            title="Applications Table"
            description="A searchable list of all registered applications with critical details and management options."
          />
        </div>

        <div className="col-12 d-flex justify-content-center my-4">
          <Button text="Add New" variant="primary" size="lg" href="/addApp" />
        </div>

        <div className="col-12 mt-4">
          <GenericTable
            title="Applications Table"
            columns={columns}
            data={data}
            // actions={actions}
            // pagination={pagination}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {};

export default AppTable;
