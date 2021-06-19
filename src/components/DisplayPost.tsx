import React, { useState, useEffect } from "react";
import AddPost from "@/components/AddPost";
import PostList from "@/components/PostList";
import { Divider, Typography } from "antd";

const { Title } = Typography;

const DisplayPost = ({ SignOutUser }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentPost, setCurrentPost] = useState([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<booblean>(false);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    saveLocal();
  }, [posts, comments]);

  const saveLocal = () => {
    localStorage.setItem("posts", JSON.stringify(posts));
    localStorage.setItem("comments", JSON.stringify(comments));
  };
  const getLocal = () => {
    if (
      localStorage.getItem("posts") === null ||
      localStorage.getItem("comments") === null
    ) {
      localStorage.setItem("posts", JSON.stringify([]));
      localStorage.setItem("comments", JSON.stringify([]));
    } else {
      let Local = JSON.parse(localStorage.getItem("posts"));
      let LocalComments = JSON.parse(localStorage.getItem("comments"));
      setPosts(Local);
      setComments(LocalComments);
    }
  };

  return (
    <>
      <div className="pl-2">
        <Divider orientation="left">
          {" "}
          <Title level={2}>Daytech Stragram</Title>
        </Divider>
      </div>
      <div className="pl-14">
        <div className="mb-6">
          <AddPost
            posts={posts}
            setPosts={setPosts}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            currentPost={currentPost}
            setCurrentPost={setCurrentPost}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            SignOutUser={SignOutUser}
          />
        </div>
        <div>
          <PostList
            posts={posts}
            setPosts={setPosts}
            setIsEditing={setIsEditing}
            setCurrentPost={setCurrentPost}
            setIsModalVisible={setIsModalVisible}
            comments={comments}
            setComments={setComments}
          />
        </div>
      </div>
    </>
  );
};
export default DisplayPost;
