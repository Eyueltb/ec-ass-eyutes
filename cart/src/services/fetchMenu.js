const url='http://localhost:5000/api/beans';

const otherUrl='https://my-json-server.typicode.com/Eyueltb/ec-airbean/orders';

export async function getMenus(){
    return (await fetch(url)).json();
}
export async function postCart(payload){
    return(await fetch(otherUrl,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(payload) // body data type must match "Content-Type" header
    })).json();

    /*const response = await fetch(otherUrl, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(payload) // body data type must match "Content-Type" header
    }).then(resp => resp.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    return response.json(); // parses JSON response into native JavaScript objects
  */
}
export async function getOrders(){
    return (await fetch(otherUrl)).json();
}