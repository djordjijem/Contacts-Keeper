import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Home, About } from './Components';
import './App.css';

function App() {
    return (
        <Router>
            <>
                <Navbar />
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                    </Switch>
                </div>
            </>
        </Router>
    );
}

export default App;
