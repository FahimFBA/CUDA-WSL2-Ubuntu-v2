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
                Windows PowerShell is a modern and updated command-line shell from Microsoft. You can use some Linux specific commands
                directly on it. It comes with built-in command suggestions. You can download it from the{" "}
                <a
                  href="https://github.com/PowerShell/PowerShell/releases/"
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
                Now we will need to configure our Windows Terminal to use PowerShell as the default shell. It is optional and you might skip this step.
                However, I recommend doing it for a better experience.
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
                By default, Windows PowerShell always shows the version number in the title bar. If you want to disable it, select the "PowerShell" profile from the left sidebar.
                Click on the "Command Line" field and add an <code className="bg-muted px-1 py-0.5 rounded">--nologo</code> argument at the end of the command. After this, the
                line becomes <code className="bg-muted px-1 py-0.5 rounded">"C:\Program Files\PowerShell\7\pwsh.exe" --nologo</code>.
              </p>
              <StepImage src="/remove-ver-number-in-powershell.png" caption="Preview of Windows PowerShell --nologo setting" />
              <p className="text-muted-foreground">
                If you do not use other shells frequently and want to hide them in the dropdown, then you need to select those profiles one by one from the left sidebar.
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
                I think it is better to let you know my current computer's configuration so you can have a clear idea of which setup is being used to test this guide. Here are the details:
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
                      <TableCell>NVIDIA GeForce RTX 3060 12GB GDDR6</TableCell>
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

            <StepSection id="step-10" stepNumber={10} title="Step 10: Install Jupyter & Ipykernel">
              <p className="text-muted-foreground">
                I prefer to use Jupyter Notebook for running my machine learning experiments.
                It provides an interactive environment for coding and data analysis.
                We will install Jupyter Notebook and Ipykernel to run Jupyter notebooks in our conda environment.
                We will do that in all conda environments starting with the <b>base</b> environment.
                It also help us to keep the conda environment kernel inside Jupyter Notebook.
              </p>
              <p>First, make sure that you are in the base conda environment. You will see <b>(base)</b> in the left side of the terminal.</p>
              <StepImage src="/conda-base-environment.png" caption="Preview of conda base environment in WSL Ubuntu terminal" />
              <p>Now install Jupyter and Ipykernel both by applying the following command.</p>
              <CodeBlock code="conda install jupyter ipykernel -y" />
              <p>Make sure that you accepts the terms of service of Conda.</p>
              <StepImage src="/jupyter-ipykernel-installation.png" caption="Preview of Jupyter and Ipykernel installation in WSL Ubuntu terminal" />
              <p className="text-muted-foreground">
                Now, I will create a separate conda environment for TensorFlow and PyTorch GPU both.
                You can directly install them in the base environment or in any other environment as per your preference.
                I am not specifying any specific python version while creating the environment. It will automatically install the latest stable version of Python.
              </p>
              <CodeBlock code="conda create -name ml -y" />
              <StepImage src="/conda-create-ml-environment.png" caption="Preview of creating a new conda environment named 'ml' in WSL Ubuntu terminal" />
              <p>To activate any specific conda environment, you have to use the following command.</p>
              <CodeBlock code="conda activate <conda-env-name>" />
              <p>For example, if I want to activate my newly created <b>ml</b> environment, I will use the following command.</p>
              <CodeBlock code="conda activate ml" />
              <p>If you are not sure which conda environments are installed in your system, you can check all available and installed conda environment in your system by running the following command.</p>
              <CodeBlock code="conda env list" />
            </StepSection>

            <StepSection id="step-11" stepNumber={11} title="Step 11: Nvidia Driver">
              <p className="text-muted-foreground">
                Ensure that you have the latest Nvidia drivers installed on Windows.
                WSL2 uses the Windows driver, so no separate driver installation is needed in Ubuntu.
                You can download the latest drivers from the{" "}
                <a
                  href="https://www.nvidia.com/Download/index.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  official Nvidia website
                </a>.
              </p>
              <StepImage src="/nvidia-driver-download.png" caption="Preview of Nvidia driver download page" />
              <p className="text-muted-foreground">
                If you are just installing the latest GPU driver, then after installing the drivers, restart your computer to ensure the changes take effect.
                You can either use GeForce Game Ready Driver or NVIDIA Studio Driver. However, I recommend to use the Studio Driver for better stability with
                creative and ML applications.
              </p>
            </StepSection>

            <StepSection id="step-12" stepNumber={13} title="Step 12: Install CUDA dependencies">
              <p className="text-muted-foreground">
                You might face some issues if you don't have the CUDA dependencies installed properly.
                Therefore, it is recommended to install the required dependencies before proceeding further.
              </p>
              <CodeBlock code="sudo apt install gcc g++ build-essential" />
              <p>
                After installing the dependencies, you can proceed to verify the CUDA installation if you got any issues earlier.
              </p>
            </StepSection>

            <StepSection id="step-13" stepNumber={12} title="Step 13: CUDA Toolkit">
              <p className="text-muted-foreground">
                TensorFlow GPU is very picky about the CUDA version. Therefore, we need to install a specific version of CUDA Toolkit that is compatible with the TensorFlow version we are going to install.
                To understand exactly which CUDA version is compatible with which TensorFlow version, you can check the official TensorFlow GPU support matrix{" "}
                <a
                  href="https://www.tensorflow.org/install/pip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  here
                </a>.
              </p>
              <StepImage src="/tensorflow-gpu-support-official-docs.png" caption="Preview of TensorFlow GPU support in official docs" />
              <p>When I am writing this article, TensorFlow GPU is instructing to have CUDA Toolkit 12.3. Therefore, I will ensure that I install exactly that version.
                You can simply click on that version link in the official docs and it will redirect you to the official Nvidia CUDA Toolkit download page.
                However, if the link gets updated in the future, you can always search for "Nvidia CUDA Toolkit" on Google to find the latest version.
              </p>
              <StepImage src="/nvidia-cuda-toolkit-official-website.png" caption="Preview of Nvidia CUDA Toolkit official website" />
              <p>As TensorFlow GPU is asking exact <b>Version 12.3</b>, I will select version <b>12.3.0</b> exactly!</p>

              <p>In the CUDA Toolkit download page, make sure to choose the operating system as <b>Linux</b>, Architecture as <b>x86_64</b>,
                Distribution as <b>WSL-Ubuntu</b>, Version as <b>2.0</b> and the Installer type as <b>runfile(local)</b>.</p>
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  As we are using Ubuntu in our WSL2, you can also choose Ubuntu as your operating system. However, I prefer to choose WSL-Ubuntu for better compatibility.
                </AlertDescription>
              </Alert>
              <StepImage src="/cuda-toolkit-12-3-wsl-ubuntu.png" caption="Preview of CUDA Toolkit 12.3 download page for WSL-Ubuntu" />
              <p>After selecting those, it will give you the download commands. You have to apply them sequentially. Make sure that you <b>don't keep the checkmark in
                "Kernel Objects" during installing CUDA</b>.</p>
              <StepImage src="/cuda-toolkit-12-3-download-commands.png" caption="Preview of CUDA Toolkit 12.3 download commands for WSL-Ubuntu" />
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Make sure to copy and paste the commands one by one in your WSL Ubuntu terminal to download and install the CUDA Toolkit properly. If you face
                  any issues related to CUDA dependency, then quickly go through step 12 where I have explained how to install the CUDA dependencies properly.
                </AlertDescription>
              </Alert>
            </StepSection>

            <StepSection id="step-14" stepNumber={14} title="Step 14: Add path to shell profile for CUDA">
              <p className="text-muted-foreground">
                After installing CUDA Toolkit, we need to add the CUDA binaries to our shell profile for easy access.
                This will allow us to run CUDA commands from any directory in the terminal.
              </p>
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Depending on the shell you are using (bash, zsh, etc.), you need to add the CUDA path to the appropriate configuration file.
                  Make sure to replace <b>.bashrc</b> with <b>.zshrc</b> or other configuration files if you are using a different shell.
                </AlertDescription>
              </Alert>
              <p>To add the CUDA binary path, follow the command below.</p>
              <CodeBlock code="echo 'export PATH=/usr/local/cuda-12.3/bin:$PATH' >> ~/.bashrc" />
              <p>You have to use the updated path where you installed it. Your terminal will show it after installing the CUDA.</p>
              <StepImage src="/cuda-installation-path.png" caption="Preview of CUDA installation path in WSL Ubuntu terminal" />
              <p>Now, you need to add the path inside the Library path. Just use the exact path where you installed CUDA. Your temrinal will list the path properly.</p>
              <CodeBlock code="echo 'export LD_LIBRARY_PATH=/usr/local/cuda-12.3/lib64:$LD_LIBRARY_PATH' >> ~/.bashrc" />
              <StepImage src="/cuda-library-path.png" caption="Preview of CUDA library path in WSL Ubuntu terminal" />
              <p className="text-muted-foreground">
                After adding those paths, you need to source the shell profile for the changes to take effect. You can do that by running the following command.
              </p>
              <CodeBlock code="source ~/.bashrc" />
            </StepSection>

            <StepSection id="step-15" stepNumber={15} title="Step 15: nvcc version">
              <p className="text-muted-foreground">
                Verify that CUDA is properly installed by checking the version:
              </p>
              <CodeBlock code="nvcc --version" />
              <StepImage src="/nvcc-version-check.png" caption="Preview of nvcc version check in WSL Ubuntu terminal" />
              <p>
                If the output shows the correct CUDA version, then you have successfully installed CUDA Toolkit in your WSL2 Ubuntu environment.
              </p>
            </StepSection>

            <StepSection id="step-16" stepNumber={16} title="Step 16: cuDNN SDK">
              <p className="text-muted-foreground">
                Download and install the cuDNN SDK for CUDA from the official Nvidia website. Here's an interesting thing about cuDNN:
                Even though TensorFlow GPU suggests a specific cuDNN version, it is often compatible with multiple versions.
                Therefore, I recommend downloading the latest cuDNN version that is compatible with your installed CUDA version.
                You can find the cuDNN download page{" "}
                <a
                  href="https://developer.nvidia.com/cudnn-downloads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  here
                </a>.
              </p>
              <p>Select the Operating System as <b>Linux</b>, Architecture as <b>x86_64</b>, Distribution as <b>Ubuntu</b>,
                Version as <b>24.04</b>, Installer Type as <b>deb (local)</b>, Configuration as <b>FULL</b>. After selecting those, it will give you the download commands.
                You have to apply them sequentially. </p>
              <StepImage src="/cudnn-download-commands.png" caption="Preview of cuDNN download commands for Ubuntu 24.04" />
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Make sure to copy and paste the commands one by one in your WSL Ubuntu terminal to download and install the cuDNN SDK properly. If you face
                  any issues related to CUDA dependency, then quickly go through step 12 where I have explained how to install the CUDA dependencies properly.
                </AlertDescription>
              </Alert>
            </StepSection>

            <StepSection id="step-17" stepNumber={17} title="Step 17: TensorFlow GPU">
              <p className="text-muted-foreground">
                Now, we are going to install TensorFlow GPU in our conda environment. Make sure that you have activated the conda environment where you want to install it.
                For me, I am going to install it in my previously created <b>ml</b> environment.
                To activate it, I will use the following command:
              </p>
              <CodeBlock code="conda activate ml" />
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Make sure that you have activated the correct conda environment before installing TensorFlow GPU. You will see the environment name in the terminal prompt.
                </AlertDescription>
              </Alert>
              <StepImage src="/conda-activate-ml-environment.png" caption="Preview of activating 'ml' conda environment in WSL Ubuntu terminal" />
              <p>I will install ipykernel and jupyter in this new environment.</p>
              <CodeBlock code="conda install jupyter ipykernel -y" />
              <p>Now, to install TensorFlow GPU, I will simply use the following command.</p>
              <CodeBlock code="pip install tensorflow[and-cuda]" />
              <p>It might take a couple of minutes depending on the internet speed you have. Please have patience and wait for it to finish the installation.</p>
            </StepSection>

            <StepSection id="step-18" stepNumber={18} title="Step 18: Check TensorFlow GPU">
              <p className="text-muted-foreground">
                After installing TensorFlow GPU, we need to verify that it is working properly with GPU support.
                Open a Python shell in your Ubuntu terminal and run the following commands:
              </p>
              <CodeBlock code={`python3 -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"`} />
              <p>
                If the output shows a list of available GPU devices, then TensorFlow GPU is successfully installed and working properly.
              </p>
              <StepImage src="/tensorflow-gpu-check.png" caption="Preview of TensorFlow GPU check in WSL Ubuntu terminal" />
            </StepSection>

            <StepSection id="step-19" stepNumber={19} title="Step 19: PyTorch GPU">
              <p className="text-muted-foreground">
                Now, we are going to install PyTorch GPU in our conda environment. Make sure that you have activated the conda environment where you want to install it.
                For me, I am going to install it in my previously created <b>ml</b> environment.
                To activate it, I will use the following command:
              </p>
              <CodeBlock code="conda activate ml" />
              <p>
                Installing PyTorch GPU is very straightforward. You can use the official PyTorch installation command generator{" "}
                <a
                  href="https://pytorch.org/get-started/locally/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  here
                </a>.
              </p>
              <p>
                Make sure to select PyTorch Build as the latest <b>Stable</b> one, Your OS as <b>Linux</b>, Package as <b>Pip</b>, Language as <b>Python</b>.
                For the Compute Platform, select the CUDA version that matches your installed CUDA Toolkit. For me, it is <b>CUDA 12.3</b>. But, if you
                can't find the exact one then chose the closest. As CUDA 12.3 is not available for me now, I am choosing <b>CUDA 12.6</b>.
                After selecting those, it will give you the installation command. You have to apply it in your WSL Ubuntu terminal.
              </p>
              <StepImage src="/pytorch-installation-command-generator.png" caption="Preview of PyTorch installation command generator" />
              <p>
                It might take a couple of minutes depending on the internet speed you have. Please have patience and wait for it to finish the installation.
              </p>
              <StepImage src="/pytorch-gpu-installation.png" caption="Preview of PyTorch GPU installation in WSL Ubuntu terminal" />
            </StepSection>

            <StepSection id="step-20" stepNumber={20} title="Step 20: Check PyTorch GPU">
              <p className="text-muted-foreground">
                After installing PyTorch GPU, verify that it is working properly with GPU support.
                Open a Python shell in your Ubuntu terminal and run the following commands:
              </p>

              <CodeBlock code={`python3 - << 'EOF'\nimport torch\nprint(torch.cuda.is_available())\nprint(torch.cuda.device_count())\nprint(torch.cuda.current_device())\nprint(torch.cuda.device(0))\nprint(torch.cuda.get_device_name(0))\nEOF`} />

              <p>
                The output should look similar to the screenshot, showing:
                <ul className="list-disc ml-6">
                  <li><b>True</b> - GPU is available for PyTorch</li>
                  <li><b>1</b> - Number of detected CUDA devices</li>
                  <li><b>0</b> - Index of the current active CUDA device</li>
                  <li>A device object representation</li>
                  <li><b>NVIDIA GeForce RTX 3060</b> (or your GPU name)</li>
                </ul>
              </p>
              <StepImage src="/pytorch-gpu-check.png" caption="Preview of PyTorch GPU check in WSL Ubuntu terminal" />
            </StepSection>

            <StepSection id="step-21" stepNumber={21} title="Step 21: Check PyTorch & TensorFlow GPU inside Jupyter Notebook">
              <p className="text-muted-foreground">
                Now that the environment is fully configured, we will verify GPU support directly inside <b>Jupyter Notebook</b>. This ensures both PyTorch and TensorFlow can successfully detect and use your GPU.
              </p>

              <h3 className="text-lg font-semibold mt-6">1. Test PyTorch GPU</h3>
              <p className="text-muted-foreground">Create a new Jupyter Notebook and run the following commands one by one:</p>

              <CodeBlock code={`import torch

print(torch.cuda.is_available())
print(torch.cuda.device_count())
print(torch.cuda.current_device())
print(torch.cuda.device(0))
print(torch.cuda.get_device_name(0))`} />

              <p className="text-muted-foreground">If everything is configured correctly, you will see your GPU (e.g., <b>NVIDIA GeForce RTX 3060</b>) detected properly:</p>

              <StepImage src="/jupyter-pytorch-gpu-check.png" caption="Preview of PyTorch GPU check inside Jupyter Notebook" />

              <h3 className="text-lg font-semibold mt-6">2. Test TensorFlow GPU</h3>
              <p className="text-muted-foreground">Next, run the following code to check whether TensorFlow detects your GPU:</p>

              <CodeBlock code={`import tensorflow as tf

print(tf.config.list_physical_devices('GPU'))`} />

              <p className="text-muted-foreground">You can also check the number of GPUs detected:</p>

              <CodeBlock code={`print("Num GPUs Available:", len(tf.config.list_physical_devices('GPU')))`} />

              <p className="text-muted-foreground">Finally, run TensorFlow’s built-in GPU validation (warnings are normal):</p>

              <CodeBlock code={`import tensorflow as tf

assert tf.test.is_gpu_available()
assert tf.test.is_built_with_cuda()`} />

              <StepImage src="/jupyter-tensorflow-gpu-check.png" caption="TensorFlow GPU initialization and CUDA validation output" />

              <p className="text-muted-foreground mt-4">If TensorFlow logs show your GPU model (such as <b>RTX 3060</b>), then TensorFlow GPU is successfully installed and fully working inside Jupyter Notebook.</p>
            </StepSection>

            <section id="troubleshooting" className="scroll-mt-8">
              <Card className="p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-bold md:text-3xl">Troubleshooting</h2>
                <div className="space-y-6">

                  <div>
                    <h3 className="mb-2 font-semibold">WSL2 not starting</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Make sure virtualization is enabled in your BIOS settings. Check with:</p>
                    <CodeBlock code="systeminfo | find &quot;Hyper-V&quot;" />
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">CUDA not found after installation</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Verify that the environment variables are correctly set. Run:</p>
                    <CodeBlock code="echo $PATH" />
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">GPU not detected</h3>
                    <p className="text-sm text-muted-foreground">Ensure you have the latest Nvidia drivers installed on Windows. WSL2 uses the Windows driver, so no separate driver installation is needed in Ubuntu.</p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">Conda environment not showing inside Jupyter</h3>
                    <p className="mb-2 text-sm text-muted-foreground">You must install ipykernel inside the target environment:</p>
                    <CodeBlock code="conda activate <env>\npython -m ipykernel install --user --name <env> --display-name &quot;Python (<env>)&quot;" />
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">TensorFlow not detecting GPU</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Check compatible CUDA + cuDNN versions. Confirm TensorFlow sees the GPU:</p>
                    <CodeBlock code="python3 -c &quot;import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))&quot;" />
                    <p className="text-sm text-muted-foreground mt-2">If blank, your CUDA version does not match the TensorFlow build.</p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">PyTorch not detecting GPU</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Test with:</p>
                    <CodeBlock code="python3 -c &quot;import torch; print(torch.cuda.is_available())&quot;" />
                    <p className="text-sm text-muted-foreground mt-2">If <b>False</b>, reinstall PyTorch with the correct CUDA version.</p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">nvcc works but TensorFlow/PyTorch cannot use GPU</h3>
                    <p className="mb-2 text-sm text-muted-foreground">This means CUDA Toolkit is fine but libraries are mismatched. Reinstall the framework with proper CUDA version.</p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">Jupyter Notebook using CPU instead of GPU</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Your notebook kernel is NOT running inside the correct conda environment. Install kernel again:</p>
                    <CodeBlock code="conda activate ml\npython -m ipykernel install --user --name ml --display-name &quot;Python (ml)&quot;" />
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">WSL GPU not exposed</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Check if WSL has GPU support enabled:</p>
                    <CodeBlock code="ls /dev/dxg" />
                    <p className="text-sm text-muted-foreground mt-2">If not found, update Windows + WSL:</p>
                    <CodeBlock code="wsl --update" />
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">CUDNN errors when loading TensorFlow</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Often caused by old cache files. Clear and reinstall:</p>
                    <CodeBlock code="sudo rm -rf ~/.nv" />
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">libcuda.so not found</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Force link to Windows CUDA driver:</p>
                    <CodeBlock code="sudo ln -s /usr/lib/wsl/lib/libcuda.so /usr/lib/libcuda.so" />
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">WSL freezes during GPU training</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Restrict GPU memory usage in TensorFlow:</p>
                    <CodeBlock code={`python3 - << 'EOF'\nimport tensorflow as tf\ngpus = tf.config.experimental.list_physical_devices('GPU')\ntf.config.experimental.set_memory_growth(gpus[0], True)\nEOF`} />
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">“Illegal instruction (core dumped)” on TensorFlow</h3>
                    <p className="text-sm text-muted-foreground">Happens with incompatible AVX instructions. Update TensorFlow or use a newer Python version.</p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">“CUDA driver version too old” error</h3>
                    <p className="mb-2 text-sm text-muted-foreground">Update your GPU driver from Nvidia:</p>
                    <CodeBlock code="nvidia-smi" />
                    <p className="text-sm text-muted-foreground mt-2">If it shows an old version, install the latest Studio driver on Windows.</p>
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
