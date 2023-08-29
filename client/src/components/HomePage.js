import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts, searchPosts } from '../features/postSlice';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state.posts);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPosts(searchTerm));
  };

  useEffect(() => {
    setSearchResults(allPosts);
  }, [allPosts]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      setSearchResults(allPosts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase())));
    } else {
      setSearchResults(allPosts);
    }
  }, [searchTerm, allPosts]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Home Page</h1>
      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search posts"
          className="w-full border rounded-md p-2 mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Render search results */}
      {searchResults.map((post) => (
        <div key={post._id} className="border p-4 rounded-md mb-4">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="mb-2">{post.content}</p>
          <button
            className="bg-blue-500 text-white rounded-md py-2 px-4 mr-2 hover:bg-blue-600"
          >
            Like
          </button>
          <button
            className="bg-yellow-500 text-white rounded-md py-2 px-4 mr-2 hover:bg-yellow-600"
          >
            <Link to={`/edit-post/${post._id}`}>Edit</Link>
          </button>
          <button
            className="bg-red-500 text-white rounded-md py-2 px-4 mr-2 hover:bg-red-600"
          >
            Delete
          </button>
          <button
            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
          >
            <Link to={`/post/${post._id}`}>View Comments</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
