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
  $('#results').html(
    `<ul>` +  data.items.map(d => {return `<li>${d.name}<br>
                                                ${d.owner}</li>`}).join(' ') + `<ul>`
  )
}

function displayError(){
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function showCommits(el){

}
