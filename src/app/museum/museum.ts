export class Museum {
  id: number;
  url: string;
  link: string;
  nombre: string;
  direccion: string;
  telefono: string;
  descripcion: string;
  email: string;
  provincia: string;
  depende_de: string;
  autoridad: null;

  constructor(id: number, url: string, link: string, nombre: string, direccion:string,
    telefono: string, descripcion: string, email: string, provincia: string,
    depende_de: string, autoridad: null) {
    this.id = id;
    this.url = url;
    this.link = link;
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.descripcion = descripcion;
    this.email = email;
    this.provincia = provincia;
    this.depende_de = depende_de;
    this.autoridad = autoridad;
  }
}
