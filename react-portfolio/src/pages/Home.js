import React from 'react';
import Navigation from '../Components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <h1>Le Gall Jérémy</h1>
                <h2>Développeur full stack :</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank"> Télécharger le CV en .pdf</a>
                    </div>
            </div>
        </div>
    );
};

export default Home;