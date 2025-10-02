import { Component } from '@angular/core';

@Component({
  selector: 'app-llista-productes',
  imports: [],
  templateUrl: './llista-productes.component.html',
  styleUrl: './llista-productes.component.css'
})
export class LlistaProductesComponent {
  articulos = [
    {
      nom: "Procesador Intel i7-11700K",
      descripcio: "Procesador de 8 núcleos y 16 hilos con velocidad base de 3.6 GHz.",
      preu: 320.99,
      oferta: "sí"
    },
    {
      nom: "Tarjeta gráfica NVIDIA RTX 3060",
      descripcio: "GPU con 12 GB de memoria GDDR6, ideal para gaming y edición de video.",
      preu: 450.50,
      oferta: "no"
    },
    {
      nom: "Memoria RAM Corsair Vengeance 16GB",
      descripcio: "Kit de 16GB DDR4 a 3200MHz para alto rendimiento.",
      preu: 85.75,
      oferta: "sí"
    },
    {
      nom: "Disco SSD Samsung 970 EVO Plus 1TB",
      descripcio: "Unidad SSD NVMe con velocidad de lectura de hasta 3500 MB/s.",
      preu: 150.20,
      oferta: "no"
    },
    {
      nom: "Placa base ASUS ROG Strix Z590-E",
      descripcio: "Placa base para procesadores Intel de 11ª generación con múltiples puertos.",
      preu: 280.00,
      oferta: "sí"
    },
    {
      nom: "Fuente de alimentación Corsair RM750x",
      descripcio: "Fuente de 750W con certificación 80 PLUS Gold, modular.",
      preu: 120.30,
      oferta: "no"
    },
    {
      nom: "Refrigeración líquida NZXT Kraken X63",
      descripcio: "Sistema de refrigeración líquida para CPU con radiador de 280mm.",
      preu: 160.45,
      oferta: "sí"
    },
    {
      nom: "Caja NZXT H510",
      descripcio: "Caja para PC con ventana lateral y buena gestión de cables.",
      preu: 75.99,
      oferta: "no"
    },
    {
      nom: "Monitor Dell Ultrasharp 27'' 4K",
      descripcio: "Monitor de 27 pulgadas con resolución 4K y colores precisos.",
      preu: 500.00,
      oferta: "sí"
    },
    {
      nom: "Teclado mecánico Logitech G Pro",
      descripcio: "Teclado mecánico compacto con switches Romer-G.",
      preu: 130.15,
      oferta: "no"
    },
    {
      nom: "Ratón gaming Razer DeathAdder V2",
      descripcio: "Ratón ergonómico con sensor óptico de 20.000 DPI.",
      preu: 70.25,
      oferta: "sí"
    },
    {
      nom: "Memoria RAM G.Skill Trident Z RGB 32GB",
      descripcio: "Kit de 32GB DDR4 a 3600MHz con iluminación RGB.",
      preu: 210.80,
      oferta: "no"
    },
    {
      nom: "Disco duro Seagate Barracuda 2TB",
      descripcio: "Disco duro mecánico para almacenamiento masivo de datos.",
      preu: 55.00,
      oferta: "sí"
    },
    {
      nom: "Tarjeta WiFi ASUS PCE-AC88",
      descripcio: "Tarjeta PCIe para conexión WiFi AC3100 de alta velocidad.",
      preu: 90.75,
      oferta: "no"
    },
    {
      nom: "Altavoces Logitech Z623",
      descripcio: "Sistema de altavoces 2.1 con potencia de 200W RMS.",
      preu: 95.40,
      oferta: "sí"
    },
    {
      nom: "Webcam Logitech C920",
      descripcio: "Cámara web Full HD 1080p con enfoque automático.",
      preu: 65.99,
      oferta: "no"
    },
    {
      nom: "Disco SSD Western Digital Blue 500GB",
      descripcio: "Unidad SSD SATA con buena velocidad para uso general.",
      preu: 60.00,
      oferta: "sí"
    },
    {
      nom: "Placa base MSI B450 TOMAHAWK MAX",
      descripcio: "Placa base para procesadores AMD Ryzen con buena relación calidad-precio.",
      preu: 110.50,
      oferta: "no"
    },
    {
      nom: "Procesador AMD Ryzen 5 5600X",
      descripcio: "Procesador de 6 núcleos y 12 hilos con alta eficiencia.",
      preu: 270.00,
      oferta: "sí"
    },
    {
      nom: "Tarjeta gráfica AMD Radeon RX 6600 XT",
      descripcio: "GPU con 8GB GDDR6, buena para gaming 1080p.",
      preu: 380.00,
      oferta: "no"
    },
    {
      nom: "Placa Base ASUS PRIME B650-PLUS WIFI",
      descripcio:
        "Las placas base ASUS de la serie Prime están diseñadas por expertos para liberar todo el potencial de los procesadores AMD Ryzen de las series 9000, 8000 y 7000.",
      preu: 157.99,
      oferta: "sí"
    },
    {
      nom: "Placa Base MSI PRO B650-S WIFI",
      descripcio:
        "La Serie PRO está diseñada para profesionales de todos los ámbitos de la vida. La línea presenta un rendimiento impresionante y alta calidad, al tiempo que apunta a brindar a los usuarios una experiencia increíble.",
      preu: 141.99,
      oferta: "no"
    },
    {
      nom: "Placa Base MSI MPG B550 GAMING PLUS ",
      descripcio:
        "La serie MPG saca lo mejor de los jugadores al permitir una expresión completa en color con control avanzado de iluminación RGB y sincronización.",
      precio: 110.90,
      oferta: "sí"
    },
    {
      nom: "Placa Base Gigabyte B760M DS3H DDR4",
      descripcio:
        "Las placas base GIGABYTE incluyen varios software útiles e intuitivos para ayudar a los usuarios a controlar todos los aspectos de la placa base y proporcionar un efecto de iluminación personalizable con una estética excepcional para adaptarse a su personalidad única.",
      precio: 92.95,
      oferta: "no"
    },
    {
      nom: "Placa Base MSI PRO H610M-G DDR4",
      descripcio:
        "La serie PRO ayuda a los usuarios a trabajar de manera más inteligente al brindar una experiencia eficiente y productiva. Con una funcionalidad estable y un ensamblaje de alta calidad, las placas base de la serie PRO brindan no solo flujos de trabajo profesionales optimizados, sino también menos resolución de problemas y longevidad.",
      precio: 68.99,
      oferta: "sí"
    },
    {
      nom: "Tarjeta Gráfica MSI GeForce RTX 5080 VENTUS 3X ",
      descripcio:
        "VENTUS se centra en lo esencial para afrontar cualquier desafío. Su eficiente solución térmica está envuelta en una carcasa resistente con una estética neutra, lo que permite que esta elegante tarjeta gráfica se integre perfectamente en cualquier sistema.",
      precio: 1000,
      oferta: "no"
    },
    {
      nom: "Tarjeta Gráfica ASUS Dual GeForce RTX 5060",
      descripcio:
        "Cambia el juego. Con tecnología de NVIDIA Blackwell, las GPU GeForce RTX™ serie 50 ofrecen capacidades revolucionarias a jugadores y creadores. Equipada con una increíble potencia de IA, la RTX serie 50 abre el camino hacia nuevas experiencias y ofrece fidelidad gráfica de siguiente nivel. Multiplica el rendimiento con NVIDIA DLSS 4, genera imágenes a una velocidad sin precedentes y libera tu creatividad con NVIDIA Studio.",
      precio: 309,
      oferta: "sí"
    },
    {
      nom: "Tarjeta Gráfica ASUS Dual GeForce RTX 3050",
      descripcio:
        "RTX.  IT’S ON. Disfruta de los mayores éxitos de ventas de hoy como nunca antes con la fidelidad visual del trazado de rayos en tiempo real y el rendimiento definitivo de DLSS con tecnología de IA.",
      precio: 189.90,
      oferta: "no"
    },
    {
      nom: "Tarjeta Gráfica ZOTAC GAMING GeForce RTX 5060",
      descripcio:
        "La ZOTAC GAMING GeForce RTX 5060 Twin Edge es una tarjeta gráfica compacta con la innovadora arquitectura Blackwell de NVIDIA, DLSS4 y 8 GB de memoria GDDR7. Gracias a su sólida refrigeración, la Twin Edge está lista para afrontar los últimos lanzamientos con una velocidad de fotogramas y un rendimiento fluidos.",
      precio: 309.90,
      oferta: "sí"
    },
    {
      nom: "Tarjeta Gráfica Gigabyte GeForce RTX 3060 ",
      descripcio:
        "El sistema de refrigeración WINDFORCE 2X cuenta con dos ventiladores de aspa únicos de 90 mm, giro alternativo, 3 tubos de calor de cobre compuestos GPU táctiles directos, ventilador activo 3D y refrigeración de pantalla, que juntos proporcionan una disipación de calor de alta eficiencia.",
      precio: 302.98,
      oferta: "no"
    },
    {
      nom: "Procesador AMD Ryzen 7 9800X3D 4.7/5.2GHz",
      descripcio:
        "Aproveche la máxima ventaja en juegos con el procesador AMD Ryzen™ 7 9800X3D. Disfrute de juegos más rápidos con la tecnología AMD 3D V-Cache™ de segunda generación para una latencia baja.",
      precio: 494.90,
      oferta: "sí"
    },
    {
      nom: "Procesador Intel Core i5-12400 2.5 GHz",
      descripcio:
        "Procesadores Intel® Core™ de 12ª generación: una generación como ninguna otra antes. Con una nueva arquitectura híbrida de rendimiento sin precedentes, los procesadores Intel® Core™ de 12ª generación ofrecen una combinación única de núcleos de rendimiento y eficiencia (núcleo P y núcleo E). ",
      precio: 165,
      oferta: "no"
    },
    {
      nom: "Procesador AMD Ryzen 7 5700G 4.6GHz",
      descripcio:
        "Cuando cuentas con la arquitectura de procesadores más avanzada del mundo para jugadores y creadores de contenido, las posibilidades son infinitas. ",
      precio: 156.90,
      oferta: "sí"
    },
    {
      nom: "Procesador Intel Core i7-12700 2.1 GHz",
      descripcio:
        "Procesadores Intel® Core™ de 12ª generación: una generación como ninguna otra antes. Con una nueva arquitectura híbrida de rendimiento sin precedentes, los procesadores Intel® Core™ de 12ª generación ofrecen una combinación única de núcleos de rendimiento y eficiencia (núcleo P y núcleo E). Y eso significa gozar de rendimiento en el mundo real, un resultado escalado intuitivamente para adaptarse a cualquier cosa que estés haciendo.",
      precio: 283.99,
      oferta: "no"
    },
    {
      nom: "Procesador Intel Core i9-14900KF 3.2/6GHz Box",
      descripcio:
        "El procesador Intel Core i9-14900KF 6.0GHz, diseñado para placas base LGA1700, es un potente chip de la 14ª generación. Ofrece un total de 8 P-Cores y 16 E-Cores, con una frecuencia base de 3,20 GHz para los P-Cores y una impresionante frecuencia máxima de 6,00 GHz. Los E-Cores alcanzan hasta 4,40 GHz. Con 36 MB de memoria caché y un multiplicador desbloqueado, este procesador tiene un TDP de 125W. Se basa en la microarquitectura Raptor Lake Refresh y promete un rendimiento excepcional.",
      precio: 457.42,
      oferta: "sí"
    },
    {
      nom: "Memoria RAM Forgeon Cyclone PLUS V2 DDR4 3200 MHz 16GB 2x8GB CL16 Negra",
      descripcio:
        "Imagina cada victoria, cada épica batalla, y cada logro desbloqueado con una memoria diseñada para acompañarte en cada paso. Cyclone DDR4 está hecho para que tu PC rinda al máximo, asegurando que nada te detenga, ni siquiera los desafíos más exigentes.",
      precio: 54.99,
      oferta: "no"
    },
    {
      nom: "Cyclone DDR4: diseñado para gamers apasionados como tú.",
      descripcio:
        "Imagina cada victoria, cada épica batalla, y cada logro desbloqueado con una memoria diseñada para acompañarte en cada paso. Cyclone DDR4 está hecho para que tu PC rinda al máximo, asegurando que nada te detenga, ni siquiera los desafíos más exigentes.",
      precio: 54.99,
      oferta: "sí"
    },
    {
      nom: "Memoria RAM Acer Predator Pallas II DDR5 6000MHz 32GB 2x16GB CL34 Negra Intel XMP 3.0 y AMD EXPO",
      descripcio:
        "Con una alta frecuencia y una baja latencia, la memoria Predator DDR5 Pallas II está diseñada para que los profesionales superen los límites. Fabricada con circuitos integrados de alta calidad, Predator Pallas II cuenta con PMIC (circuito integrado de administración de energía) y ECC (código de corrección de errores) integrado para brindar un rendimiento extremo.",
      precio: 99.99,
      oferta: "no"
    },
    {
      nom: "Memoria RAM Kingston FURY Beast DDR5 5600MHz 32GB 2x16GB CL36",
      descripcio:
        "La memoria Kingston FURY™ Beast DDR5 la memoria trae la tecnología más novedosa y avanzada para las plataformas de juego de nueva generación. Empujando todavía más allá los límites de velocidad, capacidad y fiabilidad, DDR5 llega con multitud de novedades y mejoras, como el ECC (código de corrección de errores) interno (ODECC) para mantener la estabilidad a velocidades extremas, dobles subcanales de 32 bits para incrementar la eficacia, y un circuito integrado de gestión de alimentación dentro del modulo (PMIC) para inyectar energía cuando más se la necesita.",
      precio: 96.99,
      oferta: "sí"
    }
  ];
}

