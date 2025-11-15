import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface StepSectionProps {
  id: string;
  stepNumber: number;
  title: string;
  children: ReactNode;
}

export const StepSection = ({ id, stepNumber, title, children }: StepSectionProps) => {
  return (
    <section id={id} className="scroll-mt-8">
      <Card className="p-6 md:p-8">
        <div className="mb-6 flex items-start gap-4">
          <Badge className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
            {stepNumber}
          </Badge>
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        </div>
        <div className="space-y-6">{children}</div>
      </Card>
    </section>
  );
};
