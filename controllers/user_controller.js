module.exports.user = function(req, res){
    return res.send("<h1> User page! </h1>");
}

module.exports.profile = function(req, res){
    return res.send("<h1> User's profile page! </h1>");
}