import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary'

const oderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
      </li> )
    })
  return (
    <Auxiliary>
      <h3>Your Burger</h3>
      <p>Contains:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout</p>
    </Auxiliary>
  );
};

export default oderSummary;