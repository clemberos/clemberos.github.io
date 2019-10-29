
function loadData() {
  fetch('https://api.umd.io/v0/bus/routes')
    .then(res => res.json())
    .then(data => {const temp = data.map(c => c.route_id + " " + c.title);
  }
  return temp;
          })
    .then(data => document.querySelector(".content").innerText = data);
}
