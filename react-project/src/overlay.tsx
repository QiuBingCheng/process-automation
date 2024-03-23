'use strict';
import 'ag-grid-community/styles/ag-grid.css';
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from 'ag-grid-react';
import { useRef, useState } from 'react';

/* overlay
https://ag-grid.com/react-data-grid/overlays/#custom-overlays

*/

const Test = () => {
    const [disabled, setDisabled] = useState(false);


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

    const onBtShowLoading = () => {
        gridRef.current!.api.showLoadingOverlay();
    }
    const onBtHide = () => {
        gridRef.current!.api.hideOverlay();
    }

    return (
        <div style={{ width: '600px', height: '400px' }}>

            <div
                style={{ width: '80%', height: '80%' }}
                className={'ag-theme-alpine'}
            >
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    overlayLoadingTemplate={'<div aria-live="polite" aria-atomic="true" style="position:absolute;top:0;left:0;right:0; bottom:0; center no-repeat" aria-label="loading"></div>'}

                />
            </div>
            <button style={{ width: '100px', height: '30px' }} onClick={onBtShowLoading}> disable</button>
            <button style={{ width: '100px', height: '30px' }} onClick={onBtHide}>Hide Overlay</button>
        </div>
    );
};
export default Test;
