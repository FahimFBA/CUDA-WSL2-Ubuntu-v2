import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const sections = [
  { id: "prerequisites", title: "Prerequisites" },
  { id: "step-1", title: "Step 1: Enable WSL2" },
  { id: "step-2", title: "Step 2: Install Ubuntu" },
  { id: "step-3", title: "Step 3: Install CUDA Toolkit" },
  { id: "step-4", title: "Step 4: Configure Environment" },
  { id: "step-5", title: "Step 5: Verify Installation" },
  { id: "troubleshooting", title: "Troubleshooting" },
];

export const TableOfContents = () => {
  return (
    <Card className="sticky top-8 p-6">
      <h3 className="mb-4 text-lg font-semibold">Table of Contents</h3>
      <nav className="space-y-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
            <span>{section.title}</span>
          </a>
        ))}
      </nav>
    </Card>
  );
};
