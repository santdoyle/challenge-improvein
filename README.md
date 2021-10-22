# Movies API
## Resume
This API was made on node.js and Express as Framework, also use MongoDB SAS as database.

## Start
Before start running the project it's necessary config the development.env file.
### Run server

```
//run on development mode

npm run dev
```

## Endpoints

### /auth
Request must **include user email and password** as body for correct login.

You can use: 
```
josedoyle@gmail.com
12345
```

| Path  | Method | Description |
| ------------- | ------------- | ------- |
| /login-jwt  | POST | Authorization using JWT|
| /refresh-token  | POST  |Refresh token auth|

### /movies
| Path  | Method | Description |
| ------------- | ------------- | ------- |
| /movies  | GET | Get list of movies |
| /movies?gender=`<string>`  | GET  | Get list of movies by gender |
| /movies?gender=`<string>`&order=`<order>`  | GET  | Get list of movies by gender ordered [asc, desc] |
| /add-movie  | POST | Add new movie to database |

### /tv-shows
| Path  | Method | Description |
| ------------- | ------------- | ------- |
| /tv-shows  | GET | Get list of tv shows |
| /tv-shows?name=`<string>`  | GET  | Get information about specific tv show. |
| /tv-shows?name=`<string>`&season=`<number>`  | GET  | Get list of chapters about specific season of the tv show. |
| /tv-shows?name=`<string>`&season=`<number>`&chapter=`<number>`  | GET | Get title of specific episode. |
| /add-tvshow  | POST | Add new tv show to database |
