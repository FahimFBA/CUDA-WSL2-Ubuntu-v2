import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            CUDA & WSL2 Setup for Windows 11
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl lg:text-2xl">
            Complete guide to make Windows 11 fully compatible for Machine Learning using CUDA and Nvidia GPU
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="#getting-started">Get Started</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 sm:w-auto"
              asChild
            >
              <a
                href="https://github.com/FahimFBA/CUDA-WSL2-Ubuntu-v2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
