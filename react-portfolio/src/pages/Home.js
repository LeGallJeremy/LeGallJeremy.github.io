import React from 'react';
import Navigation from '../Components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="homeTranslate">
                    <h1>Bonjour! Je m'appelle Jérémy</h1>
                    <h2>Je suis développeur full stack.</h2>
                    <h3></h3>
                        <div className="pdf">
                            <a href="./media/CV.pdf" target="_blank"> Télécharger le CV en .pdf</a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Home;