import React from 'react';
import Experience from '../Components/knowledges/Experience';
import Languages from '../Components/knowledges/Languages';
import SoftSkills from '../Components/knowledges/SoftSkills';
import Navigation from '../Components/Navigation';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
                <Languages/>
                <Experience/>
                <SoftSkills/>
                
            </div>
        </div>
    );
};

export default Knowledges;