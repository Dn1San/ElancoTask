class API{
    constructor(){

    }

    async fetchRawData(){
        try{
            const response = await fetch(`https://engineering-task.elancoapps.com/api/raw`);
    
            if(!response.ok){
                throw new Error("Could not fetch raw data!");
            }
    
            const data = await response.json();
            console.log(data);
            for (let index = 0; index < data.length; index++) {
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
    
        }catch(error){
            console.error(error);
        }
    }

    async fetchData(action, actionName){
        try{
            const response = await fetch(`https://engineering-task.elancoapps.com/api/${action}/${actionName}`);
    
            if(!response.ok){
                throw new Error("Could not fetch resource!");
            }
    
            const data = await response.json();
            console.log(data);
            for (let index = 0; index < data.length; index++) {
                const element = document.getElementById("div2");
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
    
        }catch(error){
            console.error(error);
        }
    }
    
    async fetchList(action){
        try{
            const response = await fetch(`https://engineering-task.elancoapps.com/api/${action}`);
    
            if(!response.ok){
                throw new Error("Could not fetch resources!");
            }
    
            const data = await response.json();
            
            for (let index = 0; index < data.length; index++) {
                const para = document.createElement("p");
                const node = document.createTextNode(data[index]);
                const element = document.getElementById("div1");
                para.appendChild(node);
                element.appendChild(para);
            }
        }catch(error){
            console.error(error);
        }
    }

    async getHighestCost(action){
        try{
            const applicationName = document.getElementById("name").value;
            const response = await fetch(`https://engineering-task.elancoapps.com/api/${action}/${applicationName}`);
    
            if(!response.ok){
                throw new Error("Could not fetch resources!");
            }
    
            const data = await response.json();
            const currentPrice = 0;
            const highestCostIndex = 0;
            
            for (let index = 0; index < data.length; index++) {
                if (data[index].Cost > currentPrice){
                    currentPrice += data[index].Cost;
                    highestCostIndex = index;
                }
            }
            const element = document.getElementById("div3");
            const consumedQuantity = data[highestCostIndex].ConsumedQuantity;
            const cost = data[highestCostIndex].Cost;
            const date = data[highestCostIndex].Date;
            const instanceId = data[highestCostIndex].InstanceId;
            const location = data[highestCostIndex].Location;
            const meterCategory = data[highestCostIndex].MeterCategory;
            const resourceGroup = data[highestCostIndex].ResourceGroup;
            const resourceLocation = data[highestCostIndex].ResourceLocation; 
            const serviceName = data[highestCostIndex].ServiceName;
            const unitOfService = data[highestCostIndex].UnitOfMeasure;
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
            
        }catch(error){
            console.error(error);
        }
    }
    
    getLowestPrice(){
    
    }
    
    getEarliestDate(){
    
    }
    
    getLatestDate(){
        
    }
}