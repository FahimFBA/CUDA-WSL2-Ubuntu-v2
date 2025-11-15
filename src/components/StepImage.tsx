interface StepImageProps {
  src: string;
  caption: string;
  alt?: string;
}

export function StepImage({ src, caption, alt }: StepImageProps) {
  return (
    <div className="my-4">
      <img
        src={src}
        alt={alt || caption}
        className="rounded-lg border w-full h-auto"
      />
      <p className="text-sm text-muted-foreground text-center mt-2">
        {caption}
      </p>
    </div>
  );
}
