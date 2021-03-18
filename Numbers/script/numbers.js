function num()
{
    var x= "34";
    var y= "34";
    var z = x + y;
    var u = 123.567;
    document.getElementById('text1').innerHTML= typeof x;
    document.getElementById('text2').innerHTML= y;
    document.getElementById('text3').innerHTML= x / y;
    document.getElementById('text4').innerHTML= u.toString();
    document.getElementById('text5').innerHTML= u.toExponential(6);
    document.getElementById('text6').innerHTML= u.toFixed(2);
    document.getElementById('text7').innerHTML= u.toPrecision(2);
    document.getElementById('text8').innerHTML= u.valueOf();
    document.getElementById('text9').innerHTML= Number(u);
    document.getElementById('text10').innerHTML= parseInt(u);
    document.getElementById('text11').innerHTML= parseFloat(u);
    document.getElementById('text12').innerHTML= Number.MAX_VALUE;
    document.getElementById('text13').innerHTML= Number.MIN_VALUE;
    document.getElementById('text14').innerHTML= Number.POSITIVE_INFINITY;
    document.getElementById('text15').innerHTML= Number.NEGATIVE_INFINITY;




    
}