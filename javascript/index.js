async function fetchRawData(){
    try{
        const response = await fetch(`https://engineering-task.elancoapps.com/api/raw`);

        if(!response.ok){
            throw new Error("Could not fetch raw data!");
        }

        const data = await response.json();
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            document.write(data[index].ConsumedQuantity + "<br>");
            document.write(data[index].Cost + "<br>");
            document.write(data[index].Date + "<br>");
            document.write(data[index].InstanceId + "<br>");
            document.write(data[index].Location + "<br>");
            document.write(data[index].MeterCategory + "<br>");
            document.write(data[index].ResourceGroup + "<br>");
            document.write(data[index].ResourceLocation + "<br>");
            document.write(data[index].ServiceName + "<br>");
            for (let index0 = 0; index0 < data[index].Tags.length; index0++) {
                document.write(data[index].Tags[index0] + "<br>");
            }
            document.write(data[index].UnitOfMeasure + "<br><br>");
        }

    }catch(error){
        console.error(error);
    }
}

async function fetchApplicationData(){
    try{
        const applicationName = document.getElementById("applicationName").value;
        const response = await fetch(`https://engineering-task.elancoapps.com/api/applications/${applicationName}`);

        if(!response.ok){
            throw new Error("Could not fetch application!");
        }

        const data = await response.json();
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            document.write(data[index].ConsumedQuantity + "<br>");
            document.write(data[index].Cost + "<br>");
            document.write(data[index].Date + "<br>");
            document.write(data[index].InstanceId + "<br>");
            document.write(data[index].Location + "<br>");
            document.write(data[index].MeterCategory + "<br>");
            document.write(data[index].ResourceGroup + "<br>");
            document.write(data[index].ResourceLocation + "<br>");
            document.write(data[index].ServiceName + "<br>");
            for (let index0 = 0; index0 < data[index].Tags.length; index0++) {
                document.write(data[index].Tags[index0] + "<br>");
            }
            document.write(data[index].UnitOfMeasure + "<br><br>");
        }

    }catch(error){
        console.error(error);
    }
}

async function fetchApplications(){
    try{
        const response = await fetch(`https://engineering-task.elancoapps.com/api/applications`);

        if(!response.ok){
            throw new Error("Could not fetch applications!");
        }

        const data = await response.json();
        
        for (let index = 0; index < data.length; index++) {
            document.write(data[index] + "<br>");
        }
    }catch(error){
        console.error(error);
    }
}

async function fetchResourceData(){
    try{
        const resourceName = document.getElementById("resourceName").value;
        const response = await fetch(`https://engineering-task.elancoapps.com/api/resources/${resourceName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource!");
        }

        const data = await response.json();
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            document.write(data[index].ConsumedQuantity + "<br>");
            document.write(data[index].Cost + "<br>");
            document.write(data[index].Date + "<br>");
            document.write(data[index].InstanceId + "<br>");
            document.write(data[index].Location + "<br>");
            document.write(data[index].MeterCategory + "<br>");
            document.write(data[index].ResourceGroup + "<br>");
            document.write(data[index].ResourceLocation + "<br>");
            document.write(data[index].ServiceName + "<br>");
            for (let index0 = 0; index0 < data[index].Tags.length; index0++) {
                document.write(data[index].Tags[index0] + "<br>");
            }
            document.write(data[index].UnitOfMeasure + "<br><br>");
        }

    }catch(error){
        console.error(error);
    }
}

async function fetchResources(){
    try{
        const response = await fetch(`https://engineering-task.elancoapps.com/api/resources`);

        if(!response.ok){
            throw new Error("Could not fetch resources!");
        }

        const data = await response.json();
        
        for (let index = 0; index < data.length; index++) {
            document.write(data[index] + "<br>");
        }
    }catch(error){
        console.error(error);
    }
}