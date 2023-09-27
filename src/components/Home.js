import React from 'react';
import Nav from './Nav';
import Head from './Head';

function Home() {
    return (
        <>
            <div className='body-container'>
                <div className="NavBar">
                    <Nav />
                </div>
                <div>
                    <div>
                        <Head/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home