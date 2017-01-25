
app.controller('myctrl',function ($scope,$http) {

    $scope.productpage = " Product Page";
    $scope.gcpro =  " Gc-pro Page";
    $scope.lessons =" Lessons Page";
    $scope.outlet =" Outlet Page";
    $scope.platinum ="The platinum Page";
    $scope.rental =" Rental Page";
    $scope.repairs =" Repairs Page";
    $scope.usedgear ="Usedgear Page";
    $scope.vintage =" Vintage Page";


    var jdata=0;
    var ctrl =this;
    $scope.reveal= function (){

        $scope.showsub=true;


    }

    $scope.notreveal= function(){

        $scope.showsub=false;
    }

    $http.get("../json/myJson.json")
        .then(function(response) {
            ctrl.sdata = response.data;
            console.log(ctrl.sdata);

            $scope.showprice = ctrl.sdata.allProducts[0].price;
            $scope.showavail = ctrl.sdata.allProducts[0].stockavailability;
            $scope.showdescribe= ctrl.sdata.allProducts[0].discription;
            $scope.showreview = ctrl.sdata.allProducts[0].custmerreviews;
            $scope.showimage = ctrl.sdata.allProducts[0].image;






        });

 $scope.slider= function (i)  {


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
    };






});