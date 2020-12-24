const fp=require("./FlightFunctions");

function Hold()
{
  //window.alert("in Hold");
    document.getElementById("debug").innerHTML=" Executing Hold";
    let latlon=document.getElementById("latlon").value;
    //window.alert(latlon);
    let legs=document.getElementById("legs").value;
    let length=document.getElementById("length").value;
    let loops=document.getElementById("loops").value;
    let lat=latlon.split(",")[0];
    let lon=latlon.split(",")[1];
    let params="lat="+lat+" lon="+lon+" legs="+legs+" length="+length+" loops="+loops;
    document.getElementById("result").innerHTML=params;
    let xml = fp.HoldPattern(lat,lon,legs,length,loops);
    document.getElementById("result").innerHTML=xml
}
