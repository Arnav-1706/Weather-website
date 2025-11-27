# GetWeather

A modern, responsive weather application built with React, Vite, and Framer Motion.

## Features

- **City Search**: Real-time weather data for any city.
- **Live Location**: Get weather for your current location.
- **Forecast**: 5-day weather forecast.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Animations**: Smooth UI transitions using Framer Motion.
- **Glassmorphism**: Modern UI aesthetic.

## Setup

1.  **Install Node.js**: Ensure you have Node.js installed.
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **API Key**:
    - Sign up at [OpenWeatherMap](https://openweathermap.org/) to get an API key.
    - Create a `.env` file in the root directory.
    - Add your key: `VITE_WEATHER_API_KEY=your_api_key_here`
4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
5.  **Build for Production**:
    ```bash
    npm run build
    ```

## Tech Stack

- React
- Vite
- Framer Motion
- Axios
- CSS Modules / Vanilla CSS

## Deployment

This project is ready for deployment on Vercel.
1.  Push to GitHub.
2.  Import project in Vercel.
3.  Add `VITE_WEATHER_API_KEY` in Vercel Environment Variables.
4.  Deploy.
