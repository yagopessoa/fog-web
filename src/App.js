import React, { Component } from 'react'
import 'typeface-roboto'
import './App.css'

import theme from './theme'
import { MuiThemeProvider, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import Games from '@material-ui/icons/Games'
import GroupAdd from '@material-ui/icons/GroupAdd'

const styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  },
  toolbar: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  icon: {
    marginRight: 8,
  },
  center: {
    flexGrow: 1
  },
  image: {
    height: '70%',
    padding: 16,
  },
  nameLogo: {
    display: 'flex',
    alignItems: 'center',
  },
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <div style={styles.root}>
              <AppBar color="primary" position="static">
                <Toolbar style={styles.toolbar}>
                  <div>
                    <Button color="inherit">
                      <Games style={styles.icon} />
                      Nossos jogos
                    </Button>
                    <Button color="inherit">
                      <GroupAdd style={styles.icon} />
                      Processo Seletivo
                    </Button>
                  </div>
                </Toolbar>
              </AppBar>
            </div>

            <div style={styles.center}>
              <div style={styles.nameLogo}>
                <img style={styles.image} src={require('./Images/brasao.png')} alt="Brasão" />
                <Typography variant="h1">Fellowship of the Game</Typography>
              </div>
            </div>

          </header>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
