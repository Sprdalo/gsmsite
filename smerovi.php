<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Гимназија "Светозар Марковић", Ниш</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <script src="js/hubscript.js"></script>
  <style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
  </style>
  <!-- Za ispis tabela -->
  <?php include 'smerovi_def.php' ?>
</head>
<body style="background-image: url('res/whiteness.png');">
  <?php include 'header.php'; ?>
  <div class="row">
    <div class="column left">
      <!-- News 1 -->
      <div class="news hvr-grow" style="background-color:#fff;">
        <div class="titleholder">
          <img src="res/library.jpg" alt="newsphoto" style="width: 100%;">
          <img id="imgico" style="margin-top: -50px;" src="res/school.png" alt="newsicon">
          <span id="newstitle2" style="margin-left: 1%;">Смерови у нашој школи!</span>
        </div>
        <div style="padding-left: 2%; padding-right:1%">
          <h2 id = "hederprirodno">Природно-математички смер</h2>
		  <?php print_high($prirodno); ?>

          <h2 id = "heder">Специјално одељење за ученике обдарене за математику</h2>
          <?php print_high($specmat); ?>
          <p id="dodatak1">*Факултативни предмети</p>
          <p id="dodatak2">**Часови вежби</p>

          <h2 id = "heder">Специјално одељење за ученике основне школе обдарене за математику</h2>
          <?php print_elem($specosnovna); ?>
          <p id="dodatak3">*Предмети чија се настава одржава током једног полугодишта</p>
          <p id="dodatak4">**Смањен број часова у другом полугодишту</p>

          <h2 id = "heder">Друштвено-језички смер</h2>
		  <?php print_high($drustveno); ?>
        </div>
      </div>
      <!-- News 1 end -->
    </div>
    <?php include 'column_right.php'; ?>
  </div>
</body>
</html>
<!-- W -->
