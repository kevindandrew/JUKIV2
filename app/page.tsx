"use client";

import type React from "react";

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

export default function JukiCreacionesHome() {
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

  const ramos = [
    {
      id: 1,
      name: "Ramo de Girasoles Eternos Premium",
      price: "Bs 65.00",
      image: "/images/sunflower-bouquet-premium.png",
      description:
        "Hermoso ramo de girasoles decorativos con papel dorado y lazo naranja",
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
  ];

  const tarjetas = [
    {
      id: 4,
      name: "Librito con Canciones de Amor",
      price: "Bs 25.00",
      image: "/images/love-booklet.png",
      description:
        "Librito artesanal con ilustraciones románticas y frases personalizadas",
      inStock: true,
      rating: 5,
      category: "libritos-canciones",
    },
    {
      id: 5,
      name: "Tarjeta Personalizada Premium",
      price: "Bs 12.00",
      image: "/tarjeta-artesanal-premium.png",
      description: "Tarjeta hecha a mano con detalles únicos y personalizables",
      inStock: true,
      rating: 5,
      category: "tarjetas-regalo",
    },
    {
      id: 6,
      name: "Set de Tarjetas Temáticas",
      price: "Bs 25.00",
      image: "/set-tarjetas-tematicas.png",
      description: "Pack de 3 tarjetas con diferentes diseños temáticos",
      inStock: false,
      rating: 4,
      category: "tarjetas-regalo",
    },
  ];

  const productosNovedosos = [
    {
      id: 7,
      name: "Planta vs Zombies Verde",
      price: "Bs 35.00",
      image: "/images/plants-vs-zombies-green.png",
      description:
        "Producto temático inspirado en Plants vs Zombies con cara tierna",
      inStock: true,
      rating: 5,
      category: "productos-novedosos",
    },
    {
      id: 8,
      name: "Planta Militar PvZ",
      price: "Bs 40.00",
      image: "/images/plants-vs-zombies-military.png",
      description: "Planta temática estilo militar con boina y accesorios",
      inStock: true,
      rating: 5,
      category: "productos-novedosos",
    },
  ];

  const productosTematizados = [
    {
      id: 9,
      name: "Ramo Spider-Man",
      price: "Bs 75.00",
      image: "/images/spiderman-roses.png",
      description:
        "Ramo de rosas rojas con máscara de Spider-Man, perfecto para fans",
      inStock: true,
      rating: 5,
      category: "productos-tematizados",
    },
  ];

  const allProducts = [
    ...ramos,
    ...tarjetas,
    ...productosNovedosos,
    ...productosTematizados,
  ];

  const categories = [
    {
      id: "todos",
      name: "Todos los Productos",
      description: "Ver toda nuestra colección",
      icon: Package,
    },
    {
      id: "tarjetas-regalo",
      name: "Tarjetas de Regalo",
      description: "Tarjetas personalizadas únicas",
      icon: Gift,
    },
    {
      id: "libritos-canciones",
      name: "Libritos con Canciones",
      description: "Libritos artesanales con melodías",
      icon: Music,
    },
    {
      id: "flores-individuales",
      name: "Flores Eternas Individuales",
      description: "Flores decorativas individuales",
      icon: Heart,
    },
    {
      id: "ramos-eternos",
      name: "Ramos Eternos",
      description: "Ramos que duran para siempre",
      icon: Heart,
    },
    {
      id: "productos-novedosos",
      name: "Productos Novedosos",
      description: "Creaciones únicas y originales",
      icon: Star,
    },
    {
      id: "accesorios-joyeria",
      name: "Accesorios y Joyería",
      description: "Complementos hechos a mano",
      icon: Star,
    },
    {
      id: "productos-tematizados",
      name: "Productos Tematizados",
      description: "Productos de personajes y temas",
      icon: Star,
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
          {/* Overlay suave para mejorar legibilidad sin ocultar mucho la imagen */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-tight drop-shadow-2xl">
                  Regalos Manuales
                  <span className="text-[#e3ca6e] block drop-shadow-2xl">
                    Personalizados
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white font-serif font-bold drop-shadow-lg">
                  Porque cada detalle importa
                </p>
                <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                  Desde La Paz, Bolivia, creamos ramos de flores eternas,
                  tarjetas únicas y manualidades especiales hechas con amor y
                  dedicación. Realizamos envíos a los 9 departamentos de Bolivia
                  y artículos a pedido.
                </p>
                <div className="pt-8">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-4 bg-[#e3ca6e] hover:bg-[#d4b84e] text-black font-bold shadow-2xl border-2 border-white/20"
                    asChild
                  >
                    <Link
                      href="https://wa.link/k5shnw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Ver Productos
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentView === "home" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-4">
                ¿Qué estás buscando?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explora nuestros productos disponibles o navega por todo nuestro
                catálogo
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-green-500/10 rounded-full w-fit">
                    <ShoppingBag className="h-12 w-12 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Productos en Stock</CardTitle>
                  <CardDescription className="text-base">
                    Ver productos disponibles organizados por categorías
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    size="lg"
                    className="w-full gap-2"
                    onClick={() => navigateToView("stock")}
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Ver Productos Disponibles
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    {allProducts.filter((p) => p.inStock).length} productos
                    disponibles
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <Grid3X3 className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Catálogo Completo</CardTitle>
                  <CardDescription className="text-base">
                    Explorar todas las categorías y productos
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full gap-2 bg-transparent"
                    onClick={() => navigateToView("catalog")}
                  >
                    <Grid3X3 className="h-5 w-5" />
                    Ver Catálogo Completo
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    {categories.length - 1} categorías disponibles
                  </p>
                </CardContent>
              </Card>
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
