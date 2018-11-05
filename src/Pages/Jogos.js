import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/icons/Link'
import MediaQuery from 'react-responsive'

import allGames from '../allGames'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden', // overlay -> para celular
        //backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100hh',
        height: '90vh',
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

    renderTile(){ 
        return this.state.tileData.map(tile => (tile.published && tile.cover_url &&
            <GridListTile style={{padding: 32}} key={tile.title}>
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

    renderTileSmall(){ 
        return this.state.tileData.map(tile => (tile.published && tile.cover_url &&
            <GridListTile style={{padding: 8}} key={tile.title}>
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

    componentWillMount(){
        var games = allGames.games
        games.sort((a, b) => b.views_count - a.views_count)
        this.setState({ tileData: games, loading: false })
    }

    render(){
        if(this.state.loading) return <h4>Loading...</h4>
        return(     // TODO: https://github.com/Canner/react-loading-image
            <div style={styles.root}>
                <MediaQuery minWidth={1120}>
                    <GridList cellHeight={320} cols={3} style={styles.gridList}>
                        {this.renderTile()}
                    </GridList>
                </MediaQuery>
                <MediaQuery minWidth={560} maxWidth={1119}>
                    <GridList cellHeight={320} cols={2} style={styles.gridList}>
                        {this.renderTileSmall()}
                    </GridList>
                </MediaQuery>
                <MediaQuery maxWidth={559}>
                    <GridList cellHeight={320} cols={1} style={styles.gridList}>
                        {this.renderTileSmall()}
                    </GridList>
                </MediaQuery>
            </div>
        )
    }
}
