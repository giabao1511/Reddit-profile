import { useSelector } from "react-redux";
import "./style.css";

const Header = (props) => {
  const { setEdit } = props;
  const user = useSelector(state => state.user)
  return (
    <header
      style={{
        backgroundColor: user.theme,
        backgroundImage: `linear-gradient(180deg,
           ${user.theme} 2%, ${user.theme}, 65%, #181818 100%)`,
      }}
    >
      <div className="info-edit" onClick={() => setEdit(true)}>
        Edit
      </div>
      <div className="info-container">
        <img
          src={user.imageUrl}
          alt=""
          className="info-ava"
        />
        <div className="info-username">{user.username}</div>
        <div className="info-age">{user.age}</div>
        <div className="info-about">{user.desc}</div>
      </div>
    </header>
  );
};

export default Header;
