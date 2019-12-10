var haslo = "Nie chwal dnia przed zachodem słońca";
haslo = haslo.toUpperCase();
var ileSkuch = 0;
var haslo1 = "";

for(i = 0; i< haslo.length; i++){
    if(haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function wypiszHaslo(){
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = pokazplansze;

var litery = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";
function pokazplansze()
{

    var trescdiva ="";

    for(i=0; i<litery.length; i++){
        var element = "lit" +i;
        trescdiva = trescdiva + '<div class ="litera" onclick="sprawdz('+i+')" id ="'+element+'">'+litery.charAt(i)+'</div>';
        
        if((i +1) % 7 ==0) trescdiva = trescdiva + '<div style ="clear:both;"></div>'
    }

    document.getElementById("alfabet").innerHTML = trescdiva;

    wypiszHaslo();
}


String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
    var trafiona = false;
    
    for(i = 0; i <haslo.length; i++)
    {
        if(haslo.charAt(i) == litery.charAt(nr))
        {

        haslo1 = haslo1.ustawZnak(i, litery.charAt(nr));
        trafiona = true;
            
        }
    }
    if(trafiona == true) {

        var element = "lit" +nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";


        wypiszHaslo();

    }
    else{
        var element = "lit" +nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");



     	//skucha
		ileSkuch++;
		var obraz = "img/s"+ ileSkuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if (haslo == haslo1)
	document.getElementById("alfabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	
	//przegrana
	if (ileSkuch>=9)
	document.getElementById("alfabet").innerHTML  = "Przegrana! Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}



    


