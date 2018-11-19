import React, { Component } from 'react'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress'

import Link from '@material-ui/icons/Link'

import MediaQuery from 'react-responsive'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden', // overlay -> para celular
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
    },
    gridList: {
        width: '100hh',
        height: 'calc(100vh - 64px)',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
    },
    icon: {
        color: '#FFF',
    },
}

export default class Jogos extends Component {

    state = {
        tileData: [],
        loading: true,
    }

    renderTile() {
        return this.state.tileData.map(tile => (tile.published && tile.cover_url &&
            <GridListTile className="game-square" style={{ margin: 32 }} key={tile.title}>
                <img src={tile.cover_url} alt={tile.title} />
                <GridListTileBar
                    title={tile.title}
                    subtitle={<span>{tile.short_text}</span>}
                    actionIcon={
                        <IconButton style={styles.icon} onClick={() => window.open(tile.url)}>
                            <Link />
                        </IconButton>
                    }
                />
            </GridListTile>
        ))
    }

    renderTileSmall() {
        return this.state.tileData.map(tile => (tile.published && tile.cover_url &&
            <GridListTile className="game-square" style={{ margin: 8 }} key={tile.title}>
                <img src={tile.cover_url} alt={tile.title} />
                <GridListTileBar
                    title={tile.title}
                    subtitle={<span>{tile.short_text}</span>}
                    actionIcon={
                        <IconButton style={styles.icon} onClick={() => window.open(tile.url)}>
                            <Link />
                        </IconButton>
                    }
                />
            </GridListTile>
        ))
    }

    componentWillMount() {

        fetch('https://cors-anywhere.herokuapp.com/https://itch.io/api/1/' + process.env.REACT_APP_API_KEY + '/my-games')
            .then(response => response.json())
            .then(parsedJSON => {
                //console.log('API request: ', parsedJSON)
                var games = parsedJSON.games
                games.sort((a, b) => b.views_count - a.views_count)
                this.setState({ tileData: games, loading: false })
            }).catch(err => {
                this.setState({ loading: false })
                console.log(err)
            })
    }

    render() {
        if (this.state.loading) return (
            <div style={{
                width: '100vw',
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <CircularProgress />
            </div>
        )
        return (     // TODO (maybe): https://github.com/Canner/react-loading-image
            <div style={styles.root}>
                <MediaQuery minWidth={1120}>
                    <GridList cellHeight={276} cols={4} style={styles.gridList}>
                        {this.renderTile()}
                    </GridList>
                </MediaQuery>
                <MediaQuery minWidth={600} maxWidth={1119}>
                    <GridList cellHeight={230} cols={3} style={styles.gridList}>
                        {this.renderTileSmall()}
                    </GridList>
                </MediaQuery>
                <MediaQuery maxWidth={599}>
                    <div style={{height: 8}}></div>
                    <GridList cellHeight={200} cols={1} style={styles.gridList}>
                        {this.renderTileSmall()}
                    </GridList>
                </MediaQuery>
            </div>
        )
    }
}
