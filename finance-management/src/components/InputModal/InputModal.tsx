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
            <div className="overlay">
                <div className="modal-container">
                    
                </div>
            </div>
        )
    }
}