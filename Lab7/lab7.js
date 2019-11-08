<script>
function loadData() {
  fetch('https://api.umd.io/v0/bus/routes')
    .then(res => res.json())
    .then(res => res.map(c => c.route_id + " " + c.title))
    .then(nameArray => {
        const data = nameArray.map(item) => {
          return item;
        })

        console.log(data)
};
}
