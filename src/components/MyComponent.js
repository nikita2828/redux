import React from "react";
import { useSelector } from "react-redux";
export default function MyComponent() {
  const { title } = useSelector((state) => ({
    title: state.title,
  }));

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
