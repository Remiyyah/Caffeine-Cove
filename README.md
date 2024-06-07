

# Caffeine Cove

Welcome to the repository for **Caffeine Cove**, a React-based web application showcasing the best coffee in town.

## Table of Contents

- [Introduction](#introduction)
- [Components](#components)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
  - [GitHub Pages](#github-pages)
  


## Introduction

Caffeine Cove is a React application that provides information about various coffee beverages. The site features a HomePage and a Coffee component, each designed to offer users a visually appealing and informative experience.

## Components

### HomePage

The HomePage component welcomes users to Caffeine Cove. It includes a navigation bar, a main section with information about the coffee shop, and a subscription form.

### Coffee

The Coffee component presents detailed information about different coffee drinks, using Javascript to create a visually dynamic split-screen slider.

## Dependencies

This project relies on the following dependencies:

- React
- React DOM
- React Router DOM
- Pico CSS (used in HomePage component)

## Getting Started
<details>
<summary>Installation</summary>

1. Clone the repository:

   ```bash
   git clone https://github.com/remiyyah/Caffeine-Cove.git
   cd Caffeine-Cove
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the App

To run the app locally, use the following command:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
</details>

## Deployment
<details>
<summary>GitHub Pages</summary>

1. Add `homepage` to `package.json`:

   ```json
   "homepage": "https://[github username].github.io/[repo name]"
   ```

2. Add deployment scripts to `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
     "eject": "react-scripts eject"
   }
   ```

3. Install `gh-pages`:

   ```bash
   npm install --save gh-pages
   ```

4. Deploy the app:

   ```bash
   npm run deploy
   ```
   </details>
---
Link to website: https://remiyyah.github.io/Caffeine-Cove/

Demo images:
<img width="1426" alt="Screenshot 2024-06-06 at 7 09 16 PM" src="https://github.com/Remiyyah/Caffeine-Cove/assets/116331106/360a91e5-1463-4ce4-8db0-74f4109dfae2">

<img width="1440" alt="Screenshot 2024-06-06 at 7 39 40 PM" src="https://github.com/Remiyyah/Caffeine-Cove/assets/116331106/d8a2b7e8-b513-46bf-873b-9f66cb57a9ff">


