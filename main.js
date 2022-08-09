let infoContainer= document.getElementById("infoContainer")

fetch('https://randomuser.me/api/?results=50')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        for(let i=0; i<50;i++){
            let newDiv= document.createElement("div")
            newDiv.className="identification"

            //image
            let image=document.createElement("img")
            image.src=data.results[i].picture.medium
            image.className="image"

            let newDiv1= document.createElement("div")
            newDiv1.className="identificationText"
            //first name
            let newp1= document.createElement("p")
            newp1.innerHTML="First Name: "+ data.results[i].name.first

            //last name
            let newp2= document.createElement("p")
            newp2.innerHTML="Last Name: "+ data.results[i].name.last

            //gender
            let newp3= document.createElement("p")
            newp3.innerHTML="Gender: "+ data.results[i].gender

            //DOB
            let newp4= document.createElement("p")
            newp4.innerHTML="Date of Birth: "+ data.results[i].dob.date

            //email
            let newp5= document.createElement("p")
            newp5.innerHTML="Email: "+ data.results[i].email

            //reward
            let newp6= document.createElement("p")
            newp6.innerHTML="Reward: "+ data.results[i].dob.age+",000"

            newDiv.append(image)
            newDiv.append(newDiv1)
            newDiv.append(newp1)
            newDiv.append(newp2)
            newDiv.append(newp3)
            newDiv.append(newp4)
            newDiv.append(newp5)
            newDiv.append(newp6)
            infoContainer.append(newDiv)
        }
    })

    let firstNameBtn=document.getElementById("firstNameBtn")
    firstNameBtn.onclick=function(event){
        event.preventDefault();
        data.results[i].gender=female;
    }