import { useState } from 'react';
import { useParams } from 'react-router';
function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <h1>Detail</h1>
      <p>id: {id}</p>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <label htmlFor="content">Content:</label>
          <textarea name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Detail;
