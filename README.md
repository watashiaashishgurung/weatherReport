<style>
    body {
      background-color: #E0F7FA; /* Light blue background for the entire page */
      color: navy; /* Navy font color */
      font-family: Arial, sans-serif;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    th, td {
      padding: 10px;
      text-align: left;
      border: 1px solid #ddd;
    }
    th {
      background-color: #4DA6FF; /* Darker blue for table header */
      color: white;
    }
    tr:nth-child(even) {
      background-color: #CCE5FF; /* Light blue for even rows */
    }
    tr:nth-child(odd) {
      background-color: #99CCFF; /* Slightly darker blue for odd rows */
    }
</style>
# Hands-on Lab: Call API to Fetch Weather Data Using fetch()

## Table of Contents
1. [Overview](#overview)
2. [What You Will Learn](#what-you-will-learn)
3. [Learning Objectives](#learning-objectives)
4. [Prerequisites](#prerequisites)
5. [Setup Instructions](#setup-instructions)
   - [Step 1: Setting up the Environment](#step-1-setting-up-the-environment)
   - [Step 2: Create HTML Structure](#step-2-create-html-structure)
   - [Step 3: Defining Variables and Functions](#step-3-defining-variables-and-functions)
   - [Step 4: Check the Output](#step-4-check-the-output)
   - [Step 5: Perform Git Commands](#step-5-perform-git-commands)
6. [Practice Task](#practice-task)
7. [Summary](#summary)
8. [Demo](#demo)

## Overview
In this lab, you will integrate an external API, **OpenWeatherMap**, into a web application using **JavaScript**. You'll learn how to asynchronously fetch weather data, parse JSON responses, and dynamically update the webpage based on the data received. This lab provides hands-on experience in API integration, asynchronous programming, DOM manipulation, and user interaction in web development.

**Estimated Time**: 30 minutes

## What You Will Learn
- Integrating an API to fetch real-time data.
- Using the **fetch()** API to make asynchronous requests.
- Handling **JSON** responses.
- Dynamically updating the **DOM** based on user input and API responses.

## Learning Objectives
After completing this lab, you will be able to:
- **User-friendly weather retrieval**: Enable users to input city names and retrieve real-time weather information.
- **API integration**: Fetch precise weather data from the OpenWeatherMap API based on user input, displaying temperature and weather details dynamically.
- **Form handling and events**: Manage HTML form submissions and implement **JavaScript event listeners** to ensure smooth data retrieval.
- **Asynchronous requests and DOM updates**: Use the `fetch()` API to make asynchronous requests, parse JSON, and update the DOM without refreshing the page.

## Prerequisites
- Basic knowledge of **HTML**.
- A modern web browser (e.g., **Chrome DevTools**, **Firefox Console**, etc.).

## Setup Instructions

### Step 1: Setting up the Environment
1. Clone the project repository from GitHub.
2. Ensure that you have a web browser with developer tools (e.g., Chrome DevTools).
3. Open the project folder in a code editor (e.g., Visual Studio Code).

### Step 2: Create HTML Structure
1. Build the basic HTML structure, including:
   - An input form for the city name.
   - A section to display the weather data dynamically.
   
### Step 3: Defining Variables and Functions
1. In your JavaScript file, define variables for the API key, base URL, and DOM elements.
2. Create functions to:
   - Fetch weather data using the **fetch()** API.
   - Parse the **JSON** response.
   - Update the DOM with the fetched weather data.

### Step 4: Check the Output
1. Test the weather API by entering city names in the form and viewing the weather data on the webpage.
2. Use the browser’s developer console to inspect the data retrieved.

### Step 5: Perform Git Commands
1. **Commit** your changes:
   ```bash
   git add .
   git commit -m "Added weather API integration"
   git push origin main


### Key Sections:
- **Table of Contents**: Provides a clear roadmap of the README file.
- **Overview & What You Will Learn**: Summarizes the project and key takeaways.
- **Learning Objectives**: Highlights the main skills and knowledge you’ll acquire after completing the lab.
- **Setup Instructions**: Step-by-step guide for setting up the project environment.
- **Practice Task**: Encourages further exploration of the project.
- **Demo**: Placeholder for the demo link once your site is live.

Once you have the demo link ready, just replace `#` with the actual URL.
