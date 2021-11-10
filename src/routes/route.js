//1. Create an endpoint GET /movies/indexNumber (For example GET /movies/1 is
//  a valid request and it should return the movie in your array at index 1)
//2.Handle a scenario where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index
/*3. Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is

[ {

 “id”: 1,

 “name”: “The Shining”

}, {

 “id”: 2,

 “name”: “Incendies”

}, {

 “id”: 3,

 “name”: “Rang de Basanti”

}, {

 “id”: 4,

 “name”: “Finding Demo”

}]

Return the entire array in this api’s response*/

/*4. Write api GET /films/:filmId where filmId is the value received in request path params. 
Use this value to return a movie object with this id. In case there is no such movie present 
return a suitable message in the response body. Example for a request GET /films/3 should return the movie object

{

 “id”: 3,

 “name”: “Rang de Basanti”

}*/

const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

//---------Problem 1 -----------------
router.get('/movies',function(req ,res){
//let movies=["transmitter","harrypotter","narnia"]
res.send(["transmitter","harrypotter","narnia"])
})

//---------Problem 2 -----------------
router.get('/movies/:movieIndex',function(req ,res){
    let movi = ["narnia","venom","Black","mogali","transmitter","harrypotter"]
    let index = req.params.movieIndex
    if(index>movi.length-1){
        res.send("does not exist")
    }else{
        res.send(movi[index])
    }
    })

    //---------Problem 3 -----------------
    router.get('/films', function(req, res) {
    const movFlims = [{ "ID": 1, "Name":  "The Shining" }, { "ID": 2, "Name": "Incendies" }, { "ID": 3, "Name": "Rang de Basanti" }, { "ID": 4, "Name": "Finding Demo" }]
    res.send(movFlims)
});

    //---------Problem 4 -----------------
    router.get('/films/:filmId', function(req, res) {
    let film = req.params.filmId
    let filmlist = movFlims[film - 1]
    if (film <= movFlims.length) {
        res.send(filmlist)
    } else {
        res.send("No movie exists with id ")
    }

});


module.exports = router;