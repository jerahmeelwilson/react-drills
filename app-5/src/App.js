import React from "react";
import "./App.css";
import Image from "./components/Image";
let imageUrl = `https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`;
function App() {
  return (
    <div>
      <Image url={imageUrl} />
    </div>
  );
}

export default App;
