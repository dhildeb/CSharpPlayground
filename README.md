# C# Playground with React Frontend

This project combines an ASP.NET Core backend with a React frontend using Vite.

## Prerequisites

- .NET 8.0 SDK
- Node.js (v16 or later)
- npm (comes with Node.js)

## Project Structure

- Backend: ASP.NET Core Web API
- Frontend: React + Vite in the `ClientApp` directory

## Getting Started

### Backend Setup

1. Navigate to the project root directory
2. Run the backend:
```bash
dotnet run
```
The API will be available at:
- HTTP: http://localhost:5056
- HTTPS: https://localhost:7056

### Frontend Setup

1. Navigate to the ClientApp directory:
```bash
cd ClientApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The frontend will be available at http://localhost:5173

## Development

- Backend API endpoints are in the `Controllers` directory
- Frontend React components are in `ClientApp/src/components`
- API service configuration is in `ClientApp/services/api.ts`

## Environment Variables

Create a `.env` file in the `ClientApp` directory with:
```
VITE_API_URL=http://localhost:5056/api
```

## Available Scripts

### Backend
- `dotnet run` - Run the backend server
- `dotnet build` - Build the backend
- `dotnet test` - Run tests

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build 