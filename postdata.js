document.getElementById("submit").addEventListener("click", async () => {
    const data = {
      name: "Alice",
      age: 25,
      email: "alice@example.com",
      phone_number: 1331,
      address: "somewhere",
      receive_messages: 1
    };

    try {
      const response = await fetch("https://bd7d-188-237-141-73.ngrok-free.app/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // Send data as JSON
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