// controllers/apiController.js
const PUBLISHABLE_KEY =
  "pk_test_51Nx8DASIG0PuKIKz9c3MRpbMZaUKuxoIdf9JPHVdyOp5kkMJc1iiSarsCs8tDvFSRyrZvQnqOnfRBP3rQKUh3pRl00PFqvn82B";

const SECRET_KEY =
  "sk_test_51Nx8DASIG0PuKIKzTjsDux0wKuyBPPSeTPQ1KAW3jtqyM8frCFiHIDAyIqJDLbadpNPpTmwnFUZ6uNaoQ7dnkbQW000OjriHee";

const stripe = require("stripe")(SECRET_KEY);

// API logic here
exports.createPayment = async (req, res) => {
  try {
    const { stripeEmail, stripeToken, name, address } = req.body;

    // Create a customer with the provided email and source (Stripe token)
    const customer = await stripe.customers.create({
      source: req.body.stripeToken,
      email: stripeEmail,
      name: name,
      address: address,
    });

    // Create a PaymentIntent with the customer
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 7000,
      description: "Web Development Product",
      currency: "INR",
      customer: customer.id,
    });

    console.log(paymentIntent);
    res.send("SUCCESS");
  } catch (err) {
    console.error(err);
    res.send(err.message);
  }
};




