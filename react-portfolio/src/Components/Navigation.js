import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/photo.jpg" alt="profil-pict" />
                    <h3>Le Gall Jérémy</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Acceuil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competence" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétence</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://linkedin.com/in/jeremy-le-gall" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </li>
                    <li>
                        <a href="https://github.com/LeGallJeremy" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                </ul>
            </div>
            <div className="signature">
                <p>LegallJeremy - 2021</p>
            </div>
        </div>
    );
};

export default Navigation;