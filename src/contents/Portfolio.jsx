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
                    <a href="https://github.com/JayStepz/prework-study-guide"><button>To the Hub</button></a>
                </div>
                <div >
                    <a href="https://jaystepz.github.io/Horiseon-Online-Marketing/"><img src={require('../assets/HoriseonHome.png')} width="400" height="300" alt="" /></a>
                    <a href="https://github.com/JayStepz/Horiseon-Online-Marketing"><button>To the Hub</button></a>
                </div>
                <div >
                <a href="https://jamtoad.github.io/PokerProject/"><img src={require("../assets/PokerProjectPreview.JPG")}  width='400' height='300' alt="" /></a>
                <a href="https://github.com/JayStepz/PokerProject"><button>To the Hub</button></a>
                </div>
                <div >
                <a href="https://arcane-woodland-34611.herokuapp.com/"><img src={require("../assets/ShopProj.JPG")}  width='400' height='300' alt="" /></a>
                <a href="https://github.com/JayStepz/Project-2"><button>To the Hub</button></a>
                </div>
                <div >
                    <a href="https://jaystepz.github.io/Password-Generator/"><img src={require("../assets/PassGen.JPG")} width='400' height='300' alt="" /></a>
                    <a href="https://github.com/JayStepz/Password-Generator"><button>To the Hub</button></a>
                </div>
                <div >
                    <a href="https://jaystepz.github.io/J.-Stephens-Portfolio/"><img src={require("../assets/portfolioscreenshot.png")} width='400' height='300' alt="" /></a>
                    <a href="https://github.com/JayStepz/J.-Stephens-Portfolio"><button>To the Hub</button></a>
                </div>
            </div>
        </div>
    );
};
