#Planning

1. My first step is to make a fetch request to the 'https://openweathermap.org/api' and make sure it returns a 200 status code

2. Make a form for the User to search the weather in their city. The api call will be made when the user submits the form

3. Create a component to handle the display of the info gathered from the api call

4. Make sure that every tag is semantic, instead of using `<div>`


- [x] As a user, I would like to search for the current weather in my area

##Possible Problems with the app and how I would fix them

* User is not given the choice of which country to search
  To fix the problem I could display a dropdown menu with all the countries, so that the user can choose from them.
  Or After the API response is displayed on the page, the question "Not the {name_of_city} you were looking for? Search the country here" with a new input box.


## Getting started

Install the dependencies.

```bash
npm install
```

Run the application.

```bash
npm start
```
