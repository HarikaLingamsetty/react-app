// import Address from "./Pages/Address/Address";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Form from "./Pages/Form/Form";
import "./App.css"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </Router>
      <div className="map">
        {/* <Address /> */}
      </div>
    </div>
  );
}

export default App;
