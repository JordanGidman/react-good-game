import { useEffect, useState } from "react";

export function useGameData() {
  const [steamData, setSteamData] = useState({});

  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => setSteamData(data));
  // }, []);

  return steamData;
}
