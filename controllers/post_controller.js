module.exports.post = function(req, res){
    res.end("<h1>User's posts!</h1>");
}

module.exports.view = function(req, res){
    res.end("<h1>Post view!</h1>");
}