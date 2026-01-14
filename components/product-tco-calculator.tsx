"use client";

import { useMemo, useState } from "react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export default function ProductTcoCalculator() {
  const [fleetSize, setFleetSize] = useState(50);
  const [dailyMiles, setDailyMiles] = useState(65);
  const [fuelPrice, setFuelPrice] = useState(3.9);

  const yearlySavings = useMemo(() => {
    const annualMiles = Math.max(fleetSize, 0) * Math.max(dailyMiles, 0) * 365;
    const gasCostPerMile = Math.max(fuelPrice, 0) / 40;
    const evCostPerMile = 0.02;
    const savings = (gasCostPerMile - evCostPerMile) * annualMiles;
    return Math.max(savings, 0);
  }, [fleetSize, dailyMiles, fuelPrice]);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
      <div className="space-y-5">
        <label className="block space-y-2">
          <span className="text-sm uppercase tracking-wide text-gray-400">Fleet Size</span>
          <input
            type="number"
            min={1}
            value={fleetSize}
            onChange={(event) => setFleetSize(Number(event.target.value))}
            className="w-full rounded-xl border border-gray-800 bg-gray-950/60 px-4 py-3 text-lg text-gray-100 focus:border-blue-500 focus:outline-none"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm uppercase tracking-wide text-gray-400">Daily Miles per Vehicle</span>
          <input
            type="number"
            min={1}
            value={dailyMiles}
            onChange={(event) => setDailyMiles(Number(event.target.value))}
            className="w-full rounded-xl border border-gray-800 bg-gray-950/60 px-4 py-3 text-lg text-gray-100 focus:border-blue-500 focus:outline-none"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm uppercase tracking-wide text-gray-400">Fuel Price (USD / gallon)</span>
          <input
            type="number"
            min={0}
            step={0.1}
            value={fuelPrice}
            onChange={(event) => setFuelPrice(Number(event.target.value))}
            className="w-full rounded-xl border border-gray-800 bg-gray-950/60 px-4 py-3 text-lg text-gray-100 focus:border-blue-500 focus:outline-none"
          />
        </label>
      </div>
      <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-8 text-center">
        <div className="text-sm uppercase tracking-widest text-blue-200">Estimated Yearly Savings</div>
        <div className="mt-4 text-4xl font-semibold text-white">{formatCurrency(yearlySavings)}</div>
        <p className="mt-3 text-sm text-blue-200/80">
          Based on fuel cost vs. electric operating cost. Adjust inputs to match your fleet.
        </p>
      </div>
    </div>
  );
}
