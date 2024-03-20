import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

const clientId =
  "AZfvpI2k6r8BGlAelt7pqbMbftPtk3F2oc8oWeDRIkd8_6QFwXp2m21BAqSNSPWuT3C6i63_0Ed9PbO0";
const clientSecret =
  "EFsSFlu0reLHxOkAReokvfUO4cWUzo-ngPCgkUZFGHWvRz2tam_D7OAhcc-TjSmyF3L14BthuuhYnyuz";

const enviroment = new paypal.core.SandboxEnvironment(clientId, clientSecret);

const client = new paypal.core.PayPalEnvironment(enviroment);

export function POST() {
  return NextResponse.json({
    message: "Procesando pago",
  });
}
