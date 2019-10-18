## Motivation
This project was created to solve this React challenge:

The goal is to build an auto suggest feature. The user can type in the input search and the app
will start finding drinks when the text has 3 or more letters. The cancel button has to clear the
results.

The API endpoint that should be consumed for this purpose is: [https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka](https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka)

In this example “vodka” is the filter typed in the input search.
This returns a JSON list of cocktails, and the information needed in order to populate each row
of the list.
```
interface Cocktail {
    dateModified: Date;
    idDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strDrink: string;
    strDrinkThumb: string;
    strGlass: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strInstructions: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
}
```

## Rules

* Use the React 16.8+.
* Use a Loader (indicator) while api is fetching. Please handle this case on the code.
* Use Redux with Thunk
* Implement​ ​ some​ ​ typed data ( PropTypes / Flow.js / Typescript )
* Event onPress in each item​ is not required.
* Please, don’t create more features than we are asking in this document. 😅
* Create a Readme with “​ Minimal​ ” instructions on how to run the application and specify
the libraries that you used.

## Demo
You can see a demo on [https://joaquincicetti.github.io/cocktail-finder/](https://joaquincicetti.github.io/cocktail-finder/)

# Docs
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Animations
The animations were created with [React-pose](https://popmotion.io/pose/)

### SVG morphing
By combining a path morphing library like [Flubber](https://github.com/veltman/flubber) with Pose, we can declaratively animate between any two SVG paths.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
