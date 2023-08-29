import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCommentForPost } from '../features/commentSlice';

const CommentSection = ({ postId, comments }) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(createCommentForPost({ postId, commentData: { text: commentText } }));
    setCommentText('');
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      {comments.map((comment) => (
        <div key={comment._id} className="mb-2">
          <p className="text-gray-800">{comment.text}</p>
        </div>
      ))}
      <form onSubmit={handleSubmitComment} className="mt-4">
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          className="w-full border rounded-md p-2 resize-none"
          placeholder="Write a comment"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 mt-2 hover:bg-blue-600"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
