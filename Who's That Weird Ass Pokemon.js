let list = [
    {name:"alolan-raticate",image:"alolan-raticate.png"},
    {name:"arctovish",image:"arctovish.png"},
    {name:"blacephalon",image:"blacephalon.png"},
    {name:"bruxish",image:"bruxish.png"},
    {name:"calyrex",image:"calyrex.png"},
    {name:"dracovish",image:"dracovish.png"},
    {name:"dunsparce",image:"dunsparce.png"},
    {name:"enamorous-therian",image:"enamorous-therian.png"},
    {name:"falinks",image:"falinks.png"},
    {name:"galarian-weezing",image:"galarian-weezing.png"},
    {name:"girafarig",image:"girafarig.png"},
    {name:"guzzlord",image:"guzzlord.png"},
    {name:"klefki",image:"klefki.png"},
    {name:"palossand",image:"palossand.png"},
    {name:"porygon-z",image:"porygon-z.png"},
    {name:"probopass",image:"probopass.png"},
    {name:"reuniclus",image:"reuniclus.png"},
    {name:"sigilyph",image:"sigilyph.png"},
    {name:"smoochum",image:"smoochum.png"},
    {name:"wishiwash-school-form",image:"wishiwash-school-form.png"}
];
let mathindex = Math.floor(Math.random()*20);
document.getElementById('pokemonname');
pokemonname.innerHTML+= " " +list[mathindex].name;
document.getElementById('pokemonimage').src = `${list[mathindex].image}`;

function Enter(){
    let userInput = document.getElementById('userInput').value
    let lowerName = list[mathindex].name
    if(userInput.toLowerCase()=== lowerName.toLowerCase()) {
        alert('CORRECT')
    } else {
        alert("No the answer is " + list[mathindex].name)
    };
    window.location.reload();
}
