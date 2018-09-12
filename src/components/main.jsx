import React, { Component } from 'react'

import { Page } from 'react-layout-components'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import { theme } from './theme/theme'

import Header from './header/header'
import ColorList from './colorList/colorList'

class App extends Component {
    render() {
        let appTheme = createMuiTheme(theme)
        return (
            <MuiThemeProvider theme={appTheme}>
                <Page className="App">
                    <Header />
                    <ColorList />
                </Page>
            </MuiThemeProvider>
        )
    }
}

export default App
