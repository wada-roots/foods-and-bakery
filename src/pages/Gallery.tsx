import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import chocolateCake from '@/assets/chocolate-cake.jpg';
import pastries from '@/assets/pastries.jpg';
import breadVarieties from '@/assets/bread-varieties.jpg';
import heroBakery from '@/assets/hero-bakery.jpg';
import bakeryInterior from '@/assets/bakery-interior.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Photos' },
    { id: 'products', name: 'Our Products' },
    { id: 'interior', name: 'Bakery Interior' },
    { id: 'process', name: 'Baking Process' },
    { id: 'events', name: 'Events & Customers' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: heroBakery,
      alt: 'Fresh baked artisan breads and pastries',
      category: 'products',
      title: 'Fresh Daily Bakes',
      description: 'Our signature collection of artisan breads and pastries'
    },
    {
      id: 2,
      src: chocolateCake,
      alt: 'Chocolate birthday cake with decorations',
      category: 'products',
      title: 'Custom Birthday Cake',
      description: 'Rich chocolate cake with smooth frosting and berries'
    },
    {
      id: 3,
      src: pastries,
      alt: 'French croissants and danish pastries',
      category: 'products',
      title: 'French Pastries',
      description: 'Buttery croissants and sweet danish pastries'
    },
    {
      id: 4,
      src: breadVarieties,
      alt: 'Various artisan bread loaves',
      category: 'products',
      title: 'Artisan Breads',
      description: 'Sourdough, whole wheat, and specialty breads'
    },
    {
      id: 5,
      src: bakeryInterior,
      alt: 'Cozy bakery interior with warm lighting',
      category: 'interior',
      title: 'Our Cozy Space',
      description: 'Welcome to Kennes Foods - your neighborhood bakery'
    },
    {
      id: 6,
      src: heroBakery,
      alt: 'Baker preparing fresh dough',
      category: 'process',
      title: 'Artisan Craftsmanship',
      description: 'Our skilled bakers at work creating magic'
    },
    {
      id: 7,
      src: bakeryInterior,
      alt: 'Customers enjoying fresh bakes',
      category: 'events',
      title: 'Happy Customers',
      description: 'Nothing beats the joy of fresh baked goods'
    },
    {
      id: 8,
      src: chocolateCake,
      alt: 'Wedding cake celebration',
      category: 'events',
      title: 'Special Celebrations',
      description: 'Making your special moments even sweeter'
    },
    {
      id: 9,
      src: pastries,
      alt: 'Morning pastry selection',
      category: 'products',
      title: 'Morning Selection',
      description: 'Start your day with our fresh pastries'
    },
    {
      id: 10,
      src: breadVarieties,
      alt: 'Bread baking process',
      category: 'process',
      title: 'Traditional Methods',
      description: 'Time-honored techniques for perfect bread'
    },
    {
      id: 11,
      src: bakeryInterior,
      alt: 'Modern bakery equipment',
      category: 'interior',
      title: 'Modern Facilities',
      description: 'State-of-the-art equipment meets traditional craftsmanship'
    },
    {
      id: 12,
      src: heroBakery,
      alt: 'Community event at bakery',
      category: 'events',
      title: 'Community Events',
      description: 'Bringing the community together through food'
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="scroll-to-top pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 fade-in">Our Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in" style={{animationDelay: '0.2s'}}>
            Take a visual journey through our delicious creations, cozy atmosphere, and the craftsmanship 
            that goes into every item we bake.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter, index) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveFilter(filter.id)}
                className={`transition-all duration-300 slide-up ${
                  activeFilter === filter.id 
                    ? 'bg-gradient-warm text-white' 
                    : 'hover:bg-primary/10'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {filter.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group overflow-hidden hover:shadow-warm transition-all duration-300 cursor-pointer slide-up"
                style={{animationDelay: `${index * 0.05}s`}}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <ZoomIn className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-white/90 text-sm">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Want to See More?</h2>
          <p className="text-xl mb-8 opacity-90">
            Follow us on social media for daily updates, behind-the-scenes content, 
            and the latest additions to our delicious collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="https://instagram.com/kennesfoods" target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="https://facebook.com/kennesfoods" target="_blank" rel="noopener noreferrer">
                Like on Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;