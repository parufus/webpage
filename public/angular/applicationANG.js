angular.module('clientsApp',['ngRoute','ngResource'])
  .factory('Clients',['$resource', function($resource){
    return $resource('/api/clients/:id', null, {
        'update':{method:'PUT'}
    });
}])

  .controller('ClientsController', ['$scope','Clients', function($scope, Clients){
     $scope.clients = Clients.query();

     $scope.save = function(){
         if(!$scope.newClient  || $scope.newClient.length < 1) return;
         var client = new Clients({
             firstName:$scope.firstName,
             middleName: $scope.middleName,
             lastName: $scope.lastName,
             nickname: $scope.nickname,
             dateOfBirth: $scope.dateOfBirth,
             gender:$scope.gender,
             phone:$scope.phone,
             address1:$scope.address1,
             address2:$scope.address2,
             town:$scope.city,
             state:$scope.state,
             zipcode:$scope.zipcode,
             email:$scope.email
         });
         client.$save(function(){
             $scope.clients.push(client);
         })
     }
    }])


    .controller('textsControllerScope',['$scope', function($scope){
        $scope.texts=[
            {title:'Shang Han Lun',
                published: '220CE',
                author:['Zhang Zhong Jing', 'Hula Hula Sam'],
                id:4784728247,
                description:[
                    {language:'eng',
                        text:'this is a book about cold damage, and one of the first practical clinical manuals in Chinese medicine',
                        references:[{}]},
                ]},
            {title:'Jin Gui Yao Lue',
                published:'220CE',
                author:['Zhang Zhong Jing'],
                id:40973140871304,
                description:[
                    {language:'eng',
                        text:'this is another book from the author of the Shang Han Lun which reflects a broader range of disorders.'}]}

        ]}
    ]);