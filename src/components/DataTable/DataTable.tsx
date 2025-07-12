import React, { Component } from "react";
import './DataTable.scss';
import '../global.scss';

interface DataTableProperties{
    categories:string[]
}
class DataTable extends Component<{},DataTableProperties>{

    constructor(props)
    {
        super(props);

        this.state = {
            categories:[]
        }
    }
    render() {
        return (
            <div className="data-table">
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Account</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Note</th>
                    </tr>
                    <tr>
                        <td>2021-01-01</td>
                        <td>Bank</td>
                        <td>Income</td>
                        <td>1000</td>
                        <td>Salary</td>
                    </tr>
                    <tr>
                        <td>2021-01-01</td>
                        <td>Bank</td>
                        <td>Income</td>
                        <td>1000</td>
                        <td>Salary</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default DataTable;