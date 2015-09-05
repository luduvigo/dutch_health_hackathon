angular.module('app')
    .controller('ActivitiesCtrl', function ($scope, ActivitiesSvc) {
        $scope.addActivity = function () {
             if($scope.activityBody){
                ActivitiesSvc.create({
                    title: '',
                    votes : 0
                }).
                success(function (activity) {
                    $scope.activities.unshift(activity)
                    $scope.activityBody = null         
                })
            }
        }
        ActivitiesSvc.fetch().success(function (activities) {

            $scope.activities = activities
        })         
    })
