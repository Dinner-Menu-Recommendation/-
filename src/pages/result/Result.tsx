import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const filteredFood = JSON.parse(query.get("food") || "[]") as Food[];
  console.log("필터링된 음식", filteredFood);

  return <div>result</div>;
}

export default Result;
