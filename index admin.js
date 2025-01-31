document.addEventListener("DOMContentLoaded", function () {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-id");
      deleteProduct(productId);
    });
  });
});

function deleteProduct(productId) {
  fetch(`/delete-product/${productId}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Mahsulot o'chirildi");
        location.reload();
      }
    })
    .catch((error) => console.error("Xatolik yuz berdi:", error));
}
