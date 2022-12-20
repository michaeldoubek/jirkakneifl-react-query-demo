import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

function List() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery('posts', () =>
    fetch('http://localhost:3000/').then((res) => res.json()),
  );

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error: {error as string}</p>;

  return (
    <div>
      <h1>List posts</h1>
      <Link to="/new">New post</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post: any) => (
            <tr>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                <Link to={`/${post.id}`}>
                  <button>Detail</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
