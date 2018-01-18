import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Stripe extends Component {
  handleToken = token => {
    console.log('token', token);
  };

  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 credits"
        amount={500}
        token={token => this.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Stripe;
