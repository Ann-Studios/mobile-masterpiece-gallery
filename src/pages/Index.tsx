import AppCard from "@/components/AppCard";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const apps = [
    {
      title: "TaskFlow Pro",
      description: "A powerful productivity app that helps teams collaborate and manage projects with real-time updates and intuitive task tracking.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop",
      tech: ["React Native", "TypeScript", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "FitTrack",
      description: "Your personal fitness companion with workout tracking, nutrition logging, and AI-powered recommendations for optimal health.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=800&fit=crop",
      tech: ["Flutter", "Dart", "SQLite", "REST API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "WalletWise",
      description: "Smart expense tracking and budgeting app with automatic categorization and insightful financial analytics.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=800&fit=crop",
      tech: ["React Native", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "SocialHub",
      description: "Connect with friends and share moments through an elegant social platform with real-time messaging and content sharing.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop",
      tech: ["Swift", "SwiftUI", "Firebase", "CoreData"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "RecipeBox",
      description: "Discover and save delicious recipes with step-by-step instructions, ingredient tracking, and meal planning features.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=800&fit=crop",
      tech: ["Kotlin", "Jetpack Compose", "Room", "Retrofit"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "MindfulMoments",
      description: "Meditation and mindfulness app with guided sessions, breathing exercises, and progress tracking for mental wellness.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=800&fit=crop",
      tech: ["React Native", "TypeScript", "AsyncStorage", "Audio"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Mobile Apps
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Crafting exceptional mobile experiences with cutting-edge technology and beautiful design
          </p>
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)] hover:scale-105 transition-transform">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Apps Showcase */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a collection of mobile applications built with passion and precision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div 
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AppCard {...app} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Let's Work Together</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Have a project in mind? Get in touch and let's create something amazing
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Mobile App Portfolio. Built with passion and code.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
