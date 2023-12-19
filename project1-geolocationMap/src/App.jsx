import { useState } from "react";
import SearchInput from "./components/SearchInput";
import MapDisplay from "./components/MapDisplay";

function App() {
  const [locationSearch, setLocationSearch] = useState("");
  const [position, setPosition] = useState({
    lat: 28.61,
    long: 77.23,
  });

  const handleLocation = async () => {
    fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${
        import.meta.env.VITE_GEOLOCATION_API_KEY
      }&ip=${locationSearch}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosition(() => ({
          lat: data.latitude,
          long: data.longitude,
        }));
      });
  };

  return (
    <div className="main">
      <SearchInput
        setLocationSearch={setLocationSearch}
        handleLocation={handleLocation}
      />
      <MapDisplay position={position} />
    </div>
  );
}

export default App;
