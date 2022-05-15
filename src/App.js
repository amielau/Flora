import "./App.css";
import AddPlant from "./components/AddPlant";
import Care from "./components/Care";
import Home from "./components/Home";
import MyPlants from "./components/MyPlants";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <AddPlant />
      <Care />
      <Home />
      <MyPlants />
      <Profile />
    </div>
  );
}

export default App;
