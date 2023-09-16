import React, { Component } from "react";
import './DataTable.scss';

interface DataTableProperties{
    categories:string[]
}
export class DataTable extends Component<{},DataTableProperties>{

    constructor(props)
    {
        super(props);

        this.state = {
            categories:[]
        }
    }
    render() {
        return (
            <div className="data-container">
                <div className="category-container">
                    <div className="category">
                        <h4>Total Income</h4>
                        <h6>1,00,00</h6>
                    </div>
                </div>

                <div className="split-table">
                    <tr>
                        <th><p>Category</p></th>
                        <th><p>Expected</p></th>
                        <th><p>Actual</p></th>
                    </tr>
                </div>
            </div>  
        );
    }
}