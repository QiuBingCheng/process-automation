'use strict';
import 'ag-grid-community/styles/ag-grid.css';
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from 'ag-grid-react';
import { useRef, useState } from 'react';

/* Customer render with Check box */

const Test = () => {

    const gridRef = useRef<AgGridReact>(null);

    const [rowData, setRowData] = useState<any[]>([
        { make: "Tesla", model: "Model Y", price: 64950, checked: false },
        { make: "Ford", model: "F-Series", price: 33850, checked: false },
        { make: "Toyota", model: "Corolla", price: 29600, checked: false },
        { make: 'Mercedes', model: 'EQA', price: 48890, checked: false },
        { make: 'Fiat', model: '500', price: 15774, checked: false },
        { make: 'Nissan', model: 'Juke', price: 20675, checked: false },
    ]);

    const CustomButtonComponent = (props: any) => {
        console.log("CustomButtonComponent")
        const id = props.node.id
        const rowData = props.rowData

        const clickFun = () => {
            const newValue = !props.value;
            const gridApi = gridRef.current!.api;

            rowData[id]["checked"] = newValue
            gridApi.applyTransaction({
                update: [rowData[id]],
            })!;
        }
        return <input type='checkbox' onChange={() => { }} onClick={clickFun} checked={props.value}></input>;
    };

    const [columnDefs, setColumnDefs] = useState([
        { headerName: "Make & Model", field: "make", flex: 2, filter: true },
        { field: "price", flex: 1, filter: true },
        { field: "checked", filter: true, cellRenderer: CustomButtonComponent, cellRendererParams: { rowData: rowData } }
    ]);

    const showRowData = () => {
        console.log(rowData)
    }
    return (
        <div style={{ width: '600px', height: '400px' }}>

            <div
                style={{ width: '80%', height: '80%' }}
                className="ag-theme-alpine"
            >
                <AgGridReact ref={gridRef} rowData={rowData} columnDefs={columnDefs} />
            </div>
            <button style={{ width: '100px', height: '30px' }} onClick={showRowData}> click me</button>
        </div>
    );
};
export default Test;
