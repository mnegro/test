import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Main from "./Pages/Main/Main";
import Pages from "./Pages/Pages";

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Paginado</h1>
      <h3>Maxi</h3>
      <Pages />
    </div>
  );
}

export default App;
