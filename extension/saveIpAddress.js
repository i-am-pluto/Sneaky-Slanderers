let Ip = "Loading...";
let ipText = document.querySelector(".ip-address");
ipText.innerHTML = "IP Address : ...Loading";
let request = new Request("http://localhost:4000/getIp", {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
});

fetch(request)
  .then((Response) => {
    return Response.json();
  })
  .then((ip) => {
    ipText.innerHTML = `Ip Address : ${ip["ipAddress"]}`;
    ipText.style.color = "green";
  });

document.querySelector("#save-ip").onclick = () => {
  let request_to_save = new Request("http://localhost:4000/ipAdd", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  fetch(request_to_save)
    .then((Response) => {
      return Response.json();
    })
    .then((ip) => {
      console.log(`Saved Ip-Address: ${ip["ip"]}`);
    });
};
