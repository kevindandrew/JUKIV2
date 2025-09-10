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

export default function JukiCreacionesHome() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [mounted, setMounted] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentView, setCurrentView] = useState<
    "home" | "stock" | "catalog" | "category"
  >("home");
  const [selectedCatalogCategory, setSelectedCatalogCategory] =
    useState<string>("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll al top cada vez que cambia la vista principal
  useEffect(() => {
    if (mounted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentView, mounted]);

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
        onClick={() => {
          setSelectedCatalogCategory(category.id);
          setCurrentView("category");
        }}
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
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/juki-logo.png"
                  alt="Juki Creaciones Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-2xl font-serif font-black text-[#e3ca6e]">
                    Juki
                  </h1>
                  <p className="text-sm text-muted-foreground">Creaciones</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:bg-muted"
                >
                  <Link
                    href="https://wa.link/k5shnw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 text-green-600" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:bg-muted"
                >
                  <Link
                    href="https://www.tiktok.com/@juki_creaciones?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Music className="h-4 w-4 text-pink-600" />
                  </Link>
                </Button>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setCurrentView("home")}
                className="text-foreground hover:text-[#e3ca6e] transition-colors font-medium"
              >
                Inicio
              </button>
              <Link
                href="#ofertas"
                className="text-foreground hover:text-[#e3ca6e] transition-colors font-medium"
              >
                Ofertas
              </Link>
              <Link
                href="#contacto"
                className="text-foreground hover:text-[#e3ca6e] transition-colors font-medium"
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
                    onClick={() => setCurrentView("stock")}
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
                    onClick={() => setCurrentView("catalog")}
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
              <Button variant="outline" onClick={() => setCurrentView("home")}>
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
              <Button variant="outline" onClick={() => setCurrentView("home")}>
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
                  onClick={() => setCurrentView("catalog")}
                >
                  Volver al Catálogo
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCurrentView("home")}
                >
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
                  onClick={() => setCurrentView("catalog")}
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
                    onClick={() => setSelectedCategory("ramos-eternos")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Ramos Eternos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedCategory("tarjetas-regalo")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Tarjetas de Regalo
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedCategory("productos-novedosos")}
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
