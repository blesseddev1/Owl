import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Code, 
  Clock, 
  Globe, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star,
  ArrowUpRight,
  Play,
  Github,
  Twitter,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Smartphone,
  Monitor,
  Wallet,
  Lock,
  Gauge,
  HeadphonesIcon
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Instant Payments',
      description: 'Accept cryptocurrency payments with real-time confirmations and instant notifications'
    },
    {
      icon: Shield,
      title: 'Non-Custodial Security',
      description: 'Your keys, your coins. We never hold your cryptocurrency, ensuring maximum security'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Simple REST API, webhooks, and comprehensive documentation for seamless integration'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Accept payments from anywhere in the world without geographical restrictions'
    },
    {
      icon: Gauge,
      title: 'Low Fees',
      description: 'Competitive transaction fees with transparent pricing and no hidden costs'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with any questions or issues'
    }
  ];

  const benefits = [
    {
      title: 'No KYC Required',
      description: 'Start accepting payments immediately without lengthy verification processes',
      icon: CheckCircle
    },
    {
      title: 'Multiple Cryptocurrencies',
      description: 'Support for Bitcoin, Ethereum, USDT, and other popular cryptocurrencies',
      icon: Wallet
    },
    {
      title: 'Real-time Monitoring',
      description: 'Track all transactions in real-time with detailed analytics and reporting',
      icon: TrendingUp
    },
    {
      title: 'Easy Integration',
      description: 'Get started in minutes with our simple API and pre-built components',
      icon: Code
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Stores',
      description: 'Accept crypto payments for your online store with seamless checkout experience',
      icon: Monitor,
      examples: ['Online retailers', 'Digital marketplaces', 'Subscription services']
    },
    {
      title: 'Mobile Applications',
      description: 'Integrate crypto payments into your mobile app with our SDK',
      icon: Smartphone,
      examples: ['Gaming apps', 'Content platforms', 'Service apps']
    },
    {
      title: 'Service Providers',
      description: 'Perfect for freelancers, consultants, and service-based businesses',
      icon: Users,
      examples: ['Freelancers', 'Consultants', 'Digital agencies']
    },
    {
      title: 'SaaS Platforms',
      description: 'Monetize your software with crypto subscription payments',
      icon: CreditCard,
      examples: ['Software tools', 'API services', 'Cloud platforms']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart',
      content: 'Owl has revolutionized how we accept payments. The integration was seamless and our customers love the crypto payment option.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, DigitalCraft',
      content: 'The non-custodial approach gives us and our customers peace of mind. Highly recommended for any business.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'CTO, InnovateLab',
      content: 'Best crypto payment solution we\'ve used. The API is well-documented and the support team is incredibly responsive.',
      rating: 5
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Merchants' },
    { value: '$50M+', label: 'Processed Volume' },
    { value: '99.9%', label: 'Uptime' },
    { value: '150+', label: 'Countries Supported' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 sm:p-6 border-b border-slate-700/50 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Owl</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors duration-200">Features</a>
            <a href="#benefits" className="text-slate-300 hover:text-white transition-colors duration-200">Benefits</a>
            <a href="#use-cases" className="text-slate-300 hover:text-white transition-colors duration-200">Use Cases</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors duration-200">Pricing</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">Contact</a>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link 
              to="/dashboard" 
              className="text-slate-300 hover:text-white transition-colors duration-200 hidden sm:block"
            >
              Sign In
            </Link>
            <Link
              to="/dashboard"
              className="px-4 sm:px-6 py-2 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-full text-xs sm:text-sm text-slate-300 mb-4">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>Trusted by 10,000+ merchants worldwide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Accept Crypto Payments
            <span className="block bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
              Instantly, No KYC
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-4">
            A secure, privacy-first way for merchants to accept Bitcoin, Ethereum, and stablecoins. 
            Start accepting payments in minutes with our simple API.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
            <Link
              to="/dashboard"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-600 text-white font-semibold rounded-xl hover:border-teal-400 hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="pt-6 sm:pt-8">
            <p className="text-slate-400 text-sm mb-4">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60">
              <div className="text-slate-400 font-semibold text-sm sm:text-base">TechCorp</div>
              <div className="text-slate-400 font-semibold text-sm sm:text-base">StartupXYZ</div>
              <div className="text-slate-400 font-semibold text-sm sm:text-base">DigitalStore</div>
              <div className="text-slate-400 font-semibold text-sm sm:text-base">CryptoMart</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              Everything you need to accept cryptocurrency payments with confidence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 sm:p-8 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-teal-500/30 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative z-10 py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Owl?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join thousands of merchants who trust Owl for their crypto payment needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Perfect For Any Business</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Whether you're a startup or enterprise, Owl scales with your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal-400" />
                        <span className="text-slate-400 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses using Owl
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              No hidden fees, no monthly charges. Pay only when you receive payments.
            </p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <div className="text-5xl font-bold text-white mb-2">2.5%</div>
              <div className="text-slate-400">per successful transaction</div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300">No setup fees</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300">No monthly fees</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300">No hidden costs</span>
              </div>
            </div>

            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-teal-500/10 to-purple-500/10 border border-teal-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of merchants already accepting crypto payments with Owl. 
              Set up your account in minutes and start receiving payments today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Create Free Account</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/payment-links"
                className="px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-xl hover:border-teal-400 hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm"
              >
                Try Payment Link Generator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 bg-slate-900/80 backdrop-blur-xl border-t border-slate-700/50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Owl</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                The secure, privacy-first crypto payment platform trusted by merchants worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <a href="#features" className="block text-slate-400 hover:text-white transition-colors duration-200">Features</a>
                <a href="#pricing" className="block text-slate-400 hover:text-white transition-colors duration-200">Pricing</a>
                <Link to="/dashboard" className="block text-slate-400 hover:text-white transition-colors duration-200">Dashboard</Link>
                <Link to="/api-keys" className="block text-slate-400 hover:text-white transition-colors duration-200">API</Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors duration-200">Documentation</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors duration-200">API Reference</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors duration-200">Support Center</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors duration-200">Status Page</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-400">support@owl.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-slate-400 mt-1" />
                  <span className="text-slate-400">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm">
              © 2024 Owl. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;