angular.module("app",[]),angular.module("app").controller("ActivitiesCtrl",["$scope","ActivitiesSvc",function(t,i){t.addActivity=function(){t.activityBody&&i.create({title:"",votes:0}).success(function(i){t.activities.unshift(i),t.activityBody=null})},i.fetch().success(function(i){t.activities=i})}]),angular.module("app").service("ActivitiesSvc",["$http",function(t){this.fetch=function(){return t.get("/api/activities")},this.create=function(i){return t.post("/api/activities",i)}}]);