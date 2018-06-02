<?php echo'
<div id="hdbd" class="header"> 
	<img id="naslov" src="res/logo.png" alt="logo"> 
	<iframe id="clock" src="http://free.timeanddate.com/clock/i69akwaz/n3394/szw210/szh210/hoc000/hbw0/hfc5659ad/cf100/hgr0/hwc000/fan2/facfff/fnu2/fdi76/mqcfff/mqs4/mql18/mqw4/mqd60/mhcfff/mhs4/mhl5/mhw4/mhd62/mmv0/hhcfff/hhs1/hhb10/hmcfff/hms1/hmb10/hscfff/hsw3" frameborder="0" width="210" height="210"></iframe> 
	<div id="navigatormov" class="navigator"> 
		<div class="dropdown hiddenation"> 
			<button onclick="goHome()" class="dropbtn hvr-shutter-out-horizontal">Почетна</button> 
		</div> 
		<div class="dropdown hiddenation"> 
			<button class="dropbtn hvr-shutter-out-horizontal">Упис</button> 
			<div class="dropdown-content"> 
				<a class="" href="prijava_za_upis.php">Пријава за упис</a> 
				<a href="smerovi.php">Смерови</a> 
			</div> 

		</div> 
		<div class="dropdown hiddenation"> 
			<button class="dropbtn hvr-shutter-out-horizontal">Ученици</button> 
			<div class="dropdown-content"> 
				<a class="hrv-underline-from-center" href="#">Такмичења</a> 
				<a href="aktivnosti.php">Активности</a> 
				<a href="parlament.php">Ученички парламент</a> 
			</div> 
		</div> 
		<div class="dropdown hiddenation"> 
			<button class="dropbtn hvr-shutter-out-horizontal">Библиотека</button> 
			<div class="dropdown-content"> 
				<a class="hrv-underline-from-center" href="#">Каталог књига</a> 
				<a href="#">Резервиши књигу</a> 
				<a href="bibl.php">О библиотеци</a> 
			</div> 
		</div> 
		<div class="dropdown hiddenation"> 
			<button class="dropbtn hvr-shutter-out-horizontal">Документи</button> 
			<div class="dropdown-content"> 
				<a class="hrv-underline-from-center" href="#">Правилници</a> 
				<a href="kalendar.pdf">Календар рада</a> 
				<a href="grogi.php">Школски часопис</a> 
			</div> 
		</div> 
		<div  class="dropdown hiddenation"> 
			<button onclick="goHistory()" class="dropbtn hvr-shutter-out-horizontal">Историјат</button> 
		</div> 
	</div> 
	<div  id="showation" class="dropdown" style=""> 
		<button class="dropbtn hvr-shutter-out-horizontal" style="width: 90%;">Главни мени</button> 
	</div> 
</div>

<div id="mvhd" class="moveableheader" style="margin-top: 16px;">
	<img id="naslovmin" style="width:40%; height: auto; float: left;" src="res/minlogo.png" alt="logo">
	<div id="navigatormov" class="navigator_min" style="">
		<div class="dropdown hiddenation">
			<button function="goHome()" class="dropbtn hvr-shutter-out-horizontal">Почетна</button>
		</div>
		<div class="dropdown hiddenation">
			<button class="dropbtn hvr-shutter-out-horizontal">Документи</button>
			<div class="dropdown-content">
				<a class="hrv-underline-from-center" href="#">Правилници</a>
				<a href="kalendar.pdf">Календар рада</a>
				<a href="statut.pdf">Статут школе</a>
			</div>

		</div>
		<div class="dropdown hiddenation">
			<button class="dropbtn hvr-shutter-out-horizontal">Ученици</button>
			<div class="dropdown-content">
				<a class="hrv-underline-from-center" href="#">Такмичења</a>
				<a href="aktivnosti.php">Активности</a>
				<a href="parlament.php">Ученички парламент</a>
			</div>
		</div>
		<div class="dropdown hiddenation">
			<button onclick="goHistory()" class="dropbtn hvr-shutter-out-horizontal">Историјат</button>
		</div>
	</div>
</div>
'; ?>
