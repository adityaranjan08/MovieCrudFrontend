# Movie CRUD using Angular and Spring Boot

This project demonstrates a Movie CRUD (Create, Read, Update, Delete) application developed using Angular and Spring Boot. The application allows users to manage a collection of movies by performing basic CRUD operations.

Technologies Used
Angular: A popular front-end framework for building web applications.
Spring Boot: A powerful framework for building Java-based web applications.
MySQL: A relational database management system used to store movie data.
Project Structure
The project consists of two main components: the Angular front-end and the Spring Boot back-end.

Angular Front-end
The front-end component is developed using Angular and contains the user interface for managing movies. It includes the following key files and directories:

src/app/components: Contains Angular components responsible for displaying movie data, forms, and handling user interactions.
src/app/services: Contains Angular services that communicate with the back-end REST API to perform CRUD operations on movies.
src/app/models: Defines the data models used by the front-end application.
src/app/app-routing.module.ts: Configures the routes for the application.
src/app/app.module.ts: Configures the Angular modules and dependencies.
Spring Boot Back-end
The back-end component is developed using Spring Boot and provides the RESTful API endpoints for managing movies. It includes the following key files and directories:

src/main/java/com/example/movie: Contains the main Java package for the application.
src/main/java/com/example/movie/controller: Defines the controller classes that handle the incoming HTTP requests and return the responses.
src/main/java/com/example/movie/service: Contains the service classes responsible for handling business logic and interacting with the database.
src/main/java/com/example/movie/repository: Defines the interfaces for database operations using Spring Data JPA.
src/main/resources/application.properties: Configures the database connection and other Spring Boot settings.
Getting Started
To run the Movie CRUD application, follow these steps:

Set up a MySQL database and update the application.properties file with the correct database connection details.

Open a terminal and navigate to the project's root directory.

Build and run the back-end Spring Boot application using the following command:

arduino
./mvnw spring-boot:run
Open another terminal and navigate to the frontend directory within the project.

Install the required dependencies by running the following command:

npm install
Start the Angular development server using the following command:

ng serve
Open a web browser and access the application at http://localhost:4200.

Usage
Once the application is up and running, you can perform the following operations:

Create Movie: Click on the "Add Movie" button and fill in the details in the provided form. Submit the form to add a new movie to the collection.

Read Movie: The list of existing movies is displayed on the homepage. Scroll through the list to view the available movies.

Update Movie: Click on the "Edit" button next to a movie to modify its details. Update the form and submit it to save the changes.

Delete Movie: Click on the "Delete" button next to a movie to remove it from the collection.

Conclusion
The Movie CRUD application demonstrates the integration of Angular and Spring Boot to create a full-stack web application. It allows users to manage movies by performing basic CRUD operations. Feel free to explore and enhance the application further based on your specific requirements.






