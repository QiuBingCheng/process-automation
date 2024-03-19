'use strict';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import React, { StrictMode, useMemo, useState } from 'react';

const data = Array.from(Array(20).keys()).map((val, index) => ({
    boolean: !!(index % 2),
}));

const Test = () => {
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState(data);
    const [columnDefs, setColumnDefs] = useState([
        {
            headerName: 'Checkbox Cell Editor',
            field: 'boolean',
            cellEditor: 'agCheckboxCellEditor',
        },
    ]);
    const defaultColDef = useMemo(() => {
        return {
            width: 200,
            editable: true,
        };
    }, []);

    return (
        <div style={containerStyle}>
            <div
                style={gridStyle}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                />
            </div>
        </div>
    );
};
export default Test;
