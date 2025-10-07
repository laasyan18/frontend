import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  // Remove the ID validation as it might be interfering
  // if (!id || !/^[a-zA-Z0-9-_]+$/.test(id)) {
  //   history.push('/');
  //   return null;
  // }

  console.log('Blog data:', blog); // Add this line for debugging

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;