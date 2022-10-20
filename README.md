# Gustafgraph

## Project description
This project requires us to create an online journalling website, similar to 'telegra.ph', where users can create private journal entries.

The user will only be able to access their past entries by entering their post ID in the url.

## Installation & usage
### Installation
- Clone or download the repo 

### Usage
- Run docker-compose to start up the server and db
- Open index.html in live server or use localhost:8080 to access the main page
- Create an entry, the application will automatically take you to your post (and display the post id in the URL)
- To access previously entered posts, enter the id of your post at the end of the URL (after the hash)

## Technologies
- HTML
- CSS
- JavaScript
- Express
- Docker
- SQL (Postgres)

## Process
- Started by desgining the page views in Excalidraw
- Created the repo and built the basic structure
- Wrote code to run server
- Configured and seeded database
- Set up docker container for API, client and database
- Set up controllers, models and routes for posts
- Created functions to post user entries to database
- Created functions to fetch posts and display them onscreen
- Adjusted styling


### Changelog

## Screenshots/Images

## Wins & Challenges
### Wins
- Posting and fetching from database works as intended
- New post automatically displayed when 'publish' is pressed.

### Challenges
- Setting up database and docker


## Code snippets

## Bugs

## Future features
- User profiles (login feature)
- Editing posts
- Deleting posts