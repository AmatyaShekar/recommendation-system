# Microsoft-Engage Project- Amatya Shekhar

### Setup

```sh
$ git clone https://github.com/AmatyaShekar/recommendation-system.git
```

Open terminal in the project folder.

```sh
$ cd client
$ npm install
$ npm start
```

Now open a new terminal in base project folder.
```sh
$ cd recommendation engine
$ npm install
$ npm start
```

Now open a new terminal in base project folder.
```sh
$ cd server
$ npm install
$ npm run watch
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Recommendation Engine

A recommender system in JavaScript built with NodeJs. It uses the popular [MovieLens](https://www.kaggle.com/rounakbanik/the-movies-dataset/data) database which includes information about movies and ratings of users. The recommender system implements the following recommendation strategies:

* Regression based recommendation 
*  [content based recommendation](https://www.geeksforgeeks.org/movie-recommender-based-on-plot-summary-using-tf-idf-vectorization-and-cosine-similarity/)
* collaborative filtering (CF) recommendation
  * [item based CF](https://www.geeksforgeeks.org/item-to-item-based-collaborative-filtering/)
  * [user based CF](https://www.geeksforgeeks.org/user-based-collaborative-filtering/)
 </br>
  
# Login Page
 </br>
---<img width="500" alt="login_pane" src="https://user-images.githubusercontent.com/76548918/170877602-eb5e889e-5651-442a-9d4e-e03ff367b9c1.png">
# Landing Page
 </br>
<img width="500" alt="landing_page" src="https://user-images.githubusercontent.com/76548918/170877700-de699c6f-9cb4-46a2-85d2-2657178ea1dc.png">
 </br>
## Regression Based
 </br>
<img width="500" alt="regresion" src="https://user-images.githubusercontent.com/76548918/170877744-3461a7bc-5ea9-4600-a4eb-5c3b5e88e8cd.png">
 </br>
## Content Based on "Toy Story"
 </br>
<img width="500" alt="content_based_search_result" src="https://user-images.githubusercontent.com/76548918/170877775-761d119a-2a44-424f-917b-2f79fc7429d8.png">
 </br>
## Collaborating filtering Based on User and Item
<img width="500" alt="userc" src="https://user-images.githubusercontent.com/76548918/170878022-06575673-a5b2-4f1e-a59f-5c085f8b0d5d.png">

<img width="500" alt="itemc" src="https://user-images.githubusercontent.com/76548918/170878034-ce7f266e-cef3-475e-8a2e-33f52204f57d.png">


## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

