const Box = (props) => {
  const { box, text }=props;
  return (
    <div className={`${box}`}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1>Boxes</h1>
    <div className="boxContainer">
      <Box box="box1" text="Small" />
      <Box box="box2" text="Medium" />
      <Box box="box3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));


#oooo
