import PageHeader from "../content/PageHeader";
import TextInput from "../control/TextInput";
import AppSlider from "../control/AppSlider";
import FieldSelector from "../control/FieldSelect";
import Button from "../control/Button";
import FieldHeader from "../control/FieldHeader";
import GenericTable from "../content/GenericTable";

const Rules = () => {
  let threshold = 0;

  const columns = [
    { dataType: "string", label: "Rule ID", key: "id" },
    { dataType: "string", label: "Rule Action", key: "action" },
    { dataType: "timestamp", label: "Last Model Update", key: "time" },
  ];
  const data = [
    { id: "RULE-20241118-001", action: "Send Email", time: "31/12/2022" },
    { id: "RULE-20241118-002", action: "Slack Message", time: "31/12/2022" },
    { id: "RULE-20241118-003", action: "Webhook Trigger", time: "31/12/2022" },
    { id: "RULE-20241118-004", action: "Send Email", time: "31/12/2022" },
  ];

  return (
    <div>
      <PageHeader
        title="Alert Rules"
        description="A configuration center to define custom alert triggers and actions for anomaly notifications."
      />

      <div className="col-12 my-4">
        <GenericTable
          title="Applications Table"
          columns={columns}
          data={data}
          actions
        />
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

      <AppSlider
        id="sensitivity"
        title="Threshold sensitivity"
        description="Adjust the model’s sensitivity to detect subtle or extreme anomalies."
        placeholder="Asia-checker, holiday day, ..."
        required
        initialValue={threshold}
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
        id="actions"
        title="Alert actions."
        description="Define responses such as emails or notifications triggered by an alert."
        placeholder="Email, SMS, Push Notification, Slack, Teams, Webhook"
        options={[
          "Email",
          "SMS",
          "Push Notification",
          "Slack",
          "Teams",
          "Webhook",
        ]}
        defaultFields={[""]}
        required
        value=""
      />

      <FieldSelector
        id="country"
        title="Geo location."
        description="Specify the geographical area linked to the alert rule for contextual insights."
        placeholder="Choose default"
        options={["Slovakia", "USA", "China", "Germany", "UK", "France"]}
        defaultFields={[""]}
        required
        value=""
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

      <FieldHeader
        id="condition"
        title="Condition"
        description="Create specific conditions to determine when an alert should be triggered."
      />

      <div className="d-flex justify-content-end mt-3">
        <div className="col-3">
          <FieldSelector
            id="field"
            title="Field"
            description=""
            placeholder=""
            options={[
              "CPU",
              "Memory",
              "Geo locaiton",
              "Severity",
              "Requests per dat",
            ]}
            defaultFields={[""]}
            required
            value=""
          />
        </div>
        <div className="col-3">
          <FieldSelector
            id="operator"
            title="Operator"
            description=""
            placeholder=""
            options={["==", "<", ">", "<=", ">=", "!="]}
            defaultFields={[""]}
            required
            value=""
          />
        </div>
        <div className="col-6">
          <FieldSelector
            id="value"
            title="Value"
            description=""
            placeholder="Country / Value"
            options={["USA", "UK", "France", "Germany", "China"]}
            defaultFields={[""]}
            required
            value=""
          />
        </div>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <div className="mx-2">
          <Button text="Save" variant="primary" />
        </div>
        <Button text="Export settings" variant="secondary" />
      </div>
    </div>
  );
};

export default Rules;
