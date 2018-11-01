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
import Radio from '@material-ui/icons/Radio'
import Info from '@material-ui/icons/Info'

/* import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom' */

const styles = {
  root: {
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
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    height: '70%',
    padding: 16,
  },
  nameLogo: {
    display: 'flex',
    alignItems: 'center',
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 32,
  },
  button: {
    marginTop: 48,
  },
  appBarButton: {
    marginLeft: 16,
  }
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
                    <Button style={styles.appBarButton} color="inherit">
                      <Info style={styles.icon} />
                      Sobre
                    </Button>
                    <Button style={styles.appBarButton} color="inherit">
                      <Games style={styles.icon} />
                      Nossos jogos
                    </Button>
                    <Button style={styles.appBarButton} color="inherit">
                      <Radio style={styles.icon} />
                      Podcast
                    </Button>
                    <Button style={styles.appBarButton} color="inherit">
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
                <div style={styles.titles}>
                  <Typography style={{fontSize: '4em'}} variant="h1" gutterBottom>Fellowship of the Game</Typography>
                  <Typography style={{fontSize: '1.4em'}} variant="h4" gutterBottom>Grupo de extensão de desenvolvimento de jogos - ICMC - USP</Typography>
                  <Button style={styles.button} variant="contained" color="secondary" size="large" >
                    Saiba mais
                  </Button>
                </div>
              </div>
            </div>

          </header>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
