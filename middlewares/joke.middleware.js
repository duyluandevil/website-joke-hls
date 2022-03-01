//middleware

var jokeModel = require('../model/joke.model'); // require module data 

function indexJoke(arr){ //get it from joke.controller
    for(var i=0;i<arr.length;i++){
        if(arr[i].vote === "")
        {
            return i;
            break;
        }
    }
}

module.exports.checkCookie = function(req, res, next){
    if(indexJoke(jokeModel) == null && req.cookies.Track){ //if full vote is not null and have cookie track from user 
        res.render("index", {  // render page index
            contentJoke:"That's all the jokes for today! Come back another day!"
        })
    }
    else if(req.cookies.Track == "Like"){ // if user vote this is funny
        jokeModel[indexJoke(jokeModel)].vote = req.cookies.Track // change vote with each element in array
        console.log(jokeModel) // can check data change in CLI 
    }
    else if(req.cookies.Track == "Dislike"){ // if user vote this is not funny
        jokeModel[indexJoke(jokeModel)].vote = req.cookies.Track 
        console.log(jokeModel)
    }
    else if(!req.cookies.Track){ // if browser doesn't have track cookie, dtb will change vote to null
        jokeModel.forEach(function(e){ // use loop
            e.vote = ""
        })
    }
    
    next() // dont forget that in middleware
}