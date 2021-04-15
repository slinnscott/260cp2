
window.onload=function(){
  /*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
  const form = document.querySelector(".top-banner form");
  const input = document.querySelector(".top-banner input");
  const msg = document.querySelector(".top-banner .msg");
  /*PUT YOUR OWN KEY HERE - THIS MIGHT NOT WORK
  SUBSCRIBE HERE: https://home.openweathermap.org/users/sign_up*/
  const apiKey = "befe87eed31813b2105bb09709b40bcb";

  form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
    if(inputVal == "Categories"){
      fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(json =>{
          console.log(json);
          let categoryList = "";
          categoryList += '<h1> List of Categories </h1>';
          categoryList += "<h3>";
          categoryList += json[0];
          categoryList += ", ";
          categoryList += json[1];
          categoryList += ", ";
          categoryList += json[2];
          categoryList += ", ";
          categoryList += json[3];
          categoryList += ", ";
          categoryList += json[4];
          categoryList += ", ";
          categoryList += json[5];
          categoryList += ", ";
          categoryList += json[6];
          categoryList += ", ";
          categoryList += json[7];
          categoryList += ", ";
          categoryList += json[8];
          categoryList += ", ";
          categoryList += json[9];
          categoryList += ", ";
          categoryList += json[10];
          categoryList += ", ";
          categoryList += json[11];
          categoryList += ", ";
          categoryList += json[12];
          categoryList += ", ";
          categoryList += json[13];
          categoryList += ", ";
          categoryList += json[14];
          categoryList += ", ";
          categoryList += json[15];

          categoryList += "</h2>"
          categoryList += "<br>"
          categoryList += "<br>"
          document.getElementById("categories").innerHTML = categoryList;
        })
        .catch(() => {
          msg.textContent = "Please search for a valid Category";
        });
        msg.textContent = "";
        form.reset();
        input.focus();
    }
    else{
      const url = `https://api.chucknorris.io/jokes/random?category=${inputVal}`;

      fetch(url)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          if(json.error == "Not Found"){
            throw 'This is not a category';
          }
          let joke = "";
          joke += "<h1> Category: " + inputVal + "</h1>";
          joke += "<hr>"
          joke += '<h3>' + json.value + '</h3>'
          joke += '<br>'
          joke += '<img class="city-icon" src="' + json.icon_url + '">'
          document.getElementById("forecastResults").innerHTML = joke;
        })
        .catch(() => {
          msg.textContent = "Please search for a valid Category";
        });

      msg.textContent = "";
      form.reset();
      input.focus();
    }
  });
}
