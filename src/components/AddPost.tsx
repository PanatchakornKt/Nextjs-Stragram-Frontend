import React, { useState, useRef, useEffect } from "react";
import { Button, Modal, Input } from "antd";
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
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

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
    setPosts([...posts, { id, title: input, image: preview }]);
    setInput("");
    setIsModalVisible(false);
  };
  console.log(posts);

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
              <div>
                <img src={preview} style={{ objectFit: "cover" }} />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef.current.click();
                  }}
                >
                  Add Image
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file && file.type.substr(0, 5) === "image") {
                      setImage(file);
                    } else {
                      setImage(null);
                    }
                  }}
                />
              </div>
            </form>
          </>
        </Modal>
      )}
    </>
  );
};
export default AddPost;
