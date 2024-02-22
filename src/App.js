import "./App.css";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="bg-off-white">
      <div>
        <Navbar />
      </div>
      <div className="row">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
