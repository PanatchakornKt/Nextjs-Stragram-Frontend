import React, { useState } from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import Addcomment from "@/components/AddComment";

const { Meta } = Card;

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

  return (
    <div>
      {posts.map((post: string) => (
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
          <Addcomment
            comments={comments}
            setComments={setComments}
            currentComment={currentComment}
            setCurrentComment={setCurrentComment}
            posts={posts}
            setPosts={setPosts}
          />
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
