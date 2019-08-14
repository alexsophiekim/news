$(document).ready(function(){

  const newsArticleList = $("#newsArticleList");

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
      newsArticleList.empty();
      if (dataFromNewsApi.articles.length === 0) {
        newsArticleList.append(`There are no news articles`);
      } else {
        dataFromNewsApi.articles.map(function(articles){
          newsArticleList.append(`<li>${articles.title}, ${articles.description}`)
        })
      }
    },
    error: function(){
      console.log("something went wrong");
    }
  })
}









});
