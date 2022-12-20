import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function List() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch('http://localhost:3000/');
      if (response.ok) setPosts(await response.json());
    };

    load();
  }, []);

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
          {posts.map((post) => (
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
