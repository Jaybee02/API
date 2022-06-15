var btn=document.querySelector("#btn").addEventListener("click", getPost);
var div = document.querySelector("#jay");
var new_title = document.querySelector("#exampleFormControlInput1").value;
var new_body = document.querySelector("#exampleFormControlTextarea1").value;

var store = 0;

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((resp)=>{
        return resp.json();
    })
    .then((post)=>{
        for (let k=0; k < 33; k++){
            console.log(post)
            jay.innerHTML+=`
                <div class="card col-lg-4 col-md-4 m-1 mx-auto mb-5"style="width: 21rem;">
                    <img src="${post[store].thumbnailUrl}" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title">${post[store].id}</h5>
                        <p class="card-text">${post[store].title}</p>
                    </div>

                    <div class="card-footer justify-content-between">
                        <button type="button" class="btn btn-primary ms-2">Update</button>
                        <button type="button" class="btn btn-secondary me-2 ms-3">View</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                   
                </div>


            `
            store+=1;
        }
    })

    .catch((error)=>{
        console.log(error);
    })
}

function New(e) {
    fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'POST',
        body: JSON.stringify({
          title: exampleFormControlInput1.value,
          body: exampleFormControlTextarea1.value,
          thumbnailUrl: "https://via.placeholder.com/150/c76b59".value,
          id: 1
          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log('response: ' + JSON.stringify(json));
        for (let k=0; k < 1; k++){
            post=json;
            console.log(post);
            
            jay.innerHTML+=`
                <div class="card col-lg-4 col-md-6 m-1 mx-auto mb-5"style="width: 21rem;">
                    <img src="${post.thumbnailUrl}" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title">${post.id}</h5>
                        <p class="card-text">${post.title}</p>
                    </div>

                    <div class="card-footer justify-content-between">
                        <button type="button" class="btn btn-primary ms-2">Update</button>
                        <button type="button" class="btn btn-secondary ms-3 me-2">View</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                   
                </div>


            `
            store+=1;
        }
        
    })
}


function Update() {
    fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'PUT',
        body: JSON.stringify({
          title: exampleFormControlInput1.value,
          body: exampleFormControlTextarea1.value,
          thumbnailUrl: "https://via.placeholder.com/150/c76b59".value,
          id: 1
          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log('response: ' + JSON.stringify(json));
        for (let k=0; k < 1; k++){
            post=json;
            console.log(post);
            
            jay.innerHTML+=`
                <div class="card col-lg-4 col-md-6 m-1 mx-auto mb-5"style="width: 21rem;">
                    <img src="${post.thumbnailUrl}" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title">${post.id}</h5>
                        <p class="card-text">${post.title}</p>
                    </div>

                    <div class="card-footer justify-content-between">
                        <button type="button" onclick="Update()" class="btn btn-primary ms-2">Update</button>
                        <button type="button" class="btn btn-secondary ms-3 me-2">View</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                   
                </div>


            `
            store+=1;
        }
        
    })
}

