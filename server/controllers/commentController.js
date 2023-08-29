const Comment = require('../models/Comment');

exports.getCommentsForPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const comments = await Comment.find({ postId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get comments' });
  }
};

exports.createCommentForPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { text } = req.body;
    const newComment = new Comment({ postId, text });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create comment' });
  }
};
