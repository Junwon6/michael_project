import React from 'react';
import { Link } from 'react-router-dom'

import MenuButton from './MenuButton';

const menu = [ '😀', '😍' ];



function Menu() {
    return (
        <div className="Menu">
            <div className="WhiteSpace"></div>
            <Link to='/'><MenuButton item={'test'}/></Link>
            {menu.map(item => <Link to={'/contents/' + item}><MenuButton item={item} count={menu.length+1}/></Link>)}
        </div>
    );
}

export default Menu;