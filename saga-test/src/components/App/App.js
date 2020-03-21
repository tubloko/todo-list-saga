import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import TasksList from "../TaskList";
import Login from "../Login";
import Register from "../Register";
import MainPage from "../MainPage";

import {tasksLoading} from '../../actions/tasks';

import "./App.css";

const App = ({dispatch}) => {

    useEffect(() => {
        dispatch(tasksLoading());
    }, [dispatch]);

    return (
        <Router>
            <div className="container">
                <h1 className='text-center mt-3 mb-3'>todo do...do... .</h1>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/login' render={() => <Login/>}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/todoApp' render={() => <TasksList/>}/>
            </div>
        </Router>
    );
};

export default connect()(App);
