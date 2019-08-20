import React from 'react';

function MenuButton(props) {
    return (
        <div className="MenuButton">
            <br />
            {props.item}
        </div>
    );
}

export default MenuButton;