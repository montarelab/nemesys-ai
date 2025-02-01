import React from "react";
import { theme } from "../styles/theme";
import Chip from "./Chip";
import { ReactSVG } from "react-svg";

interface GenericTableProps {
  columns: Column[];
  data: any[];
  actions?: boolean;
  pagination?: any;
  title?: string;
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
    width: "100%",
    overflowX: "auto",
    backgroundColor: theme.colors.backgroundSecondary,
    border: "1px solid var(--background-light)",
  },
  table: {
    borderCollapse: "collapse",
    width: "100%",
    tableLayout: "auto",
    borderRadius: "15px",
    borderTop: "1px solid var(--background-light)",
  },
  th: {
    padding: "20px",
    textAlign: "center",
  },
  td: {
    padding: "20px",
    width: "auto",
    whiteSpace: "nowrap",
    textAlign: "center",
  },
  evenRow: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
  oddRow: {
    backgroundColor: theme.colors.backgroundSecondary,
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
            {actions && <th>Actions</th>}
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
                    {actions && (
                      <div className="d-flex justify-content-start align-items-center">
                        <ReactSVG
                          src="icons/link-icons/approve.svg"
                          height={13}
                          width={13}
                        />
                        <ReactSVG
                          src="icons/link-icons/reject.svg"
                          height={13}
                          className="ml-3"
                          width={13}
                        />
                      </div>
                    )}
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
