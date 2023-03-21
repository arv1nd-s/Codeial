// module.exports.actionName = function(request, response){}

module.exports.home = function(req, res){
    return res.render('home', {
        title: "Home"
    });
}