import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const apps = [
  {
    id: "taskflow",
    title: "TaskFlow Pro",
    description: "Streamline your workflow with intelligent task management, real-time collaboration, and seamless team coordination.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop",
    features: ["Smart Task Lists", "Team Collaboration", "Real-time Sync", "Progress Tracking"],
    gradient: "var(--gradient-pink)",
    longDescription: "TaskFlow Pro is a comprehensive productivity solution designed for modern teams. With intelligent task prioritization, real-time collaboration features, and seamless integration across devices, managing projects has never been easier. Our AI-powered suggestions help you stay on track and meet deadlines consistently.",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=800&fit=crop"
    ]
  },
  {
    id: "fittrack",
    title: "FitTrack",
    description: "Your personal fitness companion with workout tracking, nutrition logging, and AI-powered health recommendations.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=800&fit=crop",
    features: ["Workout Plans", "Nutrition Tracking", "AI Insights", "Progress Analytics"],
    gradient: "var(--gradient-purple)",
    longDescription: "FitTrack transforms your fitness journey with personalized workout plans, comprehensive nutrition tracking, and AI-powered insights. Whether you're a beginner or advanced athlete, our adaptive algorithms ensure you're always progressing toward your goals with proper form and optimal nutrition.",
    technologies: ["Flutter", "Dart", "SQLite", "REST API"],
    screenshots: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=800&fit=crop"
    ]
  },
  {
    id: "walletwise",
    title: "WalletWise",
    description: "Take control of your finances with smart expense tracking, automated budgeting, and insightful financial analytics.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=800&fit=crop",
    features: ["Expense Tracking", "Budget Planning", "Financial Insights", "Bill Reminders"],
    gradient: "var(--gradient-blue)",
    longDescription: "WalletWise empowers you to take control of your financial future. With automatic expense categorization, intelligent budget recommendations, and detailed analytics, you'll understand exactly where your money goes and how to optimize your spending for better financial health.",
    technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"],
    screenshots: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=800&fit=crop"
    ]
  },
  {
    id: "socialhub",
    title: "SocialHub",
    description: "Connect meaningfully with friends and family through an elegant platform for sharing moments and real-time messaging.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop",
    features: ["Real-time Chat", "Photo Sharing", "Stories", "Group Conversations"],
    gradient: "var(--gradient-green)",
    longDescription: "SocialHub reimagines social networking with a focus on meaningful connections. Share life's moments through beautiful photo stories, engage in seamless real-time conversations, and build deeper relationships with the people who matter most. Privacy-first design ensures your data stays secure.",
    technologies: ["Swift", "SwiftUI", "Firebase", "CoreData"],
    screenshots: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=800&fit=crop"
    ]
  },
  {
    id: "recipebox",
    title: "RecipeBox",
    description: "Discover and save delicious recipes with step-by-step instructions, smart ingredient tracking, and meal planning.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=800&fit=crop",
    features: ["Recipe Discovery", "Step-by-Step Guides", "Meal Planning", "Shopping Lists"],
    gradient: "var(--gradient-orange)",
    longDescription: "RecipeBox makes cooking enjoyable and stress-free. Discover thousands of curated recipes, follow easy step-by-step instructions with timers and tips, plan your weekly meals, and generate smart shopping lists. Never wonder what's for dinner again.",
    technologies: ["Kotlin", "Jetpack Compose", "Room", "Retrofit"],
    screenshots: [
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=800&fit=crop"
    ]
  },
  {
    id: "mindfulmoments",
    title: "MindfulMoments",
    description: "Find peace and balance with guided meditation sessions, breathing exercises, and mindfulness tracking.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=800&fit=crop",
    features: ["Guided Meditation", "Breathing Exercises", "Progress Tracking", "Sleep Stories"],
    gradient: "var(--gradient-teal)",
    longDescription: "MindfulMoments helps you cultivate inner peace and mental wellness. Access hundreds of guided meditations for every occasion, practice mindful breathing with customizable exercises, track your meditation journey, and fall asleep peacefully with soothing bedtime stories.",
    technologies: ["React Native", "TypeScript", "AsyncStorage", "Audio"],
    screenshots: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=400&h=800&fit=crop"
    ]
  }
];

const AppDetailPage = () => {
  const { appId } = useParams<{ appId: string }>();
  const app = apps.find(a => a.id === appId);

  if (!app) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">App Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6" style={{ background: app.gradient }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-foreground">
              {app.title}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80">
              {app.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {app.features.map((feature, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-background/80 text-foreground px-4 py-2 text-sm font-medium rounded-full"
                >
                  {feature}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Live
              </Button>
              <Button size="lg" variant="outline">
                <Github className="w-5 h-5 mr-2" />
                Source Code
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {app.screenshots.map((screenshot, index) => (
              <div key={index} className="relative w-full max-w-[280px] mx-auto">
                <div className="absolute inset-0 bg-foreground/5 rounded-[3rem] blur-2xl transform translate-y-4" />
                <div className="relative bg-foreground rounded-[3rem] p-3 shadow-[var(--shadow-soft)]">
                  <div className="relative overflow-hidden rounded-[2.5rem] bg-background">
                    <img 
                      src={screenshot} 
                      alt={`${app.title} screenshot ${index + 1}`}
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            About This App
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            {app.longDescription}
          </p>
          
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-3">
            {app.technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="px-4 py-2 text-base"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Mobile App Portfolio. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AppDetailPage;
