import React, { useState } from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

const AddComment = ({
  comments,
  setComments,
  currentComment,
  setCurrentComment,
  posts,
  setPosts,
}) => {
  const [inputComment, setInputComment] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputComment(e.target.value);
  };

  const onAddComment = (e: string, postId: number, type: string) => {
    e.preventDefault();
    //const newCommentList = []
    const id = Math.random() * 1000;
    // if ((type = "post")) {
    //   posts.map((post) => {
    //     if ((post.type = "post")) {
    //       post.id = postId;
    //     }
    //   });
    setComments([...comments, { id, title: inputComment, postId: postId }]);
    setInputComment("");
    // setIsComment(false);

    // posts.map((post) => {
    //   if (post.title === newValue) {
    //     post.id = postId;
    //   }
    //   console.log(postId);
    // console.log(posts);
    // setPosts(posts.filter((post: string) => post.id === postId));
    // console.log(posts);
  };

  console.log(comments);

  return (
    <>
      <TextArea
        style={{ width: 400 }}
        showCount
        maxLength={200}
        onChange={onChange}
        value={inputComment}
        placeholder="Write a comment..."
      />
      <div className="mt-6 mb-2">
        <Button type="primary" onClick={onAddComment}>
          Add Comment
        </Button>{" "}
      </div>
    </>
  );
};

export default AddComment;
