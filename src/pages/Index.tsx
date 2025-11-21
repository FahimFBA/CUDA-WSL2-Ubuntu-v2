import { Hero } from "@/components/Hero";
import { TableOfContents } from "@/components/TableOfContents";
import { Prerequisites } from "@/components/Prerequisites";
import { StepSection } from "@/components/StepSection";
import { CodeBlock } from "@/components/CodeBlock";
import { StepImage } from "@/components/StepImage";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableFooter, TableCaption } from "@/components/ui/table";
import { Github, AlertTriangle, Code } from "lucide-react";

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

            <StepSection id="step-1" stepNumber={1} title="Windows Terminal">
              <p className="text-muted-foreground">
                First, we need to ensure that we have Windows Terminal installed properly in our operating system.
                It is the newest terminal application for users of command-line tools and shells like Command Prompt,
                PowerShell, and WSL. You can download it from the{" "}
                <a
                  href="https://apps.microsoft.com/detail/9N0DX20HK701?hl=en-us&gl=BD&ocid=pdpshare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Microsoft Store
                </a>.
              </p>
              <StepImage src="/windows-terminal.png" caption="Preview of Windows Terminal on Windows 11" />
              <p className="text-muted-foreground">
                After ensuring that it is installed properly, proceed to the next steps.
              </p>
            </StepSection>

            <StepSection id="step-2" stepNumber={2} title="Windows PowerShell (Latest & Greatest)">
              <p className="text-muted-foreground">
                Windows PowerShell is a modern and updated command line shell from Microsoft. You can use some Linux specific commands
                directly onto it. It comes with command suggestions built in. You can download it from the{" "}
                <a
                  href="https://github.com/PowerShell/PowerShell/releases/tag/v7.5.4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  official GitHub page
                </a>.
              </p>
              <StepImage src="/windows-powershell.png" caption="Preview of Windows PowerShell on GitHub" />
              <p className="text-muted-foreground">
                Download the latest x64 installed and install it. After ensuring that it is installed properly, proceed to the next steps.
              </p>
            </StepSection>

            <StepSection id="step-3" stepNumber={3} title="Configure Windows Terminal">
              <p className="text-muted-foreground">
                Now we'll need to configure our Windows Terminal to use PowerShell as the default shell. It is optional and you might skip this step.
                However, I recommend you to do it for a better experience.
              </p>
              <p className="text-muted-foreground">
                Open Windows Terminal. Click on the down arrow icon in the title bar and select "Settings".
              </p>
              <StepImage src="/windows-powershell-default-settings.png" caption="Preview of Windows PowerShell settings window" />
              <p className="text-muted-foreground">
                In the Settings tab, under "Startup", find the "Default profile" dropdown menu. Select "PowerShell" from the list.
              </p>
              <p className="text-muted-foreground">
                Now for the "Default terminal application", select "Windows Terminal".
              </p>
              <p className="text-muted-foreground">
                By default Windows PowerShell always shows the version number in the title bar. If you want to disable it, select the "PowerShell" profile from the left sidebar.
                Click on the "Command Line" field and add a <code className="bg-muted px-1 py-0.5 rounded">--nologo</code> argument at the end of the command. After this, the
                line becomes <code className="bg-muted px-1 py-0.5 rounded">"C:\Program Files\PowerShell\7\pwsh.exe" --nologo</code>.
              </p>
              <StepImage src="/remove-ver-number-in-powershell.png" caption="Preview of Windows PowerShell --nologo setting" />
              <p className="text-muted-foreground">
                If you don't use other shells frequently and want to hide them in the dropdown, then you need to select those profiles one by one from the left sidebar.
                Scroll down to the bottm and find the "Hide profile from dropdown" toggle and enable it. It will hide that specific shell from the dropdown menu.
                For example, I am hiding the <b>Azure Cloud Shell</b> profile as I don't use it frequently.
              </p>
              <StepImage src="/hide-azure-cloud-shell-in-windows-terminal.png" caption="Preview of hiding profiles in Windows Terminal" />
              <p className="text-muted-foreground">
                Now click on the "Save" button at the bottom right corner to apply the changes. Close the Windows Terminal for now.
              </p>
            </StepSection>

            <StepSection id="step-4" stepNumber={4} title="Configuration of my computer">
              <p className="text-muted-foreground">
                I think that it's better to let you know my current computer's configuration so that you can have a clear idea about which setup is getting used to test this guide.
                Here are the details:
              </p>

              <div className="mt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Component</TableHead>
                      <TableHead>Specification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Processor</TableCell>
                      <TableCell>AMD Ryzen 7 7700 8-Core Processor (8 Core 16 Threads)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">RAM</TableCell>
                      <TableCell>64GB DDR5 6000MHz</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Storage</TableCell>
                      <TableCell>1 TB Samsung 980 NVMe SSD, 4 TB HDD, 2 TB SATA SSD</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">GPU</TableCell>
                      <TableCell>NVIDIA RTX 3060 12GB GDDR6</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Operating System</TableCell>
                      <TableCell>Windows 11 Pro Version 25H2</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <p className="text-muted-foreground mt-4">
                Now that you have an idea about my computer's configuration, we can proceed to the next steps.
              </p>
            </StepSection>

            <StepSection id="step-5" stepNumber={5} title="CPU Virtualization">
              <p className="text-muted-foreground">
                As we are going to use the WSL2, we must ensure that the CPU virtualization is enabled.
                To check whether virtualization is enabled or not from Windows, then simply open the <b>Windows Task Manager</b>.
                Go to the <b>Performance</b> tab and select <b>CPU</b> from the left sidebar. On the bottom right corner, you will see the <b>Virtualization</b> status.
                If it shows "Enabled", then you are good to go. If it shows "Disabled", then you need to enable it from BIOS.
              </p>
              <StepImage src="/check-cpu-virtualization.png" caption="Preview of Virtualization enabled status in Windows Task Manager" />
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  You have to ensure that CPU Virtualization is enabled in your BIOS settings. Different manufacturers have different ways to access BIOS.
                  Usually, you can access BIOS by pressing the <b>Delete</b> or <b>F2</b> key during the boot process. Once in BIOS, look for settings related to
                  "Virtualization Technology" or "Intel VT-x"/"AMD-V" and make sure it is enabled. Save the changes and exit BIOS.
                </AlertDescription>
              </Alert>
            </StepSection>

            <StepSection id="step-6" stepNumber={6} title="Install WSL2">
              <p className="text-muted-foreground">
                Open the Windows Terminal or Windows PowerShell as an administrator. Run the following command to install WSL2 along with the latest Ubuntu LTS distribution:
              </p>
              <CodeBlock code="wsl.exe --install" />
              <p className="text-muted-foreground">
                It will install Windows Subsystem for Linux 2 (WSL2). After the installation is complete, you will be prompted to restart your computer.
                Do so to finalize the installation.
              </p>
              <StepImage src="/install-wsl2.png" caption="Preview of WSL installation in Windows PowerShell" />
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  If you encounter any issues during installation, refer to the <a href="https://learn.microsoft.com/en-us/windows/wsl/troubleshooting"><u>official Microsoft documentation</u></a> for troubleshooting WSL installation problems.
                </AlertDescription>
              </Alert>
            </StepSection>

            <StepSection id="step-7" stepNumber={7} title="Step 7: Install Latest LTS Ubuntu via WSL2">
              <p className="text-muted-foreground">
                Open the Windows Terminal or Windows PowerShell again with the administrator privileges.

                If you want to check the available Linux distributions to install via WSL, run the following command:
              </p>
              <CodeBlock code="wsl.exe --list --online" />
              <StepImage src="/wsl-available-distros.png" caption="Preview of available WSL distributions in Windows PowerShell" />
              <p className="text-muted-foreground">
                For installing any specific distribution, run the following command:
              </p>
              <CodeBlock code="wsl.exe --install <DistroName>" />
              <p>
                We are going to install the latest LTS Ubuntu distribution. As of now, the latest LTS version is Ubuntu 24.04. However, I prefer to install the `Ubuntu` directly
                as it always points to the latest LTS version. So, run the following command:
              </p>
              <CodeBlock code="wsl.exe --install Ubuntu" />
              <p>You need to give it a default user account name. For me, I am going with `fahim`.</p>
              <StepImage src="/wsl-ubuntu-install.png" caption="Preview of Ubuntu installation in Windows PowerShell" />
              <p>It also comes with a nice GUI management tool for WSL.</p>
              <StepImage src="/wsl-gui-config.png" caption="Preview of WSL GUI management tool" />
              <p>You can configure a lot of stuff in it including restricting core, RAM, disk space and a lot of Specification from the settings GUI window.</p>
              <StepImage src="/memory-and-processor-config-wsl.png" caption="Preview of WSL GUI settings window (Memory & Processor)" />
            </StepSection>

            <StepSection id="step-8" stepNumber={8} title="Step 8: Update & Upgrade Ubuntu Packages">
              <p className="text-muted-foreground">
                Open your Ubuntu terminal from Windows Terminal. First, we need to update and upgrade the existing packages to their latest versions.
              </p>
              <p>To update the Ubuntu system, simply use the following command:</p>
              <CodeBlock code="sudo apt update -y" />
              <StepImage src="/ubuntu-apt-update.png" caption="Preview of apt update command in Ubuntu terminal" />
              <p>To upgrade all the packages at once, simply use the following command:</p>
              <CodeBlock code="sudo apt upgrade -y" />
              <StepImage src="/ubuntu-apt-upgrade.png" caption="Preview of apt upgrade command in Ubuntu terminal" />
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Make sure that you have a stable internet connection during the update and upgrade process to avoid any interruptions.
                </AlertDescription>
              </Alert>
            </StepSection>

            <StepSection id="step-9" stepNumber={9} title="Step 9: Install and Configure Miniconda">
              <p className="text-muted-foreground">
                In Machine Learning, we need to manage multiple environments with different package versions.
                Conda is a popular package and environment management system that makes it easy to create and manage isolated environments for different projects.
                We will install Miniconda, a minimal installer for Conda, to manage our Python environments.
                However, if you prefer Anaconda, you can install it instead.
              </p>
              <p>Go to the official website of Miniconda. Currently the Miniconda installer is inside Anaconda. The link is <a href="https://www.anaconda.com/docs/getting-started/miniconda/install"><u>here</u></a>.
                If the official website gets updated, you can always search for "Miniconda installer" on Google to find the latest version. Also, you can create an issue in the official GitHub repository of this project to notify me about it.
              </p>
              <StepImage src="/miniconda-official-website.png" caption="Preview of Miniconda official website" />
              <p>As we are installing it inside WSL, we have to select the <b>macOS/Linux Installation</b>.
                Then select <b>Linux Terminal Installer</b> and choose <b>Linux x86</b> for downloading the installer.
              </p>
              <CodeBlock code="wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh" />
              <p>It will download the installer to your WSL directory. Then use the following command to install it properly.</p>
              <CodeBlock code="bash ~/Miniconda3-latest-Linux-x86_64.sh" />
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Make sure that you are in the correct directory where the installer is downloaded. If you downloaded it to a different location, adjust the path accordingly.
                  Also, replace <b>bash</b> with <b>zsh</b> or <b>sh</b> if you are using a different shell.
                </AlertDescription>
              </Alert>
              <StepImage src="/miniconda-installation-wsl.png" caption="Preview of Miniconda installation in WSL Ubuntu terminal" />
              <p>Make sure to choose the initialization option properly. I prefer to keep the conda env active whenever I open a new shell. Therefore, I chose "Yes".</p>
              <StepImage src="/conda-initialization-option.png" caption="Preview of Miniconda initialization option during installation" />
              <p>Make sure that the installation succeed without any error.</p>
              <StepImage src="/miniconda-installation-complete.png" caption="Preview of successful Miniconda installation in WSL Ubuntu terminal" />
              <p>For the changes to take effect, you can close and reopen the current shell. However, you can also do that without closing and reopening the shell by applying the command below.</p>
              <CodeBlock code="source ~/.bashrc" />
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  If you are using a different shell like zsh or fish, make sure to source the appropriate configuration file (e.g., ~/.zshrc for zsh).
                </AlertDescription>
              </Alert>
            </StepSection>

            <StepSection id="step-10" stepNumber={10} title="Nvidia Driver">
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

            <StepSection id="step-11" stepNumber={11} title="CUDA Toolkit">
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

            <StepSection id="step-12" stepNumber={12} title="Install CUDA dependencies">
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

            <StepSection id="step-13" stepNumber={13} title="Add path to shell profile for CUDA">
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

            <StepSection id="step-14" stepNumber={14} title="nvcc version">
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

            <StepSection id="step-15" stepNumber={15} title="cuDNN SDK">
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

            <StepSection id="step-16" stepNumber={16} title="Tensorflow GPU">
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

            <StepSection id="step-17" stepNumber={17} title="Check Tensorflow GPU">
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

            <StepSection id="step-18" stepNumber={18} title="PyTorch GPU">
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

            <StepSection id="step-19" stepNumber={19} title="Check PyTorch & Tensorflow GPU inside Jupyter Notebook">
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
    </div >
  );
};

export default Index;
