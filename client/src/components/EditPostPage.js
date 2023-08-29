import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../features/postSlice';

const EditPostPage = ({ match }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state.posts);
  const post = allPosts.find((p) => p._id === postId) || {};

  const [formData, setFormData] = useState({ title: post.title || '', content: post.content || '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost({ postId, postData: formData }));
  };

  useEffect(() => {
    setFormData({ title: post.title || '', content: post.content || '' });
  }, [post]);

  return (
    <div className="bg-white rounded shadow p-4">
      <h1 className="text-3xl font-semibold mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border rounded-md p-2 mb-2"
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          className="w-full border rounded-md p-2 mb-2 resize-none"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPostPage;
