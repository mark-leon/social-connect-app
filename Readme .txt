
Social Connect Application
The application has list of features:
User can register and login User can create post
User can react to post
The front end of this application is written mostly in react js which is a popular JavaScript library. The backend is written in Node js, express js and MongoDB.
The process that I have followed is :
At first I have drawn wireframe and made UI design part in Html type of text which is known JSX in react and CSS in styling. I have used material ui icons in order to display icons in the page.
Then I have made the API based on the feature of UI design process which handle responses.


Lastly, I have connected the front end design with the rest API which is the hardest part of the project.
Front end development:
At first I have to create react app to start the front end UI design part.
There are four pages. Register Page, Login Page, Homepage and Profile page.
Register Page: In the register component, there is simple html form including name, email, password, password again and register button written in JSX.


Login page: In the Login component, there is a html form including email, password, forgot password and login button written in JSX.

Home Page: in the Home component there is a list of other components which is
    1. Topbar: Topbar component is designed according to the wireframe design. The center contains search bar and input search, the left section has the name of application- SocialConnect, the right section has the material ui icons of chat, person, Notification
    2. Sidebar: The sidebar component has list of icons chat, video, groups, bookmarks, question etc. which is taken from material ui section. The sidebar friend list map some dummy data as a list in
closefriend component. The javascript map function is used tp display the dummy data.The dummy data is used to experiment data to display in the webpage.

    3. Feed : Feed component is made up with share component and post component which map dummy data to display in the browser. The idea is to split a big component into smaller pieces to understand the user interface.


The post component has some important functionalities. It is divided into post Top, post center, post bottom and post right sections. In this component, user can see his profile image, user can like or react , user can post image and the react useState hook will increase and decrease count of like react functionality.







    4. Rightbar: The right bar section has the JSX elements of list of user friends. The dummy data is used to display the user friends and map function is used to display them.


The online component has the list of friends that are visible in the rightbar section.
The profile page is almost same as the homepage. There is the same topbar component, sidebar, feed, rightbar components and user can see his/her post, status in the profile page.










The backend development:
The backend api is written in node js, it’s framework express js and mongodb database.


There are several npm packages used in the backend part to build rest api. Nodemon is used not to restart server again and again when testing the api. Bcrypt is used to store user’s password in the hashed format in the mongodb database. Dotenv is used to hide important url like mongodb connection url, the port number of the server to maintain the security of the backend network. Mongoose is used as a mongodb framework which is helpful to create data schema or model very fast.
The express router is used to make end points of the api or routes of the different requests.



At first, I have to create a package.json file and connect the api with the mongodb database using mongoose.



Model:
User schema: User schema has the username, email, password, profile picture, cover picture, followers and followings part and the structure of each part which is type of data and other constraints.


Post schema: Post schema has the structure of the user_id, description of his/her post, image that he/she can post, and likes data of his/her reaction. There is also a timestamps that when the data is created.
In the index.js file, I have to define all the path of request that access the api methods.


The register section of the api is a post request when user post his username, email, password that will be stored in the mongodb database. If the request is successful then then the status will be 200 but if the request is unsuccessful the status will be 500 and it will throw an error


The login section of the api will take email and password as input from the frontend form in post request and check and validate the email and password in the database to see whether the user exits or not. If the user exits and the request is successful then then the status will be 200 but if the request is unsuccessful the status will be 500 and it will throw an error


User can update his/her password in put request. If the request is successful then then the status will be 200 but if the request is unsuccessful the status will be 500 and it will throw an error



User can delete only his/her account in delete request. . If the request is successful then then the status will be 200 but if the request is unsuccessful the status will be 500 and it will throw an error
User can get other user by his/her id by get request. User can also follow and unfollow user by put request and he cant follow or unfollow himself/herself.


In the post section of the api user can create post, update post(put method), delete post (delete method), like or dislike post (put method), get any post or all timeline post (get method)in the similar way by the api.




Front end design and backend connection
In order to fetch data from the backend api I have installed axios. I have define the frontend end points or routes, so I have installed react router. In this section I have used context api to passing data from parents to different child components. The multer node js package is used for file uploading. If the request of file upload is successful then then the status will be 200 but if the request is unsuccessful the status will be 500 and it will throw an error. I have hide the data or images in the .env file by creating REACT_APP_PUBLIC_FOLDER. In order to fetch data axios have request methods put, delete, get, post and useEffect hook is used when we have maintain the state of the application.
The main challenge in this phase is to fetch the data from mongodb database and display in the browser and the authentication process.


Lastly, the entire full stack project is deployed in the heroku server.
