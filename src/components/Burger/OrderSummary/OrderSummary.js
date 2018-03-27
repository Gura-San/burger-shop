import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      if (props.ingredients[igKey] > 0) {
      return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
      </li> ) } else { return null }
    })
  return (
    <Auxiliary>
      <h3>Your Burger</h3>
      <p>Contains:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Auxiliary>
  );
};

export default orderSummary;