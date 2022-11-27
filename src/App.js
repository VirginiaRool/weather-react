import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch />

        <footer>
          <div className="footer">
            Open source code on
            <a
              href="https://github.com/VirginiaRool/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github{" "}
            </a>
            by
            <a
              href="https://unruffled-archimedes-fea2bd.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Virginia Romero
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
