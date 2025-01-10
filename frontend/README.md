# LOL Item Generator (Frontend)

This folder contains the frontend implementation of the LOL Item Generator, a React-based web application that generates random purchasable items from League of Legends.

## Deployment
This project is configured for deployment on **GitHub Pages**.

### Steps to Deploy
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
   This command will automatically push the build files to the `gh-pages` branch and make the app accessible via GitHub Pages.

### Prerequisites for Deployment
- Ensure the `homepage` field in `package.json` is set to:
  ```json
  "homepage": "https://<your-username>.github.io/<repo-name>"
  ```
  Replace `<your-username>` and `<repo-name>` with your GitHub details.

- Ensure you have a valid GitHub Personal Access Token for authentication if required.

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm start
   ```
   Open `http://localhost:3000` in your browser to view the app locally.
