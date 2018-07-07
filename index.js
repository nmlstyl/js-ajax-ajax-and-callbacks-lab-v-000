$(document).ready(function (){
});

function searchRepositories(){
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      displaySearchResults(data)
    }).fail(error => {
      displayError()
    })
}

function displaySearchResults(data){
  debugger;
  $('#results').html(
    `<ul>` + data.items.map(d => {'<li>hi</li>'}) `<ul>`
  )
}

function displayError(){

}
