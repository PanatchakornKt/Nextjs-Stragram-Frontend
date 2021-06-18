import React, { useState } from "react";
import { Card, Avatar, Input, Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import Addcomment from "@/components/AddComment";

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
  currentComment,
  setCurrentComment,
}) => {
  const [inputComment, setInputComment] = useState<string>("");

  const onDelete = (id: number) => {
    setPosts(posts.filter((post: string) => post.id !== id));
  };

  const onDeleteComment = (id: number) => {
    setComments(comments.filter((comment: string) => comment.id !== id));
  };

  const onEditPost = (post: string) => {
    setIsEditing(true);
    setIsModalVisible(true);
    setCurrentPost({ ...post });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputComment(e.target.value);
  };

  const onAddComment = (item) => {
    const id = Math.random() * 1000;
    let newComment: { id: number; title: string; postId: number } = {
      id,
      title: inputComment,
      postId: item.id,
    };
    setComments([...comments, newComment]);
    setInputComment("");
  };

  const showPosts = posts.map((post) => {
    const showComments = comments.map((comment) => {
      if (post.id === comment.id) {
        return (
          <div>
            <div className="mb-2" key={post.id}>
              <Card
                style={{ width: 400 }}
                cover={
                  <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                }
                actions={[
                  <EditOutlined onClick={() => onEditPost(post)} />,
                  <DeleteOutlined onClick={() => onDelete(post.id)} />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Kakatang "
                  description={post.title}
                />
              </Card>
              <TextArea
                style={{ width: 400 }}
                showCount
                maxLength={200}
                onChange={onChange}
                placeholder="Write a comment..."
              />
              <div className="mt-6 mb-2">
                <Button type="primary" onClick={() => onAddComment(post)}>
                  Add Comment
                </Button>{" "}
              </div>
            </div>
          </div>
        );
      }
    });
  });

  // console.log(showPosts)
  // console.log(showComments)

  return (
    <div>
      {posts.map((post) => (
        <div className="mb-2" key={post.id}>
          <Card
            style={{ width: 400 }}
            cover={
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            }
            actions={[
              <EditOutlined onClick={() => onEditPost(post)} />,
              <DeleteOutlined onClick={() => onDelete(post.id)} />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Kakatang "
              description={post.title}
            />
          </Card>

          <TextArea
            style={{ width: 400 }}
            showCount
            maxLength={200}
            onChange={onChange}
            placeholder="Write a comment..."
          />
          <div className="mt-6 mb-2">
            <Button type="primary" onClick={() => onAddComment(post)}>
              Add Comment
            </Button>{" "}
          </div>
        </div>
      ))}
      {comments.map((comment: string) => (
        <div className="mb-2" key={comment.id}>
          <Card style={{ width: 400 }}>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Kakatang "
              description={comment.title}
            />
            <button onClick={() => onDeleteComment(comment.id)}>delete</button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PostList;
