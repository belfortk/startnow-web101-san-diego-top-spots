$(document).ready(function(){
    var mydata = []; ///An array of objects. Adding JSON objects with name, desc, and loc data
    var nameData = [];
    var descData = [];
    var locData = [];
    
   $.getJSON("data.json", function (data) {
     
     
      $.each(data, function (index, value) {
        mydata.push(value);
        nameData.push(value.name);
        descData.push(value.description);
        locData.push(value.location);
        
      });
      
     
      
  $.each(data, function (index) {
    $("#table").find('tbody')
      .append($('<tr>')
      .append($('<td>').text(nameData[index]))
      .append($('<td>').text(descData[index]))
      .append($('<td class=link>>').text("https://www.google.com/maps?q="+ locData[index]))
      );
   
  });
   
  });
   
   
  });