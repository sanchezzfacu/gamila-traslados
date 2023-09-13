
function Avatar({ className, text }) {
  return (
    <>
      <div className={`avatar ${className ? className : ""}`}>
        <span>{text}</span>
      </div>
    </>
  );
}

export default Avatar;