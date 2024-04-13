'use strict';
import { RowNode } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useRef, useState } from 'react';

/* Customer render with Check box */

const CustomeredCell = () => {

    const height = 35

    const gridRef = useRef<AgGridReact>(null);

    const [rowData, setRowData] = useState<any[]>([
        { make: "Tesla", price: 64950, checked: false, gender: 'Male', test: "fail@fail,pass@passsssssssssssss", valid: 'fail' },
        { make: "Fiat", price: 33850, checked: false, gender: 'Woman', test: "other", valid: 'pass' },
        { make: "Tesla", price: 29600, checked: false, gender: 'ABCDEDGFRRTR', test: "other", valid: 'pass' },
        { make: 'Tesla', price: 48890, checked: false, gender: 'Woman', test: "other", valid: 'fail' },
        { make: 'Fiat', price: 15774, checked: false, gender: 'Woman', test: "other", valid: 'pass' },
        { make: 'Nissan', price: 20675, checked: false, gender: 'Woman', test: "other", valid: 'pass' },
    ]);

    const updateRowData = (id: number) => {
        console.log("updateRowData", id)

        // Option1
        const gridApi = gridRef.current!.api;
        const rowNode = gridApi.getRowNode(String(id)) as RowNode
        rowNode.data["checked"] = !rowNode.data["checked"]
        gridApi.refreshCells(
            { rowNodes: [rowNode] }
        )
    };
    const CheckBoxCellRenderer = (props: any) => {
        console.log("CustomButtonComponent")
        const id = props.node.id

        const clickFun = () => {
            console.log("clickFun")
            updateRowData(id)
        }
        return <input type='checkbox' onChange={() => { }} onClick={clickFun} checked={props.value}></input>;
    };

    const ColorfulCellComponent = (props: any) => {
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
    const SelectorCellRenderer = (props: any) => {
        return <div style={{ display: "flex", width: "100%", position: "relative", justifyContent: "space-between" }}>
            <span style={{ flex: "1", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{props.value}</span>
            <span style={{ position: "absolute", right: "1px", fontSize: "12px" }}>▼</span>
        </div>
    };


    const ValidResultRenderer = (props: any) => {
        const pass = props.value == "pass" ? true : false
        return (
            <span style={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "center" }}>
                <img src={`https://www.ag-grid.com/example-assets/icons/${pass ? 'tick-in-circle' : 'cross-in-circle'}.png`} style={{ width: "auto", height: "auto" }} />
            </span>
        )
    }

    useEffect(() => {

    }, [])

    const onGridReady = () => {
        console.log("onGridReady")

        const gridApi = gridRef.current!.api;

        const hardcodedFilter = {
            make: {
                filterType: 'text',
                type: 'Equals',
                filter: 'Tesla'
            }
        };
        gridApi.setFilterModel(hardcodedFilter);
        console.log(hardcodedFilter)
    }

    const [columnDefs, setColumnDefs] = useState([
        { headerName: "Make", field: "make", cellEditor: 'agSelectCellEditor', filter: true, width: 100 },
        { field: "price", filter: true, width: 100 },
        {
            field: "gender", cellEditor: 'agSelectCellEditor', cellEditorParams: {
                values: ['Woman', 'Man', 'ABCDEDGFRRTR'],
            },
            resizable: true,
            width: 100,
            cellRenderer: SelectorCellRenderer,
            editable: true
        },
        { field: "checked", filter: true, cellRenderer: CheckBoxCellRenderer, width: 110 },
        { headerName: "Test", resizable: true, field: "test", filter: true, width: 120, cellRenderer: ColorfulCellComponent },
        { headerName: "Valid", field: "valid", width: 120, cellRenderer: ValidResultRenderer },
    ]);

    const showRowData = () => {
        console.log("showRowData")
        console.log(rowData)
    }
    return (
        <div style={{ height: '400px' }}>

            <div
                style={{ width: '80%', height: '80%' }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    ref={gridRef}
                    onGridReady={onGridReady}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    getRowHeight={() => height}
                />
            </div>
            <button style={{ width: '100px', height: '30px' }} onClick={showRowData}> click me</button>
        </div>
    );
};
export default CustomeredCell;
