import React from 'react';

export default function Portfolio() {
    return(
        <div className='primary'>
            <div>
                <h1 style={{textAlign: 'center'}}>My Academic Horrors</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', rowGap: 50}}>
                <div>
                    <a href="https://jaystepz.github.io/prework-study-guide/"><img src={require('../assets/project1preview.png')} width="400" height="300" alt="" /></a>
                </div>
                <div >
                    <a href="https://jaystepz.github.io/Horiseon-Online-Marketing/"><img src={require('../assets/HoriseonHome.png')} width="400" height="300" alt="" /></a>
                </div>
                <div >
                <a href="https://jamtoad.github.io/PokerProject/"><img src={require("../assets/PokerProjectPreview.JPG")} alt="" width='400' height='300' /></a>
                </div>
                <div >
                <a href="https://arcane-woodland-34611.herokuapp.com/"><img src={require("../assets/ShopProj.JPG")} alt="" width='400' height='300' /></a>
                </div>
                <div >
                    Project 5
                </div>
                <div >
                    Project 6
                </div>
            </div>
        </div>
    );
};
