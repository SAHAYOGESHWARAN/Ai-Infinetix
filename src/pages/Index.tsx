
import { useState } from 'react';
import { Brain, Heart, Headphones, BarChart3, Users, Menu, X, ArrowRight, Zap, Shield, Globe, Sparkles, Cpu, Database, MessageSquare, Video, Mic, Star, Award, Infinity, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import KnowledgeAI from '@/components/modules/KnowledgeAI';
import HealthAI from '@/components/modules/HealthAI';
import SupportAI from '@/components/modules/SupportAI';
import InsightsAI from '@/components/modules/InsightsAI';
import TalentAI from '@/components/modules/TalentAI';

const Index = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const modules = [
    {
      id: 'knowledge',
      name: 'Knowledge AI',
      icon: Brain,
      description: 'Upload docs, PDFs, policies - AI-powered embeddings with RAG',
      color: 'from-purple-500 to-indigo-600',
      component: KnowledgeAI,
      features: ['LangChain Integration', 'RAG Processing', 'Document Analysis', 'AI Embeddings']
    },
    {
      id: 'health',
      name: 'Health AI',
      icon: Heart,
      description: 'Medical diagnostics, report analysis, risk assessments',
      color: 'from-red-500 to-pink-600',
      component: HealthAI,
      features: ['Medical Diagnostics', 'Scan Analysis', 'Risk Assessment', 'Health Monitoring']
    },
    {
      id: 'support',
      name: 'Support AI',
      icon: Headphones,
      description: 'Voice-to-text, AI replies, sentiment analysis, chatbot integration',
      color: 'from-green-500 to-emerald-600',
      component: SupportAI,
      features: ['Voice Recognition', 'Real-time Chat', 'Sentiment Analysis', 'Call Center AI']
    },
    {
      id: 'insights',
      name: 'Insights AI',
      icon: BarChart3,
      description: 'BI dashboards with AI-powered natural language querying',
      color: 'from-blue-500 to-cyan-600',
      component: InsightsAI,
      features: ['Natural Language BI', 'Predictive Analytics', 'Live Dashboards', 'AI Forecasting']
    },
    {
      id: 'talent',
      name: 'Talent AI',
      icon: Users,
      description: 'Resume parsing, AI job matching, live skill assessments',
      color: 'from-orange-500 to-yellow-600',
      component: TalentAI,
      features: ['Resume Parsing', 'AI Job Matching', 'Live Coding Tests', 'Video Interviews']
    }
  ];

  const megaFeatures = [
    {
      icon: MessageSquare,
      title: 'AI Chatbot Integration',
      description: 'Context-aware conversational AI across all modules with voice & text support',
      gradient: 'from-purple-500 to-pink-500',
      action: () => console.log('Opening AI Chatbot Demo'),
      actionText: 'Try Demo'
    },
    {
      icon: Cpu,
      title: 'Advanced ML Pipeline',
      description: 'GPT-4, Gemini Pro, LangChain, Whisper integration with custom ML models',
      gradient: 'from-blue-500 to-cyan-500',
      action: () => console.log('Opening ML Pipeline Dashboard'),
      actionText: 'View Pipeline'
    },
    {
      icon: Database,
      title: 'Intelligent Data Processing',
      description: 'Vector databases, PostgreSQL, MongoDB with real-time analytics',
      gradient: 'from-green-500 to-emerald-500',
      action: () => console.log('Opening Data Dashboard'),
      actionText: 'View Data'
    },
    {
      icon: Video,
      title: 'Multi-Modal AI',
      description: 'Voice, video, text, and document processing with WebRTC integration',
      gradient: 'from-orange-500 to-red-500',
      action: () => console.log('Opening Multi-Modal Interface'),
      actionText: 'Try Now'
    },
    {
      icon: Infinity,
      title: 'Infinite Scalability',
      description: 'Enterprise-grade architecture with global CDN and auto-scaling',
      gradient: 'from-indigo-500 to-purple-500',
      action: () => console.log('Opening Scalability Metrics'),
      actionText: 'View Metrics'
    },
    {
      icon: Award,
      title: 'Role-Based Intelligence',
      description: 'Specialized AI for doctors, recruiters, support managers, and employees',
      gradient: 'from-yellow-500 to-orange-500',
      action: () => console.log('Opening Role Configuration'),
      actionText: 'Configure'
    }
  ];

  const ActiveComponent = activeModule ? modules.find(m => m.id === activeModule)?.component : null;

  const handleModuleClick = (moduleId: string) => {
    console.log(`Opening ${moduleId} module`);
    setActiveModule(moduleId);
  };

  const scrollToModules = () => {
    const modulesSection = document.getElementById('modules-section');
    if (modulesSection) {
      modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (activeModule && ActiveComponent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveModule(null)}
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                ← Back to Suite
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-lg flex items-center justify-center relative">
                  <Infinity className="w-4 h-4 text-white" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                </div>
                <span className="text-white font-bold">Saha's Infinetix</span>
              </div>
            </div>
            <div className="text-slate-300 text-sm">
              {modules.find(m => m.id === activeModule)?.name}
            </div>
          </div>
        </div>
        <div className="pt-20">
          <ActiveComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Infinity className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
                  Saha's Infinetix
                </h1>
                <p className="text-xs text-slate-400">EnterpriseX AI Suite</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">Enterprise</Button>
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">Solutions</Button>
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">Support</Button>
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)}></div>
          <div className="fixed right-0 top-0 h-full w-64 bg-slate-900 border-l border-slate-700 p-6 pt-20">
            <div className="space-y-4">
              <Button variant="ghost" className="w-full text-left justify-start text-slate-300 hover:text-white hover:bg-slate-800">Enterprise</Button>
              <Button variant="ghost" className="w-full text-left justify-start text-slate-300 hover:text-white hover:bg-slate-800">Solutions</Button>
              <Button variant="ghost" className="w-full text-left justify-start text-slate-300 hover:text-white hover:bg-slate-800">Support</Button>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600">Get Started</Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 mb-8 border border-slate-700">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-sm text-slate-300">EnterpriseX AI Suite</span>
            <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs">Beta 2.0</Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
              One Suite.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Total AI Intelligence.
            </span>
            <br />
            <span className="text-2xl md:text-4xl bg-gradient-to-r from-slate-400 to-slate-300 bg-clip-text text-transparent">
              Infinite Possibilities.
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Saha's Infinetix delivers next-generation AI technology that seamlessly integrates across knowledge, 
            healthcare, support, analytics, and talent management. One platform for infinite enterprise possibilities.
          </p>

          {/* Founder Info */}
          <div className="mb-12 p-6 bg-slate-800/30 rounded-2xl border border-slate-700 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-white">Sahayoheshwaran</h3>
                <p className="text-slate-400 text-sm">Founder & CEO</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm italic">
              "Empowering enterprises with AI that understands, adapts, and transforms business intelligence."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-lg px-8 py-3"
              onClick={scrollToModules}
            >
              Explore Modules
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white text-lg px-8 py-3"
              onClick={() => console.log('Opening demo video')}
            >
              <Video className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Mega Features Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Mega AI Features
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Revolutionary AI capabilities that redefine enterprise intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {megaFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 group cursor-pointer"
                  onClick={feature.action}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-slate-400 mb-4">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white group-hover:border-slate-500"
                    >
                      <Play className="mr-2 w-4 h-4" />
                      {feature.actionText}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Modules Grid */}
      <section id="modules-section" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              AI Modules
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Specialized AI solutions for every department and business function
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Card
                  key={module.id}
                  className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 cursor-pointer group relative overflow-hidden"
                  onClick={() => handleModuleClick(module.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${module.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <CardHeader className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{module.name}</CardTitle>
                    <CardDescription className="text-slate-400 mb-4">
                      {module.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {module.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="border-slate-600 text-slate-300 text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <Button 
                      variant="outline" 
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white group-hover:border-slate-500"
                    >
                      Launch Module
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Enterprise Features
            </h2>
            <p className="text-xl text-slate-400">Built for scale, security, and seamless integration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Enterprise Security</h3>
              <p className="text-slate-400">
                SSO, SAML, OAuth 2.0, role-based access control with enterprise-grade encryption and audit trails
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Advanced AI Pipeline</h3>
              <p className="text-slate-400">
                GPT-4, Gemini Pro, LangChain, Whisper, and custom ML models with PyTorch & TensorFlow integration
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Global Intelligence</h3>
              <p className="text-slate-400">
                Multi-tenant architecture, global CDN, 99.9% uptime, and multilingual AI support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Infinity className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-white font-bold">Saha's Infinetix</span>
                <p className="text-xs text-slate-400">EnterpriseX AI Suite by Sahayoheshwaran</p>
              </div>
            </div>
            <div className="text-slate-400 text-sm text-center md:text-right">
              <p>© 2025 Saha's Infinetix. All rights reserved.</p>
              <p className="text-xs mt-1">Founded by Sahayoheshwaran • Enterprise AI Intelligence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
