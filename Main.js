import react ,{useState}from "react";
import Card from "./Card";
import Footer from "./Footer";
import axios from "axios";

const Main=()=>{
    // <Navbar/>
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(g)=>{
        if(g.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDGbEMmJEgakQKqR_64uBbuEOLggVbMywo'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
        {/* <Navbar/> */}
            <div className="header">
                <div className="row1">
                <img className="mainimg" src="./img/main.jpg" alt="" />
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
            <Footer/>
        </>
    )
}
export default Main;
