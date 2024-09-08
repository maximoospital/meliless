// Una vez cargada la pagina, lo remueve del titulo
if(document.title.includes("-site:mercadolibre.com.*")){
    let newTitle = document.title.replace("-site:mercadolibre.com.*", "");
    document.title = newTitle;
}
// Una vez cargada la pagina, lo remueve de lo visual lol
let searchValue = document.getElementsByTagName("textarea")[0].value;
let searchDisplay = document.getElementsByTagName("textarea")[0].innerText;
if(searchValue.includes("-site:mercadolibre.com.* -site:mercadolibre.cl")){
    let newSearchValue = searchValue.replace("-site:mercadolibre.com.* -site:mercadolibre.cl", "");
    document.getElementsByTagName("textarea")[0].value = newSearchValue;
    let newDisplay = searchDisplay.replace("-site:mercadolibre.com.* -site:mercadolibre.cl", "");
    document.getElementsByTagName("textarea")[0].innerText = newDisplay;
}