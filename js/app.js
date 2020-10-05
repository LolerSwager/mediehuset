cardArr = [
    {img: "featured.jpg", title: "Title", name: "navn", date: "dato", tags: ["db", "angular"]}
]
console.log(cardArr);

tagArr = [
    {name: "html", icon:"fab fa-html5", color: "#F06529"},
    {name: "css", icon:"fab fa-css3", color: "#2965F1"},
    {name: "javascript", icon:"fab fa-js", color: "#F0DB4F"},
    {name: "sass", icon:"fab fa-sass", color: "#CC6699"},
    {name: "nodejs", icon:"fab fa-node-js", color: "#3C873A"},
    {name: "angular", icon:"fab fa-angular", color: "#DD1B16"},
    {name: "react", icon:"fab fa-react", color: "#36DFF8"},
    {name: "vue", icon:"fab fa-vuejs", color: "#194D33"},
    {name: "php", icon:"fab fa-php", color: "#8993BE"},
    {name: "cms", icon:"fas fa-cogs", color: "#00749C"},
    {name: "db", icon:"fas fa-database", color: "#00749C"}
]
console.log(tagArr);

let accHtml = '', element;
for (element of cardArr){
    accHtml += `<div class="cards">
        <figure>
            <img src="img/${element.img}" alt="">
            <h3>${element.title}</h3>
            <figcaption>
                <p>${element.name}</p>
                <p>${element.date}</p>
            </figcaption>
        </figure>
        <div class="tags">
            
        </div>
    </div>`;
}
document.getElementById('post').innerHTML = accHtml;