let url = window.location.href;
let urlArray = url.split('/');
let searchQuery = urlArray[3].split('=')[1].split('&')[0];
if (!searchQuery.toLowerCase().includes("mercado") && !searchQuery.toLowerCase().includes("libre")) {
    let newSearchQuery = searchQuery + "+-site%3Amercadolibre.com.*+-site%3Amercadolibre.cl";
    let newUrl = url.replace(searchQuery, newSearchQuery);
    window.location.href = newUrl;   
}