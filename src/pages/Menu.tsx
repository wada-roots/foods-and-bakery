import React, { useState } from 'react';
import { ShoppingBag, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import chocolateCake from '@/assets/chocolate-cake.jpg';
import pastries from '@/assets/pastries.jpg';
import breadVarieties from '@/assets/bread-varieties.jpg';
import heroBakery from '@/assets/hero-bakery.jpg';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', count: 12 },
    { id: 'breads', name: 'Breads', count: 4 },
    { id: 'cakes', name: 'Cakes', count: 3 },
    { id: 'pastries', name: 'Pastries', count: 3 },
    { id: 'snacks', name: 'Snacks', count: 2 }
  ];

  const menuItems = [
    // Breads
    {
      id: 1,
      category: 'breads',
      name: 'Artisan Sourdough',
      description: 'Traditional sourdough with crispy crust and soft interior',
      price: 'KES 250',
      image: breadVarieties,
      rating: 5,
      isPopular: true,
      isNew: false
    },
    {
      id: 2,
      category: 'breads',
      name: 'Whole Wheat Bread',
      description: 'Healthy whole grain bread, perfect for daily consumption',
      price: 'KES 180',
      image: breadVarieties,
      rating: 4,
      isPopular: false,
      isNew: false
    },
    {
      id: 3,
      category: 'breads',
      name: 'French Baguette',
      description: 'Classic French baguette with golden crust',
      price: 'KES 200',
      image: breadVarieties,
      rating: 5,
      isPopular: true,
      isNew: false
    },
    {
      id: 4,
      category: 'breads',
      name: 'Multigrain Loaf',
      description: 'Nutritious blend of grains and seeds',
      price: 'KES 220',
      image: breadVarieties,
      rating: 4,
      isPopular: false,
      isNew: true
    },

    // Cakes
    {
      id: 5,
      category: 'cakes',
      name: 'Chocolate Birthday Cake',
      description: 'Rich chocolate cake with smooth frosting and decorations',
      price: 'KES 2,500',
      image: chocolateCake,
      rating: 5,
      isPopular: true,
      isNew: false
    },
    {
      id: 6,
      category: 'cakes',
      name: 'Vanilla Wedding Cake',
      description: 'Elegant multi-tier vanilla cake for special occasions',
      price: 'KES 5,000',
      image: chocolateCake,
      rating: 5,
      isPopular: true,
      isNew: false
    },
    {
      id: 7,
      category: 'cakes',
      name: 'Red Velvet Cake',
      description: 'Classic red velvet with cream cheese frosting',
      price: 'KES 2,800',
      image: chocolateCake,
      rating: 5,
      isPopular: false,
      isNew: true
    },

    // Pastries
    {
      id: 8,
      category: 'pastries',
      name: 'Butter Croissants',
      description: 'Flaky, buttery croissants baked fresh daily',
      price: 'KES 120',
      image: pastries,
      rating: 5,
      isPopular: true,
      isNew: false
    },
    {
      id: 9,
      category: 'pastries',
      name: 'Danish Pastries',
      description: 'Sweet pastries with fruit or custard filling',
      price: 'KES 150',
      image: pastries,
      rating: 4,
      isPopular: false,
      isNew: false
    },
    {
      id: 10,
      category: 'pastries',
      name: 'Chocolate Eclairs',
      description: 'Choux pastry filled with cream and topped with chocolate',
      price: 'KES 180',
      image: pastries,
      rating: 5,
      isPopular: true,
      isNew: false
    },

    // Snacks
    {
      id: 11,
      category: 'snacks',
      name: 'Meat Samosas',
      description: 'Crispy pastry filled with spiced meat',
      price: 'KES 80',
      image: heroBakery,
      rating: 4,
      isPopular: true,
      isNew: false
    },
    {
      id: 12,
      category: 'snacks',
      name: 'Vegetable Spring Rolls',
      description: 'Fresh vegetables wrapped in crispy pastry',
      price: 'KES 60',
      image: heroBakery,
      rating: 4,
      isPopular: false,
      isNew: true
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="scroll-to-top pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 fade-in">Our Menu</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in" style={{animationDelay: '0.2s'}}>
            Discover our wide selection of freshly baked breads, cakes, pastries, and snacks. 
            Each item is crafted with love using the finest ingredients.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all duration-300 slide-up ${
                  activeCategory === category.id 
                    ? 'bg-gradient-warm text-white' 
                    : 'hover:bg-primary/10'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group hover:shadow-warm transition-all duration-300 slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.isPopular && (
                      <Badge className="bg-primary text-white">Popular</Badge>
                    )}
                    {item.isNew && (
                      <Badge className="bg-green-500 text-white">New</Badge>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{item.rating}</span>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-gradient-warm hover:opacity-90 text-white"
                    >
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Special Orders CTA */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Need Something Special?</h2>
          <p className="text-xl mb-8 opacity-90">
            We also take custom orders for weddings, birthdays, and special events. 
            Contact us to discuss your requirements and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Custom Orders
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;