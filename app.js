const app= document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class','container');
console.log("the container");
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://dimitrij.github.io/JSONAPI/persons.json', true);
console.log("After Json file open");

request.onload = function () {
    console.log("Inside onload function");
    let data = JSON.parse(this.response); //serialization and deserialization
    console.log("JSON Parse");
    if(request.status >= 200 && request.status < 400) {
        console.log("Response");
        data.forEach(persons => {
            const person = document.createElement('div');
            person.setAttribute('class','person');

            const h1 = document.createElement('h1');
            h1.textContent = persons.title; 

            const p = document.createElement('p');
            p.textContent = persons.description;

            container.appendChild(person);
            person.appendChild(h1);
            person.appendChild(p);
        
        });
    }

    else {
        console.log('FEL');
    }


};

request.send();