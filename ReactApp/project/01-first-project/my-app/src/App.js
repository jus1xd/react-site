import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Profile from './components/Category/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Category/Dialogs/Dialogs';
import Friends from './components/Category/Friends/Friends';
import News from './components/Category/News/News';
import Music from './components/Category/Music/Music';
import Groups from './components/Category/Groups/Groups';
import Photos from './components/Category/Photos/Photos';
import Videos from './components/Category/Videos/Videos';



function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} />
          <Route exact path='/dialogs' component={Dialogs} />
          <Route path='/friends' component={Friends} />
          <Route path='/groups' component={Groups} />
          <Route path='/music' component={Music} />
          <Route path='/photos' component={Photos} />
          <Route path='/videos' component={Videos} />
        </div>
      </div>  
    </BrowserRouter>
  );
}


export default App;
