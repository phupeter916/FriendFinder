var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            matchDifferrencePoints: 100
        };
    
        // parsing user input from data sent from survey.html
        var newUserData = req.body;
        var newScores = newFriend.scores;

        // 4 loop through all the friends database. 
        for (var i = 0; i < friends.length; i++) {
            var scoreDifference = 0;

            // Another 4 loop through scores of each friend to calculate score difference
            for (var k = 0; k < friends[i].scores[k]; h++) {
                scoreDifference += Math.abs(parseInt(newScores[k]) - parseInt(friends[i].scores[k]));

                
                if (scoreDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = scoreDifference;
                }
            }
        }
        friends.push(newUserData);
        res.json(bestMatch);
    });
}


