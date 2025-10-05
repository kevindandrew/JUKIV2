"use client";

import type React from "react";
import { Suspense } from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Heart,
  Star,
  Phone,
  MessageCircle,
  Music,
  Eye,
  Package,
  Gift,
  Send,
  ShoppingBag,
  Grid3X3,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";
import { useRouter, useSearchParams } from "next/navigation";

function JukiCreacionesContent() {
  const { theme } = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [mounted, setMounted] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Obtener vista actual de la URL
  const currentView =
    (searchParams.get("view") as "home" | "stock" | "catalog" | "category") ||
    "home";
  const selectedCatalogCategory = searchParams.get("category") || "";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll al top cada vez que cambia la vista principal
  useEffect(() => {
    if (mounted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentView, mounted]);

  // Funciones de navegación que usan el router
  const navigateToView = (view: string, category?: string) => {
    const params = new URLSearchParams();
    params.set("view", view);
    if (category) {
      params.set("category", category);
    }
    router.push(`?${params.toString()}`);
  };

  const navigateToHome = () => {
    router.push("/");
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const handleLeadSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) return;

    setIsSubmitting(true);

    const message = `¡Hola! Me interesa recibir ofertas de Juki Creaciones.%0A%0ANombre: ${leadForm.name}%0ATeléfono: ${leadForm.phone}%0A%0A¡Gracias!`;
    const whatsappUrl = `https://wa.link/k5shnw?text=${message}`;

    window.open(whatsappUrl, "_blank");

    // Reset form
    setLeadForm({ name: "", phone: "" });
    setIsSubmitting(false);
  };

  // Productos completos del catálogo real de Juki Creaciones
  const allProducts = [
    // RAMOS ETERNOS
    {
      id: 1,
      name: "Ramo Buchón de Girasoles",
      price: "BOB 250.00",
      image: "/images/sunflower-bouquet-premium.png",
      description:
        "19 girasoles pequeños • Una tarjetita de regalo • Diámetro de 60 cm",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 2,
      name: "Ramo Mixto Girasoles y Rosas",
      price: "Bs 55.00",
      image: "/images/mixed-bouquet.png",
      description:
        "Ramo combinado con girasoles dorados y rosas rojas en papel kraft",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 3,
      name: "Girasol Individual Decorativo",
      price: "Bs 15.00",
      image: "/images/sunflower-mascot.png",
      description:
        "Girasol decorativo con cara sonriente, perfecto para regalar",
      inStock: true,
      rating: 5,
      category: "flores-individuales",
    },
    // Nuevos productos agregados
    {
      id: 10,
      name: "Ramo de Rosas Rojas Premium",
      price: "Bs 70.00",
      image: "/productos/WhatsApp Image 2025-09-17 at 11.25.42 PM.jpeg",
      description:
        "Hermoso ramo de rosas rojas eternas con envoltura elegante y presentación de lujo",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 11,
      name: "Bouquet Mixto Colorido",
      price: "Bs 60.00",
      image: "/productos/WhatsApp Image 2025-09-17 at 11.25.44 PM.jpeg",
      description:
        "Ramo mixto con flores de colores vibrantes y papel decorativo especial",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 12,
      name: "Ramo de Girasoles Deluxe",
      price: "Bs 65.00",
      image: "/productos/WhatsApp Image 2025-09-17 at 11.25.44 PM (1).jpeg",
      description:
        "Girasoles grandes con papel kraft y detalles especiales artesanales",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 13,
      name: "Bouquet Rosa y Blanco Elegante",
      price: "Bs 55.00",
      image: "/productos/WhatsApp Image 2025-09-17 at 11.25.44 PM (2).jpeg",
      description:
        "Elegante combinación de rosas rosas y blancas con envoltura refinada",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 14,
      name: "Ramo de Rosas Pastel",
      price: "Bs 58.00",
      image: "/productos/WhatsApp Image 2025-09-17 at 11.25.44 PM (3).jpeg",
      description:
        "Delicado ramo con rosas en tonos pastel suaves y románticos",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 15,
      name: "Bouquet Compacto Multicolor",
      price: "Bs 45.00",
      image: "/productos/WhatsApp Image 2025-09-17 at 11.25.44 PM (4).jpeg",
      description:
        "Ramo pequeño pero vibrante con múltiples colores y presentación encantadora",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 16,
      name: "Ramo Premium Dorado",
      price: "Bs 75.00",
      image: "/productos/WhatsApp Image 2025-09-17 at 11.25.44 PM (5).jpeg",
      description:
        "Ramo exclusivo con detalles dorados y presentación de lujo premium",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 17,
      name: "Bouquet Romántico Rojo",
      price: "Bs 68.00",
      image: "/productos/WhatsApp Image 2025-09-17 at 11.25.44 PM (6).jpeg",
      description:
        "Ramo romántico perfecto para ocasiones especiales y declaraciones de amor",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 18,
      name: "Ramo Elegante Combinado",
      price: "Bs 62.00",
      image: "/productos/WhatsApp Image 2025-09-17 at 11.25.44 PM (7).jpeg",
      description:
        "Combinación elegante de diferentes tipos de flores con presentación sofisticada",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },

    // RAMOS ETERNOS
    {
      id: 2,
      name: "Ramo Buchón de Spiderman con flores de papel🕷️🕸️♥️",
      price: "BOB 55.00",
      image: "/images/spiderman-roses.png",
      description:
        "19 Rosas hechas con papel de color rojo • Envoltura con papel de Arroz o cartulina opcional • Detalle adicional ojos de Spiderman • Moño de listón",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 3,
      name: "Ramo Girasol grande y rosas🌻🌹",
      price: "BOB 90.00",
      image: "/images/mixed-bouquet.png",
      description:
        "1 girasol grande • 11 rosas • Envoltura con papel coreano • 1 Mariposa • Diámetro del ramo 40 cm aprox.",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 4,
      name: "Ramo Girasoles con mariposa 🌻🦋",
      price: "BOB 65.00",
      image: "/images/sunflower-bouquet.png",
      description: "5 girasoles • Una mariposa • Papel coreano • Listón",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },
    {
      id: 5,
      name: "Ramo Premium de Girasoles 🌻✨",
      price: "BOB 80.00",
      image: "/images/sunflower-bouquet-premium.png",
      description: "7 girasoles • Una mariposa • Papel coreano • Listón",
      inStock: true,
      rating: 5,
      category: "ramos-eternos",
    },

    // FLORES INDIVIDUALES
    {
      id: 6,
      name: "Girasol mediano 🌻",
      price: "BOB 25.00",
      image: "/images/sunflower-mascot.png",
      description:
        "Altura 35 cm aprox. • Envoltura con Papel craft • Tarjeta con dedicatoria opcional",
      inStock: true,
      rating: 5,
      category: "flores-individuales",
    },
    {
      id: 7,
      name: "Girasol presentación tarjeta �",
      price: "BOB 25.00",
      image: "/images/sunflower-mascot.png",
      description:
        "Girasol con sus pétalos de forma tipo ovalada • Tamaño de la tarjeta (30 x 18)cm • Mensaje personalizado en letras doradas",
      inStock: true,
      rating: 5,
      category: "flores-individuales",
    },
    {
      id: 8,
      name: "Rosa eterna🌹",
      price: "BOB 10.00",
      image: "/placeholder.svg",
      description:
        "Rosa hecha de listón sin hojas • Envoltura papel craft • Altura 30 cm aprox.",
      inStock: true,
      rating: 5,
      category: "flores-individuales",
    },
    {
      id: 65,
      name: "Girasol de Shreck con orejitas 🌱🌻❤️",
      price: "BOB 25.00",
      image: "/placeholder.svg",
      description:
        "Tamaño de la tarjeta (30×18) cm • Mensaje personalizado o frase la película",
      inStock: true,
      rating: 5,
      category: "flores-individuales",
    },
    {
      id: 66,
      name: "Girasol pequeño 🌻",
      price: "BOB 15.00",
      image: "/images/sunflower-mascot.png",
      description: "Altura 30 cm aprox. • Tarjeta con dedicatoria opcional",
      inStock: true,
      rating: 5,
      category: "flores-individuales",
    },
    {
      id: 67,
      name: "Girasol de Shreck 🌻✨",
      price: "BOB 25.00",
      image: "/placeholder.svg",
      description:
        "Girasol mediano hecho de listón • Tarjeta de cartulina (tamaño 30 cm) • Se puede optar por un mensaje personalizado",
      inStock: true,
      rating: 5,
      category: "flores-individuales",
    },
    {
      id: 68,
      name: "Girasol grande🌻",
      price: "BOB 25.00",
      image: "/images/sunflower-mascot.png",
      description: "Girasol hecho de liston • Envoltura papel Craft",
      inStock: true,
      rating: 5,
      category: "flores-individuales",
    },

    // LIBRITOS DE CANCIONES
    {
      id: 9,
      name: "Ibuprofeno - Lasso (Librito de canciones ✨)",
      price: "BOB 30.00",
      image: "/images/love-booklet.png",
      description:
        "Tarjeta personalizada hecha de cartulina y tapa de cartón duplex. • Dimensión de (13× 10)cm • Forro Papel de arroz color negro • La tarjeta viene en un sobre de papel.",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },
    {
      id: 10,
      name: "Alma Dinamita- Wos (Book- Song)✨❤️",
      price: "BOB 45.00",
      image: "/images/love-booklet.png",
      description:
        "Tarjeta personalizada hecha de cartulina y tapa de cartón duplex. • Dimensión de (13× 10)cm • Forro Papel de arroz color negro • La tarjeta viene en un sobre de papel.",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },
    {
      id: 11,
      name: "Somos - Majo y Dan ✨",
      price: "BOB 30.00",
      image: "/images/love-booklet.png",
      description:
        "Tarjeta personalizada hecha de cartulina y tapa de cartón duplex. • Dimensión de (13× 10)cm • Forro Papel de arroz color negro • La tarjeta viene en un sobre de papel.",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },
    {
      id: 50,
      name: "Nunca te Olvides - AirBag (Librito de canciones)",
      price: "BOB 30.00",
      image: "/images/love-booklet.png",
      description:
        "Tarjeta personalizada hecha de cartulina y tapa de cartón duplex. • Dimensión de (13× 10)cm",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },
    {
      id: 51,
      name: "Carencia de Cordura - Milo J 🌱✨",
      price: "BOB 30.00",
      image: "/images/love-booklet.png",
      description:
        "Tarjeta personalizada hecha de cartulina y tapa de cartón duplex. • Dimensión de (13× 10)cm • Forro Papel de arroz color negro",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },
    {
      id: 52,
      name: "Alma Dinamita - Wos (versión Snoopy)❤️😊",
      price: "BOB 50.00",
      image: "/images/love-booklet.png",
      description:
        "Librito de Cartulina • Dimensión 13x10 cm • Con forro incluído y portada personalizada+ dedicatoria ✨ • Tapa de cartón Duplex",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },
    {
      id: 53,
      name: "Cómo mi papá - Topo Gigio ❤️🎁✨",
      price: "BOB 40.00",
      image: "/images/love-booklet.png",
      description:
        "Tarjeta personalizada hecha de cartulina y tapa de cartón duplex. • Dimensión de (13× 10)cm • Forro Papel a elección • Foto personalizada",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },
    {
      id: 54,
      name: "Nunca Te Olvides - Airbag( versión Snoopy) 💜✨",
      price: "BOB 45.00",
      image: "/images/love-booklet.png",
      description:
        "Librito de Cartulina • Dimensión 13x10 cm • Con forro incluído y portada personalizada+ dedicatoria ✨ • Tapa de cartón Duplex",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },
    {
      id: 55,
      name: "Mi Héroe Favorito - Romeo Santos ❤️",
      price: "BOB 60.00",
      image: "/images/love-booklet.png",
      description:
        "Tamaño (mitad de una hoja tamaño carta) • Base de cartulina • Tapa dura (duplex) • Forro papel de arroz • Adición de 2 fotos en la parte final de la tarjeta",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },
    {
      id: 56,
      name: "Eres- Café Tacvba -/Pedazo de la canción♥️✨",
      price: "BOB 25.00",
      image: "/tarjeta-artesanal-premium.png",
      description: "Tamaño 15 x 17 cm • Tapa Dura • Diseño personalizado",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },
    {
      id: 57,
      name: "Soñé - Zoe ✨♥️",
      price: "BOB 65.00",
      image: "/images/love-booklet.png",
      description:
        "Tamaño 14 x 16 cm • Hojas de Cartulina • Tapa Duplex con forro",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },
    {
      id: 58,
      name: "Enculado- feet nsqk Yukun ✨",
      price: "BOB 35.00",
      image: "/images/love-booklet.png",
      description:
        "Tarjeta de cartulina 10 x 13 cm • Tapa Duplex • Totalmente personalizable",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },

    // PLANTAS VS ZOMBIES
    {
      id: 12,
      name: "Repetidora",
      price: "BOB 60.00",
      image: "/images/plants-vs-zombies-green.png",
      description:
        "Base esférica de plastaformo • Altura 28 cm aprox. • Maceta base de yeso(estuco)",
      inStock: true,
      rating: 5,
      category: "plantas-vs-zombies",
    },
    {
      id: 13,
      name: "Guisantralladora",
      price: "BOB 70.00",
      image: "/images/plants-vs-zombies-military.png",
      description:
        "Base esférica de plastaformo • Forrado con tela • Altura 28 cm aprox.",
      inStock: true,
      rating: 5,
      category: "plantas-vs-zombies",
    },
    {
      id: 14,
      name: "Girasol de Plantas Vs Zombies 🌱",
      price: "BOB 40.00",
      image: "/images/sunflower-mascot.png",
      description:
        "Centro de girasol acolchado • Altura 28 cm aprox. • Maceta base de yeso(estuco)",
      inStock: true,
      rating: 5,
      category: "plantas-vs-zombies",
    },

    // PRODUCTOS NOVEDOSOS
    {
      id: 15,
      name: "Agenda Ahorradora",
      price: "BOB 75.00",
      image: "/placeholder.svg",
      description:
        "6 Sobres zipper • Una hoja de stickers para que planifiques tus gastos y ahorros. • Hojas para anotaciones • Hojas extra para organizarse • 3 hojas de Stickers decorativos para personalizar tu agenda. Disponible en color negro, crema y lila bebé",
      inStock: true,
      rating: 5,
      category: "productos-novedosos",
    },
    {
      id: 16,
      name: "Carteras Billeteras Snoopy (pequeño)❤️✨",
      price: "BOB 35.00",
      image: "/placeholder.svg",
      description:
        "Billeteras de cuerina sublimada • Un solo cuerpo, ligeras y cómodas • Diseños variados con Snoopy 🐾 • Compactas pero funcionales ✨",
      inStock: true,
      rating: 5,
      category: "productos-novedosos",
    },
    {
      id: 69,
      name: "Carteras- Billeteras de Snoopy Grandes❤️✨",
      price: "BOB 50.00",
      image: "/placeholder.svg",
      description:
        "Billeteras de cuerina sublimada • Con cierre seguro y varios compartimentos para organizar efectivo, tarjetas y documentos • Diseños exclusivos de Snoopy 🐶💖 • Modelos variados",
      inStock: true,
      rating: 5,
      category: "productos-novedosos",
    },

    // TARJETAS
    {
      id: 17,
      name: "Camara Instagram",
      price: "BOB 35.00",
      image: "/tarjeta-artesanal-premium.png",
      description:
        "Camara con el lente que se abre y muestra la foto • Dimensión 12 x 12 (cm) • Una foto",
      inStock: true,
      rating: 5,
      category: "tarjetas",
    },
    {
      id: 18,
      name: "Tarjeta mediana Snoopy 💞🫶",
      price: "BOB 45.00",
      image: "/set-tarjetas-tematicas.png",
      description:
        "Dibujos escaneados impresos •Tamaño Carpeta •Espacios para llenado •Tapa dura •Base Cartulina. *Tarjeta con contenido (con letra ) a 70 Bs*",
      inStock: true,
      rating: 5,
      category: "tarjetas",
    },
    {
      id: 70,
      name: "Camarita con rollo de fotos",
      price: "BOB 45.00",
      image: "/tarjeta-artesanal-premium.png",
      description:
        "Dimensión 11x 7(cm) • Rollo de hasta 6 fotos y/o frases • Totalmente personalizable (Marca, color detalles)",
      inStock: true,
      rating: 5,
      category: "tarjetas",
    },
    {
      id: 71,
      name: "Cartel para aniversario 💞",
      price: "BOB 35.00",
      image: "/set-tarjetas-tematicas.png",
      description:
        "Tamaño Doble oficio • 3 fotos • Contenido personalizado • Base cartón triplex",
      inStock: true,
      rating: 5,
      category: "tarjetas",
    },

    // JOYERÍA Y ACCESORIOS
    {
      id: 19,
      name: "(Snoopy & Woodstock)✨Pulsera para compartir",
      price: "BOB 20.00",
      image: "/placeholder.svg",
      description: "Pulsera temática de Snoopy y Woodstock para compartir",
      inStock: true,
      rating: 5,
      category: "joyeria-accesorios",
    },
    {
      id: 20,
      name: "Aretes Llaves de Coraline 🔘🕸️�️",
      price: "BOB 10.00",
      image: "/placeholder.svg",
      description: "Aretes temáticos de las llaves de Coraline",
      inStock: true,
      rating: 5,
      category: "joyeria-accesorios",
    },
    {
      id: 72,
      name: "Collar del girasol de Shreck ✨🌻",
      price: "BOB 15.00",
      image: "/placeholder.svg",
      description: "Collar temático del girasol de Shrek",
      inStock: true,
      rating: 5,
      category: "joyeria-accesorios",
    },
    {
      id: 73,
      name: "Aretes Snoopy 💝✨",
      price: "BOB 15.00",
      image: "/placeholder.svg",
      description: "Aretes temáticos de Snoopy",
      inStock: true,
      rating: 5,
      category: "joyeria-accesorios",
    },

    // SOMBREROS CHINOS
    {
      id: 21,
      name: "Sombrero chino con Diseño",
      price: "BOB 40.00",
      image: "/placeholder.svg",
      description:
        "Único tamaño • Se puede elegir otro diseño, depende a la complejidad varia el precio",
      inStock: true,
      rating: 5,
      category: "sombreros-chinos",
    },
    {
      id: 22,
      name: "Sombrero Chino (Sin diseño)",
      price: "BOB 35.00",
      image: "/placeholder.svg",
      description: "Único tamaño",
      inStock: true,
      rating: 5,
      category: "sombreros-chinos",
    },

    // SNOOPY
    {
      id: 23,
      name: "Alma Dinamita - Wos (versión Snoopy)❤️😊",
      price: "BOB 50.00",
      image: "/images/love-booklet.png",
      description:
        "Librito de Cartulina • Dimensión 13x10 cm • Con forro incluído y portada personalizada+ dedicatoria ✨ • Tapa de cartón Duplex",
      inStock: true,
      rating: 5,
      category: "snoopy",
    },
    {
      id: 24,
      name: "Nunca Te Olvides - Airbag( versión Snoopy) 💜✨",
      price: "BOB 45.00",
      image: "/images/love-booklet.png",
      description:
        "Librito de Cartulina • Dimensión 13x10 cm • Con forro incluído y portada personalizada+ dedicatoria ✨ • Tapa de cartón Duplex",
      inStock: true,
      rating: 5,
      category: "snoopy",
    },
    {
      id: 25,
      name: "Tarjeta Casita Snoopy",
      price: "BOB 65.00",
      image: "/placeholder.svg",
      description:
        "Dimensión aprox (tamaño cuaderno) • base Cartulina y duplex, dibujos impresos",
      inStock: true,
      rating: 5,
      category: "snoopy",
    },
    {
      id: 26,
      name: "Tarjeta mediana Snoopy 💞🫶",
      price: "BOB 45.00",
      image: "/set-tarjetas-tematicas.png",
      description:
        "Dibujos escaneados impresos •Tamaño Carpeta •Espacios para llenado •Tapa dura •Base Cartulina. *Tarjeta con contenido (con letra ) a 70 Bs*",
      inStock: true,
      rating: 5,
      category: "snoopy",
    },
    {
      id: 27,
      name: "Cuadro Arte en Filigrama SNOOPY GIRASOL �",
      price: "BOB 50.00",
      image: "/placeholder.svg",
      description: "tamaño carpeta • tapa con plástico transparente",
      inStock: true,
      rating: 5,
      category: "snoopy",
    },

    // TARJETAS CON MOVIMIENTO
    {
      id: 28,
      name: "Eres- Café Tacvba -/Pedazo de la canción♥️✨",
      price: "BOB 25.00",
      image: "/tarjeta-artesanal-premium.png",
      description: "Tamaño 15 x 17 cm • Tapa Dura • Diseño personalizado",
      inStock: true,
      rating: 5,
      category: "tarjetas-con-movimiento",
    },
    {
      id: 29,
      name: "Mac Miller- Congratulations Snoopy❤️✨",
      price: "BOB 135.00",
      image: "/placeholder.svg",
      description:
        "Material: Cartulina • Dimensiones: 13x10 cm • Forro Tapa: Duplex y cartulina • Dibujos escaneados",
      inStock: true,
      rating: 5,
      category: "tarjetas-con-movimiento",
    },
    {
      id: 30,
      name: "The Smiths 💿",
      price: "BOB 45.00",
      image: "/placeholder.svg",
      description:
        "Tamaño: 13x13 cm • Material; Cartulina • Cada página con interacción",
      inStock: true,
      rating: 5,
      category: "tarjetas-con-movimiento",
    },
    {
      id: 31,
      name: "LUNA ZOE (Tamaño Cuaderno) 🌘🌛",
      price: "BOB 125.00",
      image: "/placeholder.svg",
      description:
        "Tamaño cuaderno • Material Cartulina • En tamaño de 10x13 cm mismo diseño al precio de 85 Bs",
      inStock: true,
      rating: 5,
      category: "tarjetas-con-movimiento",
    },

    // CAJAS TEMATIZADAS
    {
      id: 32,
      name: "Caja temática DUKI (Cumpleaños) 💜✨",
      price: "BOB 65.00",
      image: "/placeholder.svg",
      description:
        "Caja de cartón grueso 25x25 cm • Incluye dulces , snacks valor de 30 Bs • Incluye luces led • Todos los detalles son totalmente personalizables",
      inStock: true,
      rating: 5,
      category: "cajas-tematizadas",
    },

    // PRODUCTOS QUE APARECEN EN MÚLTIPLES CATEGORÍAS (referencias adicionales)
    // Productos Snoopy que también están en Joyería y accesorios
    {
      id: 61,
      name: "(Snoopy & Woodstock)✨Pulsera para compartir",
      price: "BOB 20.00",
      image: "/placeholder.svg",
      description: "Pulsera temática de Snoopy y Woodstock para compartir",
      inStock: true,
      rating: 5,
      category: "snoopy",
    },
    {
      id: 62,
      name: "Aretes Snoopy 💝✨",
      price: "BOB 15.00",
      image: "/placeholder.svg",
      description: "Aretes temáticos de Snoopy",
      inStock: true,
      rating: 5,
      category: "snoopy",
    },
    // Tarjeta que aparece tanto en Tarjetas como en Snoopy
    {
      id: 63,
      name: "Tarjeta mediana Snoopy 💞🫶",
      price: "BOB 45.00",
      image: "/set-tarjetas-tematicas.png",
      description:
        "Dibujos escaneados impresos •Tamaño Carpeta •Espacios para llenado •Tapa dura •Base Cartulina. *Tarjeta con contenido (con letra ) a 70 Bs*",
      inStock: true,
      rating: 5,
      category: "tarjetas",
    },
  ];

  const categories = [
    {
      id: "todos",
      name: "Todos los Productos",
      description: "Ver toda nuestra colección",
      icon: Package,
    },
    {
      id: "ramos-eternos",
      name: "Ramos Eternos",
      description: "Ramos que duran para siempre",
      icon: Heart,
    },
    {
      id: "flores-individuales",
      name: "Flores Individuales",
      description: "Flores decorativas individuales",
      icon: Heart,
    },
    {
      id: "libritos-canciones",
      name: "Libritos de Canciones",
      description: "Libritos artesanales con melodías",
      icon: Music,
    },
    {
      id: "plantas-vs-zombies",
      name: "Plantas vs Zombies",
      description: "Productos temáticos del videojuego",
      icon: Star,
    },
    {
      id: "productos-novedosos",
      name: "Productos Novedosos",
      description: "Creaciones únicas y originales",
      icon: Star,
    },
    {
      id: "tarjetas",
      name: "Tarjetas",
      description: "Tarjetas personalizadas únicas",
      icon: Gift,
    },
    {
      id: "joyeria-accesorios",
      name: "Joyería y Accesorios",
      description: "Complementos hechos a mano",
      icon: Star,
    },
    {
      id: "sombreros-chinos",
      name: "Sombreros Chinos",
      description: "Sombreros tradicionales chinos",
      icon: Star,
    },
    {
      id: "snoopy",
      name: "Snoopy",
      description: "Productos temáticos de Snoopy",
      icon: Heart,
    },
    {
      id: "tarjetas-con-movimiento",
      name: "Tarjetas con Movimiento",
      description: "Tarjetas interactivas especiales",
      icon: Gift,
    },
    {
      id: "cajas-tematizadas",
      name: "Cajas Tematizadas",
      description: "Cajas temáticas personalizadas",
      icon: Gift,
    },
  ];

  const getFilteredProducts = () => {
    let products = allProducts;

    if (currentView === "stock") {
      products = allProducts.filter((product) => product.inStock);
    }

    if (currentView === "category" && selectedCatalogCategory) {
      products = allProducts.filter(
        (product) => product.category === selectedCatalogCategory
      );
    } else if (selectedCategory !== "todos") {
      products = allProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    return products;
  };

  const getProductsByCategory = () => {
    const inStockProducts = allProducts.filter((product) => product.inStock);
    const grouped: { [key: string]: any[] } = {};

    categories.forEach((category) => {
      if (category.id !== "todos") {
        const categoryProducts = inStockProducts.filter(
          (product) => product.category === category.id
        );
        if (categoryProducts.length > 0) {
          grouped[category.id] = categoryProducts;
        }
      }
    });

    return grouped;
  };

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black"
            onClick={() => toggleFavorite(product.id)}
          >
            <Heart
              className={`h-4 w-4 ${
                favorites.includes(product.id)
                  ? "fill-red-500 text-red-500"
                  : "text-gray-600"
              }`}
            />
          </Button>
          <Badge
            variant={product.inStock ? "default" : "secondary"}
            className={`absolute top-2 left-2 ${
              product.inStock ? "bg-green-500 hover:bg-green-600" : ""
            }`}
          >
            {product.inStock ? "Stock Disponible" : "Stock Agotado"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < product.rating
                  ? "fill-primary text-primary"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            ({product.rating})
          </span>
        </div>
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <CardDescription className="mb-3">
          {product.description}
        </CardDescription>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {product.price}
          </span>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                className="gap-2 bg-transparent"
              >
                <Eye className="h-4 w-4" />
                Ver Detalles
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>{product.name}</DialogTitle>
                <DialogDescription>
                  Detalles completos del producto
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Badge
                      variant={product.inStock ? "default" : "secondary"}
                      className={product.inStock ? "bg-green-500" : ""}
                    >
                      {product.inStock ? "Disponible" : "Agotado"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating
                            ? "fill-primary text-primary"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.rating})
                    </span>
                  </div>
                </div>
                <Button asChild className="w-full gap-2">
                  <Link
                    href="https://wa.link/k5shnw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar por WhatsApp
                  </Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );

  const CategoryCard = ({ category }: { category: any }) => {
    const Icon = category.icon;
    const categoryProducts = allProducts.filter(
      (product) => product.category === category.id
    );
    const inStockCount = categoryProducts.filter(
      (product) => product.inStock
    ).length;

    return (
      <Card
        className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        onClick={() => navigateToView("category", category.id)}
      >
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-lg">{category.name}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              {categoryProducts.length} producto
              {categoryProducts.length !== 1 ? "s" : ""}
            </p>
            {inStockCount > 0 && (
              <Badge variant="default" className="bg-green-500">
                {inStockCount} en stock
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 backdrop-blur border-b border-border shadow-sm ${
          theme === "dark"
            ? "bg-background/95 supports-[backdrop-filter]:bg-background/80"
            : "bg-[#e3ca6e]/95 supports-[backdrop-filter]:bg-[#e3ca6e]/80"
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between min-h-[60px]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="h-[56px] w-auto relative flex-shrink-0">
                  <Image
                    src={
                      theme === "dark"
                        ? "/images/dark_mode.png"
                        : "/images/ligth_mode.png"
                    }
                    alt="Juki Creaciones Logo"
                    width={120}
                    height={56}
                    className="h-full w-auto object-contain"
                  />
                </div>
                {/* <div>
                  <h1 className="text-2xl font-serif font-black text-[#e3ca6e]">
                    Juki
                  </h1>
                  <p className="text-sm text-muted-foreground">Creaciones</p>
                </div> */}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className={
                    theme === "dark" ? "hover:bg-muted" : "hover:bg-black/10"
                  }
                >
                  <Link
                    href="https://wa.link/k5shnw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6 text-green-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="currentColor"
                        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                      />
                    </svg>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className={
                    theme === "dark" ? "hover:bg-muted" : "hover:bg-black/10"
                  }
                >
                  <Link
                    href="https://www.tiktok.com/@juki_creaciones?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      className="w-6 h-6 text-pink-600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => navigateToHome()}
                className={`transition-colors font-medium ${
                  theme === "dark"
                    ? "text-foreground hover:text-[#e3ca6e]"
                    : "text-black hover:text-black/70"
                }`}
              >
                Inicio
              </button>
              <Link
                href="#ofertas"
                className={`transition-colors font-medium ${
                  theme === "dark"
                    ? "text-foreground hover:text-[#e3ca6e]"
                    : "text-black hover:text-black/70"
                }`}
              >
                Ofertas
              </Link>
              <Link
                href="#contacto"
                className={`transition-colors font-medium ${
                  theme === "dark"
                    ? "text-foreground hover:text-[#e3ca6e]"
                    : "text-black hover:text-black/70"
                }`}
              >
                Contacto
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-transparent"
              >
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Favoritos</span>
                {favorites.length > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {favorites.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {currentView === "home" && (
        <section
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/products-collage.png)",
          }}
        >
          {/* Overlay elegante */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              {/* Título principal */}
              <div className="space-y-8 mb-12">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                    Regalos que
                    <span className="block text-[#e3ca6e] font-black">
                      Enamoran
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed">
                    Creaciones artesanales únicas desde La Paz, Bolivia.
                    <br className="hidden md:block" />
                    Ramos eternos, tarjetas personalizadas y detalles especiales
                    hechos con amor.
                  </p>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="space-y-6">
                {/* Botón principal */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="text-lg px-10 py-6 bg-[#e3ca6e] hover:bg-[#d4b84e] text-black font-bold shadow-2xl transition-all duration-300 hover:scale-105 border-0"
                    asChild
                  >
                    <Link
                      href="https://wa.link/k5shnw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-6 w-6 mr-3" />
                      Hacer Pedido Ahora
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                    onClick={() => navigateToView("catalog")}
                  >
                    <Eye className="h-6 w-6 mr-3" />
                    Ver Catálogo
                  </Button>
                </div>

                {/* Botones secundarios */}
                <div className="pt-8">
                  <p className="text-white/80 text-lg mb-6 font-medium">
                    Explora nuestros productos
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/30 transition-all duration-300"
                      onClick={() => navigateToView("stock")}
                    >
                      <ShoppingBag className="h-5 w-5 mr-3" />
                      Productos Disponibles
                      <Badge className="ml-3 bg-green-600 hover:bg-green-700 text-white border-0">
                        {allProducts.filter((p) => p.inStock).length}
                      </Badge>
                    </Button>

                    <Button
                      size="lg"
                      className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/30 transition-all duration-300"
                      onClick={() => navigateToView("catalog")}
                    >
                      <Grid3X3 className="h-5 w-5 mr-3" />
                      Todas las Categorías
                      <Badge
                        variant="outline"
                        className="ml-3 border-white/50 text-white hover:bg-white hover:text-black"
                      >
                        {categories.length - 1}
                      </Badge>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Indicador de scroll */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentView === "stock" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-2">
                  Productos en Stock
                </h2>
                <p className="text-lg text-muted-foreground">
                  Productos disponibles organizados por categorías
                </p>
              </div>
              <Button variant="outline" onClick={() => navigateToHome()}>
                Volver al Inicio
              </Button>
            </div>

            {Object.entries(getProductsByCategory()).map(
              ([categoryId, products]) => {
                const category = categories.find(
                  (cat) => cat.id === categoryId
                );
                if (!category) return null;

                return (
                  <div key={categoryId} className="mb-12">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
                      <category.icon className="h-6 w-6 text-primary" />
                      {category.name}
                      <Badge variant="secondary" className="ml-2">
                        {products.length} disponible
                        {products.length !== 1 ? "s" : ""}
                      </Badge>
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                      {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>
      )}

      {currentView === "catalog" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-2">
                  Catálogo Completo
                </h2>
                <p className="text-lg text-muted-foreground">
                  Selecciona una categoría para ver todos los productos
                </p>
              </div>
              <Button variant="outline" onClick={() => navigateToHome()}>
                Volver al Inicio
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories
                .filter((cat) => cat.id !== "todos")
                .map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
            </div>
          </div>
        </section>
      )}

      {currentView === "category" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-2">
                  {
                    categories.find((cat) => cat.id === selectedCatalogCategory)
                      ?.name
                  }
                </h2>
                <p className="text-lg text-muted-foreground">
                  {
                    categories.find((cat) => cat.id === selectedCatalogCategory)
                      ?.description
                  }
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => navigateToView("catalog")}
                >
                  Volver al Catálogo
                </Button>
                <Button variant="outline" onClick={() => navigateToHome()}>
                  Inicio
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              {getFilteredProducts().map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {getFilteredProducts().length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No hay productos disponibles en esta categoría por el momento.
                </p>
                <Button
                  variant="outline"
                  onClick={() => navigateToView("catalog")}
                >
                  Ver Otras Categorías
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Ofertas Section - Solo se muestra en vista home */}
      {currentView === "home" && (
        <section
          id="ofertas"
          className="py-16 bg-gradient-to-br from-primary/10 to-secondary/20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-4">
                  ¡Recibe Ofertas Exclusivas!
                </h2>
                <p className="text-lg text-muted-foreground">
                  Déjanos tu información y te enviaremos promociones especiales,
                  nuevos productos y descuentos exclusivos directamente a tu
                  WhatsApp.
                </p>
              </div>

              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="text-center">
                    Únete a nuestras ofertas
                  </CardTitle>
                  <CardDescription className="text-center">
                    Recibe promociones exclusivas en tu WhatsApp
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLeadSubmission} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Tu nombre completo"
                        value={leadForm.name}
                        onChange={(e) =>
                          setLeadForm({ ...leadForm, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Número de WhatsApp</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Ej: 60137693"
                        value={leadForm.phone}
                        onChange={(e) =>
                          setLeadForm({ ...leadForm, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      <Send className="h-4 w-4" />
                      {isSubmitting ? "Enviando..." : "Recibir Ofertas"}
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Al enviar tus datos, aceptas recibir promociones de Juki
                    Creaciones por WhatsApp.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section - Solo se muestra en vista home */}
      {currentView === "home" && (
        <section id="contacto" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-4">
                Contáctanos
              </h2>
              <p className="text-lg text-muted-foreground">
                Ubicados en La Paz, Bolivia. Realizamos envíos a los 9
                departamentos y artículos personalizados a pedido.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    WhatsApp
                  </CardTitle>
                  <CardDescription>
                    Chatea con nosotros directamente
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full gap-2">
                    <Link
                      href="https://wa.link/k5shnw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="h-4 w-4" />
                      Enviar Mensaje
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music className="h-5 w-5 text-primary" />
                    TikTok
                  </CardTitle>
                  <CardDescription>
                    Síguenos para ver nuestras creaciones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="https://www.tiktok.com/@juki_creaciones?is_from_webapp=1&sender_device=pc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Music className="h-4 w-4" />
                      @juki_creaciones
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Quiénes Somos Section - Solo se muestra en vista home */}
      {currentView === "home" && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-4">
                  Quiénes Somos
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Conoce la historia detrás de cada creación artesanal
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                      Nuestra Historia
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Juki Creaciones nació del amor por los detalles únicos y
                      la pasión por crear momentos especiales. Desde La Paz,
                      Bolivia, nos dedicamos a elaborar regalos manuales que
                      transmitan emociones y creen recuerdos inolvidables.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Cada pieza es cuidadosamente diseñada y elaborada a mano,
                      garantizando que cada regalo sea tan especial como la
                      persona que lo recibe.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                      Nuestra Misión
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Crear productos artesanales únicos que expresen
                      sentimientos auténticos y fortalezcan los lazos entre las
                      personas. Creemos que cada detalle importa y que los
                      regalos hechos con amor tienen el poder de transformar
                      momentos ordinarios en extraordinarios.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">
                        100%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Artesanal
                      </div>
                    </div>
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">
                        9
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Departamentos
                      </div>
                    </div>
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">
                        ✨
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Únicos
                      </div>
                    </div>
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">
                        💝
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Con Amor
                      </div>
                    </div>
                  </div>

                  <Card className="bg-gradient-to-br from-primary/10 to-secondary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Heart className="h-6 w-6 text-primary" />
                        <h4 className="font-serif font-bold text-foreground">
                          ¿Por qué elegirnos?
                        </h4>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-primary" />
                          Productos 100% artesanales y personalizados
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-primary" />
                          Envíos a todos los departamentos de Bolivia
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-primary" />
                          Atención personalizada por WhatsApp
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-primary" />
                          Cada detalle hecho con amor y dedicación
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-card py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/juki-logo.png"
                  alt="Juki Creaciones"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-serif font-black text-primary">
                    Juki Creaciones
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Porque cada detalle importa
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Regalos manuales personalizados desde La Paz, Bolivia. Envíos a
                los 9 departamentos y artículos a pedido.
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold mb-4">Productos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button
                    onClick={() => navigateToView("category", "ramos-eternos")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Ramos Eternos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      navigateToView("category", "tarjetas-regalo")
                    }
                    className="hover:text-primary transition-colors text-left"
                  >
                    Tarjetas de Regalo
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      navigateToView("category", "productos-novedosos")
                    }
                    className="hover:text-primary transition-colors text-left"
                  >
                    Productos Novedosos
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://www.tiktok.com/@juki_creaciones?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Music className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://wa.link/k5shnw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Juki Creaciones. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Loading component para el Suspense
function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#e3ca6e] mx-auto"></div>
        <p className="mt-2 text-muted-foreground">Cargando...</p>
      </div>
    </div>
  );
}

// Componente principal que envuelve el contenido en Suspense
export default function JukiCreacionesHome() {
  return (
    <Suspense fallback={<Loading />}>
      <JukiCreacionesContent />
    </Suspense>
  );
}
