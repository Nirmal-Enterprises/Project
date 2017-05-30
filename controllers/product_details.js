app.controller('product_details',['$scope' ,'$http','homeService', function ($scope, $http,homeService){
             
            $scope.productDetail = homeService.redirectDataObj();
    
    var getFeatures = function(){
        var featuresList = "";
        if($scope.productDetail.features){
            var featuresList = $scope.productDetail.features.split(".,");
        };
        return featuresList;
    };
     var getSpecs = function(){
        var specsList = "";
        if($scope.productDetail.specs){
            var specsList = $scope.productDetail.specs.split(".,");
        };
        return specsList;
    };
    $scope.features = getFeatures();
    $scope.specs = getSpecs();
            
    
    }]);


