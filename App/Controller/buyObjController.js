/**
 * Created by Administrator on 2017/10/18.
 */
app.controller('buyObjController',function($scope){
    $scope.deleteObj = function(index){
        $scope.$emit('deleteObj',index);
    };

    $scope.objChecked = function(index){
        $scope.$emit('objChange',index);
    };

    $scope.objCount = function(flag){
        if(flag == '+'){
            $scope.obj.num += 1;
        }else{
            if($scope.obj.num<=1) return;
            $scope.obj.num -= 1;
        }
        $scope.$emit('countChange');
    }
});