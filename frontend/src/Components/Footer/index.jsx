import "./style.css";

const Footer = (props) => {
  const { isOpenPost, setOpenPost } = props;
  return (
    <footer onClick={() => setOpenPost(!isOpenPost)}>
      <div className="footer-title">+</div>
    </footer>
  );
};

export default Footer;
