import React, { useState } from "react";
import { Card, Avatar } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
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
              <DeleteOutlined onClick={() => onDelete(post.id)} />,
              <button onClick={onComment}>Comment</button>,
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
