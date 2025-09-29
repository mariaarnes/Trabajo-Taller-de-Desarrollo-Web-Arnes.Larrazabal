// Agregar producto al carrito
const agregaralcarrito = (nombre, imagen) => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Agregar objeto con nombre + imagen
  carrito.push({ nombre: nombre, imagen: imagen });

  // Guardar carrito
  localStorage.setItem("carrito", JSON.stringify(carrito));

  mostrarMensaje(`${nombre} fue agregado al carrito 🛒`);
};

// Mostrar carrito como sidebar lateral
const mostrarCarrito = () => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Eliminar si ya existe un sidebar
  let oldSidebar = document.querySelector(".carrito-sidebar");
  if (oldSidebar) oldSidebar.remove();

  // Crear sidebar
  let sidebar = document.createElement("div");
  sidebar.classList.add("carrito-sidebar", "active");

  sidebar.innerHTML = `
    <span class="close">&times;</span>
    <h2>🛒 Carrito</h2>
    <div id="carrito-lista">
      ${
        carrito.length === 0
          ? "<p>El carrito está vacío</p>"
          : carrito.map((p,i) => `
              <div class="item-carrito">
                <img src="${p.imagen}" alt="${p.nombre}">
                <span>${p.nombre}</span>
                <button onclick="eliminarDelCarrito(${i})">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            `).join("")
      }
    </div>
  `;
  document.body.appendChild(sidebar);

  // Botón cerrar
  sidebar.querySelector(".close").onclick = () => sidebar.remove();
};


  // Botón cerrar
  modal.querySelector(".close").onclick = () => modal.remove();

  // Cerrar clickeando afuera
  window.onclick = (e) => {
    if (e.target == modal) {
      modal.remove();
    }
  };


// Eliminar un producto por índice
const eliminarDelCarrito = (index) => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1); // borra ese producto
  localStorage.setItem("carrito", JSON.stringify(carrito));

  document.querySelector(".modal").remove(); // cerrar modal
  mostrarCarrito(); // reabrir modal actualizado
};

// Menú hamburguesa
document.querySelector(".fa-bars").parentElement.addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("active");
});

// Modal login/register
const modal = document.getElementById("modalLogin");
const btnLogin = document.getElementById("btnLogin");
const btnRegister = document.getElementById("btnRegister");
const closeBtn = document.querySelector(".modal .close");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  document.getElementById("formLogin").style.display = "block";
  document.getElementById("formRegister").style.display = "none";
  document.getElementById("volverLogin").style.display = "none";
});

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  document.getElementById("formLogin").style.display = "none";
  document.getElementById("formRegister").style.display = "block";
  document.getElementById("volverLogin").style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
