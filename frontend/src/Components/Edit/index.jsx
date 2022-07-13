import { useState } from "react";
import Input from "../Input";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiRequest";

const EditPage = (props) => {
  const { setEdit } = props;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const imageUrls = [
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
    "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://i.redd.it/7ipyf6pvqac61.png",
    "https://i.redd.it/ksmb0m02ppy51.png",
    "https://i.redd.it/mozfkrjpoa261.png",
    "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
    "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
  ];
  const [username, setUsername] = useState(user.username);
  const [age, setAge] = useState(user.age);
  const [desc, setDesc] = useState(user.desc);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);
  const [theme, setTheme] = useState(user.theme);
  const [imgIdxSelected, setImgIdxSelected] = useState(user.imgIdxSelected);

  const handleSetImg = (e, index) => {
    setImageUrl(e.target.src);
    setImgIdxSelected(index);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEdit(false);
    const updatedUser = {
      username,
      age,
      desc,
      imageUrl,
      theme,
      imgIdxSelected,
    };
    updateUser(updatedUser, dispatch);
  };

  return (
    <form onSubmit={handleSave}>
      <div className="edit-container">
        <button className="close">SAVE</button>
        <div className="input-container">
          <Input
            label="Display name"
            inputType="text"
            data={username}
            setData={setUsername}
          />
          <Input label="Age" inputType="text" data={age} setData={setAge} />
          <Input
            label="About"
            inputType="textarea"
            data={desc}
            setData={setDesc}
          />
          <label>Profile Picture</label>
          <div className="input-image-container">
            {imageUrls.map((url, index) => {
              return (
                <img
                  src={url}
                  alt=""
                  key={index}
                  className={
                    index === imgIdxSelected
                      ? `input-image-selected`
                      : `input-image`
                  }
                  onClick={(e) => handleSetImg(e, index)}
                />
              );
            })}
          </div>
          <div className="theme-container">
            <Input label="Theme" setData={setTheme} inputType="color" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditPage;
