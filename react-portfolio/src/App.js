import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Knowledges from './pages/Knowledges'
import Portfolio from './pages/Portfolio'
import Notfound from './pages/Notfound'

const App = () => {
    return ( 
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/competence" component={Knowledges} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route component={Notfound} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;