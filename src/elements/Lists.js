import React from 'react'
import propsTypes from 'prop-types'

export default function Lists(props) {
    const className= ['list-reset'];
    className.push(props.className);

    if(props.isSmall) className.push('text-xs');
    return (
        <ul className={className.join(" ")}>
            {
                props.data.map((data, index) => {
                    return (
                        <li 
                            key= {index}
                            className={data.isChecked ? "is-checked" : ""}>
                            {data.content}
                        </li>
                    );
                })
            }
        </ul>
    )
}

Lists.propsTypes = {
    className: propsTypes.string,
    data: propsTypes.array,
    isSmall: propsTypes.bool
}