angular.module('app')
    .service('ActivitiesSvc', function ($http){
        this.fetch = function () {
            return $http.get('/api/activities')
        }       
        this.create = function (activity) {
            return $http.post('/api/activities', activity)
        }
    })
