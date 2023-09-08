document.getElementById("Dora01").value=0;
document.getElementById("Dora02").value=0;
document.getElementById("Dora03").value=0;
document.getElementById("Dora04").value=0;

//初始获取番数-非役满
{
//1番
var value1fan = 0;
var checkboxes1fan = document.querySelectorAll(".checkbox-label-1fan");
checkboxes1fan.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        value1fan++;
      } else {
        value1fan--;
      }
});});
//2番
var value2fan = 0;
var checkboxes2fan = document.querySelectorAll(".checkbox-label-2fan");
checkboxes2fan.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        value2fan+=2;
      } else {
        value2fan-=2;
      }
});});
//副露-1番
var valuefulu = 0;
var checkboxesfulu = document.querySelectorAll(".checkbox-label-fulu");
checkboxesfulu.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        valuefulu--;
      } else {
        valuefulu++;
      }
});});
//3番
var value3fan = 0;
var checkboxes3fan = document.querySelectorAll(".checkbox-label-3fan");
checkboxes3fan.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        value3fan+=3;
      } else {
        value3fan-=3;
      }
});});
//6番
var valueqingyise = 0;
var checkboxqingyise = document.getElementById("qingyise");
checkboxqingyise.addEventListener("change", function() {
    if (checkboxqingyise.checked) {
      valueqingyise = 6;
    } else {
      valueqingyise = 0;
    }
});
//满贯//5番
var valuemanguan = 0;
var checkboxesmanguan = document.querySelectorAll(".checkbox-label-manguan");
checkboxesmanguan.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        valuemanguan+=5;
      } else {
        valuemanguan-=5;
      }
});});
}
//获取役满
{
//一倍役满
var valueyiman = 0;
var checkboxesyiman = document.querySelectorAll(".checkbox-label-yiman");
checkboxesyiman.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        valueyiman++;
      } else {
        valueyiman--;
      }
});});
//两倍役满
var valuedoubleyiman = 0;
var checkboxesdoubleyiman = document.querySelectorAll(".checkbox-label-doubleyiman");
checkboxesdoubleyiman.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        valuedoubleyiman+=2;
      } else {
        valuedoubleyiman-=2;
      }
});});
}
//获取符数

function recordInput()
{
    if(valueyiman==0&&valuedoubleyiman==0)
    {
    var dora = parseInt(document.getElementById("Dora01").value)+parseInt(document.getElementById("Dora02").value)+parseInt(document.getElementById("Dora03").value)+parseInt(document.getElementById("Dora04").value);
    var fan = 0;
    fan=dora+parseInt(value1fan)+parseInt(value2fan)+parseInt(valuefulu)+parseInt(value3fan)+parseInt(valueqingyise)+parseInt(valuemanguan);
    document.getElementById("fan").textContent = parseInt(fan);

    var fu = 20;
    fu;
    document.getElementById("fu").textContent = parseInt(fu);
    
    if(fan<5)
        document.getElementById("man").textContent = "";
    else if(fan==5)
        document.getElementById("man").textContent = "满贯";
    else if(fan>=6&&fan<=7)
        document.getElementById("man").textContent = "跳满";
    else if(fan>=8&&fan<=10)
        document.getElementById("man").textContent = "倍满";
    else if(fan>=11&&fan<=12)
        document.getElementById("man").textContent = "三倍满";
    else if(fan>=13)
        document.getElementById("man").textContent = "累计役满";
    }
    else
    {
        var yiman=parseInt(valueyiman)+parseInt(valuedoubleyiman);
        document.getElementById("fan").innerHTML = "&emsp;";
        if(yiman==1)
        document.getElementById("man").textContent = "役满";
        else if(yiman==2)
        document.getElementById("man").textContent = "两倍役满";
        else if(yiman==3)
        document.getElementById("man").textContent = "三倍役满";
        else if(yiman==4)
        document.getElementById("man").textContent = "四倍役满";
        else if(yiman==5)
        document.getElementById("man").textContent = "五倍役满";
        else if(yiman==6)
        document.getElementById("man").textContent = "六倍役满";
        else if(yiman>6)
        document.getElementById("man").textContent = yiman+"倍役满";
        else if(yiman==0)
        document.getElementById("man").textContent = "";
    }
}