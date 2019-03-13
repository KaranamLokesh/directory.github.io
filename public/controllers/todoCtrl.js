var app = angular.module('myApp', []); 

app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'Lokesh',
                        todoAddNumber:'9883456123',
                        done:false}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput.Name, todoAddNumber:$scope.todoInput.Number,done:false});
         
       
        $scope.todoInput.Name = "";
        $scope.todoInput.Number = "";
        
    };
    

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
   
});
