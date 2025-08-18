import { useEffect, useState } from "react";
import BlogList from './BlogList';
const Home = () => {
    const [name,setName]=useState('tanvi')
    const[blogs,setBlogs]=useState([
        {title:"MyBlog1", body:"body of blog1", author:"veda",id:1},
        {title:"MyBlog2", body:"body of blog2", author:"laasya",id:2},
        {title:"MyBlog3", body:"body of blog3", author:"laasya",id:3}
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(()=>{
        console.log("hello")
        setName('laasya nerella')
    },[])


    return ( 
        <div className="Home">
            < BlogList blogs={blogs} title={name} handleDelete={handleDelete}/>
            < BlogList blogs={blogs.filter((blog) => blog.author === 'laasya')} title ="laasya's blogs" handleDelete={handleDelete}/>
                </div>

     );
}
 
export default Home;