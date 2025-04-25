
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-container bg-gray-50 scroll-animation">
      <h2 className="section-title">Contact</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nom</label>
                  <Input id="name" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                <Input id="subject" placeholder="Sujet de votre message" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Votre message..." className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full bg-portfolio-blue-dark hover:bg-portfolio-blue">
                Envoyer
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="flex flex-col space-y-6">
          <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53280.465517099066!2d-1.9369286435488525!3d34.68075762863275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7864a4582df6e3%3A0x71e427073f8181f5!2sOujda!5e0!3m2!1sen!2sma!4v1649152991112!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Maps Oujda"
            ></iframe>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-portfolio-blue-dark mr-3" />
                  <a href="mailto:contact@mohamedboulkassoum.com" className="text-portfolio-gray-dark hover:text-portfolio-blue">
                    contact@mohamedboulkassoum.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-portfolio-blue-dark mr-3" />
                  <a href="tel:+212600000000" className="text-portfolio-gray-dark hover:text-portfolio-blue">
                    +212 6 00 00 00 00
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 text-portfolio-blue-dark mr-3" />
                  <a href="https://linkedin.com/in/mohamedboulkassoum" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray-dark hover:text-portfolio-blue">
                    linkedin.com/in/mohamedboulkassoum
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 text-portfolio-blue-dark mr-3" />
                  <a href="https://github.com/mohamedboulkassoum" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray-dark hover:text-portfolio-blue">
                    github.com/mohamedboulkassoum
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
