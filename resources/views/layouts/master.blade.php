<!DOCTYPE html>
<html lang="{{ $_SERVER['APP_LOCALE'] }}">
<head>
    @section('head')
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="JUMDUM (TBS)">
        <title>Domainzter</title>

        <!-- CSS -->
        <link href="/assets/css/lib.css" rel="stylesheet">
        <link href="/assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
        <link href="/assets/css/app.css" rel="stylesheet">

        <!-- favicon -->
        <link rel="icon" href="/assets/img/favicon.ico"/>
        <!--[if IE]>
        <link rel="shortcut icon" href="/assets/img/favicon.ico"/><![endif]-->

        <!-- Fonts -->
        <link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    @show
</head>
<body ng-app="app">
    <!-- wrapper page -->
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <div class="headline col-md-12 text-center">
                    <img src="/assets/img/domainzter-logo-xxs.png" alt=""/> Domainzter
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center">
                    @include('components.flash')
                </div>
            </div>
            <div class="row">

                <div class="col-md-3">
                    <div class="panel-standard menu-standard">
                        <span class="title-grey">menu</span>
                        <ul>
                            <li>
                                <a href="{{ route('pdp.home') }}"><i class="fa fa-folder"></i> Domains</a>
                            </li>
                            <li>
                                <a href="{{ route('pdp.categories') }}"><i class="fa fa-folder"></i> Categories</a>
                            </li>
                            <li>
                                <a href="{{ route('pdp.settings') }}"><i class="fa fa-gear"></i> Settings</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-9">
                    <!-- body-content -->
                    @yield('content')
                    <!--end body-content -->
                </div>
            </div>
        </div>
    </div>
    <!-- end wrapper page -->

    <script src="/assets/js/lib.js"></script>
    <script src="/assets/js/app.js"></script>
    <script src="/assets/js/jq.js"></script>
</body>
</html>