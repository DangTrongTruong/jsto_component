const JButton = ({ icon, text, className, actionClick }) => {
  return (
    <button className={`button ${className}`} onClick={() => actionClick()}>
      {icon && <img src={icon} alt="" height={20} className="me-1" />}
      {text}
    </button>
  );
};

export default JButton;
