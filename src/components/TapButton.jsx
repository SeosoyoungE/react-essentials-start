function TapButton(props) {
  function handleClick() {
    console.log("1100");
  }
  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}

export default TapButton;
