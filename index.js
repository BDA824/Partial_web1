const valueInput = () => {
    let valInput = document.getElementById("name");
    let Value = valInput.value;
    requestAPI(Value)
  };
  
  const requestAPI = (id) => {
    const baseURL = "https://rickandmortyapi.com/api/character";
    const endPoint = "/" + id;
    const URL = `${baseURL}${endPoint}`;
  
    axios.get(URL)
    .then(response => printData(response.data))
    .catch(error => console.log(error))
  }
  
  const printData = (data) => {
    let urlImg = data.image
    let img = document.createElement('img')
    img.src = urlImg
    let response = document.getElementById('show_info')
    response.appendChild(img)
    response.innerHTML = `
    <h2>Name: ${data.name}</h2>
    <h2>Status: ${data.status}</h2>
    <h2>Species: ${data.species}</h2>
    <h2>Gender: ${data.gender}</h2>
    <h2>Origin: ${data.origin.name}</h2>
    <h2>Image: ${urlImg}</h2>
    `;
  }