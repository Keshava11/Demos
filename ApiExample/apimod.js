// Contains utiltiy function


const apiKey = 'cc5b9f3ad0c0575f1227c608b4c3d557';


module.exports = {

    // Function one to search restaurants with given city id and type
    getCity: function(entity_id, entity_type, responseCallback) {
        const queryParameters = {
            first: entity_id,
            second: entity_type
        };

        fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${queryParameters.first}&entity_type=${queryParameters.second}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'user-key': apiKey
            }

        }).then((response) => response.json()).then((responseData) => {

            console.log(responseData.restaurants);

            // TODO yet to add check for errors and send response accordingly
            responseCallback(responseData.restaurants);

        }).done();
    }

};