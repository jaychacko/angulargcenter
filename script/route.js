app.config(function ($stateProvider,$urlRouterProvider,    $locationProvider
) {



    $urlRouterProvider.otherwise('/home')


    $stateProvider.state('home',
        {

            url: '/home',
            templateUrl: '../html/home.html',
            controller: 'myctrl'


        })

        .state('products',

            {

                url: '/products',
                templateUrl: '../html/products.html',
                controller: 'myctrl'


            })
        .state('gcpro',

            {

                url: '/gcpro',
                templateUrl: '../html/gcpro.html',
                controller: 'myctrl'


            })
        .state('lessons',

            {

                url: '/lessons',
                templateUrl: '../html/lessons.html',
                controller: 'myctrl'


            })
        .state('outlet',

            {

                url: '/outlet',
                templateUrl: '../html/outlet.html',
                controller: 'myctrl'


            })
        .state('platinum',

            {

                url: '/platinum',
                templateUrl: '../html/platinum.html',
                controller: 'myctrl'


            })
        .state('rental',

            {

                url: '/rental',
                templateUrl: '../html/rental.html',
                controller: 'myctrl'


            })
        .state('repairs',

            {

                url: '/repairs',
                templateUrl: '../html/repairs.html',
                controller: 'myctrl'


            })
        .state('usedgear',

            {

                url: '/usedgear',
                templateUrl: '../html/usedgear.html',
                controller: 'myctrl'


            })
        .state('vintage',

            {

                url: '/vintage',
                templateUrl: '../html/vintage.html',
                controller: 'myctrl'


            })

})
