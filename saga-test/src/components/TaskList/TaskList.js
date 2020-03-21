import React from "react";
import {connect} from 'react-redux';

import TaskListItem from "../TaskListItem";
import InputBar from "../InputBar/InputBar";
import FilterButton from "../filterButton";

import './TasklList.css';
import {selectByFilter} from "../../selectors/selectorTasks";

const TasksList = (tasksReducer) => {

    return (
        <div className='row'>
            <InputBar />
            <TaskListItem tasksReducer={tasksReducer}/>
            <FilterButton />
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(selectByFilter(state));
    return {
        tasksReducer: selectByFilter(state)
    }
};

export default connect(mapStateToProps)(TasksList);
