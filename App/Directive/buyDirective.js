/**
 * Created by Administrator on 2017/10/18.
 */
app.directive("buy",function(){
    return {
        restrict:"EA",
        scope:{
            obj:"=obj",
            index:"@index"
        },
        templateUrl:"App/View/temp/_buy.html",
        controller:"buyObjController"
    }
});