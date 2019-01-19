import React from 'react';
import Search from './Search';

const Header = (props) => {
    return (
        <div className="header">
        <div>
            <img className='box-img' src='./images/think-outside-the-box.gif'/>
            </div>
            <div>
            <h2 className='title'>ThoughtBox</h2>
            <Search />
            </div>
        </div>
    )
}
export default Header;



