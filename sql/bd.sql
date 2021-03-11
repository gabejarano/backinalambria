CREATE TABLE usuarios
(
	id serial NOT NULL,
    nombre character varying(60)  NOT NULL,
    correo character varying(60) NOT NULL,
    passwordsalt character varying(600) NOT NULL
)
ALTER TABLE usuarios
  ADD PRIMARY KEY (id);



CREATE TABLE ventas
(
    id varchar(60),
    proveedorid integer not null,
    precio numeric NOT NULL,
    clienteid integer not null,
)
ALTER TABLE ventas
  ADD PRIMARY KEY (id);

CREATE TABLE item
(
    id serial,
    nombre varchar(60),
    precio numeric not null
)

create TABLE itemsventas {
    iditem varchar(60),
    idventa varchar(60)
}

ALTER TABLE ventas
  ADD PRIMARY KEY (id);

