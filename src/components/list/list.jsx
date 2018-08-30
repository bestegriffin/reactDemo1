import React from 'react'

import ListItem from './listItem'

const colors = ['red', 'blue', 'yellow', 'green', 'purple']
const List = () => {
    return (
        <div>
            <h1>List</h1>
            <ul>
                {colors.map((color, i) => {
                    return <ListItem colorName={color} count={i + 1} />
                })}
            </ul>
        </div>
    )
}

export default List
