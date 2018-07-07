$(document).ready(function (){
});

function searchRepositories(){
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      displaySearchResults(data)
    }).fail(error => {
      displayError(error)
    })
}

function displaySearchResults(data){
  $('#results').html(
    `<ul>` + data.items.map(d => {'<li>hi</li>'}) `<ul>`
  )
}

function displayError(error){
  debugger;
}
