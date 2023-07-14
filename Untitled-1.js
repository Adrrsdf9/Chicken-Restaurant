function loadData(){

$.ajax({
url: '',
success: function(response){
for(let i=0; i<response.length; i++){
$("#allData").append(`
     <div class="col-md-4">
     <div class="card">
       <div calss="card-header">${response[i].name}</div>
       </div>
     </div>
`);


      }


  }


 })

}
loadData();