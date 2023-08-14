import { React, useEffect, useState } from "react";
import "./Table.css";
// import "./Mainpage.css";
function Table({ travelData, cap, onClose1, onUpdateTravelData }) {
    const [rows, setRows] = useState(travelData);
    const editRow = (entry) => {

        const updatedRows = rows.map((r) => {
            if (r === entry) {
                return { ...r, editing: true };
            }

            return r;
        });
        setRows(updatedRows);
        // onUpdateTravelData(updatedRows)

    };
    const saveRow = (entry) => {
        const updatedRows = rows.map((r) => {
            if (r === entry) {
                return { ...r, editing: false };
            }

            return r;
        });

        setRows(updatedRows);
        console.log(entry);
        // onUpdateEntry(index, entry);

    };
    const deleteRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };
    useEffect(() => {
        const storedRows = JSON.parse(localStorage.getItem("tableRows"));
        if (storedRows) {
            setRows(storedRows);
        } else {
            setRows(rows);
        }
    }, []);

    // Save the rows array to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("tableRows", JSON.stringify(rows));
    }, [rows]);
    return (

        <div>

            <div className="cards">
                {/* <h2>Travel History</h2> */}

                {/* <div className="card"> */}
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>StartDate</th>
                            <th>EndDate</th>
                            <th>Vaccation Days</th>
                            <th>Description</th>
                            <th colSpan={2}>Actions
                                <button className="close" onClick={onClose1}>&times;</button>
                            </th>



                        </tr>
                    </thead>

                    <tbody>
                        {
                            rows.map((entry, index) => (
                                <tr key={index}>
                                    {!entry.editing && <td>{entry.title}</td>}
                                    {!entry.editing && <td>{entry.startDate}</td>}
                                    {!entry.editing && <td>{entry.endDate}</td>}
                                    {!entry.editing && <td>{entry.totalDays}</td>}
                                    {!entry.editing && <td>{entry.description}</td>}
                                    {entry.editing && (
                                        <td>
                                            <input
                                                className="editable"
                                                type="text"
                                                value={entry.title}
                                                onChange={(e) => {
                                                    const updatedRows = [...rows];
                                                    updatedRows[index].title = e.target.value;
                                                    setRows(updatedRows);
                                                }}
                                            />
                                        </td>
                                    )}
                                    {entry.editing && (
                                        <td>
                                            <input
                                                className="editable"
                                                type="date"
                                                value={entry.startDate}
                                                onChange={(e) => {
                                                    const updatedRows = [...rows];
                                                    updatedRows[index].startDate = e.target.value;
                                                    setRows(updatedRows);
                                                }}
                                            />
                                        </td>
                                    )}
                                    {entry.editing && (
                                        <td>
                                            <input
                                                className="editable"
                                                type="date"
                                                value={entry.endDate}
                                                onChange={(e) => {
                                                    const updatedRows = [...rows];
                                                    updatedRows[index].endDate = e.target.value;
                                                    setRows(updatedRows);
                                                }}
                                            />
                                        </td>
                                    )}
                                    {entry.editing && (
                                        <td>
                                            <input
                                                className="editable"
                                                type="count"
                                                value={entry.totalDays}
                                                onChange={(e) => {
                                                    const updatedRows = [...rows];
                                                    updatedRows[index].totalDays = e.target.value;
                                                    setRows(updatedRows);
                                                }}
                                            />
                                        </td>
                                    )}
                                    {entry.editing && (
                                        <td>
                                            <textarea
                                                className="editable"
                                                type="text"
                                                value={entry.description}
                                                onChange={(e) => {
                                                    const updatedRows = [...rows];
                                                    updatedRows[index].description = e.target.value;
                                                    setRows(updatedRows);
                                                }}
                                            />
                                        </td>
                                    )}
                                    <td>
                                        {!entry.editing && (
                                            <button className="btn3" onClick={() => editRow(entry)}>
                                                Edit
                                            </button>
                                        )}
                                        {entry.editing && (
                                            <button className="btn3" onClick={() => saveRow(entry)}>
                                                Save
                                            </button>
                                        )}
                                        <button className="btn3" onClick={() => deleteRow(index)}>
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
        // </div>
    )

}
export default Table;