# Movie App

A cross-platform movie browsing app built with Expo, React Native, and Appwrite. Search, view, and track trending movies with a modern UI and fast performance.

## Stack

- **Expo Router** (file-based navigation)
- **React Native** (mobile UI)
- **NativeWind** (Tailwind CSS for React Native)
- **Appwrite** (cloud backend for search tracking)
- **TypeScript** (type safety)
- **Expo Modules** (image, font, splash screen, etc.)

## Features

- Trending movies and search functionality
- Movie details and watch page
- Custom tab navigation with icons
- Responsive design using Tailwind (NativeWind)
- Search tracking with Appwrite (see `services/appwrite.ts`)
- File-based routing via Expo Router

## Niche Points

- Uses NativeWind for Tailwind-like styling in React Native
- Appwrite integration for tracking user searches
- Custom tab bar with highlighted icons
- Debounced search for efficient API calls
- All navigation is file-based (see the `app/` folder)

## Setup & Run

1. **Clone the repo**
   ```bash
   git clone https://github.com/Kaustub26Pvgda/movie-app-react-native.git
   cd movie-app-react-native
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file with your Appwrite project, database, and collection IDs:
     ```
     EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
     EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
     EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
     ```

4. **Start the app**
   ```bash
   npx expo start
   ```
   - Open in Expo Go, Android emulator, or iOS simulator.

## Folder Structure

- `app/` — All screens and routes (file-based navigation)
- `components/` — Reusable UI components
- `services/` — API and Appwrite logic
- `constants/` — Images and icons
- `assets/` — Fonts and images

## How to Use

- Search for movies using the search tab
- Tap a movie card to view details
- Use the watch page for video playback (placeholder for now)
- Your searches are tracked in Appwrite for analytics

## Development

- Style with Tailwind classes via NativeWind
- Routing is automatic based on file names in `app/`
- To reset the project, run:
  ```bash
  npm run reset-project
  ```
