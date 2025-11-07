import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-llista-productes',
  imports: [],
  templateUrl: './llista-productes.component.html',
  styleUrl: './llista-productes.component.css'
})
export class LlistaProductesComponent {
  constructor(private router: Router){} //Inyeccion para que recnozca router
 articulos:any[] = [
  {
    id: 1,
    nom: "Procesador Intel i7-11700K",
    descripcio: "Procesador de 8 núcleos y 16 hilos con velocidad base de 3.6 GHz.",
    preu: 320.99,
    oferta: "sí"
  },
  {
    id: 2,
    nom: "Tarjeta gráfica NVIDIA RTX 3060",
    descripcio: "GPU con 12 GB de memoria GDDR6, ideal para gaming y edición de video.",
    preu: 450.50,
    oferta: "no"
  },
  {
    id: 3,
    nom: "Memoria RAM Corsair Vengeance 16GB",
    descripcio: "Kit de 16GB DDR4 a 3200MHz para alto rendimiento.",
    preu: 85.75,
    oferta: "sí"
  },
  {
    id: 4,
    nom: "Disco SSD Samsung 970 EVO Plus 1TB",
    descripcio: "Unidad SSD NVMe con velocidad de lectura de hasta 3500 MB/s.",
    preu: 150.20,
    oferta: "no"
  },
  {
    id: 5,
    nom: "Placa base ASUS ROG Strix Z590-E",
    descripcio: "Placa base para procesadores Intel de 11ª generación con múltiples puertos.",
    preu: 280.00,
    oferta: "sí"
  },
  {
    id: 6,
    nom: "Fuente de alimentación Corsair RM750x",
    descripcio: "Fuente de 750W con certificación 80 PLUS Gold, modular.",
    preu: 120.30,
    oferta: "no"
  },
  {
    id: 7,
    nom: "Refrigeración líquida NZXT Kraken X63",
    descripcio: "Sistema de refrigeración líquida para CPU con radiador de 280mm.",
    preu: 160.45,
    oferta: "sí"
  },
  {
    id: 8,
    nom: "Caja NZXT H510",
    descripcio: "Caja para PC con ventana lateral y buena gestión de cables.",
    preu: 75.99,
    oferta: "no"
  },
  {
    id: 9,
    nom: "Monitor Dell Ultrasharp 27'' 4K",
    descripcio: "Monitor de 27 pulgadas con resolución 4K y colores precisos.",
    preu: 500.00,
    oferta: "sí"
  },
  {
    id: 10,
    nom: "Teclado mecánico Logitech G Pro",
    descripcio: "Teclado mecánico compacto con switches Romer-G.",
    preu: 130.15,
    oferta: "no"
  },
  {
    id: 11,
    nom: "Ratón gaming Razer DeathAdder V2",
    descripcio: "Ratón ergonómico con sensor óptico de 20.000 DPI.",
    preu: 70.25,
    oferta: "sí"
  },
  {
    id: 12,
    nom: "Memoria RAM G.Skill Trident Z RGB 32GB",
    descripcio: "Kit de 32GB DDR4 a 3600MHz con iluminación RGB.",
    preu: 210.80,
    oferta: "no"
  },
  {
    id: 13,
    nom: "Disco duro Seagate Barracuda 2TB",
    descripcio: "Disco duro mecánico para almacenamiento masivo de datos.",
    preu: 55.00,
    oferta: "sí"
  },
  {
    id: 14,
    nom: "Tarjeta WiFi ASUS PCE-AC88",
    descripcio: "Tarjeta PCIe para conexión WiFi AC3100 de alta velocidad.",
    preu: 90.75,
    oferta: "no"
  },
  {
    id: 15,
    nom: "Altavoces Logitech Z623",
    descripcio: "Sistema de altavoces 2.1 con potencia de 200W RMS.",
    preu: 95.40,
    oferta: "sí"
  },
  {
    id: 16,
    nom: "Webcam Logitech C920",
    descripcio: "Cámara web Full HD 1080p con enfoque automático.",
    preu: 65.99,
    oferta: "no"
  },
  {
    id: 17,
    nom: "Disco SSD Western Digital Blue 500GB",
    descripcio: "Unidad SSD SATA con buena velocidad para uso general.",
    preu: 60.00,
    oferta: "sí"
  },
  {
    id: 18,
    nom: "Placa base MSI B450 TOMAHAWK MAX",
    descripcio: "Placa base para procesadores AMD Ryzen con buena relación calidad-precio.",
    preu: 110.50,
    oferta: "no"
  },
  {
    id: 19,
    nom: "Procesador AMD Ryzen 5 5600X",
    descripcio: "Procesador de 6 núcleos y 12 hilos con alta eficiencia.",
    preu: 270.00,
    oferta: "sí"
  },
  {
    id: 20,
    nom: "Tarjeta gráfica AMD Radeon RX 6600 XT",
    descripcio: "GPU con 8GB GDDR6, buena para gaming 1080p.",
    preu: 380.00,
    oferta: "no"
  },
  {
    id: 21,
    nom: "Placa Base ASUS PRIME B650-PLUS WIFI",
    descripcio: "Las placas base ASUS de la serie Prime están diseñadas por expertos para liberar todo el potencial de los procesadores AMD Ryzen.",
    preu: 157.99,
    oferta: "sí"
  },
  {
    id: 22,
    nom: "Placa Base MSI PRO B650-S WIFI",
    descripcio: "La Serie PRO está diseñada para profesionales de todos los ámbitos de la vida.",
    preu: 141.99,
    oferta: "no"
  },
  {
    id: 23,
    nom: "Placa Base MSI MPG B550 GAMING PLUS",
    descripcio: "La serie MPG saca lo mejor de los jugadores al permitir expresión completa con iluminación RGB.",
    preu: 110.90,
    oferta: "sí"
  },
  {
    id: 24,
    nom: "Placa Base Gigabyte B760M DS3H DDR4",
    descripcio: "Placa base GIGABYTE con software útil e intuitivo y efectos de iluminación personalizables.",
    preu: 92.95,
    oferta: "no"
  },
  {
    id: 25,
    nom: "Placa Base MSI PRO H610M-G DDR4",
    descripcio: "Serie PRO con ensamblaje de alta calidad, eficiencia y durabilidad.",
    preu: 68.99,
    oferta: "sí"
  },
  {
    id: 26,
    nom: "Tarjeta Gráfica MSI GeForce RTX 5080 VENTUS 3X",
    descripcio: "VENTUS se centra en lo esencial con una refrigeración eficiente.",
    preu: 1000.00,
    oferta: "no"
  },
  {
    id: 27,
    nom: "Tarjeta Gráfica ASUS Dual GeForce RTX 5060",
    descripcio: "Con tecnología NVIDIA Blackwell, ofrece DLSS 4 y potencia de IA.",
    preu: 309.00,
    oferta: "sí"
  },
  {
    id: 28,
    nom: "Tarjeta Gráfica ASUS Dual GeForce RTX 3050",
    descripcio: "Disfruta de trazado de rayos en tiempo real y DLSS con IA.",
    preu: 189.90,
    oferta: "no"
  },
  {
    id: 29,
    nom: "Tarjeta Gráfica ZOTAC GAMING GeForce RTX 5060",
    descripcio: "Compacta, con arquitectura Blackwell, DLSS4 y 8 GB de memoria GDDR7.",
    preu: 309.90,
    oferta: "sí"
  },
  {
    id: 30,
    nom: "Tarjeta Gráfica Gigabyte GeForce RTX 3060",
    descripcio: "Refrigeración WINDFORCE 2X con tubos de calor de cobre y ventiladores.",
    preu: 302.98,
    oferta: "no"
  },
  {
    id: 31,
    nom: "Procesador AMD Ryzen 7 9800X3D 4.7/5.2GHz",
    descripcio: "Con tecnología AMD 3D V-Cache™ de segunda generación.",
    preu: 494.90,
    oferta: "sí"
  },
  {
    id: 32,
    nom: "Procesador Intel Core i5-12400 2.5 GHz",
    descripcio: "Procesadores Intel® Core™ de 12ª generación con arquitectura híbrida.",
    preu: 165.00,
    oferta: "no"
  },
  {
    id: 33,
    nom: "Procesador AMD Ryzen 7 5700G 4.6GHz",
    descripcio: "Arquitectura avanzada para jugadores y creadores de contenido.",
    preu: 156.90,
    oferta: "sí"
  },
  {
    id: 34,
    nom: "Procesador Intel Core i7-12700 2.1 GHz",
    descripcio: "Intel® Core™ de 12ª generación con núcleos híbridos P y E.",
    preu: 283.99,
    oferta: "no"
  },
  {
    id: 35,
    nom: "Procesador Intel Core i9-14900KF 3.2",
    descripcio: "8 P-Cores, 16 E-Cores y hasta 6.0GHz con caché de 36MB.",
    preu: 457.42,
    oferta: "sí"
  },
  {
    id: 36,
    nom: "Memoria RAM Forgeon Cyclone PLUS V2 DDR4 3200 MHz 16GB",
    descripcio: "Memoria diseñada para gaming exigente.",
    preu: 54.99,
    oferta: "no"
  },
  {
    id: 37,
    nom: "Cyclone DDR4: diseñado para gamers apasionados",
    descripcio: "Memoria diseñada para acompañar en cada paso con máximo rendimiento.",
    preu: 54.99,
    oferta: "sí"
  },
  {
    id: 38,
    nom: "Memoria RAM Acer Predator Pallas II DDR5 6000MHz 32GB",
    descripcio: "Con PMIC y ECC integrado para rendimiento extremo.",
    preu: 99.99,
    oferta: "no"
  },
  {
    id: 39,
    nom: "Memoria RAM Kingston FURY Beast DDR5 5600MHz 32GB",
    descripcio: "DDR5 con ODECC, subcanales de 32 bits y PMIC integrado.",
    preu: 96.99,
    oferta: "sí"
  }
];

goToShow(nombre:string){
  
  this.router.navigateByUrl(`/showproducts/${nombre}`);
}
}

