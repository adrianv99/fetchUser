function setUser(user){
    //set name
    document.getElementById('name').innerHTML = `${user.firstName} ${user.lastName}`;

    //set img
    document.getElementById('picture').innerHTML = `<img src="${user.picture}" width="200px" height="200px" class=" rounded-circle img-fluid">`;

    //set email
    document.getElementById('email').innerHTML = user.email;

    //set other stuff
    let template = `
    <li class="list-group-item text-center"> Gender: ${user.gender} </li>
    <li class="list-group-item text-center"> Age: ${user.age} </li>
    <li class="list-group-item text-center"> Phone: ${user.phone} </li>
    <li class="list-group-item text-center"> City: ${user.location} </li>
    `; 

    document.querySelector('.data-list').innerHTML = template;
}


function fetchUser(){
    fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then(data=>{  
        let user = {
            firstName: data.results[0].name.first,
            lastName: data.results[0].name.last,
            picture: data.results[0].picture.large,
            email: data.results[0].email,
            gender: data.results[0].gender,
            age: data.results[0].dob.age,
            phone: data.results[0].phone,
            location: data.results[0].location.city
        }

        setUser(user);
    }) 
}

fetchUser();