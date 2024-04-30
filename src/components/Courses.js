import { useState } from "react";
import Card from "./Card";

function Courses({course,category}) {
    const [liked,setLiked] = useState([]);
    let allCourses = [];
    const getCourses = () => {
        if(category==="All") {
        Object.values(course).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    else{
        //specific cateogry
        return course[category];
    } 
    }
    return (
        <div className="courses">
            {!course ? (
                <div>
                    <p>No Data Found</p>
                </div>
            ):(
                getCourses().map((course) => {
                    return (<Card key={course.id}course={course} liked={liked} setLiked={setLiked}/>)
                })
            )}
        </div>
    );
}
export default Courses;