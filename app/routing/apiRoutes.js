var starters =require('../data/friends.js');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {

        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var data = req.body;
        var scores = data.scores;
        var b = scores.map(function(item) {
            return parseInt(item, 10);
        });
        data = {
            "name": req.body.name,
            "photo": req.body.photo,
            "scores": b
        }

        
        console.log(bestMatch);
      
        starters.push(data);
        console.log(data);
        res.json(bestMatch);

    });

}