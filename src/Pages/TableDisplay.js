import { React, useState } from "react";
import "./Table";
function TableDisplay({ travelData, cap, onClose1 }) {
    const [rows, setRows] = useState(travelData);


    const editRow = (row) => {
        const updatedRows = rows.map((r) => {
            if (r === row) {
                return { ...r, editing: true };
            }

            return r;
        });
        setRows(updatedRows);
    };
    const saveRow = (row) => {
        // const capname = cap(row.name);
        // const capcon = cap(row.country);
        // row.country = capcon;
        // row.name = capname;
        const updatedRows = rows.map((r) => {
            if (r === row) {
                return { ...r, editing: false };
            }

            return r;
        });

        setRows(updatedRows);
    };
    const deleteRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Country</th>
                        <th>Phone Number</th>
                        <th colSpan={2}>Actions
                            <button className="close" onClick={onClose1}>&times;</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => {
                        return (
                            <tr key={index}>
                                {!row.editing && <td>{row.title}</td>}
                                {!row.editing && <td>{row.country}</td>}
                                {!row.editing && <td>{row.password}</td>}
                                {row.editing && (
                                    <td>
                                        <input
                                            className="editable"
                                            type="text"
                                            value={row.title}
                                            onChange={(e) => {
                                                const updatedRows = [...rows];
                                                updatedRows[index].title = e.target.value;
                                                setRows(updatedRows);
                                            }}
                                        />
                                    </td>
                                )}
                                {row.editing && (
                                    <td>
                                        <input
                                            type="text"
                                            value={row.country}
                                            onChange={(e) => {
                                                const updatedRows = [...rows];
                                                updatedRows[index].country = e.target.value;
                                                setRows(updatedRows);
                                            }}
                                        />
                                    </td>
                                )}
                                {row.editing && (
                                    <td>
                                        <input
                                            type="tel"
                                            value={row.password}
                                            onChange={(e) => {
                                                const updatedRows = [...rows];
                                                updatedRows[index].password = e.target.value;
                                                setRows(updatedRows);
                                            }}
                                        />
                                    </td>
                                )}
                                <td>
                                    {!row.editing && (
                                        <button className="btn2" onClick={() => editRow(row)}>
                                            Edit
                                        </button>
                                    )}
                                    {row.editing && (
                                        <button className="btn2" onClick={() => saveRow(row)}>
                                            Save
                                        </button>
                                    )}
                                    <button className="btn3" onClick={() => deleteRow(index)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default TableDisplay;
