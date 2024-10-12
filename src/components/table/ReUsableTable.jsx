import React from "react";

const ReusableTable = ({
  title,
  columns,
  data,
  actions,
  searchComponent,
  exportComponent,
}) => {
  return (
    <div className="card mt-4">
      <div className="px-3 py-4">
        <div className="flex justify-between items-start gap-2 flex-col md:flex-row">
          <div className="mb-3 mb-lg-0">
            <h5 className="form-label text-[1rem] font-semibold">
              <span className="badge badge-soft-dark ml-2">{data.length}</span>
            </h5>
          </div>
          <div className="flex gap-2">
            {searchComponent && searchComponent}
            {exportComponent && exportComponent}
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table
          className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
          style={{ width: "100%" }}
        >
          <thead className="thead-light">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className={col.className || ""}>
                  {col.label}
                </th>
              ))}
              {actions.length > 0 && <th className="text-center">Action</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id || index}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>
                    {col.render ? col.render(item) : item[col.accessor]}
                  </td>
                ))}
                {actions.length > 0 && (
                  <td className="text-center">
                    <div className="d-flex gap-2 justify-content-center">
                      {actions.map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          className={action.className}
                          onClick={() => action.onClick(item)}
                        >
                          {action.icon && <action.icon className="mr-1" />}
                          {/* {action.label} */}
                        </button>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReusableTable;
