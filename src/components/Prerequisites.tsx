import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const requirements = [
  "Windows 11 operating system",
  "Nvidia GPU (GTX/RTX series)",
  "Administrator access to your PC",
  "At least 20GB of free disk space",
  "Internet connection for downloads",
  "Latest Nvidia drivers installed",
];

export const Prerequisites = () => {
  return (
    <section id="prerequisites" className="scroll-mt-8">
      <Card className="p-6 md:p-8">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Prerequisites</h2>
        <p className="mb-6 text-muted-foreground">
          Before you begin, make sure you have the following requirements met:
        </p>
        <ul className="space-y-3">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
              <span>{requirement}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};
