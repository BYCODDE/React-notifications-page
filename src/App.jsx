import "./App.css";
// import "./fix.css"
import Header from "./components/Header/Header";
import Marked from "./components/Header/markedComments/Marked";
import Unmarked from "./components/unmarkedComments/Unmarked";
function App() {
  return (
    <main className="w-[730px] bg-white h-[839px] pt-[32px] pb-[17px] pl-[30px] pr-[30px]">
      <Header></Header>
      <Marked></Marked>
      <Unmarked></Unmarked>
    </main>
  );
}

export default App;
