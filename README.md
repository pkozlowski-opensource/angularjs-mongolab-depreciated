#angularjs-mongolab
## Introduction

This repository hosts a Mongolab [$resource](http://docs.angularjs.org/api/ngResource.$resource) adapter for [AngularJS](http://angularjs.org/). 

This is a small wrapper around the AngularJS $resource that makes setting up and working with MongoLab easy. It significient reduces the amount of boilerplate code one needs to write when interacting with MongoDB / MongoLab (especially around URLs handling, resource objects creation and identifiers handling).

## Examples
To see it in action check this jsFiddle: (http://jsfiddle.net/pkozlowski_opensource/3EPjK/2/)

Alternatively you might have a look at the [example](https://github.com/pkozlowski-opensource/angularjs-mongolab/blob/master/example.html) in this repository.

## Usage instructions

Firstly you need to include both ngResource module and the mongolab.js script from this repository (see examples above for the exact URLs). Then, you need to configure 2 parameters:
* MongoLab key
* database name

Configuration parameters needs to be specified as constants on an application's module:
```JavaScript
var app = angular.module('app', ['mongolabResource']);

app.constant('API_KEY', '[your MongoLab key here]');
app.constant('DB_NAME', 'angularjs');
```
Then, creating new resources is very, very easy and boils down to calling `$mongolabResource` with a MongoDB collection name:
```JavaScript
app.factory('Project', function ($mongolabResource) {
  return $mongolabResource('projects');
});
```
As soon as the above is done you are ready to inject and use a freshly created resource in your services and controllers:
```JavaScript
app.controller('AppController', function ($scope, Project) {
  $scope.projects = Project.query();
});
```