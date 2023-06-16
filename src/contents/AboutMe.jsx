import React from 'react';

export default function AboutMe() {
    return (
        <div className='primary'>
          <div className=''>
            <div className=''>
              <div className=''>
                <p className=''>
                  Hello.
                </p>
              </div>
              <div></div>
              </div>
              <div className=''>
                <div className=''>
                  <p>My name is Jakob Stephens. Welcome to my web page.</p>
                </div>
                <div>
                  <p>I'm a lack-luster excuse of a full stack programming student.</p>
                  <p>I enrolled in the Georgia Tech Full-Stack Coding Boot Camp in an attempt to learn new skills to push my life in a new direction. It looks like I shouldn't quit my day job anytime soon.</p>  
                </div>
              </div>
          </div>
          <img src={require('../assets/Profile.jpg')} style={{width: 400, marginLeft: 700}} alt=''/>
        </div>
      );
    };
