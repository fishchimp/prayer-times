import PrayerTimes from "../components/PrayerTimes";

export default function Home() {
  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Canberra Prayer Times</h1>
      <PrayerTimes />
    </main>
  );
}
