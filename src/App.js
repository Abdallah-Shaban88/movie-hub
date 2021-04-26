import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import MealsList from "./components/MealsList";

export default function App() {
  const app_id = "b16cbfea";
  const app_key = "d992f3f63a4848a07d5cc4f59dc30bd5";
  const [meals, setMeals] = useState([]);

  axios.get("http://www.omdbapi.com/?apikey=df9afd0d&s=Batman").then(res => {
    console.log(res);
  });
  const getData = () => {
    // const response =await axios.get(`https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=red%20apple&app_id=${app_id}&app_key=${app_key}`);
    // setMeals(response)
  };
  return (
    <div>
      <MealsList meals={meals} />
      {}
    </div>
  );
}
