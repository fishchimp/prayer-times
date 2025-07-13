import axios from "axios";
import { PrayerTimesData } from "../types/prayerTimes";

export async function fetchPrayerTimes(city: string, country: string): Promise<PrayerTimesData> {
  // Replace with actual API, e.g., Aladhan API (http://api.aladhan.com/v1/timingsByCity)
  const response = await axios.get(
    `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`
  );
  const data = response.data.data.timings;
  return {
    fajr: data.Fajr,
    dhuhr: data.Dhuhr,
    asr: data.Asr,
    maghrib: data.Maghrib,
    isha: data.Isha,
  };
} 