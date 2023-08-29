import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewPost } from '../features/postSlice';

const CreatePostPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewPost(formData));
    setFormData({ title: '', content: '' });
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <h1 className="text-3xl font-semibold mb-4">Create Post</h1>
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
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
