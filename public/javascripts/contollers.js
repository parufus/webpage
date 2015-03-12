var webBlogAPP = angular.module('webBlogApp', []);

webBlogAPP.controller('blogContentController', function ($scope) {
    $scope.blogs = [
        {'title': 'Nexus S',
            'text': 'Fast just got faster with Nexus S.'},
        {'title': 'Motorola XOOM™ with Wi-Fi',
            'text': 'The Next, Next Generation tablet.'},
        {'title': 'MOTOROLA XOOM™',
            'text': 'The Next, Next Generation tablet.'}
    ];
});