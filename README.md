# Star Wars Movie

This project is a website that display seven Star Wars Movie. When user clicked the movie title on the item list, the detail of the movie will be shown. <br>
Generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## How to run this project

First time after clone the project you need to run `npm install`. <br>
To start the project app, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## The process to make this project
- Create Project <br>
First run command `ng new star-wars-movie` to make an Angular project.

- Install Boostrap <br>
After the project has ben created, run command `npm install --save bootstrap` to add Boostrap into this project.

- Create and Code Components <br>
To make a component run command `ng generate component component-name`. <br>
This app has five components : app, header, movie, movie-list, and movie-detail component. <br>
The app component is automaticly generated when the project was created. It is a parent component that contains header and movie component. <br>
Movie component is a parent component for movie-list and movie-detail component. <br><br>
Process to code the component :
  1. App Component <br>
     Write the selector tag of header and movie component to the app component template/html file so the header and movie component can be displayed.
  2. Header Component <br>
     Make website header that contains star wars logo.
  3. Movie Component <br>
     Write the selector tag of movie-list and movie-detail component to the movie component template/html file so it can be displayed.
  4. Movie-list Component <br>
     First make the UI to display the movie title list. After that, to display the title list from Swapi API (https://swapi.co/) we need to create a service. To create a service run `ng generate service star-wars-api-service`. After the service has been setup, write the function to get all the movie from Swapi API (https://swapi.co/films). Then, make a model/class (movie.ts) to collect the data from API.<br> 
On the movie-list component typescript file, declare a variable (movie) with a type of movie class. Make a function to get movie list data from the service and store the data to the movie variable, so the movie variable contains all the movie data. Then display the movie title to the list. <br>
To make the list clickable, create a click event binding with a function inside the button list tag. Declare event emitter variable with @Ouput() then inside the function, emit the movie variable so the movie data can be read to the others component (movie-detail). <br>
It also need to get a detail service (characters, planets, species, etc) so we can get the name of each detail and declare event emitter variable to emit the data to the movie-detail component.
   5. Movie-detail Component <br>
      Make UI to display detail of the movie. After that on the typescript file, declare variable with @Input so it can stored movie data and the detail from movie-list component. Then write the html file to display the movie detail. So after user clicked the list on the movie-list component, the detail will be showed in movie-detail component.

## Resources
- http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png (Star Wars Logo)
- https://swapi.co/ (Star Wars API)
