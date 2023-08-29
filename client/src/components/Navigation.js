import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-blue-500 py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-white text-lg font-semibold hover:underline">
        Home
      </Link>
      <Link
        to="/create-post"
        className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 hover:text-blue-600"
      >
        Create Post
      </Link>
    </nav>
  );
};

export default Navigation;
