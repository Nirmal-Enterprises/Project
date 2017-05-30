var app = angular.module("myApp", ['ui.router','ui.bootstrap']);
app.config(function($stateProvider,$urlRouterProvider){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
        
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
            url: '/home',
            templateUrl: '../views/products.html'
        })
        .state('products', {
            url: '/products',
            templateUrl: '../views/data.html'
        })
        .state('productinfo', {
            url: '/productinfo',
            templateUrl: '../views/preview.html' 
        })
         .state('contact', {
            url: '/contactus',
            templateUrl: '../views/contact.html',
        });
});

app.controller('categoryCtrl',['$scope' ,'$http', 'homeService', '$timeout','$anchorScroll', function ($scope, $http,homeService,$timeout ,$anchorScroll)    {
/*$scope.etalage = "etalage";

    $(window).resize(function() {
        //do something
        var width = $(document).width();
        if (width < 1025) {
            alert(width);
            $scope.etalage = "";
        }
    });*/
$scope.submitted=false;
    $scope.showModal=false;
    $scope.showPage=false;
    var callAtTimeout = function() {
            $scope.showPage =true;
    }

    $timeout(callAtTimeout, 5000);
   
    $scope.scrollToId= function(){
        $anchorScroll('products');
        //document.getElementById('products').scrollIntoView();
    };
    
    $scope.scrollToTop = function(){
        window.scrollTo(0, 0);
    };
    
    //$scope.productItemType = null;
    $scope.productItemSubType = null;
    $scope.productItemType = null;
     $http.get("../data/products.json").then(function(response) {
        $scope.items = response.data.items;
         $scope.products = response.data.products;
         $scope.appliances = response.data.domestic_appliances;
      });
    
    //setting product type/Category
    $scope.setData = function(data){
        //$scope.scrollToId();
        $scope.productItemSubType = null;
        $scope.productItemType = data;
    };
    
    //setting sub type for domestic appliance
    $scope.setProductData = function(data){
        $scope.productItemSubType = data;
    };
    
    //setting product for Preview
    $scope.setProduct = function(data){
        homeService.redirectData(data);
    }
    //toggling modal
    $scope.openModal = function(){
        $scope.showModal = !$scope.showModal;
    }
$scope.submitQuery = function (form) {
var formElement = angular.element(form);
var formValid = formElement[0].$valid;
//console.log(elem[0].$valid);
$scope.submitted=true;
if (formValid){
var to="tapeshkumar93@gmail.com";
var cc= "vicksjain2@gmail.com";

//document.getElementById("message").textContent = "";

var request = $http({
    method: "post",
    url: "http://nirmalenterprises.co/views/contact-us-send.php",
    data: {
        name: $scope.name,
        to: to,
        cc: cc,
        email: $scope.email,
        phone: $scope.phone,
        enquiry: $scope.enquiry
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;' }
}).then(function (data) {
    if(data.data == 1){
//document.getElementById("message").textContent = "Your Query was received successfully :)";
$scope.modalHeader = "Successful";
$scope.modalBody = "Your query is recieved successfully. We will get back to you soon.";
$scope.email="";
$scope.enquiry="";
$scope.phone="";
$scope.name="";
$scope.submitted=false;
$scope.showModal=true;
}
else {
$scope.modalHeader = "Something Went Wrong";
$scope.modalBody = "Please try Again, Or reach out to us at +91-9677242274.";
}
});
/* Check whether the HTTP Request is successful or not. */
}
}


    //filter for the display List
    $scope.myFilter = function(product){
        if($scope.productItemType == 'Domestic Appliances' && !$scope.productItemSubType)
            return null;
        else
            if(product.sub_type)
                return product.sub_type == $scope.productItemSubType;
            else
                return product.type == $scope.productItemType ;
    };
        }]);


app.directive('onlyNumbers', function () {
    return  {
        restrict: 'A',
        link: function (scope, elm, attrs, ctrl) {
            elm.on('keydown', function (event) {
                if(event.shiftKey){event.preventDefault(); return false;}
                //console.log(event.which);
                if ([8, 13, 27, 37, 38, 39, 40].indexOf(event.which) > -1) {
                    // backspace, enter, escape, arrows
                    return true;
                } else if (event.which >= 49 && event.which <= 57) {
                    // numbers
                    return true;
                } else if (event.which >= 96 && event.which <= 105) {
                    // numpad number
                    return true;
                } 
                // else if ([110, 190].indexOf(event.which) > -1) {
                //     // dot and numpad dot
                //     return true;
                // }
                else {
                    event.preventDefault();
                    return false;
                }
            });
        }
    }
});
