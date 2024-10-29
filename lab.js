let num = 0;

function stop(){
    clearInterval(cronometro)
}

function timer(){
    num += .1;
    console.log(num.toFixed(17))   
    
    if (num >= .3){
        stop()
    }
}

let cronometro = setInterval(timer, 100)

