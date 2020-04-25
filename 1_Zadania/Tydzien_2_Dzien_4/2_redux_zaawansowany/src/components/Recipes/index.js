import React from "react";
import Panel from "../Panel";
import { connect } from "react-redux";


const AllRecipes = ({ recipes }) => {
  return (
    <>
      <h1 className="title">Wszystkie przepisy</h1>
      <Panel iconName={"folder"}
             path={"recipes"}
             listElements={recipes}
             heading={false}
             footer={false}
      />
    </>
  );
};


const mapState = (state) => ({
   recipes: state.recipes
})



export default connect(mapState)(AllRecipes);
