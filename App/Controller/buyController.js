/**
 * Created by Administrator on 2017/10/18.
 */
app.controller('controller',['$scope','buyServer',function($scope,buyServer){

    buyServer.getData('get','http://localhost:8000/?buy').then(function(result){
        $scope.data = JSON.parse(result.data);
        price();
    });

    $scope.flag = false;

    $scope.$on('deleteObj',function(event,index){
        $scope.data.splice(index,1);
        price();
    });

    $scope.$on('countChange',function(event){
        price();
    });

    $scope.$on('objChange',function(event,index){
        var count = 0;
        $scope.data[index].state = !$scope.data[index].state;
        for(var i = 0;i<$scope.data.length;i++){
            if($scope.data[i].state){
                count++;
            }
        }
        if(count == $scope.data.length){
            $scope.flag = true;
        }else{
            $scope.flag = false;
        }
        price();
    });

    $scope.checkAll = function(){
        $scope.flag = !$scope.flag;
        for(var i = 0;i<$scope.data.length;i++){
            $scope.data[i].state = $scope.flag;
        };
        price();
    };

    function price(){
        $scope.goodsPrice = 0;
        $scope.goodsCount = 0;
        $scope.data.forEach(function(item,index){
            if(item.state){
                item.total = item.num * item.price;
                $scope.goodsPrice += item.num * item.price;
                $scope.goodsCount += item.num;
            }
        });
    }
}]);