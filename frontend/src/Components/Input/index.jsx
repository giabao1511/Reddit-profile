import "../Edit/style.css";
import "../Post/style.css";

const Input = (props) => {
  const { label, inputType, data, setData, classStyle } = props;

  return (
    <>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          placeholder={data}
          className={classStyle}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type={inputType}
          placeholder={data}
          className={classStyle}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;
