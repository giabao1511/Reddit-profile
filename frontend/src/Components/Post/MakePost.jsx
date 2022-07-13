import { useState } from "react";
import Input from "../Input";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/postSlice";

const MakePost = (props) => {
  const { setOpenPost } = props;
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.posts);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const [tagIdxSelected, setTagIdxSelected] = useState(0);
  const [title, setTitle] = useState("(No title)");
  const [desc, setDesc] = useState("(No description)");

  const handleSave = () => {
    setOpenPost(false);
    const newPost = {
      title,
      desc,
      tag: tags[tagIdxSelected],
    };
    dispatch(createPost(newPost));
  };

  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <div className="makepost-save" onClick={handleSave}>
          Post
        </div>
      </div>
      <Input
        label="Title"
        inputType="textarea"
        data="Add a title..."
        classStyle="makepost-title"
        setData={setTitle}
      />
      <Input
        inputType="textarea"
        label="Description"
        data="Add some description..."
        classStyle="makepost-desc"
        setData={setDesc}
      />
      <div className="makepost-tags">
        {tags.map((tag, index) => {
          return (
            <button
              className={
                index === tagIdxSelected
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }
              key={index}
              onClick={() => {
                setTagIdxSelected(index);
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MakePost;
