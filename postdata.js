const Name = document.getElementById('name');
const Age = document.getElementById('address');
const Email = document.getElementById('email');
const Phone_number = document.getElementById('number');
const Address = document.getElementById('address');

class Validator{
  constructor(data){
    this.data = data;
  }

  isValid(){

    const { name, age, email, phone_number } = this.data;

    if(typeof name !== "string" || name.trim() === "") return null;

    if(typeof age !== "number" || age < 0 || age > 120) return null;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) return null;

    if (typeof phone_number !== "number" || phone_number <= 0) return null;
    
    return this.data
  }
}


document.getElementById("submit").addEventListener("click", async () => {

    const data = {
      name: Name.value.trim(),
      age: parseInt(Age.value, 10),
      email: Email.value.trim(),
      phone_number: parseInt(Phone_number.value, 10),
      address: Address.value.trim(),
      receive_messages: 0
    };

    const validator = new Validator(data);
    const validatedData = validator.isValid();

    if (!validatedData) {
      alert("Invalid data");
      return;
    }
  
    try {

      for (let x of Object.values(data)) {
        if (x === null || x === undefined) {
            throw new Error("Wrong Data");
        }
      }

      const response = await fetch("https://43d6-188-237-141-73.ngrok-free.app/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Data submitted successfully!");
      } else {
        alert("Error submitting data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting data.");
    }
  });

  localStorage.setItem("cart", '[]');