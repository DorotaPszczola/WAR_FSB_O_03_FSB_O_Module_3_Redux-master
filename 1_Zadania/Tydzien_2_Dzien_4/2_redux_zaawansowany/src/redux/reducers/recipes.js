import React from "react";
import { ADD_RECIPE } from "../actions/recipes";

const fakeRecipes = [
    {
      id: 1,
      name: "Pomidorówka",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
      products: [1, 2, 3]
    },
    {
      id: 2,
      name: "Coś innego",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
      products: [3, 1]
    },
    {
      id: 3,
      name: "Jeszcze inny przepis",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
      products: [5, 6]
    }
  ];
  

const recipes = (state = fakeRecipes, action) => {
    console.log(action.payload)
    switch (action.type) {
        case ADD_RECIPE:
            console.log([...state, action.payload])
            return [...state, action.payload];
        default:
            return state;
    }
}


export default recipes;