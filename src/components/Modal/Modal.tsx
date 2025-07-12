import React, { Component } from "react";
import "./modal.scss";

interface ModalProperties{
    header: string; 
    modalContent: string;
    secondaryButton: string; 
    primaryButton:string
}
export class Modal extends Component<ModalProperties>{
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
                            <h1>{this.props.header}</h1>
                        </div>
                        <div className="modal-content">
                            <p>{this.props.modalContent}</p>
                        </div>
                        <div className="modal-btn-container">
                            {this.props.primaryButton &&
                                <button className="btn-primary-blue" id="primary-button">
                                    {this.props.primaryButton}
                                </button>
                            }
                            {this.props.secondaryButton &&
                                <button className="btn-primary-blue" id="secondary-button">
                                   {this.props.secondaryButton}
                                </button>
                            }
                            
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
            
        )
    }
}