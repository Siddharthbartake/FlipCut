import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/App";
import { useNavigate } from "react-router-dom";
import { 
  Scissors, 
  Zap, 
  Cloud, 
  Download, 
  ArrowRight,
  Sparkles as SparklesIcon,
  Image as ImageIcon,
  FlipHorizontal2,
  Play,
  Users,
  ImagePlus
} from "lucide-react";

// Effects components
import { Sparkles } from "@/components/effects/Sparkles";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { GridPattern, DotPattern } from "@/components/effects/GridPattern";
import { GlowButton, BorderBeamButton } from "@/components/effects/AnimatedButtons";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { BeforeAfterSlider } from "@/components/effects/BeforeAfterSlider";

const features = [
  {
    icon: SparklesIcon,
    title: "AI Background Removal",
    description: "Instantly remove backgrounds from any image using advanced AI technology",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: FlipHorizontal2,
    title: "Horizontal Flip",
    description: "Automatically flip your processed images for perfect mirror effects",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "All your images are securely stored and accessible from anywhere",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: Download,
    title: "Easy Download",
    description: "Download your processed images instantly in high quality PNG format",
    color: "from-orange-500 to-amber-500"
  }
];

const demoImages = [
  {
    original: "https://images.pexels.com/photos/19245168/pexels-photo-19245168.jpeg?auto=compress&cs=tinysrgb&w=600",
    processed: "https://images.pexels.com/photos/19245168/pexels-photo-19245168.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Portrait"
  },
  {
    original: "https://images.pexels.com/photos/27298415/pexels-photo-27298415.jpeg?auto=compress&cs=tinysrgb&w=600",
    processed: "https://images.pexels.com/photos/27298415/pexels-photo-27298415.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Product"
  },
  {
    original: "https://images.pexels.com/photos/5195367/pexels-photo-5195367.jpeg?auto=compress&cs=tinysrgb&w=600",
    processed: "https://images.pexels.com/photos/5195367/pexels-photo-5195367.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Automotive"
  }
];

const stats = [
  { value: 50, suffix: '+', label: 'Free Images/Month' },
  { value: 3, suffix: 's', label: 'Processing Time' },
  { value: 100, suffix: '%', label: 'Cloud Storage' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function LandingPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [selectedDemo, setSelectedDemo] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      login();
    }
  };

  return (
    <div className="min-h-screen pt-20 overflow-hidden" data-testid="landing-page">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <GridPattern className="opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#06b6d4]/20 rounded-full blur-[120px]" />
        </div>
        
        {/* Sparkles Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles
            className="absolute inset-0"
            size={1.5}
            density={100}
            color="#7c3aed"
            speed={0.5}
            opacity={0.5}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto relative z-10"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-start mb-8">
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2 border border-[#7c3aed]/30">
              <Zap className="w-4 h-4 text-[#7c3aed]" />
              <span className="text-sm text-zinc-300">AI-Powered Image Processing</span>
              <span className="px-2 py-0.5 rounded-full bg-[#7c3aed]/20 text-[#7c3aed] text-xs font-medium">
                New
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight"
          >
            Remove backgrounds.
            <br />
            <span className="gradient-text">Flip instantly.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-lg lg:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
          >
            Transform your images in seconds with FlipCut. Our AI removes backgrounds 
            and flips your images horizontally — perfect for e-commerce, social media, 
            and creative projects.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <GlowButton
              onClick={handleGetStarted}
              data-testid="get-started-btn"
              className="text-lg px-10 py-4"
            >
              {user ? 'Go to Dashboard' : 'Get Started Free'}
              <ArrowRight className="w-5 h-5" />
            </GlowButton>
            
            <BorderBeamButton
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="watch-demo-btn"
              className="text-lg"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </BorderBeamButton>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-12"
            onViewportEnter={() => setCountersVisible(true)}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {countersVisible ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="relative px-6 py-24 bg-[#0a0a0f]/80">
        <DotPattern className="opacity-50" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              See the magic in action
            </motion.h2>
            <p className="text-zinc-400 text-lg">
              Drag the slider to compare before and after
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Before/After Slider */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <BeforeAfterSlider
                beforeImage={demoImages[selectedDemo].original}
                afterImage={demoImages[selectedDemo].processed}
                beforeLabel="Original"
                afterLabel="Processed"
                className="max-w-lg mx-auto shadow-2xl shadow-[#7c3aed]/10"
              />
            </motion.div>

            {/* Demo Selection */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Works with any image type
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {demoImages.map((demo, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDemo(index)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedDemo === index 
                        ? 'border-[#7c3aed] scale-105 shadow-lg shadow-[#7c3aed]/20' 
                        : 'border-transparent hover:border-white/20'
                    }`}
                  >
                    <img
                      src={demo.original}
                      alt={demo.category}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-2 left-2 text-xs text-white font-medium">
                      {demo.category}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-6">
                <Button
                  onClick={handleGetStarted}
                  className="w-full rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white py-6 text-lg"
                  data-testid="try-now-btn"
                >
                  <ImagePlus className="w-5 h-5 mr-2" />
                  Try with your own image
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-6 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-[150px]" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#7c3aed] text-sm font-medium uppercase tracking-wider"
            >
              Features
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6"
            >
              Everything you need
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-400 text-lg max-w-2xl mx-auto"
            >
              Professional image processing in just a few clicks
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <SpotlightCard className="h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-6 py-24 bg-[#0a0a0f]/80">
        <GridPattern className="opacity-20" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#06b6d4] text-sm font-medium uppercase tracking-wider"
            >
              How it works
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6"
            >
              Three simple steps
            </motion.h2>
          </div>

          <div className="space-y-8">
            {[
              { step: 1, title: "Upload", description: "Drag & drop or click to upload your image (PNG, JPEG, WebP)", icon: ImagePlus },
              { step: 2, title: "Process", description: "Our AI removes the background and flips horizontally", icon: SparklesIcon },
              { step: 3, title: "Download", description: "Get your processed image instantly with transparent background", icon: Download }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex items-start gap-6 group"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  {index < 2 && (
                    <div className="absolute top-16 left-1/2 w-0.5 h-12 bg-gradient-to-b from-[#7c3aed]/50 to-transparent -translate-x-1/2" />
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-3">
                    {item.title}
                    <item.icon className="w-5 h-5 text-[#7c3aed]" />
                  </h3>
                  <p className="text-zinc-400 text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c3aed]/5 to-transparent" />
          <Sparkles
            className="absolute inset-0"
            size={2}
            density={50}
            color="#7c3aed"
            speed={0.3}
            opacity={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to transform
            <br />
            <span className="gradient-text">your images?</span>
          </h2>
          <p className="text-zinc-400 mb-10 text-xl">
            Join creators using FlipCut for their image processing needs.
          </p>
          <GlowButton
            onClick={handleGetStarted}
            data-testid="cta-get-started-btn"
            className="text-xl px-12 py-5"
          >
            {user ? 'Go to Dashboard' : 'Start for Free'}
            <ArrowRight className="w-6 h-6" />
          </GlowButton>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center">
              <Scissors className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-zinc-400">FlipCut © {new Date().getFullYear()}</span>
          </div>
          <p className="text-sm text-zinc-500">
            Powered by AI • Built for creators
          </p>
        </div>
      </footer>
    </div>
  );
}
