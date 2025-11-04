import AppSection from "@/components/AppSection";
import MobileMenu from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const apps = [
    {
      id: "taskflow",
      title: "TaskFlow Pro",
      description: "Streamline your workflow with intelligent task management, real-time collaboration, and seamless team coordination.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop",
      features: ["Smart Task Lists", "Team Collaboration", "Real-time Sync", "Progress Tracking"],
      gradient: "var(--gradient-pink)",
      reverse: false
    },
    {
      id: "fittrack",
      title: "FitTrack",
      description: "Your personal fitness companion with workout tracking, nutrition logging, and AI-powered health recommendations.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=800&fit=crop",
      features: ["Workout Plans", "Nutrition Tracking", "AI Insights", "Progress Analytics"],
      gradient: "var(--gradient-purple)",
      reverse: true
    },
    {
      id: "walletwise",
      title: "WalletWise",
      description: "Take control of your finances with smart expense tracking, automated budgeting, and insightful financial analytics.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=800&fit=crop",
      features: ["Expense Tracking", "Budget Planning", "Financial Insights", "Bill Reminders"],
      gradient: "var(--gradient-blue)",
      reverse: false
    },
    {
      id: "socialhub",
      title: "SocialHub",
      description: "Connect meaningfully with friends and family through an elegant platform for sharing moments and real-time messaging.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop",
      features: ["Real-time Chat", "Photo Sharing", "Stories", "Group Conversations"],
      gradient: "var(--gradient-green)",
      reverse: true
    },
    {
      id: "recipebox",
      title: "RecipeBox",
      description: "Discover and save delicious recipes with step-by-step instructions, smart ingredient tracking, and meal planning.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=800&fit=crop",
      features: ["Recipe Discovery", "Step-by-Step Guides", "Meal Planning", "Shopping Lists"],
      gradient: "var(--gradient-orange)",
      reverse: false
    },
    {
      id: "mindfulmoments",
      title: "MindfulMoments",
      description: "Find peace and balance with guided meditation sessions, breathing exercises, and mindfulness tracking.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=800&fit=crop",
      features: ["Guided Meditation", "Breathing Exercises", "Progress Tracking", "Sleep Stories"],
      gradient: "var(--gradient-teal)",
      reverse: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">mobile showcase</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            <MobileMenu apps={apps} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Beautiful and functional mobile applications crafted with care
          </p>
        </div>
      </section>

      {/* Apps Sections */}
      {apps.map((app, index) => (
        <AppSection key={index} {...app} id={`app-${index}`} appId={app.id} />
      ))}

      {/* Footer */}
      <footer className="py-16 px-6 mt-20 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Mobile App Portfolio. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
