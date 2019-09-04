# 🦋 Butterfly Critique Write-Up

When designing my endpoints, I decided to draw on the basic RESTful design philosophy. For the first endpoint, which allows a user to POST a rating of a butterfly, I used the noun `/ratings`. This would allow for a developer to eventually build out this endpoint to allow a GET request to pull all ratings, or to delete an existing rating.

Following this logic, I created `/ratings/users/:userId` as the endpoint for the GET request to view all of a users ratings. I initially considered storing ratings within the `/users` endpoint, since for the purpose of this exercise, we are focusing on getting posting and getting ratings for a specific user, but in order to make my code extensible, I chose to use the subcategory `/ratings/users`, because at some point it might be useful to allow a user to request all ratings for a specific type of butterfly (`/ratings/butterflies/:butterflyId`) or to get a specific user rating (`/ratings/:ratingId`).

If I were to continue work on this API, I'd alter the response from the `/ratings` endpoint to be a bit more developer-friendly by actually returning the information for each butterfly in addition to the associated ratings.
