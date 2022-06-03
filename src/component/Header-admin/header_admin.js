const HeaderAdmin = ({close, text, avatar}) => {
  return (
    <>
      <div className="relative buttonClose">
        <img src={close} alt="Button Close" height={18} width={18} />
        <span className="iconClose">x</span>
      </div>
      <div className="header-admin-text">{text}</div>
    </>
  )
}

export default HeaderAdmin