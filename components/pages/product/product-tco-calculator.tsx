import ProductTcoCalculatorClient from "./product-tco-calculator-client";

const EASTER_EGGS = [
  {
    headline: "Are you charging these with AA batteries?",
    subtext:
      "Unless you're buying electricity from a luxury boutique, let's double-check those numbers.",
  },
  {
    headline: "Wait, is your fleet located on Mars?",
    subtext:
      "Here on Earth, electricity is usually cheaper than liquid dinosaur remains.",
  },
  {
    headline: "Running on Liquid Gold?",
    subtext:
      "At this electricity rate, it would literally be cheaper to fuel your bikes with vintage Champagne.",
  },
  {
    headline: "Stop mining Bitcoin on your bikes!",
    subtext:
      "That's the only logical explanation for an electricity rate this high. Seriously, check the bill.",
  },
  {
    headline: "Are you using Printer Ink as fuel?",
    subtext:
      "Because that's the only liquid we know that costs more than what you just entered.",
  },
  {
    headline: "Time Travel Detected!",
    subtext:
      "These gas prices look like they are from 1998. Can you take us back with you?",
  },
  {
    headline: "Do you own a private oil refinery?",
    subtext:
      "If you're getting gas this cheap, forget the bikes—we want to buy fuel from YOU.",
  },
  {
    headline: "Error 404: Physics Not Found.",
    subtext:
      "Our algorithm is crying. It cannot compute a universe where electrons cost more than hydrocarbons.",
  },
  {
    headline: "System Flag: Reality Distortion Field.",
    subtext:
      "Our servers suggest you might be typing with boxing gloves on. Try sliding it back left.",
  },
  {
    headline: "Calculation Result: NaN (Not a Normal-scenario)",
    subtext:
      "You found the edge case! Achievement unlocked: 'The Impossible Fleet'.",
  },
  {
    headline: "Okay, you win. Stick with gas.",
    subtext:
      "Just kidding. Please adjust the sliders to reality, or call your utility provider immediately.",
  },
  {
    headline: "We surrender.",
    subtext:
      "If these numbers are real, we will personally come and push your bikes to save energy.",
  },
  {
    headline: "Are you paying per electron?",
    subtext:
      "We recommend buying electricity in bulk. It's usually cheaper than buying it one electron at a time.",
  },
  {
    headline: "Is your charger plugged into a lemon?",
    subtext:
      "Because the efficiency rating here suggests you are using fruit-based power generation.",
  },
  {
    headline: "Hamsters on strike?",
    subtext:
      "If your power comes from hamsters running in wheels, you need to stop paying them overtime.",
  },
  {
    headline: "Did you buy electricity from a Scalper?",
    subtext:
      "Don't buy power from guys in trench coats in alleyways. Use the grid. It's cheaper.",
  },
  {
    headline: "Gas is free? Lucky you.",
    subtext:
      "If fuel is this cheap, why are you on an Electric Vehicle website? Go enjoy your free gas!",
  },
];

const labels = {
  headerKicker: "Fleet TCO Console",
  headerTitle: "EV vs Gas Analyzer",
  headerStatus: "Live",
  fieldFleetSize: "Fleet Size",
  fieldDailyMiles: "Daily Miles per Vehicle",
  fieldFuelPrice: "Fuel Price (USD / gallon)",
  fieldElectricityRate: "Electricity Rate (USD / kWh)",
  maintenanceLabel: "Include Maintenance Savings?",
  maintenanceHelp: "Includes $0.05/mi gas maintenance vs. $0.01/mi EV maintenance.",
  tcoHorizon: "TCO Horizon",
  formula:
    "Formula: (Gas Price / MPG + Maintenance) - (Elec Price / Efficiency + EV Maintenance)",
  estimatedSavings: "Estimated Savings",
  anomalyLabel: "Anomaly Detected",
  savingsSummarySuffix: "savings across",
  gasFleetLabel: "Gas Fleet TCO",
  evFleetLabel: "Electric Fleet TCO",
  co2Label: "CO2 Reduced",
  co2Suffix: "tons",
  equivalentPrefix: "Equivalent to adding",
  equivalentSuffix: "new bikes to your fleet for free.",
  annualMileageLabel: "Annual mileage",
  gasLabel: "Gas",
  evLabel: "EV",
};

export default function ProductTcoCalculator() {
  return <ProductTcoCalculatorClient labels={labels} easterEggs={EASTER_EGGS} />;
}
