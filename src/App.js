import React, { Component } from 'react'
import 'typeface-roboto'
import './App.css'

import MediaQuery from 'react-responsive'

import theme from './theme'

import { MuiThemeProvider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import Menu from '@material-ui/icons/Menu'
import Games from '@material-ui/icons/Games'
import GroupAdd from '@material-ui/icons/GroupAdd'
import Radio from '@material-ui/icons/Radio'
import Info from '@material-ui/icons/Info'
import Event from '@material-ui/icons/Event'

import Sobre from './Pages/Sobre'
import Jogos from './Pages/Jogos'
import Eventos from './Pages/Eventos'
import Ptdc from './Pages/Ptdc'
import Psel from './Pages/Psel'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'

const styles = {
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
  image: {
    height: '70%',
    padding: 16,
  },
  image2: {
    width: '70%',
    padding: 16,
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 32,
  },
  button: {
    marginTop: 32,
  },
  appBarButton: {
    marginLeft: 16,
  },
  link: {
    textDecoration: 'none', 
    color: '#FFF',
  }
}

const Home = () => 
<MuiThemeProvider theme={theme}>
  <div className="App">
    <header className="App-header">
      <div className="page-body">
          <div className="name-n-logo">
            <MediaQuery minWidth={600}>
              <img style={styles.image} src={require('./Images/brasao.png')} alt="Brasão" />
            </MediaQuery>
            <MediaQuery maxWidth={599}>
              <img style={styles.image2} src={require('./Images/brasao.png')} alt="Brasão" />
            </MediaQuery>
            
            <div style={styles.titles}>
              <MediaQuery minWidth={1600}>
                <Typography style={{fontSize: '4em'}} variant="display4" gutterBottom>Fellowship of the Game</Typography>
                <Typography style={{fontSize: '1.4em'}} variant="display1" gutterBottom>Grupo de extensão de desenvolvimento de jogos - ICMC - USP</Typography>
              </MediaQuery>
              <MediaQuery minWidth={1280} maxWidth={1599}>
                <Typography style={{fontSize: '3em'}} variant="display4" gutterBottom>Fellowship of the Game</Typography>
                <Typography style={{fontSize: '1em'}} variant="display1" gutterBottom>Grupo de extensão de desenvolvimento de jogos - ICMC - USP</Typography>
              </MediaQuery>
              <MediaQuery maxWidth={1279}>
                <Typography style={{fontSize: '2em'}} variant="display4" gutterBottom>Fellowship of the Game</Typography>
                <Typography style={{fontSize: '1em'}} variant="display1">Grupo de extensão de desenvolvimento de jogos - ICMC - USP</Typography>
              </MediaQuery>

              <Link style={styles.link} to="/sobre">
                <Button style={styles.button} variant="contained" color="secondary" size="large" >
                  Saiba mais
                </Button>
              </Link>
            </div>
          </div>

      </div>
    </header>
  </div>
</MuiThemeProvider>

const sideList = (
  <div style={{width: 250}}>
    <List>

      <Link style={styles.link} to="/sobre">
        <ListItem button >
          <ListItemIcon><Info /></ListItemIcon>
          <ListItemText primary={'Sobre'} />
        </ListItem>
      </Link>

      <Link style={styles.link} to="/jogos">
        <ListItem button >
          <ListItemIcon><Games /></ListItemIcon>
          <ListItemText primary={'Jogos'} />
        </ListItem>
      </Link>
      
      <Link style={styles.link} to="/eventos">
        <ListItem button >
          <ListItemIcon><Event /></ListItemIcon>
          <ListItemText primary={'Eventos'} />
        </ListItem>
      </Link>
      
      <Link style={styles.link} to="/ptdc">
        <ListItem button >
          <ListItemIcon><Radio /></ListItemIcon>
          <ListItemText primary={'PTDC'} />
        </ListItem>
      </Link>
      
      <Link style={styles.link} to="/psel">
        <ListItem button >
          <ListItemIcon><GroupAdd /></ListItemIcon>
          <ListItemText primary={'Processo Seletivo'} />
        </ListItem>
      </Link>
      
    </List>
  </div>
)
class App extends Component {

  state = {
    drawer: false,
  }

  toggleDrawer = (open) => () => {
    this.setState({
      drawer: open,
    })
  }

  render() {
    return (
      <Router>
        <div><MuiThemeProvider theme={theme}>
          <div className="root-page">
            <AppBar color="primary" position="fixed">
              <Toolbar style={styles.toolbar}>
                <MediaQuery minWidth={1124}>
                  <div style={{flexGrow: 1}}>
                    <Typography style={{marginLeft: 32}} color="inherit" variant="title">
                      <Link style={styles.link} to="/">
                        Fellowship of the Game
                      </Link>
                    </Typography>
                  </div>
                  <div>
                    <Link style={styles.link} to="/sobre">
                      <Button style={styles.appBarButton} color="inherit">
                        <Info style={styles.icon} />
                        Sobre
                      </Button>
                    </Link>
                    <Link style={styles.link} to="/jogos">
                      <Button style={styles.appBarButton} color="inherit">
                        <Games style={styles.icon} />
                        Jogos
                      </Button>
                    </Link>
                    <Link style={styles.link} to="/eventos">
                      <Button style={styles.appBarButton} color="inherit">
                        <Event style={styles.icon} />
                        Eventos
                      </Button>
                    </Link>
                    <Link style={styles.link} to="/ptdc">
                      <Button style={styles.appBarButton} color="inherit">
                        <Radio style={styles.icon} />
                        PTDC
                      </Button>
                    </Link>
                    <Link style={styles.link} to="/psel">
                      <Button style={styles.appBarButton} color="inherit">
                        <GroupAdd style={styles.icon} />
                        Processo Seletivo
                      </Button>
                    </Link>
                  </div>
                </MediaQuery>
                <MediaQuery maxWidth={1123}>
                  <div style={{flexGrow: 1}}>
                    <Typography color="inherit" variant="title">
                      <Link style={styles.link} to="/">
                        Fellowship of the Game
                      </Link>
                    </Typography>
                  </div>
                  <IconButton color="inherit">
                    <Menu onClick={this.toggleDrawer(true)} />
                  </IconButton>
                </MediaQuery>

              </Toolbar>
            </AppBar>
          </div>

          <SwipeableDrawer
            open={this.state.drawer}
            onClose={this.toggleDrawer(false)}
            onOpen={this.toggleDrawer(true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
            >
              {sideList}
            </div>
          </SwipeableDrawer>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/jogos" component={Jogos} />
            <Route path="/eventos" component={Eventos} />
            <Route path="/ptdc" component={Ptdc} />
            <Route path="/psel" component={Psel} />
          </Switch>

        </MuiThemeProvider></div>
      </Router>
    )
  }
}

export default App
