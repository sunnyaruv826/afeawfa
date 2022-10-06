import { useState } from "react";
import "./App.css";
import { query } from "./data/weather.json";
function App() {
  const [visible, setVisible] = useState(false);

  const channel = query.results.channel;
  return (
    <div className="card">
      <h2>
        Weather in{" "}
        {`${channel.location.city}, ${channel.location.region}, ${channel.location.country}`}
      </h2>
      <div className="temp-details">
        <h3 className="temp">{channel.item.condition.temp}°</h3>
        <span>{channel.item.condition.text}</span>
      </div>
      <button
        className="btn-normal"
        onClick={() => {
          setVisible((v) => !v);
        }}
      >
        Show {visible ? "Less" : "More"}
      </button>
      {visible && (
        <div className="details">
          <div className="details-row">
            <span className="material-symbols-outlined">air</span>
            <span>Wind</span>
            <b>{channel.wind.speed}</b>
          </div>
          <div className="details-row">
            <span className="material-symbols-outlined">humidity_low</span>
            <span>Humidity</span>
            <b>{channel.atmosphere.humidity}</b>
          </div>
          <div className="details-row">
            <span className="material-symbols-outlined">compress</span>
            <span>Pressure</span>
            <b>{channel.atmosphere.pressure}</b>
          </div>
          <div className="details-row">
            <span className="material-symbols-outlined">wb_twilight</span>
            <span>Sunrise / Sunset</span>
            <b>{`${channel.astronomy.sunrise} / ${channel.astronomy.sunset}`}</b>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
