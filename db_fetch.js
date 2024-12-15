async function users_db(){
  const url = "https://ba3d-188-237-141-73.ngrok-free.app/api/data";

  try{

    const response = await fetch(url, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    });

    if(!response.ok){
        throw new Error("couldnt fetch data");
    }

    const data = await response.json();
    console.log(data);

  }
  catch(error){
    console.error(error);
  }
}

users_db();
