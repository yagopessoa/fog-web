import React, { Component } from 'react'

const styles = {
    image: {
        width: 200,
        height: 200,
        padding: 16,
    }
}

export default class Sobre extends Component {
    state = {
        areas: [
            {
                nome: 'COORDENAÇÃO',
                descricao: 'Blablabla',
                img: '../Images/brasao.png'
            },
            {
                nome: 'RELAÇÕES PÚBLICAS',
                descricao: 'Blablabla',
                img: '../Ima'
            },{
                nome: 'GESTÃO',
                descricao: 'Blablabla',
                img: '../Images/brasao.png'
            },
            {
                nome: 'GAME DESIGN',
                descricao: 'Blablabla',
                img: '../Ima'
            },{
                nome: 'PROGRAMAÇÃO',
                descricao: 'Blablabla',
                img: '../Images/brasao.png'
            },
            {
                nome: 'ARTE',
                descricao: 'Blablabla',
                img: '../Ima'
            },{
                nome: 'MÚSICA',
                descricao: 'Blablabla',
                img: '../Images/brasao.png'
            },
            {
                nome: 'PESQUISA',
                descricao: 'Blablabla',
                img: '../Ima'
            },
        ]
    }

    renderAreas(){
        return this.state.areas.map(area =>
            <div key={area.nome} className="area-container">
                <img style={styles.image} src={require('../Images/brasao.png')} alt="Brasão" />
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
                    <h3>{area.nome}</h3>
                    {area.descricao}
                </div>
            </div>
        )
    }

    render(){
        return(
            <div className="sobre-page">
                {/* <div className="sobre-page">
                    <h4>Conheça as diferentes áreas de atuação do FoG:</h4>
                    {this.renderAreas()}
                </div> */}
                <img className="areas-img" src={require('../Images/areas.png')} alt="Áreas de atuação" />
            </div>
        )
    }
}
