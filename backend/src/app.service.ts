import { Injectable } from '@nestjs/common';

const storage = {
  posts: [
    {
      id: 1,
      title: 'First posts',
      content: 'This is the first post',
    },
  ],
};

@Injectable()
export class AppService {
  listPosts() {
    return storage.posts;
  }

  getPost(id: number) {
    return storage.posts.find((post) => post.id === id);
  }

  createPost(post) {
    storage.posts.push({ id: storage.posts.length + 1, ...post });
    return post;
  }

  updatePost(id: number, post) {
    const index = storage.posts.findIndex((post) => post.id === id);
    storage.posts[index] = { id, ...post };
    return post;
  }

  deletePost(id: number) {
    const index = storage.posts.findIndex((post) => post.id === id);
    storage.posts.splice(index, 1);
    return true;
  }
}
