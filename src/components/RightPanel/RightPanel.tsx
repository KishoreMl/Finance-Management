import React, {Component} from "react";
import './RightPanel.scss';
interface RightPanelProperties{
    formType: string;
}
class RightPanel extends Component<{},RightPanelProperties>{
    constructor(props)
    {
        super(props);
        this.state = {
            formType:"Income",
        }
    }
    
    render()
    {
        const IncomeForm = <div className="form-container">

        </div>;

        const ExpenseForm = <div className="form-container">
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
                </div>;
        
        const InvestmentForm = <div className="form-container">

        </div>;

        return (
            <div className="right-panel">
               
                
            </div>
        )
    }
}

export default RightPanel;