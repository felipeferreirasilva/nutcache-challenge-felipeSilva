import Menu from "./components/Menu/Menu";
import Router from "./routes";
import "./assets/styles/reset.css";

function App() {
  return (
    <>
      <Menu
        pages={[
          { title: "Home", url: "/" },
          { title: "Employees", url: "/employees" },
        ]}
      ></Menu>
      <Router></Router>
    </>
  );
}

export default App;

