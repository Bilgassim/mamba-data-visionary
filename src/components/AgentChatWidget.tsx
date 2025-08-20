import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User, Mail, Phone, ExternalLink } from "lucide-react";
import { useProfile, profileDescriptions, profileTitles } from "@/context/ProfileContext";
import { skills } from "@/data/skillsData";
import { certifications } from "@/data/certificationsData";

// Simple message types
interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  content: React.ReactNode;
}

const AgentChatWidget: React.FC = () => {
  const { selectedProfile } = useProfile();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [showContact, setShowContact] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  // Données sur Mohamed
  const formations = useMemo(() => [
    "AWS Cloud Computing & DevOps – Go AI Academy (Août 2025)",
    "Développement Full Stack – Go AI Academy", 
    "Intelligence Artificielle – Go AI Academy",
    "Ethical Hacking – Go AI Academy"
  ], []);

  const projetsNotables = useMemo(() => [
    "DarijaQuest - Application web/mobile d'apprentissage du dialecte marocain (React, Supabase, Capacitor)",
    "Speed Services - Plateforme locale de livraison à Oujda",
    "Bigg's Media - Média web vidéo/audio (React, Supabase)",
    "Sincoshop - Gestion de stock pour une boutique",
    "Cabinet Médical - Plateforme de rendez-vous et gestion patient",
    "Détection Calculs Rénaux - IA (projet académique PFA)",
    "Solidarity World - Chef de projet"
  ], []);

  const domainesSpecialite = useMemo(() => [
    "Développement web : React, Laravel, Supabase",
    "Cloud & DevOps : AWS, CI/CD, automatisation", 
    "Data & IA : Python, Analyse de données, Détection par IA",
    "Cybersécurité : ISO 27001, Pentest, Ethical Hacking",
    "Gestion de projets : coordination d'équipes, pilotage technique"
  ], []);

  // Anchor helper
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const topSkills = useMemo(() => {
    const names = skills
      .filter((s) => s.profiles.includes(selectedProfile))
      .map((s) => s.name);
    // unique and top 10
    return Array.from(new Set(names)).slice(0, 10);
  }, [selectedProfile]);

  const topCerts = useMemo(() => {
    return certifications
      .filter((c) => c.profiles.includes(selectedProfile))
      .slice(0, 6)
      .map((c) => c.name);
  }, [selectedProfile]);

  const projectTitles = useMemo(
    () => [
      "DarijaQuest",
      "Speed Services", 
      "Bigg's Media",
      "Sincoshop",
      "Cabinet Médical",
      "Détection Calculs Rénaux (PFA)",
      "Solidarity World",
      "Projet IA Médicale - ENSAO",
      "Mamba Academy"
    ],
    []
  );

  const sendAssistant = (node: React.ReactNode) => {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "assistant", content: node },
    ]);
  };

  const addActionButtons = () => (
    <div className="mt-3 flex flex-wrap gap-2">
      <Button size="sm" variant="secondary" onClick={() => goTo("projects")}>👉 Voir projets</Button>
      <Button size="sm" variant="secondary" onClick={() => goTo("skills")}>👉 Voir compétences</Button>
      <Button size="sm" variant="secondary" onClick={() => goTo("education")}>👉 Voir formations</Button>
      <Button size="sm" variant="secondary" onClick={() => setShowContact(true)}>👉 Contacter Mohamed</Button>
    </div>
  );

  const welcome = () => {
    sendAssistant(
      <div>
        <p className="mb-2 font-medium">Bonjour et bienvenue ! 👋</p>
        <p className="text-sm text-foreground/80 mb-3">
          Je suis l'assistant virtuel du portfolio de Mohamed Boulkassoum. 
          Ma mission est de vous aider à explorer ses projets, ses compétences, ses formations et à le contacter.
        </p>
        <p className="text-sm text-foreground/70 mb-3">
          Mohamed est étudiant en Management et Gouvernance des Systèmes d'Information à l'ENSAO, 
          spécialisé en développement web, Cloud & DevOps, Data & IA, cybersécurité et gestion de projets.
        </p>
        {addActionButtons()}
      </div>
    );
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      welcome();
    }
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    // add user message
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", content: text },
    ]);
    setInput("");

    // intent detection (very light)
    const q = text.toLowerCase();

    if (/(contact|joindre|email|téléphone|telephone|message)/.test(q)) {
      setShowContact(true);
      sendAssistant(
        <div>
          <p className="mb-2">Parfait ! ✅ Je prépare un formulaire rapide pour contacter Mohamed.</p>
          <p className="text-sm text-foreground/70 mb-2">
            Vous pouvez aussi le joindre directement via :
          </p>
          <div className="flex flex-wrap gap-2 text-sm mb-3">
            <a href="mailto:boulkassoum2002@gmail.com" className="inline-flex items-center gap-1 underline text-primary"><Mail size={14}/> Email</a>
            <a href="tel:+212710911949" className="inline-flex items-center gap-1 underline text-primary"><Phone size={14}/> Téléphone</a>
            <a href="https://linkedin.com/in/moboulkassoum" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline text-primary"><ExternalLink size={14}/> LinkedIn</a>
          </div>
          <Button size="sm" onClick={() => setShowContact(true)}>Ouvrir le formulaire</Button>
        </div>
      );
      return;
    }

    if (/(cloud|aws)/.test(q)) {
      sendAssistant(
        <div>
          <p className="mb-2">Oui ✅ Mohamed a suivi une formation en AWS Cloud Computing & DevOps avec Go AI Academy en août 2025.</p>
          <p className="text-sm text-foreground/80 mb-2">Il maîtrise le déploiement et l'automatisation dans le Cloud.</p>
          <div className="mt-3">
            <Button size="sm" variant="secondary" onClick={() => goTo("skills")}>👉 Voir ses compétences Cloud & DevOps</Button>
            <Button size="sm" variant="secondary" className="ml-2" onClick={() => goTo("projects")}>👉 Projets associés</Button>
          </div>
        </div>
      );
      return;
    }

    if (/(darijaquest|darija)/.test(q)) {
      sendAssistant(
        <div>
          <p className="mb-2">DarijaQuest est une application web et mobile qui rend l'apprentissage du dialecte marocain ludique. 🎯</p>
          <p className="text-sm text-foreground/80 mb-2">Elle a été développée avec React, Supabase et Capacitor.</p>
          <div className="mt-3">
            <Button size="sm" variant="secondary" onClick={() => goTo("projects")}>👉 Voir une démo</Button>
            <Button size="sm" variant="secondary" className="ml-2" onClick={() => goTo("projects")}>👉 Autres projets similaires</Button>
          </div>
        </div>
      );
      return;
    }

    if (/(formation|formations|étude|études|academique|go ai academy)/.test(q)) {
      sendAssistant(
        <div>
          <p className="mb-2">Voici les formations récentes de Mohamed :</p>
          <ul className="list-disc pl-5 text-sm space-y-1 mb-3">
            {formations.map((f) => (<li key={f}>{f}</li>))}
          </ul>
          <p className="text-sm text-foreground/80 mb-2">
            Actuellement étudiant en Management et Gouvernance des Systèmes d'Information à l'ENSAO.
          </p>
          <div className="mt-3">
            <Button size="sm" variant="secondary" onClick={() => goTo("education")}>👉 Voir le parcours complet</Button>
            <Button size="sm" variant="secondary" className="ml-2" onClick={() => goTo("certifications")}>👉 Voir les certifications</Button>
          </div>
        </div>
      );
      return;
    }

    if (/(cv|curriculum|resume)/.test(q)) {
      sendAssistant(
        <div>
          <p className="mb-2">Voici les CV de Mohamed, selon les profils :</p>
          <div className="grid grid-cols-1 gap-2 text-sm mb-3">
            <a className="story-link" href="/CV_Mohamed_Boulkassoum_Data_Engineering.pdf" target="_blank" rel="noreferrer"><span className="inline-flex items-center gap-1"><ExternalLink size={14}/> CV Data Engineering</span></a>
            <a className="story-link" href="/CV_Mohamed_Boulkassoum_Pentesting.pdf" target="_blank" rel="noreferrer"><span className="inline-flex items-center gap-1"><ExternalLink size={14}/> CV Pentesting</span></a>
            <a className="story-link" href="/CV_Mohamed_Boulkassoum_FullStack.pdf" target="_blank" rel="noreferrer"><span className="inline-flex items-center gap-1"><ExternalLink size={14}/> CV Full‑Stack</span></a>
            <a className="story-link" href="/CV_Mohamed_Boulkassoum_PMO.pdf" target="_blank" rel="noreferrer"><span className="inline-flex items-center gap-1"><ExternalLink size={14}/> CV Project Manager PMO</span></a>
          </div>
          <div className="mt-3">
            <Button size="sm" variant="secondary" onClick={() => goTo("hero")}>👉 Voir la sélection des profils</Button>
            <Button size="sm" variant="secondary" className="ml-2" onClick={() => setShowContact(true)}>👉 Le contacter</Button>
          </div>
        </div>
      );
      return;
    }

    if (/(compétence|competence|skills?|spécialité|specialite|domaine)/.test(q)) {
      sendAssistant(
        <div>
          <p className="mb-2">Domaines de spécialité de Mohamed :</p>
          <ul className="list-disc pl-5 text-sm space-y-1 mb-3">
            {domainesSpecialite.map((d) => (<li key={d}>{d}</li>))}
          </ul>
          <p className="text-sm text-foreground/80 mb-2">Compétences techniques pour {profileTitles[selectedProfile]} :</p>
          <ul className="list-disc pl-5 text-sm space-y-1 mb-3">
            {topSkills.slice(0, 5).map((s) => (<li key={s}>{s}</li>))}
          </ul>
          <div className="mt-3">
            <Button size="sm" variant="secondary" onClick={() => goTo("skills")}>👉 Voir toutes les compétences</Button>
            <Button size="sm" variant="secondary" className="ml-2" onClick={() => goTo("projects")}>👉 Projets associés</Button>
          </div>
        </div>
      );
      return;
    }

    if (/(projet|réalisations|experiences?|portfolio)/.test(q)) {
      sendAssistant(
        <div>
          <p className="mb-2">Voici les projets notables de Mohamed :</p>
          <ul className="list-disc pl-5 text-sm space-y-1 mb-3">
            {projetsNotables.slice(0, 5).map((p) => (<li key={p}>{p}</li>))}
          </ul>
          <div className="mt-3">
            <Button size="sm" variant="secondary" onClick={() => goTo("projects")}>👉 Voir tous les projets</Button>
            <Button size="sm" variant="secondary" className="ml-2" onClick={() => setShowContact(true)}>👉 Discuter d'un projet</Button>
          </div>
        </div>
      );
      return;
    }

    if (/(certificat|certification)/.test(q)) {
      sendAssistant(
        <div>
          <p className="mb-2">Certifications récentes liées à {profileTitles[selectedProfile]} :</p>
          <ul className="list-disc pl-5 text-sm space-y-1 mb-3">
            {topCerts.map((t) => (<li key={t}>{t}</li>))}
          </ul>
          <div className="mt-3">
            <Button size="sm" variant="secondary" onClick={() => goTo("certifications")}>👉 Voir toutes les certifications</Button>
            <Button size="sm" variant="secondary" className="ml-2" onClick={() => goTo("education")}>👉 Voir les formations</Button>
          </div>
        </div>
      );
      return;
    }

    if (/(qui es-tu|qui es tu|présentation|profil|nom|mohamed|boulkassoum)/.test(q)) {
      const desc = profileDescriptions[selectedProfile];
      sendAssistant(
        <div>
          <p className="mb-2"><span className="font-medium">Mohamed Boulkassoum</span> — {desc}</p>
          <p className="text-sm text-foreground/80 mb-3">
            Étudiant en Management et Gouvernance des Systèmes d'Information à l'ENSAO.
          </p>
          <div className="flex flex-wrap gap-2 text-sm mb-3">
            <a href="mailto:boulkassoum2002@gmail.com" className="inline-flex items-center gap-1 underline text-primary"><Mail size={14}/> Email</a>
            <a href="tel:+212710911949" className="inline-flex items-center gap-1 underline text-primary"><Phone size={14}/> Téléphone</a>
            <a href="https://linkedin.com/in/moboulkassoum" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline text-primary"><ExternalLink size={14}/> LinkedIn</a>
          </div>
          {addActionButtons()}
        </div>
      );
      return;
    }

    // Fallback friendly answer avec style professionnel
    sendAssistant(
      <div>
        <p className="mb-2">Excellente question ! Je peux vous aider à explorer le profil de Mohamed en détail. 🎯</p>
        <p className="text-sm text-foreground/80 mb-3">
          Je peux vous parler de ses projets, compétences, formations, certifications ou vous mettre en contact avec lui.
        </p>
        {addActionButtons()}
      </div>
    );
  };

  // Contact mini-form inside widget
  const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleMailto = () => {
      const subject = encodeURIComponent("Contact via portfolio");
      const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:boulkassoum2002@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
      <Card className="p-3 bg-background border">
        <p className="text-sm mb-2 font-medium">Formulaire rapide</p>
        <div className="space-y-2">
          <Input placeholder="Votre nom" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Votre email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Votre message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button className="w-full" onClick={handleMailto}>Envoyer</Button>
          <Button className="w-full" variant="ghost" onClick={() => setShowContact(false)}>Fermer</Button>
        </div>
      </Card>
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      {/* Floating bubble */}
      {!open && (
        <button
          aria-label="Ouvrir l'assistant"
          className="rounded-full shadow-lg border bg-background text-foreground p-3 hover-scale"
          onClick={() => setOpen(true)}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Panel */}
      {open && (
        <Card className="w-[92vw] max-w-[380px] h-[68vh] max-h-[560px] bg-background shadow-xl border overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-muted">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">Assistant de Mohamed</p>
                <p className="text-xs text-foreground/60">{profileTitles[selectedProfile]}</p>
              </div>
            </div>
            <button aria-label="Fermer" className="p-1 hover:opacity-80" onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <ScrollArea className="flex-1 px-3 py-3">
            <div className="space-y-3">
              {messages.map((m) => (
                <div key={m.id} className={m.role === "assistant" ? "flex items-start gap-2" : "flex items-start gap-2 justify-end"}>
                  {m.role === "assistant" && (
                    <div className="mt-0.5 p-1 rounded-full bg-muted"><Bot className="w-4 h-4" /></div>
                  )}
                  <div className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${m.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                    {m.content}
                  </div>
                  {m.role === "user" && (
                    <div className="mt-0.5 p-1 rounded-full bg-primary/10 text-primary"><User className="w-4 h-4" /></div>
                  )}
                </div>
              ))}
              {showContact && <ContactForm />}
              <div ref={endRef} />
            </div>
          </ScrollArea>

          <form onSubmit={handleSubmit} className="border-t p-2 flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écrivez votre question..."
              className="flex-1"
            />
            <Button type="submit" size="icon" aria-label="Envoyer">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default AgentChatWidget;