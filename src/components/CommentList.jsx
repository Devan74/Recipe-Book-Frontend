import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments available.</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <p>{comment.text}</p>
              <p>User: {comment.user.username}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
