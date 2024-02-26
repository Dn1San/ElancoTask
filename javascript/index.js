//Retrives data on everything
async function fetchRawData(){
    try{
        const response = await fetch(`https://engineering-task.elancoapps.com/api/raw`);//Retrives data from api

        if(!response.ok){
            throw new Error("Could not fetch raw data!"); // Catches Error
        }

        const data = await response.json();
        for (let index = 0; index < data.length; index++) {
            output(index, data);// Outputs data from api
        }

    }catch(error){
        console.error(error); //Console logs any errors
    }
}

//Retives data on specific application or resource
async function fetchData(action){
    try{
        const name = document.getElementById("name").value;
        const response = await fetch(`https://engineering-task.elancoapps.com/api/${action}/${name}`);//Retrives data from api

        if(!response.ok){
            throw new Error("Could not fetch application!");// Catches Error
        }

        const data = await response.json();
        for (let index = 0; index < data.length; index++) {
            output(index, data);// Outputs data from api
        }

    }catch(error){
        console.error(error);//Console logs any errors
    }
}

//Retrives the list of names for applications or resources 
async function fetchNames(action){
    try{
        const response = await fetch(`https://engineering-task.elancoapps.com/api/${action}`);//Retrives data from api

        if(!response.ok){
            throw new Error("Could not fetch applications!");// Catches Error
        }

        const data = await response.json();
        
        for (let index = 0; index < data.length; index++) {
            const para = document.createElement("p");
            const node = document.createTextNode(data[index]);
            const element = document.getElementById("div1");
            para.appendChild(node);// Use of append child as test.
            element.appendChild(para);// Outputs data list from api
        }
    }catch(error){
        console.error(error);//Console logs any errors
    }
}

// Function to remove data on Screen


//Function Retrives highest cost
async function getLowestCost(action){
    try{
        const name = document.getElementById("name").value;
        const response = await fetch(`https://engineering-task.elancoapps.com/api/${action}/${name}`);//Retrives data from api

        if(!response.ok){
            throw new Error("Could not fetch resources!");// Catches Error
        }

        const data = await response.json();
        let currentPrice = 0;
        let highestCostIndex = 0;
        
        for (let index = 0; index < data.length; index++) { // Loops through data to find lowest cost
            if (data[index].Cost > currentPrice){
                currentPrice = data[index].Cost;
                highestCostIndex = index;
            }
        }
        output(highestCostIndex, data); // Outputs result
        
    }catch(error){
        console.error(error); //Console logs any errors
    }
}

//Function Retrives lowest cost
async function getHighestCost(action){
    try{
        const name = document.getElementById("name").value;
        const response = await fetch(`https://engineering-task.elancoapps.com/api/${action}/${name}`);//Retrives data from api

        if(!response.ok){
            throw new Error("Could not fetch resources!");// Catches Error
        }

        const data = await response.json();
        let currentPrice = 10000;
        let highestCostIndex = 0;
        
        for (let index = 0; index < data.length; index++) {// Loops through data to find highest cost
            if (data[index].Cost < currentPrice){
                currentPrice = data[index].Cost;
                highestCostIndex = index;
            }
        }
        output(highestCostIndex, data); // Outputs result
        
    }catch(error){
        console.error(error);//Console logs any errors
    }
}

//Function outputs the data from api onto users screen
function output(index,data){
    const element = document.getElementById("div1");
    const consumedQuantity = data[index].ConsumedQuantity;
    const cost = data[index].Cost;
    const date = data[index].Date;
    const instanceId = data[index].InstanceId;
    const location = data[index].Location;
    const meterCategory = data[index].MeterCategory;
    const resourceGroup = data[index].ResourceGroup;
    const resourceLocation = data[index].ResourceLocation; 
    const serviceName = data[index].ServiceName;
    const unitOfService = data[index].UnitOfMeasure;
    element.insertAdjacentHTML("beforeend", `<div>Consumed Quantity: ${consumedQuantity}</div>`);
    element.insertAdjacentHTML("beforeend", `<div>Cost: ${cost}</div>`);
    element.insertAdjacentHTML("beforeend", `<div>Date: ${date}</div>`);
    element.insertAdjacentHTML("beforeend", `<div>Instance ID: ${instanceId}</div>`);
    element.insertAdjacentHTML("beforeend", `<div>Location: ${location}</div>`);
    element.insertAdjacentHTML("beforeend", `<div>Meter Category: ${meterCategory}</div>`);
    element.insertAdjacentHTML("beforeend", `<div>Resource Group: ${resourceGroup}</div>`);
    element.insertAdjacentHTML("beforeend", `<div>Resource Location: ${resourceLocation}</div>`);
    element.insertAdjacentHTML("beforeend", `<div>Service Name: ${serviceName}</div>`);
    element.insertAdjacentHTML("beforeend", `<div>Unit Of Service: ${unitOfService}</div>`);
    element.insertAdjacentHTML("beforeend", `<br>`);
}

//Burger Dropdown
$(document).ready(function(){
    //start
    //Burger Menu
    $(".burger").on("click", function (){
        $("nav").slideToggle("fast")
    })
    //end
})