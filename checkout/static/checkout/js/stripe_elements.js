// stripe core logic

var stripe_public_key = $('#id_stripe_public_key').text().slice(1, -1);
var client_secret = $('#id_client_secret').text().slice(1, -1);
var stripe = Stripe(stripe_public_key);
var elements = stripe.elements();
var style = {
    base: {
      color: "#4A1E00",
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      fontFamily: 'Arial, sans-serif',
      color: "#FF6400",
      iconColor: "#FF6400"
    }
  };
var card = elements.create('card', {style: style});
card.mount('#card-element');