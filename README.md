# Gustafgraph

## Project description
This project requires us to create an online journalling website, similar to 'telegra.ph', where users can create private journal entries.

The user will only be able to access their past entries by entering their post ID in the url.

## Installation & usage
### Installation
- Clone or download the repo 

### Usage
- In the `lap2_code_challenge` folder, run `_script/startDev.sh` to start up the client, api and database.
- Open `client/index.html` in live server or use `localhost:8080` to access the main page
- Create an entry, the application will provide you with an automatically generated url path to access this post in future
- To access previously entered posts, enter the show path in the url of the site
- If you want to restart the container, run `_script/restartDev.sh` to stop the container, prune all volumes and start up the container.

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

## Wins & Challenges
### Wins
- Posting and fetching from database works as intended
- New post automatically displayed when 'publish' is pressed.
- Date posts to user entry 

### Challenges
- Setting up database and docker
- Hash path changes

## Future features
- User profiles (login feature)
- Editing posts
- Deleting posts