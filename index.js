$(document).ready(function (){
});

function searchRepositories(){
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      showSearchResults(data)
    }).fail(error => {
      displayError()
    })
}

function showSearchResults(data){
  debugger;
  $('#results').html(
    `<ul>` +  data.items.map(d => {return `<li>${d.name}<br>
                                               ${d.owner}<br>
                                               <a href="#" data-repo="${d.name}" data-owner="${d.owner}" onClick="getCommits()"</li>`}).join(' ') + `<ul>`
  )
}

function displayError(){
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function getCommits(){
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
      showCommits(data)
    }).fail(error => {
      displayError()
    })
}

function showCommits(el){

}.
