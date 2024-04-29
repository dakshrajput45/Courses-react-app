import { useEffect, useState, toast } from 'react';
import { filterData, apiUrl } from './data';
import Courses from './components/Courses';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Spinner from './components/Spinner';
import './App.css';

function App() {
  const [course, setCourses] = useState(null);
  const [loading,setLoading]= useState(true);
  /* 
  every render i baad call kregga
  useEffect(()=>{
    console.log("ui render")
  });*/

  /*
  only first time
  useEffect(()=>{
    console.log("ui render")
  },[]);
  */

  /*
  useEffect(()=>{
    console.log("chnage text p chlaega"); 
  },[text]);
  */

  /*
  useEffect(()=>{
    console.log("listener added"); 

    return ( ()=>{
      console.log("listener removed");
    })
  },[text]);
  */
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const opt = await res.json();
        setCourses(opt.data);
      }
      catch (error) {
        toast.error("somthing went worng");
      }
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div className="App">  
      <div>
        <NavBar>
        </NavBar>
      </div>
      <div>
        <Filter filterData={filterData}>
        </Filter>
      </div>
      <div className='courses'>
        {loading ? (<Spinner/>) : (<Courses course={course}></Courses>)}
      </div>
    </div>
  );
}

export default App;
