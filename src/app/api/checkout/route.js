import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";
import Cors from "micro-cors";

const cors = Cors({
  allowMethods: ["POST"], // Permitir solo el método POST
  origin: "*", // Permitir solicitudes desde cualquier origen, puedes ajustarlo según tus necesidades
});

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

const enviroment = new paypal.core.PayPalEnvironment(clientId);

const client = new paypal.core.PayPalHttpClient(enviroment);

export async function POST() {
  try {
    const request = new paypal.orders.OrdersCreateRequest();

    request.requestBody({
      intent: "CAPTURE",

      // 'purchase_units' Son los productos
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.00",
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: "100.00",
              },
            },
          },
          items: [
            {
              name: "Book of React Js",
              description: "The best book to learn React",
              quantity: "1",
              unit_amount: {
                currency_code: "USD",
                value: "40.00",
              },
            },
            {
              name: "How to learn Java",
              description: "The best book to learn Java",
              quantity: "1",
              unit_amount: {
                currency_code: "USD",
                value: "60.00",
              },
            },
          ],
        },
      ],
    });

    const response = await client.execute(request);
    console.log(response);

    return NextResponse.json({
      id: response.result.id,
    });
  } catch (error) {
    NextResponse.json({
      message: error,
    });
    return NextResponse.error(error);
  }
}

export default cors(POST);
