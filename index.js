const addElement = () => {
  const ul = document.getElementById("list");

  ul.innerHTML = "";

  const template = document.getElementById("channelTemplate");

  const channels = ["nazwa 1", "nazwa 2", "Nowy kanal"];

  channels.forEach(function (channel) {
    const clone = template.content.cloneNode(true);

    clone.querySelector("li").textContent = channels;

    ul.appendChild(clone);
  });
};
