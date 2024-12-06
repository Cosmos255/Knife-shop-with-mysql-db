async function users_db(){
  const url = "server is stopped";

  try{

    const response = await fetch(url);

    if(!response.ok){
        throw new Error("couldnt fetch data");
    }

    const data = await response.json()
    console.log(data);

    window.globalThis = data;


  }
  catch(error){
    console.error(error);
    users_db();
  }
}


console.log(globalThis);

users_db();
