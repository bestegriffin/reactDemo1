import React from 'react'
import List from '@material-ui/core/List'

import ColorItem from './colorItem'

const ColorList = () => {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

    return <div>{renderColors(colors)}</div>
}

export default ColorList

const renderColors = colors => {
    return (
        <List>
            {colors.map(color => {
                return renderIndividualColor(color)
            })}
        </List>
    )
}

const renderIndividualColor = color => {
    return <ColorItem color={color} />
}
