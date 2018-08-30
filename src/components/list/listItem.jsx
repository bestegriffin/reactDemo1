import React from 'react'

const ListItem = ({ colorName, count }) => {
    return (
        <div>
            <h1>
                {count} {colorName}
            </h1>
        </div>
    )
}

export default ListItem
