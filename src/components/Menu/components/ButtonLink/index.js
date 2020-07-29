import React from 'react';

function ButtonLink(props) {
    return (
        <a href={props.href} className="ButtonLink">
            {props.children}
        </a>
    )
}

export default ButtonLink;