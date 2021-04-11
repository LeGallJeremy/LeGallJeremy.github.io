import React, { Component } from 'react';

class Languages extends Component {

    render() {
        
        return (
            <div>
                <div className="languagesFrameworks">
                    <h1>Mes languages et frameWorks</h1>
                        <h2>Language</h2>
                            <ul>
                                <li>PHP</li>
                                <li>Javascript</li>
                                <li>HTML/CSS</li>
                                <li>MySql</li>   
                            </ul>  

                        <h2>Frameworks</h2>
                            <ul>
                                <li>REACT</li>
                                <li>Symfony</li>
                                <li>Bootstrap</li>
                            </ul>
                    </div>
            </div>
        );
    }
}

export default Languages;