document.addEventListener("click", function (event) {
    if (!event.target.matches("#button"))  return;
    
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
        .then((data) => renderJoke(data))
          .catch(() => renderError());
  });
  
  document.addEventListener("click", function (event) {
    if (!event.target.matches("#button1"))  return;
  
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((response) => response.json())
        .then((dataJoke) => renderTenJokes(dataJoke))
          .catch(() => renderError());
  });
  
  function renderJoke(data) {
    document.getElementById("setup").innerHTML = data.setup;
    document.getElementById("punchline").innerHTML = data.punchline;
    document.getElementById("error").innerHTML = "";
  }
  
  function renderTenJokes(dataJoke) {
    document.getElementById("setup").innerHTML = dataJoke.map(joke => joke.setup + " " + joke.punchline).join("<br>");
    document.getElementById("error").innerHTML = "";
  }
  
  function renderError() {
    document.getElementById("error").innerHTML = "Whoops, something went wrong. Please try again later!"
  }