
function tableFromJson(){
  $(document).ready(function(){

  $.getJSON( "https://jsonplaceholder.typicode.com/todos", function( data ) {
    var output ="";
    for(var i=0;i<data.length;i++){
      if(data[i].completed==true){
        output+='<tr><ul style="list-style-type: none;"><li><input type="checkbox"  id="check" name="test" checked disabled>' +  `${data[i].title}    ` + '</li></ul></tr>';

      }
      else{
        output+='<ul style="list-style-type: none;"><li><input type="checkbox" onchange="handleChange(this)" id="checks" name="test">' +  `${data[i].title}`  + '</li></ul>';
      }
    }
    $(".container").html(output);
  });
  
  $("input[type=checkbox][name=test]").change(function() {
    alert("jooo");
  var numberOfChecked = $('input:checkbox:checked').length;
  var totalCheckboxes = $('input:checkbox').length;
  console.log(totalCheckboxes);
  });
});

}

function logout(){ 
      window.location.href = 'index.html';
     
}

function handleChange(checkbox) {  
 var Prom=new Promise(function(resolve,reject){
  var q=document.querySelectorAll("input:checked").length;
  if(q==95){
    resolve("Congrats. 5 Tasks have been Successfully Completed ");
  }
  
})
Prom
.then(function(s){
  alert(s);
})
.catch();
}



