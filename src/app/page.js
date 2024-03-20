"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function page() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-900">
      <PayPalScriptProvider
        options={{
          clientId:
            "AZfvpI2k6r8BGlAelt7pqbMbftPtk3F2oc8oWeDRIkd8_6QFwXp2m21BAqSNSPWuT3C6i63_0Ed9PbO0",
        }}
      >
        <PayPalButtons
          style={{
            color: "blue",
            layout: "horizontal",
            height: 40,
          }}
          createOrder={async () => {
            const res = await fetch("/api/checkout", {
              method: "POST",
            });
            const data = await res.json();
            console.log(data);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default page;
