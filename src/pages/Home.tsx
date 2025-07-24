import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroBakery from '@/assets/hero-bakery.jpg';
import chocolateCake from '@/assets/chocolate-cake.jpg';
import pastries from '@/assets/pastries.jpg';
import breadVarieties from '@/assets/bread-varieties.jpg';
import bakeryInterior from '@/assets/bakery-interior.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    { src: heroBakery, title: "Fresh Baked Daily", subtitle: "Artisan breads and pastries" },
    { src: bakeryInterior, title: "Cozy Atmosphere", subtitle: "Perfect place to enjoy fresh bakes" },
    { src: chocolateCake, title: "Custom Cakes", subtitle: "Made for your special occasions" }
  ];

  const bestsellers = [
    {
      id: 1,
      name: "Chocolate Birthday Cake",
      description: "Rich chocolate cake with smooth frosting, perfect for celebrations",
      price: "KES 2,500",
      image: chocolateCake,
      rating: 5
    },
    {
      id: 2,
      name: "Fresh Croissants & Pastries",
      description: "Buttery, flaky pastries baked fresh every morning",
      price: "KES 150",
      image: pastries,
      rating: 5
    },
    {
      id: 3,
      name: "Artisan Bread Collection",
      description: "Handcrafted sourdough, whole wheat, and specialty breads",
      price: "KES 200",
      image: breadVarieties,
      rating: 5
    }
  ];

  const testimonials = [
    {
      name: "Sarah Njeri",
      review: "The best bakery in Nairobi! Their chocolate cake made our wedding perfect.",
      rating: 5
    },
    {
      name: "John Mwangi",
      review: "Fresh bread every morning. The sourdough is absolutely incredible!",
      rating: 5
    },
    {
      name: "Grace Wanjiku",
      review: "Amazing pastries and friendly service. My family's favorite bakery!",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scroll-to-top">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image.src})` }}
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
        ))}
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
              Kennes Foods
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 fade-in" style={{animationDelay: '0.2s'}}>
              Baked with Love. Served with Passion.
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto fade-in" style={{animationDelay: '0.4s'}}>
              Experience the finest bakery items and traditional flavors of Kenya, crafted with premium ingredients and time-honored recipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{animationDelay: '0.6s'}}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Link to="/menu">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  View Our Menu
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                <Link to="/contact">
                  Order Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Bestsellers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the favorites that keep our customers coming back for more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestsellers.map((item, index) => (
              <Card key={item.id} className="group hover:shadow-warm transition-all duration-300 slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <Button size="sm" className="bg-gradient-warm hover:opacity-90 text-white">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Real reviews from real customers who love our baked goods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300 slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.review}"</p>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials">
                Read More Reviews
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Award className="w-16 h-16 mx-auto mb-6 animate-bounce-slow" />
          <h2 className="text-4xl font-bold mb-6">Ready to Taste Perfection?</h2>
          <p className="text-xl mb-8 opacity-90">
            Visit our bakery today or place your order online. Fresh bakes available daily!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">
                Visit Our Store
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/gallery">
                View Gallery
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;