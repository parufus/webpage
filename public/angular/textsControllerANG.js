var myApp=angular.module('textsController',['$scope']);

myApp.controller('textsControllerScope',['$scope', function($scope){
    $scope.texts=[
        {title:'Shang Han Lun',
        published: '220CE',
        author:'Zhang Zhong Jing',
        description:[
            {language:'eng',
            text:'this is a book about cold damage, and one of the first practical clinical manuals in Chinese medicine',
            references:[{}]},
        ]},
        {title:'Jin Gui Yao Lue',
        published:'220CE',
        author:'Zhang Zhong Jing',
        description:[
            {language:'eng',
            text:'this is another book from the author of the Shang Han Lun which reflects a broader range of disorders.'}]}

        ]}
]);