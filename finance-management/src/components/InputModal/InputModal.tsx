import React, { Component } from "react";
import "./input-modal.scss";

interface InputModalProperties{
    categories: string[]
}
export class InputModal extends Component<{},InputModalProperties>{
    constructor(props)
    {
        super(props);
        this.state = {
            categories: ["Food","Rent","Clothes"]
        }
    }
    render() {
        return (
            <div className="input-modal">
                <div className="btn-group">
            	    <button>Income</button>
                    <button>Expense</button>
                    <button>Investment</button>
                </div>
                
                <form>
                   
                    <input type="date" name="date"></input><br />
                    <input type="text" name="type"></input><br />
                    <select id="category" name="category">
                        {this.state.categories.map((category) => (
                            <option value={category}>{category}</option>
                    ))}
                    </select><br />
                    <input type="text" name="amount"></input><br />
                    <input type="text" name="description"></input>
                </form>
            </div>
        )
    }
}