import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Button from '@material-ui/core/Button'

export default class Ptdc extends Component {
    render(){
        return(
<<<<<<< HEAD
            <div className="ptdc-page">
                <MediaQuery minWidth={680}>
                    <p style={{fontSize: '2em'}}>QUINZENALMENTE ÀS SEGUNDAS | 21H</p>
                </MediaQuery>
                <MediaQuery maxWidth={679}>
                    <p style={{fontSize: '1em'}}>QUINZENALMENTE ÀS SEGUNDAS | 21H</p>
                </MediaQuery>
                <img className="ptdc-img" src={require('../Images/PTDC_Logo.png')} alt="Por trás dos controles" />
                <Button style={{marginTop: 32}} variant="contained" color="secondary" onClick={() => 
                    window.open('https://www.youtube.com/channel/UCfuM4aDjfIggJMaWjb_2lVA/')} 
                >
                  Ver episódios
                </Button>
            </div>
=======
            <h2>PTDC</h2>
>>>>>>> 2aff48f6c72fed4da3edb5dd76d7873ab488e992
        )
    }
}
