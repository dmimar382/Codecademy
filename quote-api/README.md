# Quote API Project

This is a simple web application that provides a RESTful API for managing and retrieving quotes. Users can add, retrieve, and update quotes through the API.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- **Add Quotes**: Users can add new quotes by sending a POST request to the `/api/quotes` endpoint.

- **Retrieve Quotes**: Users can retrieve quotes by sending GET requests to the `/api/quotes` endpoint. They can also fetch quotes by a specific author.

- **Update Quotes**: Users can update existing quotes by sending a PUT request to the `/api/quotes` endpoint with the quote's ID.

<!-- - **Delete Quotes**: Users can delete quotes by sending a DELETE request to the `/api/quotes` endpoint with the quote's ID. -->

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- A code editor such as Visual Studio Code.
- Familiarity with JavaScript and Express.js.

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/dmimar382/quote-api.git

2. Navigate to the project directory:
    ````bash
    cd quote-api

3. Install the project dependencies:
    ````bash
    npm install

## Usage
To start the server, run the following command:
   
    npm start
    
    

The server will start listening on the specified port (default is 4001).

You can access the API endpoints using tools like curl or a web API testing tool like Postman.

## API EndPoints

- GET /api/quotes: Retrieve all quotes or filter by author or ID.
- POST /api/quotes: Add a new quote.
- PUT /api/quotes: Update an existing quote by ID.
<!-- DELETE /api/quotes: Delete a quote by ID. -->

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the project and create a new branch for your contribution.
2. Make your changes and ensure they are well-documented.
3. Test your changes thoroughly.
4. Submit a pull request with a clear description of your changes.