import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-llista-productes',
  imports: [NgxPaginationModule],
  templateUrl: './llista-productes.component.html',
  styleUrl: './llista-productes.component.css'
})
export class LlistaProductesComponent {
  p: number = 1;

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
  },
  {
    id: 40,
    nom: "Auriculares Gaming HyperSound X900",
    descripcio: "Auriculares envolventes con sonido 7.1 virtual, cojines de espuma viscoelástica y micrófono retráctil con cancelación de ruido. Ideales para sesiones largas de juego.",
    preu: 89.99,
    oferta: "no"
  },
  {
    id: 41,
    nom: "Monitor ASUS ProArt 32'' 5K HDR",
    descripcio: "Monitor profesional diseñado para creadores con precisión de color ΔE<2, gama 98% DCI-P3 y soporte HDR10. Ideal para edición avanzada.",
    preu: 1299.00,
    oferta: "sí"
  },
  {
    id: 42,
    nom: "Teclado Mecánico StormBlade TKL RGB",
    descripcio: "Teclado compacto sin pad numérico con interruptores ópticos rojos, retroiluminación RGB por tecla y carcasa de aluminio anodizado.",
    preu: 119.90,
    oferta: "no"
  },
  {
    id: 40,
    nom: "Auriculares Gaming HyperSound X900",
    descripcio: "Auriculares envolventes con sonido 7.1 virtual, almohadillas de espuma viscoelástica y micrófono retráctil con cancelación de ruido. Ideales para largas sesiones de juego.",
    preu: 89.99,
    oferta: "no"
  },
  {
    id: 41,
    nom: "Monitor ASUS ProArt 32'' 5K HDR",
    descripcio: "Monitor profesional para creadores con precisión de color ΔE<2, gama 98% DCI-P3 y certificación HDR10. Diseñado para fotografía y vídeo profesional.",
    preu: 1299.00,
    oferta: "sí"
  },
  {
    id: 42,
    nom: "Teclado Mecánico StormBlade TKL RGB",
    descripcio: "Teclado compacto TKL con switches ópticos rojos, retroiluminación RGB por tecla y chasis de aluminio anodizado para máxima durabilidad.",
    preu: 119.90,
    oferta: "no"
  },
  {
    id: 43,
    nom: "Alfombrilla XXL SteelWave Precision",
    descripcio: "Alfombrilla de tamaño extendido con superficies microtexturizadas para mejor deslizamiento y base antideslizante.",
    preu: 24.99,
    oferta: "sí"
  },
  {
    id: 44,
    nom: "Micrófono USB StreamCast Pro",
    descripcio: "Micrófono profesional cardioide con calidad de estudio, filtro pop integrado y soporte ajustable. Ideal para streaming y podcasts.",
    preu: 79.00,
    oferta: "sí"
  },
  {
    id: 45,
    nom: "Webcam UltraHD 4K VisionCam S1",
    descripcio: "Webcam 4K con autoenfoque inteligente, HDR y cancelación de ruido en el micrófono dual.",
    preu: 139.90,
    oferta: "no"
  },
  {
    id: 46,
    nom: "Hub USB-C ThunderMax 9-en-1",
    descripcio: "Hub premium con HDMI 4K, lector SD/TF, 3 puertos USB-A, Ethernet y USB-C Power Delivery.",
    preu: 59.99,
    oferta: "sí"
  },
  {
    id: 47,
    nom: "Router Gaming SpeedLink XR7000",
    descripcio: "Router WiFi 6 con triple banda, QoS para gaming, puertos 2.5GbE y antenas de alto alcance.",
    preu: 189.99,
    oferta: "no"
  },
  {
    id: 48,
    nom: "Disco Externo TitanDrive 5TB USB 3.2",
    descripcio: "Unidad de almacenamiento portátil con carcasa anti-golpes y velocidades de transferencia muy altas.",
    preu: 149.00,
    oferta: "sí"
  },
  {
    id: 49,
    nom: "Silla Gaming ShadowPro V2",
    descripcio: "Silla ergonómica con espuma moldeada, soporte lumbar ajustable y reclinado hasta 165°. Material premium.",
    preu: 239.00,
    oferta: "no"
  },
  {
    id: 50,
    nom: "Monitor Curvo MSI Optix 27'' 165Hz",
    descripcio: "Panel VA curvo con 165Hz, 1ms y cobertura de color sRGB 122%. Ideal para gaming inmersivo.",
    preu: 279.90,
    oferta: "sí"
  },
  {
    id: 51,
    nom: "SSD NVMe XtremeSpeed 2TB Gen4",
    descripcio: "SSD ultrarrápido PCIe 4.0 con hasta 7000MB/s y disipador térmico incluido.",
    preu: 179.00,
    oferta: "no"
  },
  {
    id: 52,
    nom: "Tarjeta Capturadora StreamBox 4K60",
    descripcio: "Captura en 4K 60FPS HDR, baja latencia, compatible con OBS y consolas next-gen.",
    preu: 229.00,
    oferta: "sí"
  },
  {
    id: 53,
    nom: "Pack 3 Ventiladores RGB FrostCool",
    descripcio: "Tres ventiladores ARGB con controladora incluida y rodamientos hidráulicos ultra silenciosos.",
    preu: 39.99,
    oferta: "sí"
  },
  {
    id: 54,
    nom: "Volante RacingForce GT900",
    descripcio: "Volante con force feedback, pedales metálicos y giro configurable hasta 900°. Compatible con PC y consolas.",
    preu: 289.00,
    oferta: "no"
  },
  {
    id: 55,
    nom: "Smartwatch TitanFit S5",
    descripcio: "Reloj inteligente con pantalla AMOLED, GPS, medición de oxígeno y 10 días de batería.",
    preu: 119.99,
    oferta: "sí"
  },
  {
    id: 56,
    nom: "Cargador Inalámbrico FastCharge 30W",
    descripcio: "Base de carga rápida universal con protección térmica y diseño antideslizante.",
    preu: 29.99,
    oferta: "no"
  },
  {
    id: 57,
    nom: "Cámara Deportiva 4K ActionMaster",
    descripcio: "Grabación 4K 120FPS, estabilización óptica avanzada y carcasa sumergible hasta 40 metros.",
    preu: 159.00,
    oferta: "sí"
  },
  {
    id: 58,
    nom: "Chromebook AeroLite 14''",
    descripcio: "Diseño ultraligero, batería de 12 horas y pantalla Full HD ideal para trabajo y estudio.",
    preu: 219.00,
    oferta: "no"
  },
  {
    id: 59,
    nom: "Disco Duro Externo ArmorSafe 1TB",
    descripcio: "Carcasa reforzada resistente a golpes y agua. USB 3.1 de alta velocidad.",
    preu: 69.99,
    oferta: "sí"
  },
  {
    id: 60,
    nom: "Auriculares Bluetooth DeepBass X2",
    descripcio: "Sonido profundo con drivers de 40mm, 30h de autonomía y cancelación activa de ruido.",
    preu: 99.00,
    oferta: "no"
  },
  {
    id: 61,
    nom: "Mini PC PowerBox Z4",
    descripcio: "Mini PC con Ryzen 7, 16GB RAM y SSD 1TB. Ultra compacto y silencioso.",
    preu: 599.00,
    oferta: "sí"
  },
  {
    id: 62,
    nom: "Ratón Inalámbrico SwiftClick Pro",
    descripcio: "Ratón ergonómico, sensor de 16000 DPI y batería de 90 horas.",
    preu: 49.99,
    oferta: "no"
  },
  {
    id: 63,
    nom: "Teclado Low Profile CarbonLight",
    descripcio: "Teclado delgado con switches de perfil bajo y retroiluminación blanca suave.",
    preu: 69.90,
    oferta: "sí"
  },
  {
    id: 64,
    nom: "Monitor Philips 24'' 75Hz",
    descripcio: "Monitor económico con panel IPS, biseles finos y modo LowBlue para reducir fatiga.",
    preu: 99.00,
    oferta: "no"
  },
  {
    id: 65,
    nom: "Altavoz Bluetooth BoomWave S",
    descripcio: "Sonido potente 360°, resistente al agua IPX7 y 20h de batería.",
    preu: 59.99,
    oferta: "sí"
  },
  {
    id: 66,
    nom: "Cámara de Seguridad HomeGuard 2K",
    descripcio: "Visión nocturna, seguimiento automático y almacenamiento en la nube.",
    preu: 49.90,
    oferta: "sí"
  },
  {
    id: 67,
    nom: "Smart TV 55'' UltraVision QLED",
    descripcio: "Panel QLED 4K con HDR10+, 120Hz y sistema operativo fluido.",
    preu: 649.00,
    oferta: "no"
  },
  {
    id: 68,
    nom: "Proyector CinemaBeam 1080p",
    descripcio: "Proyector portátil con 600 lúmenes, altavoces integrados y pantalla de hasta 150 pulgadas.",
    preu: 189.00,
    oferta: "sí"
  },
  {
    id: 69,
    nom: "Tablet SoftTab 10",
    descripcio: "Pantalla 10'' HD, 4GB RAM y batería de dos días. Ideal para uso ligero.",
    preu: 129.99,
    oferta: "no"
  },
  {
    id: 70,
    nom: "Teclado RetroType Classic",
    descripcio: "Teclado mecánico estilo máquina de escribir con switches blue ruidosos.",
    preu: 89.99,
    oferta: "sí"
  },
  {
    id: 71,
    nom: "Aireador USB CoolDesk Mini",
    descripcio: "Mini ventilador con base flexible para escritorio. Silencioso y de bajo consumo.",
    preu: 14.99,
    oferta: "no"
  },
  {
    id: 72,
    nom: "Impresora Multifunción PrintAll 300",
    descripcio: "Imprime, escanea y fotocopia. Conectividad WiFi y tinta económica.",
    preu: 99.00,
    oferta: "sí"
  },
  {
    id: 73,
    nom: "Tarjeta Sonido USB AudioMax",
    descripcio: "Tarjeta externa con amplificador integrado y compatibilidad plug & play.",
    preu: 29.99,
    oferta: "no"
  },
  {
    id: 74,
    nom: "Barra de Sonido Cinemax S2",
    descripcio: "2.1 canales con subwoofer inalámbrico y sonido envolvente virtual.",
    preu: 149.00,
    oferta: "sí"
  },
  {
    id: 75,
    nom: "Soporte Monitor ElevatePro",
    descripcio: "Soporte ajustable en altura con bandeja para teclado y acabado metálico.",
    preu: 44.90,
    oferta: "no"
  },
  {
    id: 76,
    nom: "Set Limpieza TechClean Ultimate",
    descripcio: "Limpiador antiestático, paño de microfibra premium y spray desinfectante.",
    preu: 12.99,
    oferta: "sí"
  },
  {
    id: 77,
    nom: "Router Mesh CloudWave M3",
    descripcio: "Sistema de malla con cobertura total de hasta 550m² y WiFi 6 optimizado.",
    preu: 219.00,
    oferta: "no"
  },
  {
    id: 78,
    nom: "Cámara Compacta PhotoMaster Z10",
    descripcio: "Sensor 20MP, zoom óptico 12x y estabilización digital.",
    preu: 179.00,
    oferta: "sí"
  },
  {
    id: 79,
    nom: "Tarjeta USB WiFi Nano AC600",
    descripcio: "Adaptador ultracompacto compatible con redes 2.4 y 5GHz.",
    preu: 9.99,
    oferta: "sí"
  },
  {
    id: 80,
    nom: "Joystick AeroFlight Pro",
    descripcio: "Joystick avanzado para simuladores con 12 botones programables.",
    preu: 69.00,
    oferta: "no"
  },
{
    id: 81,
    nom: "Memoria RAM Corsair Dominator Platinum RGB DDR5 32GB",
    descripcio: "Kit de memoria DDR5 con iluminación RGB Addressable, optimizada para rendimiento extremo y bajas latencias, ideal para sistemas de gama alta.",
    preu: 199.90,
    oferta: "no"
},
{
    id: 82,
    nom: "Tarjeta Gráfica ASUS ROG Strix RTX 4070 Ti SUPER",
    descripcio: "GPU de última generación con arquitectura Ada Lovelace, triple ventilador axial y un rendimiento espectacular en 1440p y 4K.",
    preu: 949.00,
    oferta: "sí"
},
{
    id: 83,
    nom: "Disco SSD Samsung 990 PRO 1TB",
    descripcio: "Unidad SSD NVMe PCIe 4.0 con velocidades de lectura increíbles de hasta 7450 MB/s, diseñada para gaming competitivo y edición multimedia.",
    preu: 145.99,
    oferta: "no"
},
{
    id: 84,
    nom: "Fuente de Alimentación Seasonic PRIME TX-1000 1000W",
    descripcio: "Fuente 80+ Titanium totalmente modular con componentes premium para estabilidad eléctrica absoluta incluso en sistemas overclock.",
    preu: 329.50,
    oferta: "sí"
},
{
    id: 85,
    nom: "Caja Fractal Design Meshify 2 RGB",
    descripcio: "Caja con panel frontal mesh optimizado, excelente flujo de aire, compatibilidad con placas E-ATX y paneles laterales de vidrio templado.",
    preu: 179.00,
    oferta: "no"
},
{
    id: 86,
    nom: "Refrigeración Líquida NZXT Kraken Elite 360 RGB",
    descripcio: "AIO con pantalla LCD personalizable, bomba de alto rendimiento y ventiladores RGB de presión estática.",
    preu: 269.90,
    oferta: "sí"
},
{
    id: 87,
    nom: "Tarjeta WiFi TP-Link Archer TXE75E",
    descripcio: "Tarjeta PCIe con WiFi 6E y Bluetooth 5.3, baja latencia y rendimiento extremo para gaming competitivo online.",
    preu: 62.99,
    oferta: "no"
},
{
    id: 88,
    nom: "Router ASUS ROG Rapture GT-AX11000",
    descripcio: "Router gaming WiFi 6 tri-banda con aceleración de paquetes, QoS optimizado y diseño agresivo con múltiples antenas.",
    preu: 389.00,
    oferta: "sí"
},
{
    id: 89,
    nom: "Monitor LG UltraGear 32'' QHD 165Hz",
    descripcio: "Monitor con panel IPS de bajo tiempo de respuesta, ideal para shooters competitivos con gran nitidez y colores vibrantes.",
    preu: 299.95,
    oferta: "no"
},
{
    id: 90,
    nom: "Teclado Mecánico Razer BlackWidow V4 Pro",
    descripcio: "Teclado premium con switches mecánicos táctiles, iluminación Chroma RGB y reposamuñecas magnético.",
    preu: 229.99,
    oferta: "sí"
},
{
    id: 91,
    nom: "Ratón Gaming Logitech G502 X PLUS",
    descripcio: "Ratón con switches ópticos-mecánicos híbridos, sensor HERO 25K y efectos RGB LIGHTSYNC.",
    preu: 129.99,
    oferta: "no"
},
{
    id: 92,
    nom: "Altavoces Edifier R1700BT",
    descripcio: "Sistema de altavoces 2.0 con Bluetooth, construcción en madera y excelente claridad de sonido.",
    preu: 89.90,
    oferta: "sí"
},
{
    id: 93,
    nom: "Auriculares Sony WH-1000XM5",
    descripcio: "Auriculares con cancelación de ruido líder en la industria, sonido de alta resolución y batería de larga duración.",
    preu: 289.90,
    oferta: "no"
},
{
    id: 94,
    nom: "Micrófono HyperX QuadCast S",
    descripcio: "Micrófono USB RGB con diferentes patrones polares, ideal para streaming, podcasts y videollamadas.",
    preu: 119.95,
    oferta: "sí"
},
{
    id: 95,
    nom: "Webcam Elgato Facecam",
    descripcio: "Webcam profesional 1080p60 con sensor Sony y control total desde software para streamers.",
    preu: 149.99,
    oferta: "no"
},
{
    id: 96,
    nom: "Capturadora Elgato HD60 X",
    descripcio: "Capturadora externa con soporte 4K60 HDR passtrough y compatibilidad con consolas modernas.",
    preu: 169.00,
    oferta: "sí"
},
{
    id: 97,
    nom: "Switch Netgear GS308 8 Puertos",
    descripcio: "Switch Gigabit no gestionado con carcasa metálica y rendimiento estable.",
    preu: 29.99,
    oferta: "no"
},
{
    id: 98,
    nom: "NAS Synology DS223",
    descripcio: "Servidor NAS de 2 bahías con sistema operativo DSM para copias, multimedia y virtualización ligera.",
    preu: 299.00,
    oferta: "sí"
},
{
    id: 99,
    nom: "SAI APC Back-UPS 1100VA",
    descripcio: "Sistema de alimentación ininterrumpida con regulación automática de voltaje, ideal para proteger PCs y servidores.",
    preu: 154.99,
    oferta: "no"
},
{
    id: 100,
    nom: "Procesador AMD Ryzen 9 7950X3D",
    descripcio: "Procesador tope de gama con tecnología 3D V-Cache para máximo rendimiento en gaming.",
    preu: 579.00,
    oferta: "sí"
},
{
    id: 101,
    nom: "Procesador Intel Core i5-14600K",
    descripcio: "CPU híbrida con núcleos P y E optimizados para alto rendimiento en multitarea y gaming.",
    preu: 359.00,
    oferta: "no"
},
{
    id: 102,
    nom: "Placa Base ASRock B650M Pro RS",
    descripcio: "Placa microATX para AM5 con disipadores optimizados, soporte DDR5 y puertos M.2 PCIe 5.0.",
    preu: 129.50,
    oferta: "sí"
},
{
    id: 103,
    nom: "Disco HDD Toshiba N300 6TB",
    descripcio: "Disco duro diseñado para NAS con alta durabilidad, optimización para cargas 24/7 y grandes volúmenes.",
    preu: 139.90,
    oferta: "no"
},
{
    id: 104,
    nom: "Tarjeta Gráfica MSI Radeon RX 7800 XT",
    descripcio: "GPU potente diseñada para gaming 1440p con refrigeración Twin Frozr y gran eficiencia energética.",
    preu: 589.00,
    oferta: "sí"
},
{
    id: 105,
    nom: "RAM ADATA XPG Lancer DDR5 6000MHz 16GB",
    descripcio: "Módulo DDR5 con disipador de aluminio y rendimiento estable para sistemas gaming.",
    preu: 67.99,
    oferta: "no"
},
{
    id: 106,
    nom: "Hub USB-C UGREEN 9 en 1",
    descripcio: "Hub con HDMI 4K, USB 3.0, lector SD y PD 100W para portátiles modernos.",
    preu: 49.90,
    oferta: "sí"
},
{
    id: 107,
    nom: "Cámara de Seguridad TP-Link Tapo C210",
    descripcio: "Cámara rotatoria 360º con visión nocturna y detección de movimiento.",
    preu: 32.90,
    oferta: "no"
},
{
    id: 108,
    nom: "SSD Western Digital Black SN850X 4TB",
    descripcio: "SSD tope de gama con velocidades extremas de lectura para cargas pesadas.",
    preu: 389.00,
    oferta: "sí"
},
{
    id: 109,
    nom: "Tarjeta de Sonido Creative Sound BlasterX AE-5",
    descripcio: "Tarjeta interna con DAC de alta calidad y amplificador para auriculares.",
    preu: 129.00,
    oferta: "no"
},
{
    id: 110,
    nom: "Switch D-Link DGS-1016D 16 Puertos",
    descripcio: "Switch Gigabit eficiente, ideal para oficinas o redes domésticas con muchas conexiones.",
    preu: 79.95,
    oferta: "sí"
},
{
    id: 111,
    nom: "Repetidor WiFi Xiaomi AX3000",
    descripcio: "Repetidor de alta velocidad compatible con WiFi 6, ideal para casas grandes.",
    preu: 39.99,
    oferta: "no"
},
{
    id: 112,
    nom: "Cámara Deportiva GoPro HERO 12",
    descripcio: "Cámara deportiva 5.3K con estabilización HyperSmooth 6.0.",
    preu: 429.00,
    oferta: "sí"
},
{
    id: 113,
    nom: "Estación Docking Dell USB-C WD19",
    descripcio: "Dock profesional con múltiples puertos para configuraciones de trabajo avanzadas.",
    preu: 179.99,
    oferta: "no"
},
{
    id: 114,
    nom: "Router Xiaomi AX5400",
    descripcio: "Router WiFi 6 de alto rendimiento con antenas optimizadas para baja latencia.",
    preu: 99.99,
    oferta: "sí"
},
{
    id: 115,
    nom: "Auriculares Logitech G PRO X",
    descripcio: "Auriculares gaming con drivers de precisión y micrófono Blue VO!CE.",
    preu: 119.00,
    oferta: "no"
},
{
    id: 116,
    nom: "Tablet Samsung Galaxy Tab S9",
    descripcio: "Tablet con AMOLED, S-Pen incluido y rendimiento excepcional.",
    preu: 849.00,
    oferta: "sí"
},
{
    id: 117,
    nom: "Teclado Mecánico Keychron K8 Pro",
    descripcio: "Teclado inalámbrico hot-swap con switches intercambiables y construcción premium.",
    preu: 99.99,
    oferta: "no"
},
{
    id: 118,
    nom: "Cargador GaN Anker 65W",
    descripcio: "Cargador compacto con tecnología GaN para carga rápida y eficiente.",
    preu: 39.90,
    oferta: "sí"
},
{
    id: 119,
    nom: "Powerbank Baseus 20.000 mAh 65W",
    descripcio: "Batería portátil con carga rápida PD capaz de alimentar portátiles ligeros.",
    preu: 49.99,
    oferta: "no"
},
{
    id: 120,
    nom: "Kit Iluminación Elgato Key Light",
    descripcio: "Luz LED profesional para streaming con control desde software.",
    preu: 169.90,
    oferta: "sí"
},
{
    id: 120,
    nom: "Auriculares Gaming SteelSound X7",
    descripcio: "Sonido surround 7.1, micrófono retráctil y almohadillas de gel refrescante.",
    preu: 79.99,
    oferta: "sí"
  },
  {
    id: 121,
    nom: "Webcam UltraView 4K Pro",
    descripcio: "Resolución 4K a 30fps, autofoco rápido y micrófono estéreo integrado.",
    preu: 119.00,
    oferta: "no"
  },
  {
    id: 122,
    nom: "Hub USB-C MultiPort Elite",
    descripcio: "7 puertos incluyendo HDMI 4K, USB 3.0 y lector de tarjetas SD.",
    preu: 45.99,
    oferta: "sí"
  },
  {
    id: 123,
    nom: "Disco Duro Externo 4TB RapidStore",
    descripcio: "Almacenamiento masivo con USB 3.2 Gen 2 y diseño compacto resistente.",
    preu: 89.90,
    oferta: "no"
  },
  {
    id: 124,
    nom: "Lámpara LED SmartGlow RGB",
    descripcio: "Iluminación inteligente con 16 millones de colores y control por app.",
    preu: 34.99,
    oferta: "sí"
  },
  {
    id: 125,
    nom: "Mousepad XXL GamerZone",
    descripcio: "Alfombrilla extendida 90x40cm con base antideslizante y bordes cosidos.",
    preu: 19.99,
    oferta: "no"
  },
  {
    id: 126,
    nom: "Teclado Numerico Bluetooth SlimPad",
    descripcio: "Teclado numérico inalámbrico ultra delgado para laptops y tablets.",
    preu: 24.90,
    oferta: "sí"
  },
  {
    id: 127,
    nom: "Micrófono Condensador StudioVox Pro",
    descripcio: "Micrófono USB con patrón cardioide, filtro antipop y soporte ajustable.",
    preu: 69.00,
    oferta: "no"
  },
  {
    id: 128,
    nom: "Router Gaming SpeedDemon AX6000",
    descripcio: "WiFi 6 con 8 antenas, QoS para gaming y velocidades hasta 6 Gbps.",
    preu: 199.99,
    oferta: "sí"
  },
  {
    id: 129,
    nom: "Cable HDMI 2.1 UltraSpeed 3m",
    descripcio: "Soporta 8K a 60Hz, eARC y certificación premium para gaming.",
    preu: 29.99,
    oferta: "no"
  },
  {
    id: 130,
    nom: "Adaptador Thunderbolt 3 a DisplayPort",
    descripcio: "Conexión de alta velocidad para monitores 4K con tasa de refresco de 144Hz.",
    preu: 39.90,
    oferta: "sí"
  },
  {
    id: 131,
    nom: "Pendrive 256GB MetalDrive Ultra",
    descripcio: "USB 3.1 con velocidades de lectura de 400MB/s y carcasa metálica robusta.",
    preu: 34.99,
    oferta: "no"
  },
  {
    id: 132,
    nom: "Soporte Laptop ErgoPro Aluminum",
    descripcio: "Elevador ajustable de aluminio con ventilación y hasta 17 pulgadas.",
    preu: 49.99,
    oferta: "sí"
  },
  {
    id: 133,
    nom: "Batería Externa 30000mAh PowerMax",
    descripcio: "Carga rápida 65W, 3 puertos USB y pantalla LED de capacidad.",
    preu: 59.90,
    oferta: "no"
  },
  {
    id: 134,
    nom: "Tarjeta Capturadora StreamPro HD",
    descripcio: "Captura de vídeo 1080p a 60fps, compatible con OBS y streaming.",
    preu: 89.00,
    oferta: "sí"
  },
  {
    id: 135,
    nom: "Filtro Privacidad Monitor 24'' SecureView",
    descripcio: "Protege tu pantalla de miradas indiscretas con ángulo de visión de 60°.",
    preu: 44.99,
    oferta: "no"
  },
  {
    id: 136,
    nom: "Estación de Carga 6 Puertos PowerHub",
    descripcio: "Carga simultánea de múltiples dispositivos con protección contra sobrecarga.",
    preu: 39.90,
    oferta: "sí"
  },
  {
    id: 137,
    nom: "Adaptador WiFi USB 3.0 AX1800",
    descripcio: "WiFi 6 de doble banda con antena de alto rendimiento y velocidad 1800Mbps.",
    preu: 29.99,
    oferta: "no"
  },
  {
    id: 138,
    nom: "Funda Laptop 15.6'' UrbanPro",
    descripcio: "Protección acolchada resistente al agua con bolsillos organizadores.",
    preu: 24.99,
    oferta: "sí"
  },
  {
    id: 139,
    nom: "Tableta Gráfica DrawMaster A5",
    descripcio: "8192 niveles de presión, lápiz sin batería y área activa de 10x6 pulgadas.",
    preu: 79.00,
    oferta: "no"
  },
  {
    id: 140,
    nom: "Switch HDMI 4K Bidireccional SmartSwap",
    descripcio: "Conmutador HDMI 2.0 de 2 entradas y 1 salida con control remoto.",
    preu: 19.99,
    oferta: "sí"
  },
  {
    id: 141,
    nom: "Auriculares Deportivos AquaSound BT",
    descripcio: "Resistentes al sudor IPX5, gancho ergonómico y 12h de autonomía.",
    preu: 39.90,
    oferta: "no"
  },
  {
    id: 142,
    nom: "Tarjeta SD 128GB SpeedClass 10",
    descripcio: "Clase 10 UHS-I con velocidades de hasta 100MB/s para cámaras y drones.",
    preu: 19.99,
    oferta: "sí"
  },
  {
    id: 143,
    nom: "Cargador Inalámbrico Qi FastCharge 15W",
    descripcio: "Carga rápida compatible con iPhone y Android, con LED indicador.",
    preu: 24.90,
    oferta: "no"
  },
  {
    id: 144,
    nom: "Kit Limpieza Teclado CleanTech Pro",
    descripcio: "Incluye extractor de teclas, cepillo, gel limpiador y paño microfibra.",
    preu: 14.99,
    oferta: "sí"
  },
  {
    id: 145,
    nom: "Monitor Curvo 27'' Gaming CurveMax 165Hz",
    descripcio: "Panel VA curvo 1500R, 1ms de respuesta y compatibilidad FreeSync.",
    preu: 249.00,
    oferta: "no"
  },
  {
    id: 146,
    nom: "Brazo Articulado Monitor DualArm Pro",
    descripcio: "Soporte VESA para dos monitores hasta 32'' con rotación 360°.",
    preu: 69.99,
    oferta: "sí"
  },
  {
    id: 147,
    nom: "Reposamuñecas Ergonómico GelComfort",
    descripcio: "Gel de memoria premium para teclado y ratón, reduce fatiga muscular.",
    preu: 16.99,
    oferta: "no"
  },
  {
    id: 148,
    nom: "Ventilador Refrigeración Laptop CoolPad 5",
    descripcio: "Base con 5 ventiladores silenciosos y altura ajustable en 6 niveles.",
    preu: 29.90,
    oferta: "sí"
  },
  {
    id: 149,
    nom: "Organizador Cables CableBox Elegance",
    descripcio: "Caja organizadora con tapa y divisores internos para cables y regletas.",
    preu: 21.99,
    oferta: "no"
  },
  {
    id: 150,
    nom: "Lámpara Escritorio LED ArcLight Touch",
    descripcio: "Control táctil, 3 modos de luz y brazo flexible de 360 grados.",
    preu: 34.90,
    oferta: "sí"
  },
  {
    id: 151,
    nom: "Teclado Mecánico 60% MiniMech RGB",
    descripcio: "Formato compacto con switches hot-swap y iluminación RGB personalizable.",
    preu: 89.99,
    oferta: "no"
  },
  {
    id: 152,
    nom: "Webcam 1080p StreamCam Lite",
    descripcio: "Enfoque automático, micrófono dual y corrección de luz baja.",
    preu: 49.90,
    oferta: "sí"
  },
  {
    id: 153,
    nom: "Cable USB-C a USB-C 100W PowerLink",
    descripcio: "Certificado USB-IF, 2 metros, carga rápida y transferencia de datos 10Gbps.",
    preu: 19.99,
    oferta: "no"
  },
  {
    id: 154,
    nom: "Auriculares Bluetooth Over-Ear SilentMax",
    descripcio: "Cancelación de ruido activa, 40h de batería y plegado compacto.",
    preu: 99.00,
    oferta: "sí"
  },
  {
    id: 155,
    nom: "SSD Externo 1TB ThunderDrive Pro",
    descripcio: "NVMe con USB-C, velocidades de 1050MB/s y diseño ultra portátil.",
    preu: 129.99,
    oferta: "no"
  },
  {
    id: 156,
    nom: "Micrófono Lavalier Inalámbrico VoxClip",
    descripcio: "Micrófono de solapa con receptor USB-C, ideal para entrevistas y vlogs.",
    preu: 44.90,
    oferta: "sí"
  },
  {
    id: 157,
    nom: "Monitor Portátil 15.6'' TravelScreen FHD",
    descripcio: "Pantalla IPS Full HD, alimentado por USB-C y funda protectora incluida.",
    preu: 179.00,
    oferta: "no"
  },
  {
    id: 158,
    nom: "Docking Station USB-C ProDock 11-en-1",
    descripcio: "Conectividad completa: dual HDMI, Ethernet, USB, SD y carga 100W.",
    preu: 119.90,
    oferta: "sí"
  },
  {
    id: 159,
    nom: "Ratón Vertical Ergonómico ErgoMouse Plus",
    descripcio: "Diseño vertical para reducir tensión en muñeca, 6 botones programables.",
    preu: 39.99,
    oferta: "no"
  },
  {
    id: 160,
    nom: "Luz Anular LED RingLight Pro 18''",
    descripcio: "Iluminación profesional con trípode, control remoto y temperatura ajustable.",
    preu: 69.00,
    oferta: "sí"
  },
  {
    id: 161,
    nom: "Adaptador Ethernet USB 3.0 GigaNet",
    descripcio: "Conexión Gigabit Ethernet para laptops sin puerto RJ45.",
    preu: 16.99,
    oferta: "no"
  },
  {
    id: 162,
    nom: "Soporte Tablet Ajustable TabStand 360",
    descripcio: "Compatible con tablets de 7-13'', rotación completa y base antideslizante.",
    preu: 24.90,
    oferta: "sí"
  },
  {
    id: 163,
    nom: "Protector Pantalla Cristal Templado MacBook 13''",
    descripcio: "Protección 9H contra arañazos con instalación sin burbujas.",
    preu: 19.99,
    oferta: "no"
  },
  {
    id: 164,
    nom: "Escáner Portátil DocScan Wireless",
    descripcio: "Escáner de mano con WiFi, resolución 1200 DPI y batería recargable.",
    preu: 89.90,
    oferta: "sí"
  },
  {
    id: 165,
    nom: "Teclado Gaming Mecánico RGB TitanKeys",
    descripcio: "Switches mecánicos azules, reposamuñecas magnético y macros programables.",
    preu: 109.00,
    oferta: "no"
  },
  {
    id: 166,
    nom: "Auriculares True Wireless EchoFree Pro",
    descripcio: "TWS con ANC, estuche de carga 30h y resistencia IPX6.",
    preu: 79.99,
    oferta: "sí"
  },
  {
    id: 167,
    nom: "Cable DisplayPort 1.4 ProVision 2m",
    descripcio: "Soporta 8K a 60Hz y 4K a 144Hz, certificado VESA.",
    preu: 24.99,
    oferta: "no"
  },
  {
    id: 168,
    nom: "Tarjeta Sonido Externa 7.1 SoundBox Elite",
    descripcio: "Audio envolvente virtual, DAC de alta fidelidad y conexión USB.",
    preu: 54.90,
    oferta: "sí"
  },
  {
    id: 169,
    nom: "Webcam Privacy Cover MetalShield Pack 3",
    descripcio: "Cubiertas deslizantes ultrafinas de metal para laptop y tablet.",
    preu: 7.99,
    oferta: "no"
  },
  {
    id: 170,
    nom: "Ratón Gaming RGB HyperStrike 20K DPI",
    descripcio: "Sensor óptico de 20000 DPI, 11 botones programables y peso ajustable.",
    preu: 59.99,
    oferta: "sí"
  },
  {
    id: 171,
    nom: "Monitor 32'' 4K IPS ColorPro",
    descripcio: "Panel IPS 4K UHD con 99% sRGB, HDR400 y USB-C con 65W.",
    preu: 449.00,
    oferta: "no"
  },
  {
    id: 172,
    nom: "Barra LED Inteligente SmartBar RGB 80cm",
    descripcio: "Iluminación trasera para monitor con sincronización de música.",
    preu: 39.90,
    oferta: "sí"
  },
  {
    id: 173,
    nom: "Hub USB 3.0 de 10 Puertos PowerHub Pro",
    descripcio: "Alimentación externa, interruptores individuales y protección contra picos.",
    preu: 44.99,
    oferta: "no"
  },
  {
    id: 174,
    nom: "Cámara Web 2K AutoFrame Plus",
    descripcio: "Seguimiento facial automático, campo de visión 90° y dual-mic con IA.",
    preu: 89.00,
    oferta: "sí"
  },
  {
    id: 175,
    nom: "Alfombrilla Ratón Cuero PremiumPad Executive",
    descripcio: "Superficie de cuero sintético premium con base de corcho natural.",
    preu: 29.99,
    oferta: "no"
  },
  {
    id: 176,
    nom: "Adaptador Audio Bluetooth 5.0 AudioStream",
    descripcio: "Convierte dispositivos con cable en inalámbricos, aptX HD.",
    preu: 24.90,
    oferta: "sí"
  },
  {
    id: 177,
    nom: "Teclado Flexible Plegable SoftKeys",
    descripcio: "Teclado de silicona impermeable y enrollable para viajes.",
    preu: 19.99,
    oferta: "no"
  },
  {
    id: 178,
    nom: "Concentrador USB-C a 4 USB 3.0 MiniHub",
    descripcio: "Diseño compacto de aluminio con transferencia de datos 5Gbps.",
    preu: 16.99,
    oferta: "sí"
  },
  {
    id: 179,
    nom: "Auriculares Estudio Profesional ProSound M50",
    descripcio: "Audiófilo con drivers 50mm, impedancia 38Ω y cable desmontable.",
    preu: 149.00,
    oferta: "no"
  },
  {
    id: 180,
    nom: "Tarjeta MicroSD 256GB ExtremeSpeed",
    descripcio: "A2, V30, UHS-I U3 con velocidades de lectura hasta 170MB/s.",
    preu: 34.90,
    oferta: "sí"
  },
  {
    id: 180,
    nom: "Estabilizador Gimbal Smartphone GimbalGo",
    descripcio: "3 ejes, seguimiento facial, batería 12h y aplicación iOS/Android.",
    preu: 99.00,
    oferta: "sí"
  },
  {
    id: 181,
    nom: "Caja Externa M.2 NVMe USB 3.2 Gen2",
    descripcio: "Velocidad 10Gbps, disipación térmica aluminio y herramientas incluidas.",
    preu: 34.99,
    oferta: "no"
  },
  {
    id: 182,
    nom: "Filtro Privacidad Monitor 24'' PrivacyShield",
    descripcio: "Bloqueo visual lateral, antirreflejos y fácil instalación.",
    preu: 39.90,
    oferta: "sí"
  },
  {
    id: 183,
    nom: "Cámara PTZ VideoConf ProZoom",
    descripcio: "Zoom óptico 12x, seguimiento automático IA y control remoto.",
    preu: 249.00,
    oferta: "no"
  },
  {
    id: 184,
    nom: "Ratón Trackball Inalámbrico TrackMaster",
    descripcio: "Bola de seguimiento 40mm, 8 botones programables y precisión alta.",
    preu: 54.99,
    oferta: "sí"
  },
  {
    id: 185,
    nom: "Fuente Alimentación Modular 750W 80+ Gold",
    descripcio: "Certificación 80 Plus Gold, cables planos y ventilador silencioso.",
    preu: 109.00,
    oferta: "no"
  },
  {
    id: 186,
    nom: "Soporte Tablet Ajustable TabletStand 360",
    descripcio: "Rotación 360°, compatible 7-13 pulgadas, base antideslizante.",
    preu: 24.90,
    oferta: "sí"
  },
  {
    id: 187,
    nom: "Micrófono Lavalier Inalámbrico LapelMic Pro",
    descripcio: "Frecuencia UHF, alcance 50m, batería 8h y receptor compacto.",
    preu: 69.99,
    oferta: "no"
  },
  {
    id: 188,
    nom: "Hub USB 3.0 de 10 Puertos PowerHub",
    descripcio: "10 puertos USB 3.0, alimentación externa 12V y switches individuales.",
    preu: 39.00,
    oferta: "sí"
  },
  {
    id: 189,
    nom: "Funda Smartphone Resistente ArmorCase",
    descripcio: "Protección militar MIL-STD-810G, soporte integrado y bordes reforzados.",
    preu: 19.99,
    oferta: "no"
  },
  {
    id: 190,
    nom: "Adaptador SATA a USB 3.0 DriveLink",
    descripcio: "Compatible HDD/SSD 2.5'' y 3.5'', herramienta de clonación incluida.",
    preu: 14.90,
    oferta: "sí"
  },
  {
    id: 191,
    nom: "Lámpara de Escritorio Arquitecto LampPro",
    descripcio: "Brazo flexible metal, LED regulable y abrazadera resistente.",
    preu: 44.99,
    oferta: "no"
  },
  {
    id: 192,
    nom: "Teclado Compacto 60% MiniKey RGB",
    descripcio: "Layout compacto, switches hot-swappable y teclas PBT.",
    preu: 79.00,
    oferta: "sí"
  },
  {
    id: 193,
    nom: "Cámara IP Exterior 5MP NightVision Pro",
    descripcio: "Visión nocturna 40m, detección humana IA y resistencia IP66.",
    preu: 89.90,
    oferta: "no"
  },
  {
    id: 194,
    nom: "Auriculares Bone Conduction SportBone",
    descripcio: "Conducción ósea, resistencia IP67, 8h batería y micrófono.",
    preu: 99.99,
    oferta: "sí"
  },
  {
    id: 195,
    nom: "Cable USB-C a Lightning 2m Certificado MFi",
    descripcio: "Certificación Apple MFi, carga rápida PD y trenzado nylon.",
    preu: 16.99,
    oferta: "no"
  },
  {
    id: 196,
    nom: "Monitor Gaming 32'' 165Hz QHD",
    descripcio: "Panel VA 1ms, resolución 2560x1440, FreeSync Premium Pro.",
    preu: 349.00,
    oferta: "sí"
  },
  {
    id: 197,
    nom: "Regleta Inteligente WiFi PowerStrip Smart",
    descripcio: "4 enchufes + 4 USB, control remoto, temporizador y monitor consumo.",
    preu: 44.90,
    oferta: "no"
  },
  {
    id: 198,
    nom: "Tarjeta Gráfica Externa eGPU Thunderbolt 3",
    descripcio: "Caja eGPU con alimentación 500W, compatible GPU full-size.",
    preu: 299.00,
    oferta: "sí"
  },
  {
    id: 199,
    nom: "Aspiradora Teclado MiniVac USB",
    descripcio: "Aspirador portátil USB, 2 boquillas intercambiables y filtro lavable.",
    preu: 12.99,
    oferta: "no"
  },
  {
    id: 200,
    nom: "Soporte CPU Ajustable CPUholder Pro",
    descripcio: "Montaje bajo escritorio, ancho ajustable 12-21cm y ruedas opcionales.",
    preu: 24.90,
    oferta: "sí"
  },
  {
    id: 201,
    nom: "Disco Duro Interno 2TB 7200RPM HDD Pro",
    descripcio: "Cache 256MB, interfaz SATA III y garantía 3 años.",
    preu: 54.99,
    oferta: "no"
  },
  {
    id: 202,
    nom: "Auriculares USB-C DirectSound",
    descripcio: "Conexión digital USB-C, micrófono integrado y controles cable.",
    preu: 29.90,
    oferta: "sí"
  },
  {
    id: 203,
    nom: "Switch de Red 8 Puertos Gigabit NetSwitch",
    descripcio: "8 puertos 10/100/1000, plug and play, carcasa metálica.",
    preu: 34.00,
    oferta: "no"
  },
  {
    id: 204,
    nom: "Protector Pantalla Cristal Templado 9H",
    descripcio: "Dureza 9H, ultrafino 0.33mm, instalación sin burbujas.",
    preu: 9.99,
    oferta: "sí"
  },
  {
    id: 205,
    nom: "Bocina Bluetooth Portátil MiniSound",
    descripcio: "5W potencia, mosquetón incluido, batería 10h y manos libres.",
    preu: 19.90,
    oferta: "no"
  },
  {
    id: 206,
    nom: "Adaptador Thunderbolt 3 a Dual HDMI",
    descripcio: "Doble salida 4K@60Hz, compatible MacBook Pro y carga passthrough 60W.",
    preu: 54.99,
    oferta: "sí"
  },
  {
    id: 207,
    nom: "Tarjeta Sonido Externa DAC HiFi",
    descripcio: "DAC 24bit/192kHz, amplificador auriculares y salidas RCA.",
    preu: 89.00,
    oferta: "no"
  },
  {
    id: 208,
    nom: "Ratón Recargable SilentClick Ultra",
    descripcio: "Clicks silenciosos 90% menos ruido, batería recargable 3 meses.",
    preu: 34.90,
    oferta: "sí"
  },
  {
    id: 209,
    nom: "Panel Acústico Absorbente SoundPanel",
    descripcio: "50x50cm espuma acústica, reducción eco y fácil instalación adhesiva.",
    preu: 24.99,
    oferta: "no"
  },
  {
    id: 210,
    nom: "Cámara Deportiva Mini ActionCam Lite",
    descripcio: "1080p@30fps, resistente agua 10m, grabación loop y monturas incluidas.",
    preu: 49.00,
    oferta: "sí"
  },
  {
    id: 211,
    nom: "Memoria USB 3.2 256GB FlashDrive Pro",
    descripcio: "Velocidad lectura 400MB/s, carcasa metálica y llavero incluido.",
    preu: 34.90,
    oferta: "no"
  },
  {
    id: 212,
    nom: "Ventilador Torre Oscilante TowerCool",
    descripcio: "90cm altura, 3 velocidades, temporizador 8h y control remoto.",
    preu: 64.99,
    oferta: "sí"
  },
  {
    id: 213,
    nom: "Cable óptico Toslink 2m AudioLink",
    descripcio: "Fibra óptica digital, conectores chapados oro y compatible Dolby.",
    preu: 11.99,
    oferta: "no"
  },
  {
    id: 214,
    nom: "Grabadora de Voz Digital VoiceRec 16GB",
    descripcio: "16GB almacenamiento, grabación HD, recarga USB y pantalla OLED.",
    preu: 44.00,
    oferta: "sí"
  },
  {
    id: 215,
    nom: "Base Carga Inalámbrica Rápida 15W QiPad",
    descripcio: "Carga rápida 15W, compatible Qi, LED indicador y ventilación.",
    preu: 24.90,
    oferta: "no"
  },
  {
    id: 216,
    nom: "Calentador Manos USB HandWarmer",
    descripcio: "Calentamiento rápido, batería 6000mAh, doble cara y portátil.",
    preu: 19.99,
    oferta: "sí"
  },
  {
    id: 217,
    nom: "Tarjeta Captura Audio StreamCard Pro",
    descripcio: "HDMI + audio XLR, latencia ultra baja, 1080p@60fps sin compresión.",
    preu: 149.00,
    oferta: "no"
  },
  {
    id: 218,
    nom: "Extensor HDMI por Cable Cat6 HDExtend",
    descripcio: "Transmisión 60m, soporta 1080p, incluye emisor y receptor.",
    preu: 74.90,
    oferta: "sí"
  },
  {
    id: 219,
    nom: "Auriculares con Cable Hi-Res AudioPure",
    descripcio: "Certificación Hi-Res, drivers 50mm, cable trenzado y estuche rígido.",
    preu: 129.00,
    oferta: "no"
  }
];

goToShow(nombre:string){
  
  this.router.navigateByUrl(`/showproducts/${nombre}`);
}
}

