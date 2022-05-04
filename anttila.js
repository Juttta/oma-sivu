//yksi oikein, kolme väärin 5x
//nappia painamalla tulee onko vastannut oikein 5/5 
//Väri koodit jos kerkeää

document.getElementsByClassName('container1')[0].style.display = "block";

function next(id){
    document.getElementsByClassName('container1')[id-1].style.display = "none";
    document.getElementsByClassName('container1')[id].style.display = "block";
}

function result(){
    var score = 0;
    if(document.getElementById('Kielo').checked){
        score++;
    }
    if(document.getElementById('Karhu').checked){
        score++;
    }
    if(document.getElementById('Kantele').checked){
        score++;
    }
    if(document.getElementById('Ahven').checked){
        score++;
    }
    if(document.getElementById('Rauduskoivu').checked){
        score++;
    }

    alert("Vastauksesi on:" + score);
}