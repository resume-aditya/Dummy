import React, {useState} from "react";

const Child = (props) => {
    console.log('rendering child')
  return (
    <div>
        Hello World
      <span>{props.x}</span>
      <span>{props.y}</span>
    </div>
  );
};

const MemoChild = React.memo(Child)

const Memo = () => {
  const [first, setfirst] = useState(Math.random(5))
  console.log('state changing man')
  return (
    <>
      <button onClick={(e) => {setfirst(Math.random(100))}}>Change State</button>
      <div>{first}</div>
      <div>Memoed Child</div>
      <MemoChild x={41} y={23}/>
      <br/>
      {/* <div>Non Memoed Child</div>
      <Child x={41} y={23} /> */}
    </>
  );
};

export default Memo;
