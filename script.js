let productsGrid = document.getElementById("products-grid");
let productsArray = [];

async function fetchDatabase(){
    let url="";
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("couldnt fetch data");
        }

        const data = await response.json()
    }
    catch(error){
        console.error(error);
    }
}