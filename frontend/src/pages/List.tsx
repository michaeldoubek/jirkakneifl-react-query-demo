import { Link } from 'react-router-dom';

function List() {
  return (
    <div>
      <h1>Detail</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>First post</td>
            <td>
              <Link to="/1">
                <button>Detail</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default List;
