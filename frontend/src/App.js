import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import EditPage from "./Components/Edit";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MakePost from "./Components/Post/MakePost";
import Post from "./Components/Post/Post";

function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpenPost] = useState(false);
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      {isEdit ? (
        <EditPage setEdit={setEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <Post />
          <div className="spacer"></div>
          <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <MakePost setOpenPost={setOpenPost} />
          <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
        </>
      )}

      {user.loading && <div className="loading">Loading....</div>}
      {!isEdit && user.error && (
        <div className="error">Error when fetching data</div>
      )}
    </div>
  );
}

export default App;
