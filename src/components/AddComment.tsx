import React from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

const AddComment = ({ setIsComment }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Change:", e.target.value);
  };

  const onCancel = () => {
    setIsComment(false);
  };

  return (
    <>
      <p className="mb-2">Write a comment...</p>
      <TextArea
        style={{ width: 500 }}
        showCount
        maxLength={200}
        onChange={onChange}
      />
      <div className="mt-6">
        <Button type="primary">Add Comment</Button>{" "}
        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </>
  );
};

export default AddComment;
