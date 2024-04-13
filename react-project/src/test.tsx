'use strict';
import { RowNode } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from 'ag-grid-react';
import { useRef, useState } from 'react';

/* Customer render with Check box */

const Test = () => {

    const gridRef = useRef<AgGridReact>(null);

    const [rowData, setRowData] = useState<any[]>([
        { result: "pass", age: 18, detail: "fail@thiswhyaer,pass@cool" },
        { result: "fail", age: 20, detail: "other" },
        { result: "fail", age: 1, detail: "other" },
        { result: 'pass', age: 9, detail: "other" },
        { result: 'fail', age: 14, detail: "other" },
        { result: 'fail', age: 28, detail: "other" },
        { result: 'pass', age: 25, detail: "other" },
    ]);

    const CustomCellComponent = (props: any) => {
        const id = props.node.id

        if (id == 0) {
            let detail = props.value.split(",")

            const parsedValues = detail.map((ele: string) => [ele.substring(0, 4), ele.substring(5)])
            return (
                parsedValues.map((ele: string[]) =>
                    <span style={{ color: ele[0] == "pass" ? "blue" : "red", marginLeft: '2px' }}>{ele[1]}</span>
                )
            )
        }

        return <span>{props.value}</span>
    };

    const [columnDefs, setColumnDefs] = useState([
        { headerName: "result", field: "result", flex: 2, filter: true },
        { field: "age", flex: 1, filter: true },
        { field: "detail", filter: true, cellRenderer: CustomCellComponent }
    ]);


    return (
        <div style={{ width: '600px', height: '400px' }}>

            <div
                style={{ width: '80%', height: '80%' }}
                className="ag-theme-alpine"
            >
                <AgGridReact rowData={rowData} columnDefs={columnDefs} />
            </div>
        </div>
    );
};
export default Test;
