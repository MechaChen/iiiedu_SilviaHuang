<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        h3 {
            font: 24px Tahoma;
            font-weight: 500;
        }
    </style>
    <title>QRcode Generator</title>
</head>
<body>
    <?php
        $source = $_GET["source"];
    ?>
    <h3><?php echo $source . $rand; ?></h3>
    <div id="source"></div>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
    <script src="jquery.qrcode.min.js"></script>
    <script>
        $("#source").qrcode({
            text: "<?php echo $_GET["source"]; ?>",
            width: 150,
            height: 150
        }
      );
    </script>
</body>
</html>