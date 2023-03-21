// module.exports.actionName = function(request, response){}

module.exports.home = function(req, res){
    return res.send("<h1> Home Page! </h1>");
}