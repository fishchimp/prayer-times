"use client";

import { useEffect, useState } from "react";
import { fetchPrayerTimes } from "../lib/api";
import { PrayerTimesData } from "../types/prayerTimes";

export default function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getPrayerTimes() {
      try {
        const data = await fetchPrayerTimes("Canberra", "Australia");
        setPrayerTimes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
        setError("Failed to fetch prayer times");
        setLoading(false);
      }
    }
    getPrayerTimes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Today&apos;s Prayer Times</h2>
      <ul className="space-y-2">
        <li>Fajr: {prayerTimes?.fajr}</li>
        <li>Dhuhr: {prayerTimes?.dhuhr}</li>
        <li>Asr: {prayerTimes?.asr}</li>
        <li>Maghrib: {prayerTimes?.maghrib}</li>
        <li>Isha: {prayerTimes?.isha}</li>
      </ul>
    </div>
  );
} 