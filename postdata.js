
document.getElementById("order-form").addEventListener("click", async () => {
  e.preventDefault()    
  const data = {
      name: e.target['name'].value,
      age: 18,
      email: e.target['email'].value,
      phone_number: e.target['number'].value,
      address: e.target['address'].value,
      receive_messages: 0
    };
  
    try {
      const response = await fetch("https://bd7d-188-237-141-73.ngrok-free.app/api/data", {
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