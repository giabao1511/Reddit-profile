import { useSelector } from "react-redux";
import "./style.css";

const Post = () => {
  const post = useSelector((state) => state.post.posts);

  return (
    <section>
      <div className="post-container">
        {post.slice(1).map((item, index) => {
          return (
            <div className="posts" key={index}>
              <div className="posts-title">{item.title}</div>
              <div className={`posts-tags-${item.tag} posts-tags`}>
                {item.tag}
              </div>
              <div className="posts-desc">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Post;
