import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import bakeryInterior from '@/assets/bakery-interior.jpg';
import heroBakery from '@/assets/hero-bakery.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Baked with Love",
      description: "Every item is crafted with passion and care, using traditional recipes passed down through generations."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest ingredients to ensure every bite meets our high standards of excellence."
    },
    {
      icon: Users,
      title: "Community First",
      description: "As a local Kenyan business, we're committed to serving our community with exceptional baked goods."
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Our bakers start early every morning to ensure everything is fresh and ready when you arrive."
    }
  ];

  const milestones = [
    { year: "2018", title: "The Beginning", description: "Started as a small family bakery in Nairobi" },
    { year: "2020", title: "Growing Family", description: "Expanded our team and introduced new recipes" },
    { year: "2022", title: "Community Love", description: "Became the neighborhood's favorite bakery" },
    { year: "2024", title: "Digital Presence", description: "Launched online ordering and delivery services" }
  ];

  return (
    <div className="scroll-to-top pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-5xl font-bold text-foreground mb-6">Our Story</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Kennes Foods began as a dream in 2018 - to bring authentic, freshly baked goods to the heart of Nairobi. What started as a small family venture has grown into a beloved community bakery, but our commitment to quality and tradition remains unchanged.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">6+</h3>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">1000+</h3>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="fade-in" style={{animationDelay: '0.2s'}}>
              <img
                src={bakeryInterior}
                alt="Kennes Foods Bakery Interior"
                className="rounded-lg shadow-warm hover-zoom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-gradient-warm text-white slide-up">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                  To create exceptional bakery experiences that bring joy to every customer's day. We believe that great food brings people together, and we're proud to be part of our community's daily rituals and special celebrations.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-soft slide-up" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be Kenya's most trusted bakery brand, known for our commitment to quality, innovation, and community service. We envision a future where Kennes Foods is synonymous with exceptional taste and memorable experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Kennes Foods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-300 slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Milestones that shaped our story
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full ${index % 2 === 0 ? 'pr-8' : 'pl-8'} ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <Card className="hover:shadow-soft transition-all duration-300 slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img
                src={heroBakery}
                alt="Our talented baking team"
                className="rounded-lg shadow-soft hover-zoom"
              />
            </div>
            <div className="fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-lg mb-6 opacity-90">
                Behind every delicious item at Kennes Foods is a dedicated team of passionate bakers and staff members. Led by our head baker with over 15 years of experience, our team combines traditional techniques with modern innovation.
              </p>
              <p className="text-lg opacity-90">
                From our early-morning bakers who ensure fresh bread is ready at opening, to our customer service team who greet you with warm smiles, every team member is committed to making your experience exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;