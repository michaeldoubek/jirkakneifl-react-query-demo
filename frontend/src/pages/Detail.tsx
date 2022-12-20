import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router';
function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      const response = await fetch(`http://localhost:3000/${id}`);

      if (response.ok) {
        const post = await response.json();

        setTitle(post.title);
        setContent(post.content);
      }
    };

    if (id !== 'new') loadPost();
  }, []);

  const updatePost = async () => {
    const response = await fetch(`http://localhost:3000/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      alert('Post updated!');
    }
  };

  const createPost = async () => {
    const response = await fetch(`http://localhost:3000/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      alert('Post created!');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (id !== 'new') updatePost();
    else createPost();
  };

  return (
    <div>
      <h1>Detail</h1>
      <p>id: {id}</p>
      <form onSubmit={handleSubmit}>
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
