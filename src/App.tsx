import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Zap, Sparkles, Rocket, Code2 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] relative overflow-hidden bg-slate-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center p-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Tech Stack Badges with Glow */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up">
            <Badge className="px-4 py-2 text-sm font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <Sparkles className="w-3 h-3 mr-1" />
              React 19
            </Badge>
            <Badge className="px-4 py-2 text-sm font-medium bg-green-500/10 text-green-300 border border-green-500/20 hover:bg-green-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
              <Zap className="w-3 h-3 mr-1" />
              Vite 7
            </Badge>
            <Badge className="px-4 py-2 text-sm font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              <Code2 className="w-3 h-3 mr-1" />
              ShadCN UI
            </Badge>
            <Badge className="px-4 py-2 text-sm font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              <Rocket className="w-3 h-3 mr-1" />
              React Router
            </Badge>
          </div>

          {/* Main Headline with Glow Effect */}
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <h1 className="text-6xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient-x">
              React + Vite + ShadCN + React Router
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Template
              </span>
            </h1>

            {/* Glowing Line */}
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse-glow"></div>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
                next-generation
              </span>{" "}
              starter template built with cutting-edge technologies. Experience blazing-fast development with beautiful,
              accessible components and modern tooling.
            </p>
          </div>

          {/* Call-to-Action Buttons with Advanced Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12 animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              className="group px-10 py-7 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              View on GitHub
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group px-10 py-7 text-lg font-semibold rounded-2xl bg-slate-900/50 backdrop-blur-sm text-white border-2 border-slate-700 hover:border-cyan-500 hover:bg-slate-800/50 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative overflow-hidden hover:text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Zap className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Get Template
            </Button>
          </div>

          {/* Feature Highlights with Glass Morphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto animate-fade-in-up animation-delay-1000">
            <div className="group bg-slate-900/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                Lightning Fast
              </h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Powered by Vite for instant hot reload and optimized builds that feel like magic
              </p>
            </div>

            <div className="group bg-slate-900/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                Beautiful UI
              </h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Pre-built with ShadCN UI components and Tailwind CSS for stunning interfaces
              </p>
            </div>

            <div className="group bg-slate-900/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                Ready to Ship
              </h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                TypeScript, routing, and modern tooling configured for production deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
