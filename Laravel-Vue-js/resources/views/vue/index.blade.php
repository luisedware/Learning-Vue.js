<!doctype html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>Vue Demo</title>
    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
</head>
<body id="app" class="container">
    <public-grid
            :data="{{$data}}"
            :handle="{{$handle}}"
            :columns="{{$columns}}"></public-grid>
<script type="text/javascript" src="{{asset('js/main.js')}}"></script>
</body>
</html>