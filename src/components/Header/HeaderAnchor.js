function HeaderAnchor(props) {
  return (
    <h2 className="header-bold-text">
      <a href={props.path} className="btn-header">
        {props.text}
      </a>
      <p className="soon">{props.info}</p>
    </h2>
  );
}

export default HeaderAnchor;
