// zmienna ze stanem aplikacji
const channels = [];

const addElement = () => {
  // early return
  const input = document.querySelector("#newChanelName");
  if (!input || input.value === "") {
    return;
  }

  channels.push(input.value);
  input.value = "";

  const ul = document.querySelector("#list");
  ul.innerHTML = "";
  const template = document.querySelector("#channelTemplate");

  channels.forEach((channel) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector("#channelName").textContent = channel;
    ul.appendChild(clone);
  });
};

// pobierz button i dodaj nasłuchiwanie -> oddzielenie struktury od javascriptu
const button = document.querySelector("#addElement");
button.addEventListener("click", addElement);
