import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Home, About, Register, Login } from './components';
import { ContactState } from './context/contact';
import { AuthState } from './context/auth';
import './App.css';

function App() {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
