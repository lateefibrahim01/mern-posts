import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentSection from '../features/CommentSection';

const SinglePostPage = ({ match }) => {
  const { postId } = match.params;
  const { allPosts } = useSelector((state) => state.posts);
  const post = allPosts.find((p) => p._id === postId) || {};

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Single Post Page</h1>
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600">
        Like
      </button>
      <Link
        to={`/edit-post/${postId}`}
        className="bg-yellow-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-yellow-600"
      >
        Edit
      </Link>
      <button className="bg-red-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-red-600">
        Delete
      </button>
      <Link
        to={`/post/${postId}/comments`}
        className="bg-green-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-600"
      >
        View Comments
      </Link>
      <CommentSection postId={postId} comments={post.comments || []} />
    </div>
  );
};

export default SinglePostPage;
