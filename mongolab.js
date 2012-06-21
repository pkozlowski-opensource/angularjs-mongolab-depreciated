angular.module('mongolabResource', ['ngResource']).factory('$mongolabResource', function ($resource, API_KEY, DB_NAME) {

    function MmongolabResourceFactory(collectionName) {

        var resource = $resource('https://api.mongolab.com/api/1/databases/' + DB_NAME + '/collections/' + collectionName + '/:id',
            { apiKey:API_KEY, id:'@_id.$oid'}, { update:{ method:'PUT' } }
        );

        resource.prototype.update = function (cb) {
            return resource.update({id:this._id.$oid}, angular.extend({}, this, {_id:undefined}), cb);
        };

        resource.prototype.remove = function (cb) {
            return resource.remove({id:this._id.$oid}, cb);
        };

        return resource;
    }

    return MmongolabResourceFactory;
});