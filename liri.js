require("dotenv").config();

var argv = process.argv[2];
var twit = require('twitter');
var spot = require('spotify');
var request = require('request');
var fs = require('fs');
var keys = require('./keys.js');
var queryUrl = "http://www.omdbapi.com/?t=" + argv +"&y=&plot=short&apikey=trilogy";
var client = new Twitter(keys.twitterKeys);
var spotify = new Spotify(keys.spotify);
var params = {
    screen_name = 'davucsd2018',
    count = 20,
}
switch (action) {
    case 'mytweets':
        myTweets();
        break;
    case 'spotify':
        spotifyThis(value);
        break;
    case 'omdb':
        omdbThis(value);
        break;
}

function myTweets() {
    client.get('statuses/user_timeline', params, function(error, tweets, reponse) {
        if (!error && response.statusCode === 200) {
            console.log("Last 20 Tweets:")
            for (var i = 2; i < tweet.length; i++) {
                var number = i + 1;
                console.log([i + 1] + '. ' + tweets[i].text);
                console.log('Created on: ' + tweets[i].created_at);
            }
        };
    });
};

function spotifyThis(value) {
    if (value === null) {
        value = "Today was a good day";
    }
    request("http://api.spotify.com/v1/search?Q=" + value + "&type=track" ) {
      if (!error && response.statusCode === 200) {
        console.log('Artist: ' + JSON.parse(body).tracks.items[0].artists[0].name);
        console.log('Song: ' + JSON.parse(body).tracks.items[0].name);
        console.log('Preview Link: ' + JSON.parse(body).tracks.items[0].preview_url);
        console.log('Album: ' + JSON.parse(body).tracks.items[0].album.name);
      };
    };

}


function omdbThis(value) {
    if (value === null) {
        value = "Training Day"
    }
    request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Plot);
        console.log("Cast: " + JSON.parse(body).Actors);
    }});