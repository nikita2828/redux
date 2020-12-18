import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./store/post.actions";
export default function App() {
  const { value, title } = useSelector((state) => ({
    value: state.value,
    title: state.title,
  }));
  const dispatch = useDispatch();

  const increseHandler = () => dispatch(increase());
  const decreaseHandler = () => dispatch(decrease());

  return (
    <div>
      <h1>
        {title} : {value}
      </h1>
      <button onClick={increseHandler}>increase</button>
      <button onClick={decreaseHandler}>decrease</button>
    </div>
  );
}
