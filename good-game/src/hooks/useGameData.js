import { useEffect, useState } from "react";
import { API_KEY } from "../data/API_KEY.js";

export function useGameData() {
  const [steamData, setSteamData] = useState({});

  useEffect(() => {
    fetch(`https://www.giantbomb.com/api/games/?api_key=${API_KEY}`, {
      method: "GET",
      "Content-Type": "application/json",
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.json);

        setSteamData(data);
      });
  }, []);

  return steamData;
}
