$(document).ready(function(){
$.ajax({
  url: '../config.json',
  type: 'GET',
  dataType: 'json',
  success: function(keys){
    newsApiKey = keys['newsApiKey'];
    getNewsData();
  },
  error: function(){
    console.log("cannot find config.json file, cannot run application");
  }
})

getNewsData = () => {
  $.ajax({
    url: `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${newsApiKey}`,
    type: 'GET',
    dataType: 'json',
    success: function(dataFromNewsApi){
      console.log(dataFromNewsApi);

    },
    error: function(){
      console.log("something went wrong");
    }
  })
}









});
