async function users_db(){
  const url = "https://eb77-188-237-141-73.ngrok-free.app/api/data";

  try{

    const response = await fetch(url, {
      mode: "no-cors",
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    });

    if(!response.ok){
        throw new Error("couldnt fetch data");
    }

    const data = await response.json()
    console.log(data);

  }
  catch(error){
    console.error(error);
  }
}

users_db();
