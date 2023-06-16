import React from 'react';

export default function Resume() {
    return(
        <div className='primary'>
            <img src={require('../assets/SelfRoast.jpg')} alt='I suck at coding, so I made a meme about it'/>
            <div>
                <a href="../assets/MyResume.pdf" download="JSResume">
                    <button>Here's my real resume, though.</button>
                </a>
            </div>
        </div>
    );
};
