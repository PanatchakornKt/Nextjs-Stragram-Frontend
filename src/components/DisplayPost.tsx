import React, { useState } from "react";
import AddPost from "@/components/AddPost";
import PostList from "@/components/PostList";

const App = () => {
  const [posts, setPosts] = useState<string>([]);
  const [currentPost, setCurrentPost] = useState<string>([]);
  const [comments, setComments] = useState<string>([]);
  const [currentComment, setCurrentComment] = useState<string>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<booblean>(false);

  return (
    <div className="pl-20">
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
          currentComment={currentComment}
          setCurrentComment={setCurrentComment}
        />
      </div>
    </div>
  );
};
export default App;
