var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 100
        };

        // parse user input - data sent from survey.html
        var newFriend = req.body;
        var newScores = newFriend.scores;

        // loop through all the friends database. 
        for (var i = 0; i < friends.length; i++) {
            var scoreDifference = 0;

            // loop through scores of each friend to calculate score difference
            for (var h = 0; h < friends[i].scores[h]; h++) {
                scoreDifference += Math.abs(parseInt(newScores[h]) - parseInt(friends[i].scores[h]));

                // set "best match" at first loop then updates each subsequent loop
                if (scoreDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = scoreDifference;
                }
            }
        }
        friends.push(newFriend);
        res.json(bestMatch);
    });
}






// var friends = require('../data/friends.js');

// module.exports = function (app) {
//     app.get('/api/friends', function (req, res) {
//         res.json(friends);
//     });

//     app.post('/api/friends', function (req, res) {

//         var bestMatch = {
//             name: "",
//             photo: "",
//             matchDifferrencePoints: 100
//         };
    
//         // parsing user input from data sent from survey.html
//         var newUserData = req.body;
//         var newScores = newUserData.scores;

//         // 4 loop through all the friends database. 
//         for (var i = 0; i < friends.length; i++) {
//             var scoreDifference = 0;

//             // Another 4 loop through scores of each friend to calculate score difference
//             for (var k = 0; k < friends[i].scores[k]; k++) {
//                 scoreDifference += Math.abs(parseInt(newScores[k]) - parseInt(friends[i].scores[k]));

                
//                 if (scoreDifference <= bestMatch.friendDifference) {
//                     bestMatch.name = friends[i].name;
//                     bestMatch.photo = friends[i].photo;
//                     bestMatch.friendDifference = scoreDifference;
//                 }
//             }
//         }
//         friends.push(newUserData);
//         res.json(bestMatch);
        
//     });
// }



