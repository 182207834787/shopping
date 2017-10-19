/**
 * Created by Administrator on 2017/10/18.
 */
app.factory("buyServer", ["baseServer", function (baseServer) {
    return {
        getData: function (type,url) {
            return baseServer.ajax(type,url);
        }
    }
}]);