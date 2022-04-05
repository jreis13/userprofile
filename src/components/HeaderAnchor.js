function HeaderAnchor(props) {
  return (
    <a href="/" className="btn-header">
      <h2 className="header-bold-text">{props.text}</h2>
    </a>
  );
}

export default HeaderAnchor;
