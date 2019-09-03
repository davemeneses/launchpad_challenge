# LaunchPad Challenge

LaunchPad Labs is working hard to evaluate popular client-side Javascript frameworks. They need a tool that will help them easily compare frameworks based on GitHub activity. This app shows how many users have starred a framework, how many forks there have been of it, and the current number of issues. After viewing the data users may vote for their preferred one by selecting the framework from a dropdown and then entering their email address.

Click [here](https://launchpad-challenge.herokuapp.com/) to view a live demo of the app.

## Getting Started

1. Clone or Fork this repo.

2. Install all dependencies by running `npm install`

3. Create a MySql Database called `launchpad`

4. Create a .env file and inside add `TOKEN_GHITHUB_ENTERPRISE=` with the value of a key you grab from [here](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

5. Navigate to `http://localhost:5000/` to view the app.

6. Submit your vote! Only one vote will be accepted per email and session.

## Challenge Goal

**Display the 3 most relevant pieces of information from GitHub's Api**

1. **_Stars_**: Stars are the GitHub equivalent to Facebook's "likes". This shows the total number of users interested in the framework and have bookmarked/favorited it. It gives the LaunchPad team a sense of how the development community views the framework.

2. **_Number of Issues Closed_**: This category shows how active the development team is at improving/supporting the framework throughout its lifetime. I see a large number of Issues Closed as a positive. It means the team is constantly debugging/improving the framework.

3. **_Number of Commits For The Past 2 Weeks_**: This category shows the frequency/rate that the framework is currently being developed. I considered pulls merged as an alternative but ultimately went with number of commits because different operations have different guidelines for merging pulls.

**Capture a single vote for per email and browser session**

I set up a MySQL DB using Sequelize to record both the user's email and their vote. I chose Sequelize because of it's ability to work both with MySQL and PostgresSQL DBs and the ability to make relational links between tables. I ended up not having to do any joins but because of the DB choice it would be easy to implement/scale if we wanted to add more questions/store more information in the future.

When a user enters their information, selects a framework, and clicks submit several things happen.

- Validation happens to make sure the user is submitting an email address.
- A call is made the the DB to check to see if the email has already submitted a vote.
- A check is made in the Session Storage to see if "voted" is true or false.

Each of these things independently will stop the vote from being submitted. After a successful vote is cast the user "voted" in Session Store is changed to "true, the user's information is sent to our DB, and the screen rerenders to the results page displaying the current number of votes for each framework.

**Show updates to the dashboard without a refresh**

To get "live" data a call is made to the GitHub API every 15 seconds and the new information is saved via the setState method. React will re-render just the framework data without a page refresh making the page "live". I do run into API rate limiting problems so for the deployed site I have it just making the initial call on page load to populate the information. To turn on the continuous call locally navigate to `client/src/components/FrameworkData/index.js` and uncomment `this.dataReset()` in `componentDidMount`. This is all accessed through a single route `/framework/:org/:framework` and then that route looks at the props passed to each row of framework data and makes the correct requests to GitHub. Promise.all was another option instead of daisy-chaining axios calls.

## Technologies

- [Axios](https://github.com/axios/axios)
- [Bootstrap](https://getbootstrap.com/)
- [DotEnv](https://github.com/motdotla/dotenv#readme)
- [Express](https://expressjs.com/)
- [Heroku](https://heroku.com/)
- [MySQL2](https://github.com/sidorares/node-mysql2#readme)
- [React](https://github.com/facebook/react)
- [Sequelize](https://sequelize.org/)

## Stretch Goals/Further Development

- Sorting: For now, with only 3 data points being displayed there was not much need for sorting. If it were to be implemented making dynamic endpoints for the GitHub API route that changed based on what data the user wanted to view would be the next step.
- Socket.Io/JWT/Cookies Session Tracking: If a log in were required for user to make a vote it would be easy to implement JWT, Socket.Io, or Cookies for session tracking. This is a little better for truly tracking a user's "session" rather than sessionStorage.
- More styled front end: The goal for this project was to be robust and clear. More time could be spent styling to make it more visually appealing.
