function Filter ({filterData,category,setCategory}) {
    function filterHandler(title){
        setCategory(title);
    }
    return(
        <div className="filter">
            {filterData.map((data)=>{
                const active = data.title===category? "active" : "";
                return(<button onClick={()=>filterHandler(data.title)} className={`btn-fil${active}`} key={data.id}>
                    {data.title}
                </button>)
            })}
        </div>
    );
}
export default Filter;