import React, { Component } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

export default class Sobre extends Component {
    
    render(){
        return(
            <div className="sobre-page">
                <div>
                    <div className="foto-all">
                        <img className="img-all" src={require('../Images/fog_all.jpg')} alt="Todos os membros" />
                        <div className="texto-all">
                            <p>Fundado em 2004, o FoG é um grupo de extensão vinculado ao ICMC-USP focado na criação de jogos gratuitos e na propagação de conhecimento na área de desenvolvimento de jogos. O grupo, formado por alunos, visa à aplicação direta dos conhecimentos adquiridos nos cursos de graduação e da sua integração com as mais diversas tecnologias disponíveis no mercado.</p>
                            <p>Além da criação de jogos digitais, o Fellowship of the Game organiza uma série de eventos gratuitos e abertos ao público em geral, como minicursos, palestras, game jams (maratonas de desenvolvimento de games) e a nossa anual <a href="https://web.facebook.com/events/366436447425350/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>USP GameLink</a>, que inclui a Mostra de Jogos do ICMC e também palestras direcionadas ao público game dev.</p>
                        </div>
                    </div>
                </div>
                <img className="areas-img" src={require('../Images/areas.png')} alt="Áreas de atuação" />
                <h2>Conheça nossos membros:</h2>
                <div style={{width: '80%', backgroundColor: 'white', margin: 16}}>
                    <List dense>
                        {[0, 1, 2, 3].map(value => (
                            <ListItem key={value} button divider>
                                <Avatar alt="Avatar" src={require('../Images/brasao.png')} />
                                <ListItemText primary={`Nome do membro ${value + 1}`} />
                                <ListItemSecondaryAction>

                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        )
    }
}
