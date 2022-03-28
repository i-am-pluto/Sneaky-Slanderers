let loadingScreen = document.querySelector(".middle");
const myTimeout = setTimeout(op, 2000);

function op() {
  const request = new Request("http://localhost:4000/ipVerify", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("hello");
  setTimeout(2000);
  fetch(request)
    .then((Response) => {
      return Response.json();
    })
    .then((ipAddress) => {
      if (!ipAddress["status"]) {
        document.body.style.backgroundColor = "red";
        loadingScreen.style.display = "none";
      } else {
        document.body.style.backgroundColor = "green";
        loadingScreen.style.display = "none";
      }
    });
}
