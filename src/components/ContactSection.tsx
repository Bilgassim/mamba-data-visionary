import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Phone, Loader2 } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Le nom est trop long"),
  email: z.string().trim().email("Email invalide").max(255, "Email trop long"),
  subject: z.string().trim().min(3, "Le sujet doit contenir au moins 3 caractères").max(200, "Le sujet est trop long"),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères").max(2000, "Le message est trop long"),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: values,
      });

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai rapidement.",
      });

      form.reset();
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container bg-gray-50 scroll-animation">
      <h2 className="section-title">Contact</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="votre@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sujet</FormLabel>
                      <FormControl>
                        <Input placeholder="Sujet de votre message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Votre message..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-blue-dark hover:bg-portfolio-blue"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer'
                  )}
                </Button>
              </form>
            </Form>
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
                    boulkassoum2002@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-portfolio-blue-dark mr-3" />
                  <a href="tel:+212710911949" className="text-portfolio-gray-dark hover:text-portfolio-blue">
                    +212 710 91 19 49
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 text-portfolio-blue-dark mr-3" />
                  <a href="https://linkedin.com/in/mohamedboulkassoum" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray-dark hover:text-portfolio-blue">
                    linkedin.com/in/moboulkassoum
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 text-portfolio-blue-dark mr-3" />
                  <a href="https://github.com/bilgassim" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray-dark hover:text-portfolio-blue">
                    github.com/bilgassim
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
