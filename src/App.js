import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
