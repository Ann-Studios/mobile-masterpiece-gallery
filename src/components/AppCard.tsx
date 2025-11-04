import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface AppCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const AppCard = ({ title, description, image, tech, liveUrl, githubUrl }: AppCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)]">
      <div className="aspect-[9/16] overflow-hidden bg-muted relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <Badge key={index} variant="secondary" className="bg-muted text-muted-foreground">
              {item}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <Button variant="default" size="sm" asChild className="bg-[var(--gradient-primary)]">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View App
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default AppCard;
