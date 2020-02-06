import React from 'react';
import './style.css'

const Header = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='headerMain'>Cat Fact Generator</div>
                    <div className='factButton'>Random Fact</div>
                </div>
                
            </div>
        </div>
    );
}

export default Header;