import axios from 'axios';
import './App.css';
import Card from './Component/Card';
import { useEffect, useState } from 'react';
import style from "../src/App.css";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        setTopAlbums(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const album = topAlbums[0];
  console.log(album + "first album");

  return (
    <div  >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        {topAlbums.map(album => (
          <Card key={album.id} data={album} />
        ))}
        {/* <Card data={album} /> */}
      </div>
    </div>
  );
}

export default App;
