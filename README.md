# CUDA & WSL2 Setup Guide for Windows 11 (Version 2)

A comprehensive, step-by-step web guide to set up CUDA on Windows Subsystem for Linux 2 (WSL2) with Ubuntu, enabling GPU acceleration for machine learning frameworks like TensorFlow and PyTorch on Windows 11.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite)

## 🎯 Overview

This project provides an interactive, beautifully designed web application that guides users through the complete process of setting up CUDA on WSL2 with Ubuntu. The guide covers everything from initial Windows Terminal configuration to verifying GPU support in TensorFlow and PyTorch.

### What You'll Learn

- How to configure Windows Terminal and PowerShell
- Installing and configuring WSL2 with Ubuntu
- Setting up Miniconda for Python environment management
- Installing CUDA Toolkit and cuDNN SDK
- Configuring TensorFlow and PyTorch with GPU support
- Verifying GPU acceleration in Jupyter Notebooks
- Troubleshooting common issues

## ✨ Features

- 📖 **Comprehensive Step-by-Step Guide** - 21 detailed steps covering the entire setup process
- 🖼️ **Visual Instructions** - Screenshots and images for each step
- 💻 **Code Examples** - Ready-to-use commands and code snippets
- 🔍 **Troubleshooting Section** - Solutions to common problems
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Built with shadcn/ui and Tailwind CSS
- 🔗 **Table of Contents** - Easy navigation through the guide

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **bun** (package manager)
- **Git** (for cloning the repository)
- **Windows 11** (with WSL2 support)
- **NVIDIA GPU** (compatible with CUDA)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/FahimFBA/CUDA-WSL2-Ubuntu-v2.git
   cd CUDA-WSL2-Ubuntu-v2
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:8080` to view the application.

### Building for Production

```bash
npm run build
# or
yarn build
# or
bun run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
bun run preview
```

## 📁 Project Structure

```
CUDA-WSL2-Ubuntu-v2/
├── public/                 # Static assets and images
│   ├── *.png              # Guide screenshots
│   └── favicon.ico
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Hero.tsx      # Hero section
│   │   ├── CodeBlock.tsx # Code display component
│   │   ├── StepImage.tsx # Image display component
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Main guide page
│   │   └── NotFound.tsx  # 404 page
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── package.json
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🛠️ Technologies Used

- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **React Router 6.30.1** - Client-side routing
- **Lucide React** - Icon library
- **Radix UI** - Unstyled, accessible component primitives

## 📚 Guide Contents

The guide includes the following sections:

1. **Introduction** - Overview and prerequisites
2. **Windows Terminal Setup** - Installing and configuring Windows Terminal
3. **PowerShell Configuration** - Setting up modern PowerShell
4. **WSL2 Installation** - Installing Windows Subsystem for Linux 2
5. **Ubuntu Installation** - Setting up Ubuntu LTS in WSL2
6. **Miniconda Setup** - Installing Python environment manager
7. **CUDA Toolkit Installation** - Installing CUDA for GPU acceleration
8. **cuDNN SDK Installation** - Deep neural network library
9. **TensorFlow GPU Setup** - Configuring TensorFlow with GPU support
10. **PyTorch GPU Setup** - Configuring PyTorch with GPU support
11. **Verification** - Testing GPU acceleration in Jupyter Notebooks
12. **Troubleshooting** - Common issues and solutions

## 🎥 Video Tutorial

A video walkthrough is available on YouTube. Check the "Watch Video" button in the hero section of the application.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Areas for Contribution

- Updating guide content with latest versions
- Adding more troubleshooting solutions
- Improving UI/UX
- Adding support for additional ML frameworks
- Translating the guide to other languages
- Fixing bugs and issues

## 🐛 Troubleshooting

If you encounter issues while setting up the development environment:

1. **Node version issues**: Ensure you're using Node.js v18 or higher
2. **Port conflicts**: Change the port in `vite.config.ts` if 8080 is already in use
3. **Dependency issues**: Delete `node_modules` and `package-lock.json`, then reinstall
4. **Build errors**: Check TypeScript and ESLint configurations

For issues related to CUDA/WSL2 setup, refer to the troubleshooting section in the guide itself.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- NVIDIA for CUDA Toolkit and cuDNN
- Microsoft for WSL2
- The open-source community for amazing tools and libraries
- All contributors who help improve this guide

## 📞 Support

If you have questions or need help:

- Open an issue on [GitHub](https://github.com/FahimFBA/CUDA-WSL2-Ubuntu-v2/issues)
- Check the troubleshooting section in the guide
- Refer to official documentation:
  - [NVIDIA CUDA Documentation](https://docs.nvidia.com/cuda/)
  - [WSL2 Documentation](https://learn.microsoft.com/en-us/windows/wsl/)
  - [TensorFlow GPU Support](https://www.tensorflow.org/install/pip)
  - [PyTorch Installation](https://pytorch.org/get-started/locally/)

## ⭐ Star History

If you find this project helpful, please consider giving it a star on GitHub!

---

**Made with ❤️ for the ML community**

