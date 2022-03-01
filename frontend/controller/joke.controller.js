//controller

var jokeModel = require("../model/joke.model")

function indexJoke(arr){ //func find joke which vote is null
    for(var i=0;i<arr.length;i++){
        if(arr[i].vote === "")
        {
            return i;
            break;
        }
    }
}

module.exports.index = function(req, res){
    if(indexJoke(jokeModel) !== undefined)
        res.render("index",{
            contentJoke: jokeModel[indexJoke(jokeModel)].content
        })
}
