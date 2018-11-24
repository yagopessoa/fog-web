import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

export default class Psel extends Component {
    render(){
        return(
            <div className="psel-page">
                <div className="psel-text">
                    <Typography style={{padding: 16, textAlign: 'center'}} variant="display1">QUERENDO ENTRAR NA PARTY?!</Typography>
                    <Typography variant="subheading" style={{padding: 16}} >
                        Nossa staff está preparando uma aventura épica para selecionar os melhores para compor nosso grupo! Fique de olho, o processo seletivo acontecerá no começo do ano!
                    </Typography>
                </div>
                <img className="psel-img" src={require('../Images/psel.png')} alt="Processo Seletivo" />
            </div>
        )
    }
}
