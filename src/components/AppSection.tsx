import { Badge } from "@/components/ui/badge";

interface AppSectionProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  gradient: string;
  reverse: boolean;
  id: string;
}

const AppSection = ({ title, description, image, features, gradient, reverse, id }: AppSectionProps) => {
  return (
    <section 
      id={id}
      className="py-20 px-6 scroll-mt-20"
      style={{ background: gradient }}
    >
      <div className={`container mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
        {/* Phone Mockup */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[280px] md:w-[320px]">
            <div className="absolute inset-0 bg-foreground/5 rounded-[3rem] blur-2xl transform translate-y-4" />
            <div className="relative bg-foreground rounded-[3rem] p-3 shadow-[var(--shadow-soft)]">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-background">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* App Info */}
        <div className="flex-1 space-y-6">
          <h3 className="text-4xl md:text-5xl font-black text-foreground">
            {title}
          </h3>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            {features.map((feature, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-background/80 text-foreground px-4 py-2 text-sm font-medium rounded-full hover:bg-background transition-colors"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
