var starters =require('../data/friends.js');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(starters);
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
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            totalDifference = 0;
            
            var starterScore = starters[i].scores.reduce((a, b) => a + b, 0);
            totalDifference += Math.abs(sum - starterScore);
            
            if (totalDifference <= bestMatch.friendDifference) {

                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
  

            }
            console.log(totalDifference + " Total Difference");

        }
        
        console.log(bestMatch);
      
        starters.push(data);
        console.log(data);
        res.json(bestMatch);

    });

}