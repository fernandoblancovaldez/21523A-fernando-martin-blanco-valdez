const formGuardar = document.querySelector("#form-guardar");

formGuardar.addEventListener("submit", async (e) => {
  e.preventDefault();

  //se capturan los datos del formulario
  const title = document.querySelector("#titulo-post").value,
    detail = document.querySelector("#detalle-post").value;

  //se envian datos al servidor
  try {
    const res = await fetch("/new-post", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, detail }),
    });
    const data = await res.json();
    console.log(data.msg);
  } catch (err) {
    console.log(err);
  }

  document.querySelector("#titulo-post").value = "";
  document.querySelector("#detalle-post").value = "";
});
