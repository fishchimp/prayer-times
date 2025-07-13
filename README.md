# Canberra Prayer Times

A Next.js web app to display daily salah times for Canberra, Australia.

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd prayer-times
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

## API
This app uses the Aladhan API (http://api.aladhan.com) for prayer times. Replace the API endpoint in `lib/api.ts` with your preferred provider if needed.

## Next Steps
- Add date selection for prayer times.
- Include sunrise and midnight times.
- Add local storage for user preferences (e.g., calculation method).
- Style the UI further with Tailwind CSS.
