import React, { Component } from "react";
import "./modal.scss";

interface ModalProperties{
   
}
export class Modal extends Component<{},InputModalProperties>{
    constructor(props)
    {
        super(props);    
    }
    render() {
        return (
            <React.Fragment>
                <div className="overlay">
                    <div className="modal-container">
                        <div className="modal-header">
                            <h1>Modal Heading</h1>
                        </div>
                        <div className="modal-content">
                            <p>Modal Content</p>
                        </div>
                        <div className="modal-btn-container">
                            <button className="btn-primary-blue" id="primary-button">
                                OK
                            </button>
                            <button className="btn-primary-blue" id="secondary-button">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
            
        )
    }
}