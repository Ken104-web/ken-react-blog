import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title, handleDelete }) => {
   // const blogs = props.blogs;
    //const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((round) =>  (
             <div className="round-preview" key={round.id}>
                <Link to={ `/blogs/${round.id}` }> 
                    <h2>{ round.title }</h2>
                    <p>written by { round.author }</p>
                </Link>
                <button onClick={() => handleDelete(round.id)} >Delete blog</button>
             </div>   
            ))}
        </div>
    );
}
 
export default BlogList;