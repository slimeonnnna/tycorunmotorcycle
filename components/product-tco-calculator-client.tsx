"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const MPG = 40;
const EV_MILES_PER_KWH = 20;
const GAS_MAINT_PER_MILE = 0.05;
const EV_MAINT_PER_MILE = 0.01;
const CO2_LBS_PER_GAL = 19.6;
const BIKE_EQUIVALENT_COST = 5000;

type EasterEgg = {
  headline: string;
  subtext: string;
};

type TcoLabels = {
  headerKicker: string;
  headerTitle: string;
  headerStatus: string;
  fieldFleetSize: string;
  fieldDailyMiles: string;
  fieldFuelPrice: string;
  fieldElectricityRate: string;
  maintenanceLabel: string;
  maintenanceHelp: string;
  tcoHorizon: string;
  formula: string;
  estimatedSavings: string;
  anomalyLabel: string;
  savingsSummarySuffix: string;
  gasFleetLabel: string;
  evFleetLabel: string;
  co2Label: string;
  co2Suffix: string;
  equivalentPrefix: string;
  equivalentSuffix: string;
  annualMileageLabel: string;
  gasLabel: string;
  evLabel: string;
};

type ProductTcoCalculatorClientProps = {
  labels: TcoLabels;
  easterEggs: EasterEgg[];
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export default function ProductTcoCalculatorClient({
  labels,
  easterEggs,
}: ProductTcoCalculatorClientProps) {
  const [fleetSize, setFleetSize] = useState(50);
  const [dailyMiles, setDailyMiles] = useState(65);
  const [fuelPrice, setFuelPrice] = useState(3.9);
  const [electricityRate, setElectricityRate] = useState(0.15);
  const [includeMaintenance, setIncludeMaintenance] = useState(true);
  const [periodYears, setPeriodYears] = useState(1);
  const [easterEgg, setEasterEgg] = useState(easterEggs[0]);
  const wasAnomalyRef = useRef(false);

  const {
    annualMiles,
    gasCostPerMile,
    evCostPerMile,
    yearlySavings,
    periodSavings,
    periodSavingsRaw,
    co2ReducedTons,
    gasCostTotal,
    evCostTotal,
    bikeEquivalentCount,
  } = useMemo(() => {
    const miles = Math.max(fleetSize, 0) * Math.max(dailyMiles, 0) * 365;
    const gasMaintenance = includeMaintenance ? GAS_MAINT_PER_MILE : 0;
    const evMaintenance = includeMaintenance ? EV_MAINT_PER_MILE : 0;
    const gasPerMile = Math.max(fuelPrice, 0) / MPG + gasMaintenance;
    const evPerMile = Math.max(electricityRate, 0) / EV_MILES_PER_KWH + evMaintenance;
    const savingsPerYearRaw = (gasPerMile - evPerMile) * miles;
    const savingsPerYear = Math.max(savingsPerYearRaw, 0);
    const years = Math.max(periodYears, 1);
    const gasTotal = gasPerMile * miles * years;
    const evTotal = evPerMile * miles * years;
    const periodSavingsRawValue = savingsPerYearRaw * years;
    const gasGallons = MPG > 0 ? miles / MPG : 0;
    const co2Pounds = gasGallons * CO2_LBS_PER_GAL;
    const co2Tons = co2Pounds / 2000;
    const equivalentBikes = Math.max(
      Math.round((savingsPerYear * years) / BIKE_EQUIVALENT_COST),
      1,
    );
    return {
      annualMiles: miles,
      gasCostPerMile: gasPerMile,
      evCostPerMile: evPerMile,
      yearlySavings: savingsPerYear,
      periodSavings: savingsPerYear * years,
      periodSavingsRaw: periodSavingsRawValue,
      co2ReducedTons: Math.max(co2Tons * years, 0),
      gasCostTotal: gasTotal,
      evCostTotal: evTotal,
      bikeEquivalentCount: equivalentBikes,
    };
  }, [fleetSize, dailyMiles, fuelPrice, electricityRate, includeMaintenance, periodYears]);

  useEffect(() => {
    const isAnomaly = periodSavingsRaw < 0;
    if (isAnomaly && !wasAnomalyRef.current) {
      const nextIndex = Math.floor(Math.random() * easterEggs.length);
      setEasterEgg(easterEggs[nextIndex]);
    }
    wasAnomalyRef.current = isAnomaly;
  }, [periodSavingsRaw, easterEggs]);

  const toNumberOr = (value: string, fallback: number) => {
    if (value.trim() === "") return fallback;
    const parsed = Number(value);
    return Number.isNaN(parsed) ? fallback : parsed;
  };

  const isAnomaly = periodSavingsRaw < 0;

  return (
    <div translate="no">
      <div className="relative rounded-3xl border border-gray-700/60 bg-gray-900/70 p-4 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.9)]">
        <div className="absolute left-10 top-10 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="rounded-[20px] border border-blue-500/20 bg-gradient-to-br from-gray-950 via-gray-900/80 to-gray-950 px-5 pb-6 pt-10">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-base uppercase tracking-[0.3em] text-blue-300/80">
                {labels.headerKicker}
              </div>
              <div className="mt-2 text-2xl font-semibold text-white">{labels.headerTitle}</div>
            </div>
            <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-base text-blue-200">
              {labels.headerStatus}
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div className="space-y-5">
        <label className="block space-y-2">
          <span className="text-base uppercase tracking-wide text-gray-400">{labels.fieldFleetSize}</span>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <input
              type="range"
              min={1}
              max={500}
              value={fleetSize}
              onChange={(event) => setFleetSize(Number(event.target.value))}
              className="w-full accent-blue-500"
            />
            <input
              type="number"
              min={1}
              value={fleetSize}
              onChange={(event) =>
                setFleetSize(toNumberOr(event.target.value, fleetSize))
              }
              className="w-full rounded-xl border border-gray-800 bg-gray-950/60 px-4 py-3 text-lg text-gray-100 focus:border-blue-500 focus:outline-none sm:w-28"
            />
          </div>
        </label>
        <label className="block space-y-2">
          <span className="text-base uppercase tracking-wide text-gray-400">{labels.fieldDailyMiles}</span>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <input
              type="range"
              min={5}
              max={300}
              value={dailyMiles}
              onChange={(event) => setDailyMiles(Number(event.target.value))}
              className="w-full accent-blue-500"
            />
            <input
              type="number"
              min={1}
              value={dailyMiles}
              onChange={(event) =>
                setDailyMiles(toNumberOr(event.target.value, dailyMiles))
              }
              className="w-full rounded-xl border border-gray-800 bg-gray-950/60 px-4 py-3 text-lg text-gray-100 focus:border-blue-500 focus:outline-none sm:w-28"
            />
          </div>
        </label>
        <label className="block space-y-2">
          <span className="text-base uppercase tracking-wide text-gray-400">{labels.fieldFuelPrice}</span>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <input
              type="range"
              min={0}
              max={10}
              step={0.1}
              value={fuelPrice}
              onChange={(event) => setFuelPrice(Number(event.target.value))}
              className="w-full accent-blue-500"
            />
            <input
              type="number"
              min={0}
              step={0.1}
              value={fuelPrice}
              onChange={(event) => setFuelPrice(toNumberOr(event.target.value, fuelPrice))}
              className="w-full rounded-xl border border-gray-800 bg-gray-950/60 px-4 py-3 text-lg text-gray-100 focus:border-blue-500 focus:outline-none sm:w-28"
            />
          </div>
        </label>
        <label className="block space-y-2">
          <span className="text-base uppercase tracking-wide text-gray-400">
            {labels.fieldElectricityRate}
          </span>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={electricityRate}
              onChange={(event) => setElectricityRate(Number(event.target.value))}
              className="w-full accent-blue-500"
            />
            <input
              type="number"
              min={0}
              step={0.01}
              value={electricityRate}
              onChange={(event) =>
                setElectricityRate(toNumberOr(event.target.value, electricityRate))
              }
              className="w-full rounded-xl border border-gray-800 bg-gray-950/60 px-4 py-3 text-lg text-gray-100 focus:border-blue-500 focus:outline-none sm:w-28"
            />
          </div>
        </label>
        <div className="rounded-xl border border-gray-800 bg-gray-950/60 p-4">
          <label className="flex items-center justify-between gap-4 text-base text-gray-300">
            <span>{labels.maintenanceLabel}</span>
            <button
              type="button"
              onClick={() => setIncludeMaintenance((prev) => !prev)}
              className={`relative inline-flex h-7 w-14 items-center rounded-full border transition-colors ${
                includeMaintenance ? "border-blue-500 bg-blue-500/30" : "border-gray-700 bg-gray-900/60"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  includeMaintenance ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </label>
          <p className="mt-2 text-base text-gray-500">{labels.maintenanceHelp}</p>
        </div>
        <div className="rounded-xl border border-gray-800 bg-gray-950/60 p-4">
          <div className="text-base uppercase tracking-wide text-gray-400">{labels.tcoHorizon}</div>
          <div className="mt-3 flex flex-wrap gap-3">
            {[1, 3, 5].map((years) => (
              <button
                key={years}
                type="button"
                onClick={() => setPeriodYears(years)}
                className={`rounded-full px-4 py-2 text-base font-semibold transition ${
                  periodYears === years
                    ? "bg-blue-600 text-white"
                    : "border border-gray-700 text-gray-300 hover:border-blue-500"
                }`}
              >
                {years} Year{years > 1 ? "s" : ""}
              </button>
            ))}
          </div>
        </div>
        <div className="text-base text-gray-400">{labels.formula}</div>
            </div>
            <div
        className={`rounded-2xl border p-8 text-center ${
          isAnomaly ? "border-rose-500/50 bg-rose-500/10" : "border-blue-500/30 bg-blue-500/10"
        }`}
      >
        <div className={isAnomaly ? "block" : "hidden"} aria-hidden={!isAnomaly}>
          <div className="text-base uppercase tracking-widest text-rose-200">
            {labels.anomalyLabel}
          </div>
          <div className="mt-4 text-2xl font-semibold text-rose-100">
            {easterEgg.headline}
          </div>
          <p className="mt-3 text-base text-rose-100/80">{easterEgg.subtext}</p>
        </div>
        <div className={isAnomaly ? "hidden" : "block"} aria-hidden={isAnomaly}>
          <div className="text-base uppercase tracking-widest text-blue-200">
            {labels.estimatedSavings}
          </div>
          <div className="mt-4 text-4xl font-semibold text-white">{formatCurrency(periodSavings)}</div>
          <p className="mt-3 text-base text-blue-200/80">
            {periodYears}-year {labels.savingsSummarySuffix} {Math.max(fleetSize, 0)} vehicles.
          </p>
        </div>
        <div className={isAnomaly ? "hidden" : "block"}>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-left">
            <div className="flex items-center justify-between text-base text-gray-300">
            <span>{labels.gasFleetLabel}</span>
              <span className="font-semibold text-white">{formatCurrency(gasCostTotal)}</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-rose-500"
                style={{
                  width: `${gasCostTotal > 0 ? 100 : 0}%`,
                }}
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-base text-gray-300">
            <span>{labels.evFleetLabel}</span>
              <span className="font-semibold text-white">{formatCurrency(evCostTotal)}</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-emerald-400"
                style={{
                  width: `${gasCostTotal > 0 ? Math.min((evCostTotal / gasCostTotal) * 100, 100) : 0}%`,
                }}
              />
            </div>
          </div>
          <div className="mt-6 text-base text-emerald-200">
            {labels.co2Label}: {co2ReducedTons.toFixed(1)} {labels.co2Suffix} / {periodYears} yr
          </div>
          <div className="mt-3 text-base text-gray-200">
            {labels.equivalentPrefix} {bikeEquivalentCount} {labels.equivalentSuffix}
          </div>
          <p className="mt-4 text-base text-blue-200/80">
            {labels.annualMileageLabel}: {annualMiles.toLocaleString()} mi · {labels.gasLabel}: $
            {gasCostPerMile.toFixed(2)}/mi · {labels.evLabel}: ${evCostPerMile.toFixed(2)}/mi
          </p>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
