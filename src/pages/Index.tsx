import { Hero } from "@/components/Hero";
import { TableOfContents } from "@/components/TableOfContents";
import { Prerequisites } from "@/components/Prerequisites";
import { StepSection } from "@/components/StepSection";
import { CodeBlock } from "@/components/CodeBlock";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Github, AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-8">
            <section id="getting-started">
              <Card className="p-6 md:p-8">
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">Introduction</h2>
                <p className="mb-4 text-muted-foreground">
                  This comprehensive guide will help you set up CUDA on Windows Subsystem for Linux 2 (WSL2) 
                  to leverage your Nvidia GPU for machine learning tasks. By following these steps, you'll be 
                  able to run ML frameworks like TensorFlow and PyTorch with GPU acceleration on Windows 11.
                </p>
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    This guide assumes you have a compatible Nvidia GPU. Make sure to check Nvidia's official 
                    compatibility list before proceeding.
                  </AlertDescription>
                </Alert>
              </Card>
            </section>

            <Prerequisites />

            <StepSection id="step-1" stepNumber={1} title="Enable WSL2">
              <p className="text-muted-foreground">
                First, we need to enable Windows Subsystem for Linux 2. Open PowerShell as Administrator and run:
              </p>
              <CodeBlock code="wsl --install" />
              <ImagePlaceholder caption="PowerShell running WSL install command" />
              <p className="text-muted-foreground">
                After installation completes, restart your computer. This will enable the necessary Windows features 
                for WSL2 to function properly.
              </p>
            </StepSection>

            <StepSection id="step-2" stepNumber={2} title="Install Ubuntu on WSL2">
              <p className="text-muted-foreground">
                Once WSL2 is enabled, install Ubuntu from the Microsoft Store or via command line:
              </p>
              <CodeBlock code="wsl --install -d Ubuntu" />
              <ImagePlaceholder caption="Ubuntu installation in Microsoft Store" />
              <p className="text-muted-foreground">
                Launch Ubuntu and complete the initial setup by creating a username and password. 
                These credentials will be used for sudo commands.
              </p>
            </StepSection>

            <StepSection id="step-3" stepNumber={3} title="Install CUDA Toolkit">
              <p className="text-muted-foreground">
                Now we'll install the CUDA Toolkit. First, update your package lists:
              </p>
              <CodeBlock code="sudo apt update && sudo apt upgrade -y" />
              <p className="text-muted-foreground">
                Add the CUDA repository and install the toolkit:
              </p>
              <CodeBlock 
                code={`wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-keyring_1.0-1_all.deb
sudo dpkg -i cuda-keyring_1.0-1_all.deb
sudo apt-get update
sudo apt-get -y install cuda`} 
              />
              <ImagePlaceholder caption="CUDA Toolkit installation progress" />
            </StepSection>

            <StepSection id="step-4" stepNumber={4} title="Configure Environment Variables">
              <p className="text-muted-foreground">
                Add CUDA to your PATH by editing your .bashrc file:
              </p>
              <CodeBlock code="nano ~/.bashrc" />
              <p className="text-muted-foreground">
                Add the following lines at the end of the file:
              </p>
              <CodeBlock 
                code={`export PATH=/usr/local/cuda/bin:\${PATH}
export LD_LIBRARY_PATH=/usr/local/cuda/lib64:\${LD_LIBRARY_PATH}`} 
              />
              <ImagePlaceholder caption="Editing .bashrc with environment variables" />
              <p className="text-muted-foreground">
                Save the file and reload your bash configuration:
              </p>
              <CodeBlock code="source ~/.bashrc" />
            </StepSection>

            <StepSection id="step-5" stepNumber={5} title="Verify Installation">
              <p className="text-muted-foreground">
                Verify that CUDA is properly installed by checking the version:
              </p>
              <CodeBlock code="nvcc --version" />
              <ImagePlaceholder caption="NVCC version output" />
              <p className="text-muted-foreground">
                Test GPU access with the following command:
              </p>
              <CodeBlock code="nvidia-smi" />
              <ImagePlaceholder caption="nvidia-smi output showing GPU information" />
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  If you see your GPU information, congratulations! Your setup is complete and ready for ML workloads.
                </AlertDescription>
              </Alert>
            </StepSection>

            <section id="troubleshooting" className="scroll-mt-8">
              <Card className="p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-bold md:text-3xl">Troubleshooting</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-semibold">WSL2 not starting</h3>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Make sure virtualization is enabled in your BIOS settings. Check with:
                    </p>
                    <CodeBlock code="systeminfo | find &quot;Hyper-V&quot;" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">CUDA not found after installation</h3>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Verify that the environment variables are correctly set. Run:
                    </p>
                    <CodeBlock code="echo $PATH" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">GPU not detected</h3>
                    <p className="text-sm text-muted-foreground">
                      Ensure you have the latest Nvidia drivers installed on Windows. 
                      WSL2 uses the Windows driver, so no separate driver installation is needed in Ubuntu.
                    </p>
                  </div>
                </div>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <TableOfContents />
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <a
            href="https://github.com/FahimFBA/CUDA-WSL2-Ubuntu-v2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span>View this project on GitHub</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Made with ❤️ for the ML community
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
