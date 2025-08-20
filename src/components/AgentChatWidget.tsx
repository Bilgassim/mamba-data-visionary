import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Mail, 
  Phone, 
  ExternalLink, 
  Clock,
  CheckCircle,
  Code,
  Shield,
  Database,
  Settings
} from "lucide-react";
import { useProfile, profileDescriptions, profileTitles } from "@/context/ProfileContext";
import { skills } from "@/data/skillsData";
import { certifications } from "@/data/certificationsData";

// Types améliorés
interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  content: React.ReactNode;
  timestamp: Date;
  typing?: boolean;
}

interface QuickAction {
  label: string;
  icon: React.ReactNode;
  action: () => void;
  variant?: "default" | "secondary" | "outline";
}

const AgentChatWidget: React.FC = () => {
  const { selectedProfile } = useProfile();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [showContact, setShowContact] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Données structurées
  const formations = useMemo(() => [
    { title: "AWS Cloud Computing & DevOps", school: "Go AI Academy", date: "Août 2025", icon: "🚀" },
    { title: "Développement Full Stack", school: "Go AI Academy", date: "2025", icon: "💻" },
    { title: "Intelligence Artificielle", school: "Go AI Academy", date: "2025", icon: "🧠" },
    { title: "Ethical Hacking", school: "Go AI Academy", date: "2025", icon: "🔒" }
  ], []);

  const projetsNotables = useMemo(() => [
    { 
      name: "DarijaQuest", 
      description: "App d'apprentissage du dialecte marocain", 
      tech: ["React", "Supabase", "Capacitor"], 
      icon: "🎯" 
    },
    { 
      name: "Speed Services", 
      description: "Plateforme de livraison locale à Oujda", 
      tech: ["Web Platform"], 
      icon: "🚚" 
    },
    { 
      name: "Bigg's Media", 
      description: "Média web vidéo/audio", 
      tech: ["React", "Supabase"], 
      icon: "🎥" 
    },
    { 
      name: "Cabinet Médical", 
      description: "Gestion de rendez-vous et patients", 
      tech: ["Web App"], 
      icon: "🏥" 
    },
    { 
      name: "Détection Calculs Rénaux", 
      description: "IA médicale (PFA)", 
      tech: ["Python", "IA"], 
      icon: "🔬" 
    }
  ], []);

  // Actions rapides contextuelles
  const quickActions = useMemo((): QuickAction[] => [
    {
      label: "Projets",
      icon: <Code size={16} />,
      action: () => goTo("projects")
    },
    {
      label: "Compétences", 
      icon: <Settings size={16} />,
      action: () => goTo("skills")
    },
    {
      label: "Formations",
      icon: <Database size={16} />,
      action: () => goTo("education")
    },
    {
      label: "Contact",
      icon: <Mail size={16} />,
      action: () => setShowContact(true),
      variant: "default" as const
    }
  ], []);

  // Navigation helper amélioré
  const goTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
      // Feedback visuel
      sendAssistant(
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span>Navigation vers la section {id}</span>
        </div>
      );
    }
  }, []);

  // Compétences et certifications optimisées
  const topSkills = useMemo(() => {
    return skills
      .filter((s) => s.profiles.includes(selectedProfile))
      .slice(0, 8)
      .map((s) => s.name);
  }, [selectedProfile]);

  const topCerts = useMemo(() => {
    return certifications
      .filter((c) => c.profiles.includes(selectedProfile))
      .slice(0, 5)
      .map((c) => c.name);
  }, [selectedProfile]);

  // Système de suggestions intelligentes
  const getSuggestions = useCallback((query: string): string[] => {
    const q = query.toLowerCase();
    const suggestions: string[] = [];
    
    if (q.includes("projet")) {
      suggestions.push("Peux-tu me parler de DarijaQuest ?", "Quels sont tes meilleurs projets ?");
    }
    if (q.includes("contact")) {
      suggestions.push("Comment contacter Mohamed ?", "Quel est son email ?");
    }
    if (q.includes("compétence")) {
      suggestions.push("Quelles sont ses compétences en React ?", "Maîtrise-t-il AWS ?");
    }
    
    return suggestions.slice(0, 3);
  }, []);

  // Fonction d'envoi améliorée avec typing indicator
  const sendAssistant = useCallback((node: React.ReactNode) => {
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { 
          id: crypto.randomUUID(), 
          role: "assistant", 
          content: node,
          timestamp: new Date()
        },
      ]);
      setIsTyping(false);
      if (!open) setHasNewMessage(true);
    }, Math.random() * 1000 + 500); // Délai réaliste de 500ms à 1.5s
  }, [open]);

  // Composant d'actions rapides
  const ActionButtons = ({ actions = quickActions }: { actions?: QuickAction[] }) => (
    <div className="mt-3 flex flex-wrap gap-2">
      {actions.map((action, index) => (
        <Button 
          key={index}
          size="sm" 
          variant={action.variant || "secondary"}
          onClick={action.action}
          className="text-xs"
        >
          {action.icon}
          <span className="ml-1">{action.label}</span>
        </Button>
      ))}
    </div>
  );

  // Message de bienvenue amélioré
  const welcome = useCallback(() => {
    sendAssistant(
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p className="font-medium text-base">Bonjour ! Je suis l'assistant de Mohamed 👋</p>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-3 text-sm">
          <p className="font-medium mb-1">À propos de Mohamed :</p>
          <p className="text-foreground/80 mb-2">
            {profileDescriptions[selectedProfile]}
          </p>
          <div className="flex items-center gap-1 text-xs text-foreground/60">
            <Clock size={12} />
            <span>ENSAO • Management & Gouvernance SI</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Que souhaitez-vous explorer ?</p>
          <ActionButtons />
        </div>
      </div>
    );
  }, [selectedProfile, sendAssistant]);

  // Gestion intelligente des réponses
  const handleSubmit = useCallback((e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    // Ajouter le message utilisateur
    setMessages((prev) => [
      ...prev,
      { 
        id: crypto.randomUUID(), 
        role: "user", 
        content: text,
        timestamp: new Date()
      },
    ]);
    setInput("");

    const q = text.toLowerCase();

    // Réponses contextuelles améliorées
    if (/(contact|joindre|email|téléphone|message)/.test(q)) {
      setShowContact(true);
      sendAssistant(
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <p className="font-medium">Formulaire de contact ouvert !</p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-sm font-medium mb-2">Contacts directs :</p>
            <div className="space-y-2">
              <a 
                href="mailto:boulkassoum2002@gmail.com" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Mail size={14}/> boulkassoum2002@gmail.com
              </a>
              <a 
                href="tel:+212710911949" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Phone size={14}/> +212 710 911 949
              </a>
              <a 
                href="https://linkedin.com/in/moboulkassoum" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <ExternalLink size={14}/> LinkedIn
              </a>
            </div>
          </div>
        </div>
      );
      return;
    }

    if (/(cloud|aws|devops)/.test(q)) {
      sendAssistant(
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">AWS Certified</Badge>
          </div>
          
          <p className="text-sm">
            Mohamed maîtrise <strong>AWS Cloud Computing & DevOps</strong> grâce à sa formation 
            intensive chez Go AI Academy (Août 2025).
          </p>
          
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-sm font-medium mb-2">Compétences Cloud & DevOps :</p>
            <div className="flex flex-wrap gap-1">
              {["AWS", "CI/CD", "Docker", "Kubernetes", "Terraform"].map(skill => (
                <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
              ))}
            </div>
          </div>

          <ActionButtons actions={[
            { label: "Voir compétences", icon: <Settings size={16} />, action: () => goTo("skills") },
            { label: "Projets Cloud", icon: <Code size={16} />, action: () => goTo("projects") }
          ]} />
        </div>
      );
      return;
    }

    if (/(projet|réalisations|portfolio)/.test(q)) {
      sendAssistant(
        <div className="space-y-3">
          <p className="font-medium">Projets phares de Mohamed 🚀</p>
          
          <div className="space-y-2">
            {projetsNotables.slice(0, 3).map((projet) => (
              <div key={projet.name} className="bg-muted/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span>{projet.icon}</span>
                  <span className="font-medium text-sm">{projet.name}</span>
                </div>
                <p className="text-xs text-foreground/80 mb-2">{projet.description}</p>
                <div className="flex flex-wrap gap-1">
                  {projet.tech.map(tech => (
                    <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <ActionButtons actions={[
            { label: "Tous les projets", icon: <Code size={16} />, action: () => goTo("projects") },
            { label: "Discuter projet", icon: <Mail size={16} />, action: () => setShowContact(true) }
          ]} />
        </div>
      );
      return;
    }

    // Réponse par défaut améliorée
    const suggestions = getSuggestions(text);
    sendAssistant(
      <div className="space-y-3">
        <p className="text-sm">
          Merci pour votre question ! Je peux vous aider à explorer le profil complet de Mohamed.
        </p>
        
        {suggestions.length > 0 && (
          <div>
            <p className="text-xs font-medium mb-2 text-foreground/70">Suggestions :</p>
            <div className="space-y-1">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setInput(suggestion)}
                  className="block text-left text-xs text-primary hover:underline"
                >
                  • {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        <ActionButtons />
      </div>
    );
  }, [input, sendAssistant, getSuggestions, goTo, quickActions]);

  // Formulaire de contact amélioré
  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "Contact via portfolio",
      message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
      if (!formData.name || !formData.email || !formData.message) return;
      
      setIsSubmitting(true);
      
      // Simuler un délai
      setTimeout(() => {
        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
          `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:boulkassoum2002@gmail.com?subject=${subject}&body=${body}`;
        setIsSubmitting(false);
        setShowContact(false);
      }, 1000);
    };

    return (
      <Card className="p-4 bg-background border-2 border-primary/20">
        <div className="flex items-center justify-between mb-3">
          <p className="font-medium text-sm">Contact rapide</p>
          <Button variant="ghost" size="sm" onClick={() => setShowContact(false)}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="space-y-3">
          <Input 
            placeholder="Votre nom *" 
            value={formData.name} 
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
          <Input 
            placeholder="Votre email *" 
            type="email" 
            value={formData.email} 
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
          <Input 
            placeholder="Sujet" 
            value={formData.subject} 
            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          />
          <textarea
            className="w-full p-2 border rounded-md text-sm resize-none"
            placeholder="Votre message *"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          />
          
          <Button 
            className="w-full" 
            onClick={handleSubmit}
            disabled={!formData.name || !formData.email || !formData.message || isSubmitting}
          >
            {isSubmitting ? "Envoi..." : "Envoyer le message"}
          </Button>
        </div>
      </Card>
    );
  };

  // Indicateur de frappe
  const TypingIndicator = () => (
    <div className="flex items-start gap-2">
      <div className="mt-0.5 p-1 rounded-full bg-muted">
        <Bot className="w-4 h-4" />
      </div>
      <div className="bg-muted rounded-lg px-3 py-2">
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <span className="text-xs text-foreground/60 ml-2">En train d'écrire...</span>
        </div>
      </div>
    </div>
  );

  // Effects
  useEffect(() => {
    if (open && messages.length === 0) {
      welcome();
    }
  }, [open, messages.length, welcome]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) {
      setHasNewMessage(false);
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      {/* Bouton flottant amélioré */}
      {!open && (
        <button
          aria-label="Ouvrir l'assistant"
          className={`relative rounded-full shadow-lg border bg-background text-foreground p-3 hover:scale-105 transition-all duration-200 ${
            hasNewMessage ? 'animate-pulse border-primary' : ''
          }`}
          onClick={() => setOpen(true)}
        >
          <MessageCircle className="w-6 h-6" />
          {hasNewMessage && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
          )}
        </button>
      )}

      {/* Panel de chat amélioré */}
      {open && (
        <Card className="w-[92vw] max-w-[400px] h-[70vh] max-h-[600px] bg-background shadow-2xl border overflow-hidden flex flex-col">
          {/* Header amélioré */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              </div>
              <div>
                <p className="text-sm font-semibold">Assistant IA de Mohamed</p>
                <p className="text-xs text-foreground/60 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {profileTitles[selectedProfile]}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Zone de messages */}
          <ScrollArea className="flex-1 px-3 py-3">
            <div className="space-y-4">
              {messages.map((m) => (
                <div key={m.id} className={`flex items-start gap-2 ${m.role === "user" ? "justify-end" : ""}`}>
                  {m.role === "assistant" && (
                    <div className="mt-0.5 p-1 rounded-full bg-muted shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                    m.role === "assistant" 
                      ? "bg-muted" 
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {m.content}
                    <div className="text-xs opacity-50 mt-1">
                      {m.timestamp.toLocaleTimeString('fr-FR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                  {m.role === "user" && (
                    <div className="mt-0.5 p-1 rounded-full bg-primary/10 text-primary shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && <TypingIndicator />}
              {showContact && <ContactForm />}
              <div ref={endRef} />
            </div>
          </ScrollArea>

          {/* Zone de saisie améliorée */}
          <form onSubmit={handleSubmit} className="border-t p-3 bg-muted/20">
            <div className="flex items-center gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={!input.trim() || isTyping}
                className="shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Suggestions rapides */}
            <div className="flex flex-wrap gap-1 mt-2">
              {["Projets", "Compétences", "Contact"].map(suggestion => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setInput(`Parle-moi de tes ${suggestion.toLowerCase()}`)}
                  className="text-xs px-2 py-1 rounded bg-muted/50 hover:bg-muted transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </form>
        </Card>
      )}
    </div>
  );
};

export default AgentChatWidget;