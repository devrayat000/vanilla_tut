export default function MyFunctionComponent(props) {
  return (
    <div id={props.id}>
      <h3>This is a function component.</h3>
      <p>What's up</p>
      {props.children}
    </div>
  );
}
