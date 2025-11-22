import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { title } from "process";

const sections = [
  { id: "prerequisites", title: "Prerequisites" },
  { id: "step-1", title: "Step 1: Windows Terminal" },
  { id: "step-2", title: "Step 2: Windows PowerShell (Latest & Greatest)" },
  { id: "step-3", title: "Step 3: Configure Windows Terminal" },
  { id: "step-4", title: "Step 4: My PC configuration" },
  { id: "step-5", title: "Step 5: CPU Virtualization" },
  { id: "step-6", title: "Step 6: Install WSL2" },
  { id: "step-7", title: "Step 7: Install Latest LTS Ubuntu via WSL2" },
  { id: "step-8", title: "Step 8: Update & Upgrade Ubuntu Package" },
  { id: "step-9", title: "Step 9: Install & Configure Miniconda" },
  { id: "step-10", title: "Step 10: Install Jupyter & Ipykernel" },
  { id: "step-11", title: "Step 11: Nvidia Driver" },
  { id: "step-12", title: "Step 12: Install CUDA dependencies" },
  { id: "step-13", title: "Step 13: CUDA Toolkit" },
  { id: "step-14", title: "Step 14: Add path to shell profile for CUDA" },
  { id: "step-15", title: "Step 15: nvcc version" },
  { id: "step-16", title: "Step 16: cuDNN SDK" },
  { id: "step-17", title: "Step 17: Tensorflow GPU" },
  { id: "step-18", title: "Step 18: Check Tensorflow GPU" },
  { id: "step-19", title: "Step 19: PyTorch GPU" },
  { id: "step-20", title: "Step 20: Check PyTorch GPU" },
  { id: "step-21", title: "Step 21: Check PyTorch & Tensorflow GPU inside Jupyter Notebook" },
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
