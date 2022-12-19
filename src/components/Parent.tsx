import Child from "./Child";

const Parent = () => {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h1>Parent component wrapped with ContextProvider</h1>
      <Child />
    </div>
  );
};

export default Parent;
