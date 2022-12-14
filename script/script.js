var start = function() {
	var ids=document.getElementsByTagName('body')[0]
	var h2=document.getElementsByTagName('h2')
	var h3=document.getElementsByTagName('h3')
	for (var i=0; i<h2.length;i++){
		h2[i].addEventListener('click',hide_h2);}
	for (var i=0; i<h3.length;i++){
		h3[i].addEventListener('click',hide_h3);}
	if (ids.id=='home'){
    	french_home();
	}
	else if (ids.id=='bible'){
		french_bible();
	}



};

window.addEventListener('load',start);


var hide_h2 = function(){
	var text=document.getElementById('text-'+this.id)
	var style=getComputedStyle(text)
	if (style.display=='block'){
		text.style.display='none'
	} else{
		text.style.display='block'
	};
};
var hide_h3 = function(){
	var text=document.getElementById('div-'+ this.id.replace('h-',''));
	var style = getComputedStyle(text);
	if (style.display=='block'){
        text.style.display="none"
  	} else{
    	text.style.display="block"
  	}
};
	

var french_home = function(){
    console.log('asdasd');
    var body = document.getElementsByTagName('body')[0];
	body.innerHTML=`
	<header>Christianisme vs Islam</header>
	<nav class="navbar navbar-expand-lg navbar-dark bg-secondary" id='nav'>
		<a class="navbar-brand" href="./index.html">Home</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
		  <ul class="navbar-nav mr-auto">
			<li class="nav-item active">
			  <a class="nav-link active" href="./index.html">Home</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="./bible.html">Mohammed dans la Bible?</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="./quran.html">Jesus dans le Coran?</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="./crucifixion.html">La cruci-fiction?</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="./contradiction.html">Des contradictions dans la Bible?</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="./miracles.html">Des miracles dans le coran?</a>
			</li>
		  </ul>
	  
	  </nav>
		<div>
		<figure>
			<img src="./images/islam_vs_christianity.jpg" alt="Islam vs Christianisme">
		</figure>
		<h1 class="titre">Pourquoi j'ai cr???? ce site?</h1>
		<div class="intro"><div>Je m???appelle Elias Lachhab, 19 ans, ??tudiant ?? Polytech Lille. Je viens d'une famille catholique, j'ai grandi catholique et j'??tais chr??tien pour plus de 16 ans de ma vie. Personnellement j'ai tous jour ??t?? interesse par les religions abrahamiques.
		Je connaissais assez bien ma religion mais je n'ai jamais compris le principe de la Trinite. Je me suis donc mis ?? lire la Bible et ?? questionner l'enseignement de l'??glise, de la Trinite, No??l, P??ques etc.
		Durant ma lecture j'ai rencontr?? plusieurs probl??mes comme:  </div>
			<ul><li>J??sus na jamais proclamer divinit??, au contraire il dit qu'il n'est rien sans Dieu: "<em class="citation">Je ne puis rien faire de moi-m??me: d???apr??s ce que j???entends, je juge; et mon jugement est juste, parce que je ne cherche pas ma volont??, mais la volont?? de celui qui m???a envoy??.</em>" (Jean 5:30)</li>
				<li>J??sus prechait monoth??isme: "<em class="citation">J??sus r??pondit: Voici le premier: Ecoute, Isra??l, le Seigneur, notre Dieu, est l???unique Seigneur", "J??sus lui dit: Pourquoi m'appelles-tu bon? Il n'y a de bon que Dieu seul."</em>" (Marc 12:29, Marc 10:18) </li>
				<li>J??sus ne connaissait pas l'heure du jour du jugement: "<em class="citation">???Pour ce qui est du jour ou de l???heure, personne ne le sait, ni les anges dans le ciel, ni le Fils, mais le P??re seul.???</em>" (Mark 13:32)</li>
				<li>J??sus ne connaissait pas la saison des figues alors que Dieu sait tout...: "<em class="citation">Le lendemain, apr??s qu'ils furent sortis de B??thanie, J??sus eut faim. Apercevant de loin un figuier qui avait des feuilles, il alla voir s'il y trouverait quelque chose; et, s'en ??tant approch??, 
					il ne trouva que des feuilles, car ce n'??tait pas la saison des figues. Prenant alors la parole, il lui dit: Que jamais personne ne mange de ton fruit! Et ses disciples l'entendirent."</em> (Marc 11:12-14)</li>
				<li>Si on lit bien et prends en compte tous les faits historiques, et les prophecies de la Bible on peut prouver grace ?? la Bible que la crucifixion de J??sus n'est jamais arriv?? (lire <a href="./crucifixion.html" id="crucifixion">ICI</a>)</li>
		
		
			</ul>
			<div>Puis apr??s plus de recherche je me suis retrouv?? avec le fait que le christianisme qu'on conna??t aujourd'hui n'a rien ?? voir avec les enseignements de J??sus, car J??sus dit dans Matthieu 5:17: <em class="citation">"Ne croyez pas que je sois venu pour abolir la loi ou les proph??tes; 
				je suis venu non pour abolir, mais pour accomplir."</em> et on voit aujourd'hui les chr??tiens qui mangent du porc, boivent de l'alcool, la homosexualit?? dans l'??glise et bien d'autre. On peut remarque que les chr??tiens d'aujourd'hui suivent plus ap??tre Paul que J??sus m??me si les enseignements des deux se contredisent. 
				C'est pour ??a qu'Ahmed Deedat a dit que Paul est le vrai fondateur du christianisme comme on le conna??t aujourd'hui. En plus si on regarde les disciples de J??sus qui ??taient en vie et qui ont v??cu avec J??sus n'ont jamais cru que J??sus est actuellement Dieu mais un proph??te de Dieu comme c'est proph??tise dans la Torah. 
				Bien s??r, Paul ne pr??chait pas tous les choses citent au-dessus mais les enseignements entre J??sus et Paul se contredisent tr??s souvent. J??sus dit qu'il faut garder la loi (Ancien Testament) et Paul dit que la loi est clou??e ?? la croix, donc pas besoin de la respecte.
			
			</div>
		</div>


		<footer id="footer">Lire:
			<form action="./bible.html"><button id="bible"></button></form>
			<form action="./quran.html"><button id="quran"></button></form>
			<form action="./crucifixion.html"><button id="crucifiction"></button></form>
			<form action="./contradiction.html"><button id="contradictions"></button></form>
			<form action="./miracles.html"><button id="miracles"></button></form>
		</footer>
		`
}
var french_bible = function(){
return 1
};
