import React from "react";
import { theme } from "../styles/theme";
import Chip from "./Chip";
import { ReactSVG } from "react-svg";

interface GenericTableProps {
  columns: Column[];
  data: any[];
  actions?: any[];
  pagination?: any;
  title?: string; // Add a title prop for the table header
}

interface Column {
  dataType: string;
  key: string;
  label: string;
  style?: React.CSSProperties;
}

const styles: { [key: string]: React.CSSProperties } = {
  tableContainer: {
    borderRadius: "15px",
    overflow: "hidden",
    backgroundColor: theme.colors.backgroundSecondary,
    border: "1px solid var(--background-light)", // Lighter border color
  },
  table: {
    borderCollapse: "collapse" as "collapse",
    width: "100%",
    tableLayout: "auto", // Ensure table layout is set to auto
    borderRadius: "15px",
    borderTop: "1px solid var(--background-light)",
    // border: "1px solid #ddd", // Lighter border color
  },
  th: {
    // border: "1px solid #ddd", // Lighter border color
    padding: "20px",
    textAlign: "center",
    // paddingLeft: "30px",
  },
  td: {
    // border: "1px solid #ddd", // Lighter border color
    padding: "20px",
    width: "auto",
    whiteSpace: "nowrap",
    textAlign: "center",
  },
  actions: {
    margin: "0 5px",
  },
  evenRow: {
    backgroundColor: theme.colors.backgroundPrimary, // Light color for even rows
  },
  oddRow: {
    backgroundColor: theme.colors.backgroundSecondary, // Darker color for odd rows
  },
};

const GenericTable = ({
  columns,
  data,
  actions,
  pagination,
  title,
}: GenericTableProps) => {
  return (
    <div className="table-container" style={styles.tableContainer}>
      {title && <h5 className="py-4 px-5">{title}</h5>}
      <table style={styles.table} className="generic-table">
        <thead>
          <tr>
            {columns.map((col) => {
              const cellStyle = { ...styles.th, ...(col.style || {}) };
              return (
                <th key={col.key} style={cellStyle}>
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const rowStyle =
              rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow;
            return (
              <tr key={rowIndex} style={rowStyle}>
                {columns.map((col) => {
                  const cellStyle = { ...styles.td, ...(col.style || {}) };
                  const cellData = row[col.key];

                  return (
                    <td key={col.key} style={cellStyle}>
                      {col.dataType === "tags" && Array.isArray(cellData) ? (
                        <div
                          className="d-flex justify-content-center"
                          style={{ gap: "5px" }}
                        >
                          {cellData.map((tag: any, index: number) => (
                            <Chip
                              key={index}
                              value={tag.value}
                              color={tag.color}
                            />
                          ))}
                        </div>
                      ) : col.dataType === "plot" &&
                        typeof cellData === "string" ? (
                        <ReactSVG
                          src={cellData}
                          className="d-flex justify-content-center"
                        />
                      ) : (
                        cellData || "N/A"
                      )}
                    </td>
                  );
                })}
                {actions && (
                  <td>
                    {Array.isArray(actions) &&
                      actions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => action.onClick(row)}
                          className={action.className}
                          style={styles.actions}
                        >
                          {action.label}
                        </button>
                      ))}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
