import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  return (
    <div className="scroll-to-top pt-16">
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 fade-in">Order Now</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in" style={{animationDelay: '0.2s'}}>
            Ready to taste perfection? Place your order or visit our bakery. We're here to make your experience exceptional.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Order Form */}
            <Card className="shadow-warm slide-up">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Place Your Order</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+254 700 000 000" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="products">Products & Quantity</Label>
                    <Textarea id="products" placeholder="Please specify items and quantities (e.g., 2 Chocolate Cakes, 10 Croissants)" />
                  </div>
                  <div>
                    <Label htmlFor="delivery">Pickup or Delivery</Label>
                    <Input id="delivery" placeholder="Pickup from store or delivery address" />
                  </div>
                  <div>
                    <Label htmlFor="message">Special Instructions</Label>
                    <Textarea id="message" placeholder="Any special requests or notes" />
                  </div>
                  <Button size="lg" className="w-full bg-gradient-warm hover:opacity-90 text-white">
                    <Send className="w-5 h-5 mr-2" />
                    Send Order Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 slide-up" style={{animationDelay: '0.2s'}}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Our Location</h3>
                      <p className="text-muted-foreground">
                        123 Bakery Street<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                      <p className="text-muted-foreground">+254 700 123 456</p>
                      <p className="text-sm text-muted-foreground">WhatsApp orders welcome</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                      <p className="text-muted-foreground">info@kennesfoods.co.ke</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 6:00 AM - 8:00 PM<br />
                        Sunday: 7:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;