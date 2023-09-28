import React from 'react';
import Nav from './Nav';
import Head from './Head';
import { PlusCircle } from 'lucide-react'
import LoginAuth from './LoginAuth';
import Card from './Card';

function Home() {

    return (
        <>
            <LoginAuth />
            <div className='body-container'>
                <div className="NavBar">
                    <Nav />
                </div>
                <div className='dash-container'>

                    <div>
                        <Head />
                    </div>

                    <div className='Dash-cards'>
                        <Card heading="Total monthly budget" amount="$ 4,00,000" />
                        <Card heading="Total Expense Value" amount="$ 4,00,000" />
                        <Card heading="Today's Expense Value" amount="$ 4,00,000" />

                        <div className='card-container'>
                            <div className='card-data btn-container'>
                                <button className='card-btn'>Add Receipt <PlusCircle color="#f0f0f0" /></button>
                                <button className='card-btn'>Add Expense <PlusCircle color="#f0f0f0" /></button>    
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home