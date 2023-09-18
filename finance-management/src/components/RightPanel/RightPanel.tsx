import React, {Component} from "react";
import './RightPanel.scss';

export class RightPanel extends Component{
    render()
    {
        return (
            <div className="right-panel">
                <div className="btn-bar">
                    <button>Income</button>
                    <button>Expense</button>
                    <button>Investment</button>
                </div>
                <div className="form-container">
                    <div className="label">
                        <label htmlFor="category">Date</label>
                    </div>
                    <div className="input-div">
                        <input type="date" name="category" id="category"/>
                    </div>
                    <div className="label">
                        <label htmlFor="account">Account</label>
                    </div>
                    <div className="input-div">
                        <input type="text" name="account" id="account"/>
                    </div>   
                    <div className="label">
                        <label htmlFor="category">Category</label>
                    </div>
                    <div className="input-div">
                        <input type="text" name="category" id="category"/>
                    </div>
                    <div className="label">
                        <label htmlFor="category">Amount</label>
                    </div>
                    <div className="input-div">
                        <input type="text" name="category" id="category"/>
                    </div>
                    <div className="label">
                        <label htmlFor="category">Note</label>
                    </div>
                    <div className="input-div">
                        <input type="text" name="category" id="category"/>
                    </div>


                    <div className="btn-div">
                        <button className="btn-primary-red">Save</button>
                        <button className="btn-outline">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}