import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  useAppControllerCreatePost,
  useAppControllerGetPost,
  useAppControllerUpdatePost,
} from '../api/apiComponents';
import { useMutation, useQuery } from 'react-query';
function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useQuery(
    ['post', id],
    () => fetch(`http://localhost:3000/${id}`).then((res) => res.json()),
    {
      enabled: id !== 'new',
      onSuccess: (data: any) => {
        setTitle(data.title);
        setContent(data.content);
      },
    },
  );

  const updatePostMutation = useMutation('updatePost', (data) =>
    fetch(`http://localhost:3000/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    }).then((res) => res.json()),
  );

  const createPostMutation = useMutation('updatePost', () =>
    fetch(`http://localhost:3000`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    }).then((res) => res.json()),
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (id !== 'new') updatePostMutation.mutate();
    else createPostMutation.mutate();
  };

  return (
    <div>
      <h1>Detail</h1>
      <p>id: {id}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Detail;
