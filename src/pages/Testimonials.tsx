import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Njeri",
      rating: 5,
      review: "The best bakery in Nairobi! Their chocolate cake made our wedding absolutely perfect. The attention to detail and quality is unmatched.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "John Mwangi",
      rating: 5,
      review: "Fresh bread every morning. The sourdough is absolutely incredible! I've been a customer for 3 years and never disappointed.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Grace Wanjiku",
      rating: 5,
      review: "Amazing pastries and the friendliest service. My family's favorite bakery! The croissants are like those from Paris.",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Michael Ochieng",
      rating: 5,
      review: "Exceptional quality and taste. Their custom birthday cakes are works of art that taste even better than they look!",
      date: "1 week ago"
    },
    {
      id: 5,
      name: "Mary Kamau",
      rating: 5,
      review: "I order from Kennes Foods for all my office events. Professional service, timely delivery, and everyone always asks where the food is from!",
      date: "2 months ago"
    },
    {
      id: 6,
      name: "David Kiplagat",
      rating: 5,
      review: "The atmosphere is so welcoming and the aroma when you walk in is heavenly. Great place to grab breakfast before work.",
      date: "1 month ago"
    }
  ];

  return (
    <div className="scroll-to-top pt-16">
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 fade-in">Customer Reviews</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in" style={{animationDelay: '0.2s'}}>
            Don't just take our word for it. Here's what our valued customers have to say about their Kennes Foods experience.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="hover:shadow-warm transition-all duration-300 slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-lg mb-6 italic">"{testimonial.review}"</p>
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                    <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;