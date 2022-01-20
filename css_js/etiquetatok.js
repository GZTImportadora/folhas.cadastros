function mostrar() {
    if ((document.getElementById('volumes').value < 2) || (document.getElementById('volumes').value > 10)){
        alert("Aceitamos no momento apenas volumes entre 2 e 10!");
        AbortController;

    }else

    if (document.getElementById('volumes').value == 2) {
        document.getElementById("volume3").style.display = 'none'
        var display = document.getElementById("volume2").style.display;
        if (display == "none")
            document.getElementById("volume2").style.display = 'block';
        else
            document.getElementById("volume2").style.display = 'none';

    } else if (document.getElementById('volumes').value == 3) {
        document.getElementById("volume2").style.display = 'none'
        document.getElementById("volume4").style.display = 'none'
        document.getElementById("volume5").style.display = 'none'
        document.getElementById("volume6").style.display = 'none'
        document.getElementById("volume7").style.display = 'none'
        document.getElementById("volume8").style.display = 'none'
        document.getElementById("volume9").style.display = 'none'
        document.getElementById("volume10").style.display = 'none'
        var display = document.getElementById("volume3").style.display;
        if (display == "none")
            document.getElementById("volume3").style.display = 'block';
        else
            document.getElementById("volume3").style.display = 'none';
    } else if (document.getElementById('volumes').value == 4) {
        document.getElementById("volume2").style.display = 'none'
        document.getElementById("volume3").style.display = 'none'
        document.getElementById("volume6").style.display = 'none'
        document.getElementById("volume5").style.display = 'none'
        document.getElementById("volume7").style.display = 'none'
        document.getElementById("volume8").style.display = 'none'
        document.getElementById("volume9").style.display = 'none'
        document.getElementById("volume10").style.display = 'none'
        var display = document.getElementById("volume4").style.display;
        if (display == "none")
            document.getElementById("volume4").style.display = 'block';
        else
            document.getElementById("volume4").style.display = 'none';
    } else if (document.getElementById('volumes').value == 5) {
        document.getElementById("volume2").style.display = 'none'
        document.getElementById("volume3").style.display = 'none'
        document.getElementById("volume4").style.display = 'none'
        document.getElementById("volume6").style.display = 'none'
        document.getElementById("volume7").style.display = 'none'
        document.getElementById("volume8").style.display = 'none'
        document.getElementById("volume9").style.display = 'none'
        document.getElementById("volume10").style.display = 'none'
        var display = document.getElementById("volume5").style.display;
        if (display == "none")
            document.getElementById("volume5").style.display = 'block';
        else
            document.getElementById("volume5").style.display = 'none';
    }else if (document.getElementById('volumes').value == 6) {
        document.getElementById("volume2").style.display = 'none'
        document.getElementById("volume3").style.display = 'none'
        document.getElementById("volume4").style.display = 'none'
        document.getElementById("volume5").style.display = 'none'
        document.getElementById("volume7").style.display = 'none'
        document.getElementById("volume8").style.display = 'none'
        document.getElementById("volume9").style.display = 'none'
        document.getElementById("volume10").style.display = 'none'
        var display = document.getElementById("volume6").style.display;
        if (display == "none")
            document.getElementById("volume6").style.display = 'block';
        else
            document.getElementById("volume6").style.display = 'none';
    }else if (document.getElementById('volumes').value == 7) {
        document.getElementById("volume2").style.display = 'none'
        document.getElementById("volume3").style.display = 'none'
        document.getElementById("volume4").style.display = 'none'
        document.getElementById("volume5").style.display = 'none'
        document.getElementById("volume6").style.display = 'none'
        document.getElementById("volume8").style.display = 'none'
        document.getElementById("volume9").style.display = 'none'
        document.getElementById("volume10").style.display = 'none'
        var display = document.getElementById("volume7").style.display;
        if (display == "none")
            document.getElementById("volume7").style.display = 'block';
        else
            document.getElementById("volume7").style.display = 'none';
    }else if (document.getElementById('volumes').value == 8) {
        document.getElementById("volume2").style.display = 'none'
        document.getElementById("volume3").style.display = 'none'
        document.getElementById("volume4").style.display = 'none'
        document.getElementById("volume5").style.display = 'none'
        document.getElementById("volume6").style.display = 'none'
        document.getElementById("volume7").style.display = 'none'
        document.getElementById("volume9").style.display = 'none'
        document.getElementById("volume10").style.display = 'none'
        var display = document.getElementById("volume8").style.display;
        if (display == "none")
            document.getElementById("volume8").style.display = 'block';
        else
            document.getElementById("volume8").style.display = 'none';
    }else if (document.getElementById('volumes').value == 9) {
        document.getElementById("volume2").style.display = 'none'
        document.getElementById("volume3").style.display = 'none'
        document.getElementById("volume4").style.display = 'none'
        document.getElementById("volume5").style.display = 'none'
        document.getElementById("volume6").style.display = 'none'
        document.getElementById("volume7").style.display = 'none'
        document.getElementById("volume8").style.display = 'none'
        document.getElementById("volume10").style.display = 'none'
        var display = document.getElementById("volume9").style.display;
        if (display == "none")
            document.getElementById("volume9").style.display = 'block';
        else
            document.getElementById("volume9").style.display = 'none';
    }else if (document.getElementById('volumes').value == 10) {
        document.getElementById("volume2").style.display = 'none'
        document.getElementById("volume3").style.display = 'none'
        document.getElementById("volume4").style.display = 'none'
        document.getElementById("volume5").style.display = 'none'
        document.getElementById("volume6").style.display = 'none'
        document.getElementById("volume7").style.display = 'none'
        document.getElementById("volume8").style.display = 'none'
        document.getElementById("volume9").style.display = 'none'
        var display = document.getElementById("volume10").style.display;
        if (display == "none")
            document.getElementById("volume10").style.display = 'block';
        else
            document.getElementById("volume10").style.display = 'none';
    }

}

