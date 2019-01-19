import React from 'react';
import Search from './Search';

const Header = (props) => {
    return (
        <div className="header">
            <div className='left-header'>
            <img className='box-img' src='./images/think-outside-the-box.gif'/>
            <h2 className='title'>ThoughtBox</h2>
            </div>
            <Search searchThoughts={props.searchThoughts}/>
        </div>
    )
}
export default Header;



