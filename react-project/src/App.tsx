import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "./app.css";

// Row Data Interface
interface IRow2 {
    site: string;
    selected: string;
}


interface IRow {
    site: string;
    selected: boolean;
}

const App: React.FC = () => {
    // 表格数据

    // ########## TABLE 1 ########## //
    const [rowData1, setRowData1] = useState([
        { site: 'Site A', selected: "" },
        { site: 'Site B', selected: "" },
        { site: 'Site C', selected: "" },
        { site: 'Site D', selected: "" },
        { site: 'Site A', selected: "" },
        { site: 'Site B', selected: "" },
        { site: 'Site C', selected: "" }
    ]);

    const [colDefs1, setColDefs1] = useState<ColDef[]>([
        { headerName: '站點', field: 'site', filter: 'agTextColumnFilter', floatingFilter: true, flex: 1 },
        {
            headerName: '選取', field: 'selected', editable: true, headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true, cellEditor: "agCheckboxCellEditor",
        },
    ]);

    // ########## TABLE 2 ########## //
    const [rowData2, setRowData2] = useState<IRow[]>([
        { site: 'Site A', selected: false },
        { site: 'Site B', selected: true },
        { site: 'Site C', selected: false },
        { site: 'Site D', selected: true },
        { site: 'Site E', selected: false }
    ]);

    // ########## TABLE 3 ########## //
    const [rowData3, setRowData3] = useState<IRow[]>([
        { site: 'Site A', selected: false },
        { site: 'Site B', selected: true },
        { site: 'Site C', selected: false },
        { site: 'Site D', selected: true },
        { site: 'Site E', selected: false }
    ]);

    // ########## TABLE 4 ########## //
    const [rowData4, setRowData4] = useState<IRow[]>([
        { site: 'Site A', selected: false },
        { site: 'Site B', selected: true },
        { site: 'Site C', selected: false },
        { site: 'Site D', selected: true },
        { site: 'Site E', selected: false }
    ]);

    // ########## TABLE 5 ########## //
    const [rowData5, setRowData5] = useState<IRow[]>([
        { site: 'Site A', selected: false },
        { site: 'Site B', selected: true },
        { site: 'Site C', selected: false },
        { site: 'Site D', selected: true },
        { site: 'Site E', selected: false }
    ]);

    // ########## TABLE 6 ########## //
    const [rowData6, setRowData6] = useState<IRow[]>([
        { site: 'Site A', selected: false },
        { site: 'Site B', selected: true },
        { site: 'Site C', selected: false },
        { site: 'Site D', selected: true },
        { site: 'Site E', selected: false }
    ]);

    // ########## TABLE 7 ########## //
    const [rowData7, setRowData7] = useState<IRow[]>([
        { site: 'Site A', selected: false },
        { site: 'Site B', selected: true },
        { site: 'Site C', selected: false },
        { site: 'Site D', selected: true },
        { site: 'Site E', selected: false }
    ]);

    // ########## TABLE 8 ########## //
    const [rowData8, setRowData8] = useState<IRow[]>([
        { site: 'Site A', selected: false },
        { site: 'Site B', selected: true },
        { site: 'Site C', selected: false },
        { site: 'Site D', selected: true },
        { site: 'Site E', selected: false }
    ]);

    const [colDefs8, setColDefs8] = useState<ColDef<IRow>[]>([
        { headerName: '站點', field: 'site', filter: 'agTextColumnFilter', flex: 1 },
        { headerName: '選取', field: 'selected', editable: true, filter: 'agTextColumnFilter', width: 90 },
    ]);

    return (
        <div>
            <h2>Step1 xxxx</h2>
            <hr></hr>
            <div>
                <div className="formgroup-inline" style={{ marginLeft: '10px', height: '30px' }}>
                    <div className="field">
                        <label htmlFor="firstname" className="p-sr-only" style={{ width: '100px' }} >Group Name</label>
                        <input id="firstname" type="text" className="text-base text-color" placeholder="" />
                    </div>
                    <button type="button" className="bg-primary border-primary-500 px-3 border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Submit</button>
                </div>
                <div className="formgroup-inline" style={{ marginLeft: '10px' }}>
                    <div className="field">
                        <label htmlFor="jobStatus" className="p-sr-only" style={{ width: '100px' }}>Job Status</label>
                        <input id="jobStatus" type="text" placeholder="Message for job status" disabled />
                    </div>
                </div>
            </div>

            <h2>Step2 xxxx</h2>
            <hr></hr>
            {/* Station table*/}
            <div className="grid">
                <div className="col">
                    <p className='table-title'>table 1 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData1}
                            columnDefs={colDefs1}
                            getRowHeight={() => 30}
                            rowSelection='multiple'
                            suppressRowClickSelection={true}
                        />
                    </div>
                </div>
                <div className="col">
                    <p className='table-title'>table 2 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData2}
                            columnDefs={colDefs1}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
                <div className="col">
                    <p className='table-title'>table 3 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData3}
                            columnDefs={colDefs1}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
            </div>

            {/* FDC table*/}
            <div className="grid">
                <div className="col-6">
                    <p className='table-title'>table 4 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData4}
                            columnDefs={colDefs1}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
            </div>

            {/* WAC table*/}
            <div className="grid">
                <div className="col">
                    <p className='table-title'>table 5 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData5}
                            columnDefs={colDefs1}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
                <div className="col">
                    <p className='table-title'>table 6 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData6}
                            columnDefs={colDefs1}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
                <div className="col">
                    <p className='table-title'>table 7 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData7}
                            columnDefs={colDefs1}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
            </div>

            {/* Button*/}
            <div className="grid">
                <div className="col-12">
                    <button className="bg-primary border-primary-500 px-3 border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700" style={{ width: '100%', height: '25px' }}>Preview</button>
                </div>
            </div>

            {/* other table*/}
            <h2>Step 3 xxx</h2>
            <hr></hr>
            {/* CONFIG table*/}
            <div className="grid">
                <div className="col-12">
                    <p className='table-title'>table 8 xxx</p>
                    <div className="ag-theme-alpine" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData8}
                            columnDefs={colDefs8}
                            getRowHeight={() => 30}
                        />
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col">
                    <button className="bg-primary border-primary-500 px-3 border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700" style={{ width: '100%' }}>Download</button>
                </div>
                <div className="col">
                    <button className="bg-primary border-primary-500 px-3 border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700" style={{ width: '100%' }}>Submit</button>
                </div>
            </div>
        </div >
    );
}

export default App;