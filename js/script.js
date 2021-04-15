
window.onload=function(){
  /*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
  const form = document.querySelector(".top-banner form");
  const input = document.querySelector(".top-banner input");
  const msg = document.querySelector(".top-banner .msg");
  const list = document.querySelector(".ajax-section .cities");
  /*PUT YOUR OWN KEY HERE - THIS MIGHT NOT WORK
  SUBSCRIBE HERE: https://home.openweathermap.org/users/sign_up*/
  const apiKey = "befe87eed31813b2105bb09709b40bcb";

  form.addEventListener("submit", e => {
    e.preventDefault();
    const listItems = list.querySelectorAll(".ajax-section .city");
    //ajax here
    const url1 = `https://api.chucknorris.io/jokes/random`;

    fetch(url1)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const { icon_url, id, url, value} = data;

        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name">
            <span>${value}</span>
          </h2>
          <figure>
            <img class="city-icon" src=${icon_url}>
            <figcaption>"Chuck Norris"</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
      })
      .catch(() => {
        msg.textContent = "Please search for a valid word";
      });

    msg.textContent = "";
    form.reset();
    input.focus();
  });
}
