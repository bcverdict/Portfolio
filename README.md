# Portfolio Project README

## Project Overview

This portfolio project is a dynamic website that showcases my up-to-date GitHub projects. The site interacts with the GitHub API to fetch information about my repositories whenever there are changes in the number or details of my repositories, using a webhook. The fetched data is then stored in a Firebase database. When a user visits the site, the data is retrieved from the database and displayed.

## Technologies Used

- **Frontend:**
  - React
  - TypeScript

- **Backend:**
  - Express
  - Node.js

- **Database:**
  - Firebase

- **API:**
  - GitHub API

## Features

- **Real-time Updates:** Uses GitHub webhooks to ensure the displayed project information is always current.
- **Centralized Data Storage:** Stores repository information in Firebase for quick and reliable access.
- **Dynamic Display:** Pulls data from Firebase to dynamically render project details to users.
