window.angular.module('ngff.services.titles', [])
  .factory('Titles', ['$resource', 
    function($resource){
      return $resource(
        'titles/:titleId', 
        {
          titleId:'@_id'
        }, 
        {
          update: {method: 'PUT'}
        }
      )
    }]);