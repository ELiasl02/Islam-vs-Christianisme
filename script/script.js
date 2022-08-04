var start = function() {
	var ids=document.getElementsByTagName('body')[0]
	console.log(ids.id)
	if (ids.id=='home'){
    	french_home();
	}
	else if (ids.id=='bible'){
		french_bible();
	}
}

window.addEventListener('load',start);

var french_home = function(){
    console.log('asdasd');
    var body = document.getElementsByTagName('body')[0]; 
    body.innerHTML=`
        <header>Christianisme vs Islam</header>
	        <nav class="navbar" id="ref">
			<li class="nav"><a href="./home.html">Home</a></li>
			<li class="nav"><a href="./bible.html">Que dit la Bible sur Muhammed?</a></li>
			<li class="nav"><a href="./quran.html">Que dit le Coran sur Jesus?</a></li>
			<li class="nav"><a href="./crucifixion.html">Crucifiction?</a></li>
			<li class="nav"><a href="./contradiction.html">Contradictions dans la bible?</a></li>
			<li class="nav"><a href="./miracles.html">Miracles du Coran?</a></li>
                </nav>
		    <div class="text">
		    <figure>
			    <img src="./images/islam_vs_christianity.jpg" alt="Islam vs Christianisme">
		    </figure>
		    <h1 class="titre">Pourquoi j'ai créé ce site?</h1>
		    <div class="intro"><div class="text">Je m’appelle Elias Lachhab, 19 ans, étudiant à Polytech Lille. Je viens d'une famille catholique, j'ai grandi catholique et j'étais chrétien pour plus de 16 ans de ma vie. Personnellement j'ai tous jour été interesse par les religions abrahamiques.
            Je connaissais assez bien ma religion mais je n'ai jamais compris le principe de la Trinite. Je me suis donc mis à lire la Bible et à questionner l'enseignement de l'église, de la Trinite, Noël, Pâques etc.
            Durant ma lecture j'ai rencontré plusieurs problèmes comme:  </div>
			    <ul><li>Jésus na jamais proclamer divinité, au contraire il dit qu'il n'est rien sans Dieu: "<em class="citation">Je ne puis rien faire de moi-même: d’après ce que j’entends, je juge; et mon jugement est juste, parce que je ne cherche pas ma volonté, mais la volonté de celui qui m’a envoyé.</em>" (Jean 5:30)</li>
				    <li>Jésus prechait monothéisme: "<em class="citation">Jésus répondit: Voici le premier: Ecoute, Israël, le Seigneur, notre Dieu, est l’unique Seigneur", "Jésus lui dit: Pourquoi m'appelles-tu bon? Il n'y a de bon que Dieu seul."</em>" (Marc 12:29, Marc 10:18) </li>
				    <li>Jésus ne connaissait pas l'heure du jour du jugement: "<em class="citation">“Pour ce qui est du jour ou de l’heure, personne ne le sait, ni les anges dans le ciel, ni le Fils, mais le Père seul.“</em>" (Mark 13:32)</li>
				    <li>Jésus ne connaissait pas la saison des figues alors que Dieu sait tout...: "<em class="citation">Le lendemain, après qu'ils furent sortis de Béthanie, Jésus eut faim. Apercevant de loin un figuier qui avait des feuilles, il alla voir s'il y trouverait quelque chose; et, s'en étant approché, 
					    il ne trouva que des feuilles, car ce n'était pas la saison des figues. Prenant alors la parole, il lui dit: Que jamais personne ne mange de ton fruit! Et ses disciples l'entendirent."</em> (Marc 11:12-14)</li>
				    <li>Si on lit bien et prends en compte tous les faits historiques, et les prophecies de la Bible on peut prouver grace à la Bible que la crucifixion de Jésus n'est jamais arrivé (lire <a href="./crucifixion.html" id="crucifixion">ICI</a>)</li>
			
			
			    </ul>
			    <div class="text">Puis après plus de recherche je me suis retrouvé avec le fait que le christianisme qu'on connaît aujourd'hui n'a rien à voir avec les enseignements de Jésus, car Jésus dit dans Matthieu 5:17: <em class="citation">"Ne croyez pas que je sois venu pour abolir la loi ou les prophètes; 
				    je suis venu non pour abolir, mais pour accomplir."</em> et on voit aujourd'hui les chrétiens qui mangent du porc, boivent de l'alcool, la homosexualité dans l'église et bien d'autre. On peut remarque que les chrétiens d'aujourd'hui suivent plus apôtre Paul que Jésus même si les enseignements des deux se contredisent. 
				    C'est pour ça qu'Ahmed Deedat a dit que Paul est le vrai fondateur du christianisme comme on le connaît aujourd'hui. En plus si on regarde les disciples de Jésus qui étaient en vie et qui ont vécu avec Jésus n'ont jamais cru que Jésus est actuellement Dieu mais un prophète de Dieu comme c'est prophétise dans la Torah. 
                    Bien sûr, Paul ne prêchait pas tous les choses citent au-dessus mais les enseignements entre Jésus et Paul se contredisent très souvent. Jésus dit qu'il faut garder la loi (Ancien Testament) et Paul dit que la loi est clouée à la croix, donc pas besoin de la respecte.
				
			    </div>
		    </div>


            <footer id="footer">Lire:
                <form action="./bible.html"><button id="bible"></button></form>
                <form action="./quran.html"><button id="quran"></button></form>
                <form action="./crucifixion.html"><button id="crucifiction"></button></form>
                <form action="./contradiction.html"><button id="contradictions"></button></form>
                <form action="./miracles.html"><button id="miracles"></button></form>
            </footer>`;
        }

var french_bible = function(){

}