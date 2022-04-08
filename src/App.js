import "./App.scss";
import Navbar from "./components/Header/Navbar";
import MainPage from "./components/Main/MainPage";
import Bottom from "./components/Bottom/Bottom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Bottom />
    </div>
  );
}

export default App;
