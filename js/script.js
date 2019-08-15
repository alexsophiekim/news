const homeBtn = $("#homeBtn")
const aboutBtn = $("#aboutBtn");
const container = $(".pageContainer");
const aboutPage = $("#aboutPage");
const newsPage = $("#newsPage");


homeBtn.click(function(){
  aboutPage.removeClass("d-block").addClass("d-none")
  container.removeClass("bg-dark").addClass("bg-light");
  newsPage.removeClass("d-none").addClass( "d-block" );
});

aboutBtn.click(function(){
  newsPage.removeClass("d-block").addClass("d-none")
  container.removeClass("bg-light, py-5").addClass("bg-dark");
  aboutPage.removeClass("d-none").addClass( "d-block" );

});
