const addAdminEl = document.getElementById("add-admin");

addAdminEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = new FormData(e.target);

  try {
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      body: form,
    });
    console.log(res.status);

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
