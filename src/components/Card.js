import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";


function Card({ course, liked, setLiked }) {

    const desc = course.description.substr(0, 100);
    function clickHandler() {
        console.log(liked);
        if (liked.includes(course.id)) {
            setLiked((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("like removed")
        }
        else {
            if (liked.length === 0) {
                setLiked([course.id]);
            }
            else {
                setLiked((prev) => [...prev, course.id]);
            }
            toast.success("likes Suceessfully");
        }
    }
    return (
        <div className="card">
            {
                course.length === 0 ? (
                    <div className="found">
                        <p>No Data Found</p>
                    </div>
                )
                    : (
                        <div>
                            <div>
                                <img src={course.image.url} alt="daksh" className="image"></img>
                                <div className="like-btn">
                                    <button onClick={clickHandler}>
                                        {liked.includes(course.id) ? (<FcLike className="like" />) : (<FcLikePlaceholder fontSize={"1.75rem"} />)}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p className='title'>{course.title}</p>
                                <p className='desc'>{desc + " . . ."}</p>
                            </div>
                        </div>
                    )
            }
        </div >
    );
}
export default Card;