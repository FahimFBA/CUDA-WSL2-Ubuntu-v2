import { Card } from "@/components/ui/card";
import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  caption: string;
  aspectRatio?: "video" | "square";
}

export const ImagePlaceholder = ({ caption, aspectRatio = "video" }: ImagePlaceholderProps) => {
  return (
    <Card className="overflow-hidden">
      <div
        className={`flex items-center justify-center bg-muted ${
          aspectRatio === "video" ? "aspect-video" : "aspect-square"
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ImageIcon className="h-12 w-12" />
          <p className="text-sm">Screenshot placeholder</p>
        </div>
      </div>
      <div className="border-t bg-card p-3">
        <p className="text-sm text-muted-foreground">{caption}</p>
      </div>
    </Card>
  );
};
