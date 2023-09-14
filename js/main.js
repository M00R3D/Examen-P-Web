let dataE1 = [...dataEjercicio1];
let dataE2 = [...dataEjercicio2];
let dataE3 = [...dataEjercicio2];

let marcaSeleccionada = "Todos";
const ejercicio1 = () => {
  dataE1 = [...dataEjercicio1]; //se asignan todos los elementos al arreglo
  /**
   * manipular el arrreglo dataE1, la variable marcaSeleccionada se actualiza 
   * cada que cambia el inputSelect su valor 
   */
  if (marcaSeleccionada !== "Todos") {
    /**
     * TODO: aqui aplicar filtrado a arreglo dataE1 con lo que indica la variable
     * marcaSeleccionada
     */
    let a = dataE1.filter(function(item)
    {
         return item.marca==marcaSeleccionada;
    });
    console.log(a);
    dataE1=a;
  }
 

  procesarEjercicio1(dataE1);
}

const ejercicio2 = () => {
  dataE2 = [...dataEjercicio2];
  const areaProductos = document.querySelector(".areaproductos");
  const productElements = dataE2.map((element, index) => {

    const formattedPrice = (element.price - (element.price * element.discountPercentage / 100)).toFixed(2);

    return `
      <div id="producto-${index + 10}" class="productCard_block">
      <div class="row">
      <div class="small-12 large-6 columns">
        <div class="productCard_leftSide clearfix">              
          <div class="sliderBlock">
            <ul class="sliderBlock_items">
              <li class="sliderBlock_items__itemPhoto sliderBlock_items__showing">
                <img
                  src="${element.images[0]}"
                  alt="headphones">
              </li>
              <li class="sliderBlock_items__itemPhoto">
                <img
                src="${element.images[1]}"
                  alt="headphones">
              </li>
              <li class="sliderBlock_items__itemPhoto">
                <img
                src="${element.images[2]}"
                  alt="headphones">
              </li>
              <li class="sliderBlock_items__itemPhoto">
                <img
                src="${element.images[3]}"
                  alt="headphones">
              </li>
              
            </ul>
            <div class="sliderBlock_controls">
              <div class="sliderBlock_controls__navigatin" style="opacity: 0%;">
                <div class="sliderBlock_controls__wrapper">
                  <div class="sliderBlock_controls__arrow sliderBlock_controls__arrowBackward">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                  </div>
                  <div class="sliderBlock_controls__arrow sliderBlock_controls__arrowForward">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>

              <ul class="sliderBlock_positionControls">
                <li class="sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active"></li>
                <li class="sliderBlock_positionControls__paginatorItem"></li>
                <li class="sliderBlock_positionControls__paginatorItem"></li>
                <li class="sliderBlock_positionControls__paginatorItem"></li>
               
            </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="small-12 large-6 columns">
        <div class="productCard_rightSide">
          <div class="block_product">
            <h2 class="block_name block_name__mainName">${element.title}<sup>&reg; </sup></h2>

            <p class="block_product__advantagesProduct">
              ${element.description}
            </p>

            <div class="block_informationAboutDevice">
              <div class="block_rating clearfix">
                <span class="block_rating__avarage">rating ${element.rating}</span>
                <span class="block_rating__reviews">(${element.stock} disponibles)</span>
              </div>
              <div class="row ">
                <div class="large-6 small-12 column left-align">
                  <div class="block_price">
                    <p class="block_price__currency">$ ${formattedPrice}</p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  });

  
  let dataarray=[...productElements];
  //TODO: colocar en variable dataarray un arreglo de plantillas de producto (htmlProducto)
  //considerar los elementos que debe tener cada producto como sus imagenes
  //IMPORTANTE el atritubo id de cada producto deve ser unico para cada articulo
  
  
  areaProductos.innerHTML = dataarray.join("");


  procesarEjercicio2();
}

let tipoArticulo = "Todos";
let totalArticulos = 0;
const ejercicio3 = () => {
  dataE3 = [...dataEjercicio2];


  if (tipoArticulo == "Todos") {
    //TODO: colocar en variable totalArticulos el total de articulos que existen (stock)
    let contador=0;
    totalArticulos=contador;
  } else {
    let contador=0;
    let a = dataE3.filter(function(item)
    {
      if(item.category==tipoArticulo){contador+=item.stock;}
      console.log(item.stock);
      totalArticulos=contador;
    })
    //TODO: colocar en variable totalArticulos el total de articulos que existen (stock)
    // de la categoria seleccionada por la variable tipoArticulo
  }

  procesarEjercicio3();
}

const selectorEjercicio = document.getElementById("ejercicio");
selectorEjercicio.addEventListener("change", e => {
  let ejericio = parseInt(e.target.value);
  if (ejericio < 0 || ejericio > 3) {
    alert("opcion no valida");
    return;
  }

  switch (ejericio) {
    case 1:
      ejercicio1();
      break;
    case 2:
      ejercicio2();
      break;
    case 3:
      ejercicio3();
      break
  }

  const contenedorEjercicio = document.querySelectorAll(".contenedorEjercicio");
  contenedorEjercicio.forEach((element, index) => {
    if (index === ejericio - 1)
      element.classList.remove("hidden");
    else
      element.classList.add("hidden");
  });

});

const selectoMarcaAuto = document.getElementById("marca");
selectoMarcaAuto.addEventListener("change", e => {
  marcaSeleccionada = e.target.value;
  ejercicio1();
})

const selectorTipoArticulo = document.getElementById("tipoArticulo");
selectorTipoArticulo.addEventListener("change", e => {
  tipoArticulo = e.target.value;
  ejercicio3();
});

const formatoMoneda = (valor) => {
  let fixtostring = "" + valor;
  let fixtofloat = parseFloat(fixtostring);
  let toMoney = '$' + fixtofloat.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  return toMoney;

}
const procesarEjercicio1 = (data) => {
  if (data && data.length > 0) {
    let inhtml = data.map(d => {
      return `<tr>
            <th scope="row">${d.id}</th>
            <td>${d.marca}</td>
            <td>${d.modelo}</td>
            <td>${d.year}</td>
            <td>${formatoMoneda(d.precio)}</td>
          </tr>`;
    });
    const bodytabla = document.getElementById("bodyTablaAutos");
    bodytabla.innerHTML = inhtml.join("");
  }
}
ejercicio1();
const accionClickSlider = (idProducto, indexslider) => {
  let productoActualizar = document.getElementById(idProducto);
  if (productoActualizar) {
    let sliderBlock_positionControls = productoActualizar.querySelector(".sliderBlock_positionControls");
    if (sliderBlock_positionControls) {
      let opciones = sliderBlock_positionControls.children;
      for (let i = 0; i < opciones.length; i++) {
        opciones[i].classList.remove("sliderBlock_positionControls__active");
        if (i === indexslider) {
          opciones[i].classList.add("sliderBlock_positionControls__active");
        }
      }
    }
    let sliderBlock_items = productoActualizar.querySelector(".sliderBlock_items");
    if (sliderBlock_items) {
      let fotos = sliderBlock_items.children;

      for (let i = 0; i < fotos.length; i++) {

        fotos[i].classList.remove("sliderBlock_items__showing");
        if (i === indexslider) {
          fotos[i].classList.add("sliderBlock_items__showing");
        }
      }
    } 
  }

  //
}
const procesarEjercicio2 = () => {

  const areaproductos = document.querySelector(".areaproductos");
  const productos = areaproductos.children;
  for (let p of productos) {
    let sliderBlock_positionControls = p.querySelector(".sliderBlock_positionControls");
    if (sliderBlock_positionControls) {
      let opciones = sliderBlock_positionControls.children;
      for (let i = 0; i < opciones.length; i++) {
        opciones[i].addEventListener("click", e => {
          accionClickSlider(p.id, i);
        })
      }
    }
  }
};
const procesarEjercicio3 = () => {
  const totalArtiuloshtml = document.getElementById("totalArtiulos");
  totalArtiuloshtml.innerHTML = `Total de inventario:${totalArticulos}`;
}
