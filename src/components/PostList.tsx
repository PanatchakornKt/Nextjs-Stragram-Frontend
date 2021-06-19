import React, { useState } from "react";
import { Card, Avatar, Input, Button, List } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PostProps } from "@/components/Types";

const { Meta } = Card;
const { TextArea } = Input;

const PostList = ({
  posts,
  setPosts,
  setIsEditing,
  setCurrentPost,
  setIsModalVisible,
  comments,
  setComments,
}) => {
  const [currentComment, setCurrentComment] = useState([]);
  const [inputComment, setInputComment] = useState<string>("");
  const [isEditingComment, setIsEditingComment] = useState<boolean>(false);

  const onDelete = (id: number) => {
    setPosts(posts.filter((post: Post) => post.id !== id));
  };

  const onDeleteComment = (id: number) => {
    setComments(comments.filter((comment: Comment) => comment.id !== id));
  };

  const onEditPost = (post: Post) => {
    setIsEditing(true);
    setIsModalVisible(true);
    setCurrentPost({ ...post });
  };

  const onEditComment = (comment: Comment) => {
    setIsEditingComment(true);
    setCurrentComment({ ...comment });
  };

  const onEditCommentChange = (e: string) => {
    setCurrentComment({ ...currentComment, title: e.target.value });
  };

  const onUpdateComment = (id: number, updatedComment: Comment) => {
    const updatedItem = comments.map((comment: Comment) => {
      return comment.id === id ? updatedComment : comment;
    });
    setIsEditingComment(false);
    setComments(updatedItem);
  };

  const handleEditCommentSubmit = (e: string) => {
    e.preventDefault();
    onUpdateComment(currentComment.id, currentComment);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputComment(e.target.value);
  };

  const onAddComment = (item: Post) => {
    const id = Math.random() * 1000;
    let newComment: { id: number; title: string; postId: number } = {
      id,
      title: inputComment,
      postId: item.id,
    };
    setComments([...comments, newComment]);
    setInputComment("");
  };

  const showPosts = posts.map((post: Post) => {
    const showComments = comments.map((comment: Comment) => {
      if (post.id === comment.postId) {
        return (
          <div key={comment.id}>
            <div className="mb-2">
              <Card style={{ width: 400 }}>
                <Meta
                  avatar={
                    <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                  }
                  title={comment.title}
                  description="by Panatchakorn W."
                />
                <div className="mt-2 ml-12 text-gray-300">
                  <label>
                    <button onClick={() => onEditComment(comment)}>edit</button>
                  </label>
                  <label className="ml-2">
                    <button onClick={() => onDeleteComment(comment.id)}>
                      delete
                    </button>
                  </label>
                </div>
              </Card>
            </div>
          </div>
        );
      }
    });
    return (
      <div className="mb-2 mt-6" key={post.id}>
        <Card
          style={{ width: 400 }}
          cover={<img src={post.image} style={{ objectFit: "cover" }} />}
          actions={[
            <EditOutlined onClick={() => onEditPost(post)} />,
            <DeleteOutlined onClick={() => onDelete(post.id)} />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://i.pinimg.com/564x/2f/fa/e6/2ffae67cccf7d31c352649d8a3d0810c.jpg" />
            }
            title="kakatang "
            description={post.title}
          />
        </Card>
        {isEditingComment ? (
          <>
            <TextArea
              style={{ width: 400 }}
              showCount
              maxLength={200}
              value={currentComment.title}
              onChange={onEditCommentChange}
              placeholder="Write a comment..."
              required
            />
            <div className="mt-6 mb-2">
              <Button onClick={handleEditCommentSubmit}>Edit Comment</Button>{" "}
            </div>
          </>
        ) : (
          <>
            <TextArea
              style={{ width: 400 }}
              showCount
              maxLength={200}
              onChange={onChange}
              value={inputComment}
              placeholder="Write a comment..."
              required
            />
            <div className="mt-6 mb-2">
              <Button onClick={() => onAddComment(post)}>Add Comment</Button>{" "}
            </div>
          </>
        )}
        {showComments}
      </div>
    );
  });

  return <div>{showPosts}</div>;
};

export default PostList;
