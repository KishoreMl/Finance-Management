import React, { Component } from "react";
import './DataTable.scss';
import '../global.scss';

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
                        <h5>1,00,00</h5>
                    </div>
                    <div className="category">
                        <h4>Savings</h4>
                        <h5>1,00,00</h5>
                    </div>
                    <div className="category">
                        <h4>Expense</h4>
                        <h5>1,00,00</h5>
                    </div>
                    <div className="category">
                        <h4>Investment</h4>
                        <h5>1,00,00</h5>
                    </div>
                </div>

                <div className="split-table">
                    <tr>
                        <th><p>Category</p></th>
                        <th><p>Expected</p></th>
                        <th><p>Actual</p></th>
                    </tr>
                    <tr>
                        <td><p>Food</p></td>
                        <td><p>2000</p></td>
                        <td className="green"><p>1000</p></td>
                    </tr> 
                    <tr>
                        <td><p>Food</p></td>
                        <td><p>2000</p></td>
                        <td className="green"><p>1000</p></td>
                    </tr> 
                    <tr>
                        <td><p>Food</p></td>
                        <td><p>2000</p></td>
                        <td className="green"><p>1000</p></td>
                    </tr> 
                    <tr>
                        <td><p>Food</p></td>
                        <td><p>2000</p></td>
                        <td className="green"><p>1000</p></td>
                    </tr> 
                    <tr>
                        <td><p>Food</p></td>
                        <td><p>2000</p></td>
                        <td className="green"><p>1000</p></td>
                    </tr> 
                    <tr>
                        <td><p>Food</p></td>
                        <td><p>2000</p></td>
                        <td className="green"><p>1000</p></td>
                    </tr> 

                </div>
            </div>  
        );
    }
}