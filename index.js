
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


//option 3 : destructuring into parameter
const getCoutriesHTML = ({name, flags}) => {
    return `
    <div class = "country"> 
    <h2>${name.common}</h2>
    <img src='${flags.png}'>
    
    </div>
    
    `
}


//option 2 : destructuring 
/*
const getCoutriesHTML = country => {

    const {name, flags} = country
    return `
    <div class = "country"> 
    <h2>${name.common}</h2>
    <img src='${flags.png}'>
    
    </div>
    
    `
}*/



//option 1 
/*
const getCoutriesHTML = country => {
    return `
    <div class = "country"> 
    <h2>${country.name.common}</h2>
    <img src='${country.flags.png}'>
    
    </div>
    
    `
}
*/




fetchData();
