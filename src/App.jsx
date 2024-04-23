import { useState } from "react";
import "./App.css";
// import "./fix.css"
import Header from "./components/Header/Header";
import Marked from "./components/markedComments/Marked";
import Unmarked from "./components/unmarkedComments/Unmarked";

function App() {
  const [marked, setMarked] = useState(true);
  const allMarked = function () {
    setMarked(!marked);
  };
  return (
    <main className="w-[100%] bg-white h-[100%] pt-[32px] pb-[17px] pl-[30px] pr-[30px]">
      <Header allMarked={allMarked}></Header>
      <Marked marked={marked}></Marked>
      <Unmarked></Unmarked>
    </main>
  );
}

export default App;
