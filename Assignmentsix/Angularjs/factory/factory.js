angular.module("covid").factory("covidFactory", covidFactory);
function covidFactory($http) {
    return {
        getAll: getAll
    };
    function getAll() {
        return $http.get("https://coronavirus.m.pipedream.net/")
        .then(complete).catch(failed);
    }
    function complete(response) {
        return response.data;
    }
    function failed(error) {
        return error.message;
    }
}