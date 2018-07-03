import { FETCH_COURSES } from './types';

function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                title: "Up and Running with Redis",
                description: ""
            },
            {
                title: "HTML/CSS Bootcamp",
                description: ""
            },
            {
                title: "",
                description: ""
            }
        ]

        
    }
}