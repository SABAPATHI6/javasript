function num()
{
    var cars=["volvo","y21","180kg"];
    var se=["rt","rt"]
    var y= cars.length;
    var z = cars.pop();
    var u = cars.pop();
    var a = cars.push("hello");
    cars.shift();
     cars.unshift("saba")
     cars.splice(1,1,"sai")
     d = cars.sort();
    b = cars.join("*")
    delete cars[1]
    var e = se.slice(0,2)
    document.getElementById('text1').innerHTML= cars;
    document.getElementById('text2').innerHTML= y;
    document.getElementById('text3').innerHTML= z;
    document.getElementById('text4').innerHTML= u;
    document.getElementById('text5').innerHTML= cars;
    document.getElementById('text6').innerHTML= d;
    document.getElementById('text7').innerHTML= b;
    document.getElementById('text8').innerHTML= typeof cars;
    document.getElementById('text9').innerHTML= cars ;
    document.getElementById('text10').innerHTML= cars.concat(se) ;
    document.getElementById('text11').innerHTML= e;
    document.getElementById('text12').innerHTML= se.toString();
    

   
   




    
}