# React Django TapaBhumi

This is a web application built with React for the frontend and Django for the backend.

## Features

- User authentication (signup, login, logout)
- CRUD operations on certain resources (e.g., posts, comments)
- Responsive design using React 


## Technologies used
* [Django](https://www.djangoproject.com/): Python web framework for rapid development with a clean and pragmatic desig
* [DRF](https://www.django-rest-framework.org/): Toolkit for building Web APIs in Django with powerful serialization and authentication capabilities.
* [React](https://react.dev/reference/react):JavaScript library for building interactive user interfaces with a component-based architecture.
* [React Router](https://reactrouter.com/en/main): Library for declarative routing and navigation in single-page React applications.
* [Axios](https://axios-http.com/docs/intro):Promise-based HTTP client for making asynchronous requests in JavaScript applications.
* [PostgreSQL](https://www.postgresql.org/):Open-source relational database management system known for reliability and advanced SQL features.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js and npm (for React)
- Python and pip (for Django)
- PostgreSQL


## Getting Started

To get a local copy of this project running, follow these steps:

1. Clone the repository:
     ```bash
     git clone https://github.com/Abhi-AD/React-Django-TapaBhumi
     ```
### Frontend (React)

1. Technology Fontend:
     ``` bash
     cd technology_fontend
     ```
2. Install dependencies:
     ```bash
     npm install
     ```
3. Start the development server:
     ```bash
     npm start
     ```
4. Access the React app at 
     ```bash
     http://localhost:3000 
     ```
     in your browser.

### Backend (Django)

1. Navigate to the backend directory::
     ``` bash
     cd technology_backend
     ```
2. Create a virtual environment (optional but recommended):
     ```bash
     python -m venv venv
     .\venv\Scripts\activate
     ```
3. Install Django and other dependencies::
     ```bash
     pip install -r requirements.txt
     ```
4. Apply database migrations: 
     ```bash
     python manage.py migrate
     ```
     in your browser.

5. Access the Django API at 
     ```bash
     http://localhost:8000/ 
     ```
     in your browser or API client.



