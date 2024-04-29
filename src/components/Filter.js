function Filter ({filterData}) {
    return(
        <div className="filter">
            {filterData.map((data)=>{
                return(<button className="btn-fil" key={data.id}>
                    {data.title};
                </button>)
            })}
        </div>
    );
}
export default Filter;