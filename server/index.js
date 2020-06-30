const fs = require('fs');
const express = require('express');
const  app = express();

var musicData =  fs.readFileSync('public/music.json');
var music = JSON.parse(musicData);

app.listen(3000, () => console.log("my server is litening at port 3000"));
app.use(express.static('public')); //server is serving up any file in public folder (static content)


app.get('/categories', sendCategories)// route to show json data
function sendCategories(req, res) {
 res.send(music); 
}


app.get('/search/:mood/:song', addSong) //routes as parameters to add songs to file
function addSong(req, res) {
  var data = req.params;
  var mood = data.mood;
  var song = data.song;
    music[mood] = song

  var writeMusic = JSON.stringify(music, null, 3);
    fs.writeFile('public/music.json', writeMusic, finished)

    function finished(err) {
      console.log("song added to file")
      var reply = {
        genre: data.genre,
        song: data.song,
        status: "success.. thank you!"
      }
      res.send(reply)
    }
  
}

