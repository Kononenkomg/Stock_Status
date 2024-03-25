# Stock Status Web Application

This repository contains the source code for a simple "stock status" web application built as part of an assessment. The application is designed to provide information and ability to manage the paint stock.

## Overview

The goal of this project is to create a functional web application that allows users to check and update the availability of paint stock. The application comprises both frontend and backend components, each fulfilling specific requirements outlined in the assessment.

## Features

- **Frontend Assessment**:

  - Built with Next.js, a React framework for server-rendered React applications.
  - Utilizes tRPC for communication between the frontend and backend.
  - Hosted on Vercel, a cloud platform service, ensuring scalability and reliability.

- **Backend Assessment**:

  - Developed using Next.js for server-side rendering and API routes.
  - Utilizes tRPC for handling server-side requests and responses efficiently.
  - Hosted on Vercel, a cloud platform service, ensuring scalability and reliability.
  - Utilizes a cloud-hosted SQLite database for efficient data storage and retrieval.

- **DevOps Assessment** (Optional):

  - Implemented a deployment pipeline using Vercel's built-in deployment features.
  - The deployment pipeline automates the process of checking out, building, configuring, and deploying the application.
  - Ensures continuous integration and delivery of updates to the application.

## Technologies Used

- Frontend:

  - Next.js
  - React
  - tRPC

- Backend:

  - Next.js
  - tRPC
  - SQLite (cloud-hosted)

- Deployment:

  - Vercel

## Setup and Installation

To run this project locally, follow these steps:

1.  Clone this repository to your local machine.
2.  Navigate to the project directory.
3.  Install dependencies using your preferred package manager (**npm install** or **yarn install**).
4.  Start the development server (**npm run dev** or **yarn dev**).

## Usage

Once the development server is running, you can access the application in your web browser at **http://localhost:3000**. From there, you can interact with the user interface to check the availability of stocks.

## Deployment

The application is deployed and hosted on Vercel. You can access the live version of the application at [link](https://stock-status-ruddy.vercel.app/).
