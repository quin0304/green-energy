//active HTML elements
const resources = {
btns: document.querySelectorAll('.btn'),
dynCont: document.querySelector('.dynamic-content')
}

//database section
const contents = {
    c1: {
        imageUrl: './img/energy-btn1-lg.png',
        imageAlt: 'House with Solar Pannel',
        heading: 'Net Metering-Solar Pannels',
        bodyText: 'Net metering is a financial incentive that allows you to generate electricity from a renewable energy source (solar, geothermal, biomass, and wind) and store this energy in the power grid. When your solar panels or another renewable energy source produce excess power, that energy is sent to the grid and in exchange you can pull from the grid when your system is under-producing - like during nighttime, or during peak demand times, when electricity costs are higher. <br> Credit Source: <a href="https://www.green-energyontario.ca/">Energy Ontario</a>'
        
        },
    c2: {
        imageUrl: './img/energy-btn2-lg.png',
        imageAlt: 'House with dollar sign',
        heading: 'Financing Green Technology',
         bodyText: 'Green Energy Ontario also saves you money by facilitating the purchase and/or financing of green energy technologies, products, and services that reduce energy consumption and waste and increases system efficiencies. <br> Credit Source: <a href="https://www.green-energyontario.ca/">Energy Ontario</a>'
         
        },
    
    c3: {
        imageUrl: './img/energy-btn3-lg.png',
        imageAlt: 'House with star symbol',
        heading: 'Technical Assessment',
         bodyText: 'Green Energy Ontario saves you money by arranging for various other technical assessments, such as building condition assessment, reserve study, age friendly conversion assessment, operational viability analysis and building envelop study at your affordable housing property. <br> Credit Source: <a href="https://www.green-energyontario.ca/">Energy Ontario</a>'
        }

};
// //loads initial content on page load
resources.dynCont.innerHTML = `<figure>
<img src="${contents.c1.imageUrl}" alt="${contents.c1.imageAlt}" />
</figure>
<h2>${contents.c1.heading}</h2> 
<p>${contents.c1.bodyText}</p>`;  

//updating content
let  handleClick = e => {
    //reference for current button
    let currentButton = e.target;
    //value of data attribute
    let currentContent = currentButton.dataset.btn;
    
    //updates content
    resources.dynCont.innerHTML = `<figure>
    <img src="${contents[currentContent].imageUrl}" alt="${contents[currentContent].imageAlt}" />
    </figure>
    <h2>${contents[currentContent].heading}</h2>
    <p>${contents[currentContent].bodyText}</p>`;
    
   
    //    console.log(currentButton.dataset.btn);
    
    for(let btn of resources.btns){
        if(btn.id){
            btn.removeAttribute('id');
  
        }
    }
    currentButton.id = 'active';
};




for (let btn of resources.btns){
    btn.addEventListener('click', handleClick);
 }
    