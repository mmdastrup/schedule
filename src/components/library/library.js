import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import LibraryCourse from './libraryCourse';

class Library extends Component {

    comonentWillMount() {
        this.props.fetchCourses()
    }

    renderCourses() {
        const data = this.props.courses
        
        return data.map((course, index) => {
            return <LibraryCourse course={...course} key={index}/>
        })
    }
    render() {
        console.log(this.props.courses);
        return (
            <div className="library">
                <h1 className="library__title">Course Library</h1>
                <LibraryCourse/>
                <LibraryCourse/>
                <LibraryCourse/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps, actions)(Library);