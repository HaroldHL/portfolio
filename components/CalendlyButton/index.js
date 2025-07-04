import React from "react";

import { useEffect,useState } from "react";

const CalendlyButton =() =>{
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);

  useEffect(() => {
    // Check if Calendly script already exists
    if (!document.querySelector("#calendly-script")) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => setIsCalendlyReady(true); // ✅ wait for it to load
      document.body.appendChild(script);
    } else {
      setIsCalendlyReady(true);
    }
  }, []);

  const openCalendly = () => {
    if (isCalendlyReady && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/your-username/30min",
      });
    } else {
      alert("Calendly is still loading...");
    }
  };

  return (
    <button
      onClick={openCalendly}
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
    >
      Book a Call
    </button>
  );
}

export default CalendlyButton;