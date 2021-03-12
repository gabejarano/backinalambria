# backinalambria
Prueba técnica Inalambria


# Endpoints
## ventas

POST create venta
  https://pruebainalambriaback.herokuapp.com/api/venta
  body={
    "id": string,
	  "proveedorid": number,
	  "precio": number,
	  "clienteid": number
  }
  
 GET ventas
  https://pruebainalambriaback.herokuapp.com/api/ventas/:proveedorid
   body={
    "id": string,
	  "precio": number,
	  "clienteid": number
  }
  Nota: Cada campo en el body hace referencia a un filtro.
