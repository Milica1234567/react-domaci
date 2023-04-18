import React, {useState }from 'react'
import './blog.css'
import JsonData from '../../assets/MOCK_DATA.json'
import ReactPaginate from 'react-paginate'

const Blog = () => {

    const[users, setUsers] = useState(JsonData.slice(0,30))
    const [pageNumber, setPageNumber]=useState(0);

    const usersPerPage=3
    const pagesVisited=pageNumber*usersPerPage

    const displayArtical = users.slice(pagesVisited, pagesVisited+usersPerPage).map((user)=>{
        return(
            
            <div className="user">
            <h3>{user.id}</h3>
            <h3>{user.first_name}</h3>
            <h3>{user.last_name}</h3>
            <h3>{user.email}</h3>
            </div>
        )
    })


    const pageCount=Math.ceil(users.length/usersPerPage);

    const changePage=({selected})=>{
        setPageNumber(selected)
    };

    return (
        <div className="blog">
            {displayArtical}
            <ReactPaginate
            previousLabel={"Prethodna"}
            nextLabel={"Sledeca"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButns"}
            previousLinkClassName={"prethodnoButn"}
            nextLinkClassName={"sledeceBtn"}
            disabledClassName={"paginationDis"}
            activeClassName={"paginationActive"}
            />
            </div>
    )
}

export default Blog