
function loadCountries(){
    fetch(`https://restcountries.com/v2/all`)
    .then(res =>res.json())
    .then(counties =>displayCountries(counties))
}
loadCountries();

function displayCountries(counties){

    const countriesDiv = document.getElementById('countries');
   for(const country of counties){
    //console.log(country);
    const div = document.createElement('div');
    div.classList.add('country')
    // 
    div.innerHTML = `
        <h3>${country.name}</h3>
        <p>Population:-${country.population}</p>
        <img width="200px" src="${country.flag}">
        <h4>Capital:-${country.capital}</h4>

    `
    
    
    
    // const h3 = document.createElement('h3');
    // h3.innerText = country.name;
    // div.appendChild(h3);
    // const p = document.createElement('p');
    // p.innerText = country.population;
    // div.appendChild(p);
    countriesDiv.appendChild(div);
    
   }
}