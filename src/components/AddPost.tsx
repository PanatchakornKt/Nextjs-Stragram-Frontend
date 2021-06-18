import React, { useState, useEffect } from "react";
import { Button, Modal, Input } from "antd";
import { Upload, message } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import { PostProps } from "@/components/Types";

const AddPost = ({
  posts,
  setPosts,
  isEditing,
  setIsEditing,
  currentPost,
  setCurrentPost,
  isModalVisible,
  setIsModalVisible,
  setIsComment,
}) => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    saveLocal();
  }, [posts]);

  const saveLocal = () => {
    localStorage.setItem("posts", JSON.stringify(posts));
  };
  const getLocal = () => {
    if (localStorage.getItem("posts") === null) {
      localStorage.setItem("posts", JSON.stringify([]));
    } else {
      let Local = JSON.parse(localStorage.getItem("posts"));
      setPosts(Local);
    }
  };

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const showModal = () => {
    setInput("");
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsEditing(false);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onAddPost = (e: string) => {
    e.preventDefault();
    const id = Math.random() * 1000;
    setPosts([...posts, { id, title: input }]);
    setInput("");
    setIsModalVisible(false);
  };

  const onEditPostChange = (e: string) => {
    setCurrentPost({ ...currentPost, title: e.target.value });
  };

  const onUpdatePost = (id: number, updatedPost: Post) => {
    const updatedItem = posts.map((post: Post) => {
      return post.id === id ? updatedPost : post;
    });
    setIsEditing(false);
    setPosts(updatedItem);
  };

  const handleEditSubmit = (e: string) => {
    e.preventDefault();
    onUpdatePost(currentPost.id, currentPost);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Post
      </Button>{" "}
      <Button danger href="/">
        Sign out
      </Button>
      {isEditing ? (
        <Modal
          title="Edit your post"
          visible={isModalVisible}
          onOk={handleEditSubmit}
          onCancel={handleCancel}
        >
          <>
            <form onSubmit={handleEditSubmit} className="mb-8">
              <Input
                type="text"
                placeholder="What's on your mind ?"
                value={currentPost.title}
                onChange={onEditPostChange}
                bordered={false}
              />
            </form>
          </>
        </Modal>
      ) : (
        <Modal
          title="Create your post"
          visible={isModalVisible}
          onOk={onAddPost}
          onCancel={handleCancel}
        >
          <>
            <form onSubmit={onAddPost}>
              <div className="mb-8">
                <Input
                  type="text"
                  placeholder="What's on your mind ?"
                  value={input}
                  onChange={onInputChange}
                  bordered={false}
                />
              </div>
              <Upload {...props}>
                <Button icon={<FileImageOutlined />}>Photo</Button>
              </Upload>
            </form>
          </>
        </Modal>
      )}
    </>
  );
};
export default AddPost;
