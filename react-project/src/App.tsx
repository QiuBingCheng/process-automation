import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

// Row Data Interface
interface IRow {
    site: string;
    selected: boolean;
}

const App: React.FC = () => {
    // 表格数据
    const [rowData, setRowData] = useState<IRow[]>([
        { site: 'Site A', selected: false },
        { site: 'Site B', selected: true },
        { site: 'Site C', selected: false },
        { site: 'Site D', selected: true },
        { site: 'Site E', selected: false },
        { site: 'Site F', selected: true },
        { site: 'Site G', selected: false },
        { site: 'Site H', selected: true },
    ]);

    // 列定义
    const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
        { headerName: '站點', field: 'site', filter: 'agTextColumnFilter', flex: 1 },
        { headerName: '選取', field: 'selected', editable: true, filter: 'agTextColumnFilter', width: 80 },
    ]);

    return (
        <div>
            <h2>Step1 xxxx</h2>
            <div className="formgroup-inline">
                <div className="field">
                    <label htmlFor="firstname" className="p-sr-only">group name</label>
                    <input id="firstname" type="text" className="text-base text-color" placeholder="" />
                </div>
                <button type="button" className="bg-primary">Submit</button>
            </div>
            <hr></hr>

            <h2>Step2 xxxx</h2>

            {/* Station table*/}
            <div className="grid">
                <div className="col">
                    <p style={{ margin: 0, textAlign: "center" }}>table 1 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={colDefs}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
                <div className="col">
                    <p style={{ margin: 0, textAlign: "center" }}>table 2 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={colDefs}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
                <div className="col">
                    <p style={{ margin: 0, textAlign: "center" }}>table 3 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={colDefs}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
            </div>

            {/* Other table*/}
            <div className="grid">
                <div className="col">
                    <p style={{ margin: 0, textAlign: "center" }}>table 4 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={colDefs}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
                <div className="col">
                    <p style={{ margin: 0, textAlign: "center" }}>table 5 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={colDefs}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
                <div className="col">
                    <p style={{ margin: 0, textAlign: "center" }}>table 6 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={colDefs}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
            </div>
            {/* Button*/}
            <div className="grid">
                <div className="col-12">
                    <button style={{ width: '100%' }} className="bg-primary border-primary-500">Preview</button>
                </div>
            </div>
            <hr></hr>

            {/* other table*/}
            <h2>Step 3 xxx</h2>
        </div>
    );
}

export default App; // 导出 App 组件
