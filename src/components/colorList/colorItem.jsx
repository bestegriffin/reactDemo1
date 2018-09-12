import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const ColorItem = ({ color }) => {
    return (
        <ListItem
            button
            style={{ backgroundColor: color }}
            onClick={() => {
                handleColorClick(color)
            }}>
            <ListItemText primary={color} />
        </ListItem>
    )
}

export default ColorItem

const handleColorClick = color => {
    console.log('clicked on ' + color)
}
