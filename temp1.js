function tempCon(){
    let inbox=document.querySelector(".inputbox").value;
    let typecon=document.getElementById("type");
    let res1=document.getElementById("result1");
    let res2=document.getElementById("result2");
    let valNum = parseInt(inbox);
    if('f'===typecon.value){
        res1.innerHTML="Celsius : "+((valNum-32)/1.8).toFixed(2)+"&#8451";
        res1.style="color: #fff;font-size: 22px; font-weight: bolder"
        res2.innerHTML="Kelvin : "+(((valNum-32)/1.8)+273.15).toFixed(2)+"&#8490;";
        res2.style="color: #fff;font-size: 22px;font-weight: bolder"
    }
    else if('c'===typecon.value)
    {
        res1.innerHTML="Fahrenheit : "+((valNum*1.8)+32).toFixed(2)+"&#8457;";
        res1.style="color: #fff;font-size: 22px;font-weight: bolder"
        res2.innerHTML="Kelvin : "+(valNum+273.15).toFixed(2)+"&#8490;";
        res2.style="color: #fff;font-size: 22px;font-weight: bolder"
    }
    else{
        res1.innerHTML="Fahrenheit : "+(((valNum-273.15)*1.8)+32).toFixed(2)+"&#8457;";
        res1.style="color: #fff;font-size: 22px;font-weight: bolder"
        res2.innerHTML="Celsius : "+(valNum-273.15).toFixed(2)+"&#8451";
        res2.style="color: #fff;font-size: 22px;font-weight: bolder"

    }
}


