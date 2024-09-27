# College Course App

## Description
The College Course App is a full-stack web application that provides users with information about various colleges and their courses. Users can view a list of colleges, click on each college to see detailed information, including course names, durations, accommodation options, and course fees.

## Technologies Used
- **Frontend:**
  - React.js
  - Axios (for API calls)
  - React Router (for navigation)
  - CSS

- **Backend:**
  - Spring Boot
  - Java
  - JPA (Java Persistence API)
  - MySQL (database)

## Features
- View a list of colleges.
- Click on a college to view detailed information about its courses.
- Responsive design for optimal viewing on different devices.

## Installation Instructions

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
- Ensure you have [Java](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) installed.
- Install [MySQL](https://www.mysql.com/downloads/) and set up your database.

### Setting Up the Backend
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd [backend-directory]
2.Configure your database connection in src/main/resources/application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/college_db
spring.datasource.username=[your-username]
spring.datasource.password=[your-password]

3.Build and run the Spring Boot application:
./mvnw spring-boot:run

4.Setting Up the Frontend
Open a new terminal and navigate to the frontend directory:
cd [frontend-directory]

Install the necessary dependencies:
npm install

Start the React application:
npm start

The frontend will be accessible at http://localhost:3000.

Usage
Open your web browser and navigate to http://localhost:3000 to view the list of colleges.
Click on any college to see detailed information about the courses offered.
