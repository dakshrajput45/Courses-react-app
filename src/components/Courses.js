import Card from "./Card";

function Courses({course}) {

    let allCourses = [];
    const getCourses = () => {
        Object.values(course).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {!course ? (
                <div>
                    <p>No Data Found</p>
                </div>
            ):(
                getCourses().map((course) => {
                    return (<Card key={course.id}course={course} />)
                })
            )}
        </div>
    );
}
export default Courses;