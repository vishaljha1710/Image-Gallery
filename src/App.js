import "./App.css";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Dashboard from "./components/Dashboard";
import AddImages from "./components/AddImages";

function App() {
  return (
    <div className="body">
      <div>
        <Navbar />
      </div>
      <div className="">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
