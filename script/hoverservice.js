/**
 * Created by jay on 1/14/2017.
 */

app.factory = ('myservice',function($http){

    var factory ={};

    factory.sliderservice = function (i)  {


        $http.get("../json/myJson.json")
            .then(function(response) {
                ctrl.sdata = response.data;

                jdata = jdata+i;

                if (jdata < 0) {

                    jdata = ctrl.sdata.allProducts.length - 1;
                }

                if (jdata > ctrl.sdata.allProducts.length - 1) {

                    jdata = 0;
                }

                $scope.showprice = ctrl.sdata.allProducts[jdata].price;
                $scope.showavail = ctrl.sdata.allProducts[jdata].stockavailability;
                $scope.showdescribe = ctrl.sdata.allProducts[jdata].discription;
                $scope.showreview = ctrl.sdata.allProducts[jdata].custmerreviews;
                $scope.showimage = ctrl.sdata.allProducts[jdata].image;

                console.log($scope.showprice);
                console.log($scope.showimage);
                console.log($scope.showdescribe);





            })
    }
return factory;



})