# 🦋 Butterfly Critique Write-Up

When designing my endpoints, I decided to draw on the basic RESTful design philosophy. For the first endpoint, which allows a user to POST a rating of a butterfly, I used the noun `/ratings`. This would allow for a developer to eventually build out this endpoint to allow a GET request to pull all ratings, or to delete an existing rating.

Following this logic, I created `/users/:userId/ratings` as the endpoint for the GET request to view all of a users ratings. In order to make my code extensible, I chose to use the subcategory `/users/:userId/ratings`, because at some point it might be useful to allow a user to request all ratings for a specific type of butterfly (`/butterflies/:butterflyId/ratings`) or to get a specific user rating (`/users/:userId/ratings/:ratingId`), so I chose to nest these within their respective resources.

If I were to continue work on this API, I'd want to consider the scalability of these endpoints as more butterflies are added to the database. For instance, with a smaller database, it might make sense to make one request to get all ratings for a user, and then a subsequent request to pull the information for each butterfly that was rated. If there were 50,000 butterflies in the database, however, this process might not make sense, and we might want to look into caching or pagination as options to help load time.
