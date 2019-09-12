
    var puntaje = [0,0,0];

    function ronda(counter){
        if(counter == 1){      
            if(maquina() == 1){
                document.getElementById("match").innerHTML = '<div id="match">¡Empate!</div>';
                document.getElementById("empates").innerHTML = '<p id="empates">Empates :' + (puntaje[0] += 1) + '</p>';
            } else if(maquina() == 2){
                document.getElementById("match").innerHTML = '<div id="match">¡Ganaste!</div>';
                document.getElementById("victorias").innerHTML = '<p id="victorias">Victorias :' + (puntaje[1] += 1) + '</p>';
            } else {
                document.getElementById("match").innerHTML = '<div id="match">¡Perdiste!</div>';
                document.getElementById("derrotas").innerHTML = '<p id="derrotas">Derrotas :' + (puntaje[2] += 1) + '</p>';
            }
        } else if(counter == 2){
            if(maquina() == 2){
                document.getElementById("match").innerHTML = '<div id="match">¡Empate!</div>';
                document.getElementById("empates").innerHTML = '<p id="empates">Empates :' + (puntaje[0] += 1) + '</p>';
            } else if(maquina() == 1){
                document.getElementById("match").innerHTML = '<div id="match">¡Ganaste!</div>';
                document.getElementById("victorias").innerHTML = '<p id="victorias">Victorias :' + (puntaje[1] += 1) + '</p>';
            } else {
                document.getElementById("match").innerHTML = '<div id="match">¡Perdiste!</div>';
                document.getElementById("derrotas").innerHTML = '<p id="derrotas">Derrotas :' + (puntaje[2] += 1) + '</p>';
            }
        } else {
            if(maquina() == 3){
                document.getElementById("match").innerHTML = '<div id="match">¡Empate!</div>';
                document.getElementById("empates").innerHTML = '<p id="empates">Empates :' + (puntaje[0] += 1) + '</p>';
            } else if(maquina() == 2){
                document.getElementById("match").innerHTML = '<div id="match">¡Ganaste!</div>';
                document.getElementById("victorias").innerHTML = '<p id="victorias">Victorias :' + (puntaje[1] += 1) + '</p>';
            } else {
                document.getElementById("match").innerHTML = '<div id="match">¡Perdiste!</div>';
                document.getElementById("derrotas").innerHTML = '<p id="derrotas">Derrotas :' + (puntaje[2] += 1) + '</p>';
            }
        }
    }

    function maquina(){
        var maquinaDecision = Math.floor(Math.random() * (3 - 1 +1) + 1);
        return maquinaDecision;
    }
