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
  isComment,
  setIsComment,
}) => {
  const onDelete = (id: number) => {
    setPosts(posts.filter((post: string) => post.id !== id));
  };

  const onEditPost = (post: string) => {
    setIsEditing(true);
    setIsModalVisible(true);
    setCurrentPost({ ...post });
  };

  const onComment = () => {
    setIsComment(true);
  };

  return (
    <div>
      {posts.map((post: string) => (
        <div className="mb-2" key={post.id}>
          <Card
            style={{ width: 500 }}
            cover={
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            }
            actions={[
              <EditOutlined onClick={() => onEditPost(post)} />,
              <CommentOutlined onClick={onComment} />,
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
        </div>
      ))}

      {isComment ? (
        <>
          <Addcomment setIsComment={setIsComment} />
        </>
      ) : null}
    </div>
  );
};

export default PostList;
