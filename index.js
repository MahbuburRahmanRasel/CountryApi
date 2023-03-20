
const fetchData = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=>displayCountries(data))
   
}

const displayCountries = (countries)=>{
    console.log(countries[0])
    const allCountriesHtml = countries.map( country => getCoutriesHTML(country)
        
    )

    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHtml.join(" ");

}

const getCoutriesHTML = country => {
    return `
    <div class = "country"> 
    <h2>${country.name.common}</h2>
    <img src='${country.flags.png}'>
    
    </div>
    
    
    
    
    `
}



fetchData();
