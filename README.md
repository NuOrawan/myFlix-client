# myFlix-client
myFlix-client is a client side application for making request to and receiving response from server side app (myFlix) about different movies.  It includes several views that will handle data through the REST API endpoints.

## Key Features
* Users are be able to use it whenever they want to read and save a list of their favorite movies.
* Users can create a profile so I can save data about their favorite movies.
* myFlix app itself is responsive and can therefore be used anywhere and on any device, giving all users the same experience.

## Essential Views & Features: 
### Main view 
* Returns ALL movies to the user (each movie item with an image, title, and description) 
* Filtering the list of movies with a “search” feature 
* Ability to select a movie for more details 
* Ability to log out 
* Ability to navigate to Profile view 

### Single Movie view
* Returns data (description, genre, director, image) about a single movie to the user
* Allows users to add a movie to their list of favorites

### Login view 
* Allows users to log in with a username and password 

### Signup view 
* Allows new users to register (username, password, email, date of birth) 

### Profile view 
* Displays user registration details
* Allows users to update their info (username, password, email, date of birth) 
* Displays favorite movies 
* Allows users to remove a movie from their list of favorites
* Allows existing users to deregiste

## Other technical features
* The application is a single-page application (SPA) 
* The application uses state routing to navigate between views and share URLs 
* The application gives users the option to filter movies using a “search” feature 
* The application use Parcel as its build tool 
* The application  is written using the React library and in ES2015+ 
* The application uses Bootstrap as a UI library for styling and responsiveness 
* The application contains function components 
* The application  hosted online 
* The application uses React Redux for state management of at least one feature (i.e., filtering movies)

## Technologies
	* Node.js
	* React Redux
	* JSX
	* SCSS


