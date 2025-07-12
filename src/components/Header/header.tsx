import React, { Component } from 'react';
import './header.scss'

export class Header extends Component{
    
    render() {
        return (
            <div className='header'>
                <div className='logo'></div>
                <h2>Finance management</h2>
            </div>
        )
    }
}