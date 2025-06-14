'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  duration = 0.5,
  className = '',
  once = true
}: { 
  children: React.ReactNode, 
  delay?: number, 
  direction?: 'up' | 'down' | 'left' | 'right' | 'none',
  duration?: number,
  className?: string,
  once?: boolean
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, isInView, once]);
  
  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case 'down':
        return { hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case 'left':
        return { hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case 'right':
        return { hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case 'none':
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default:
        return { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getDirectionVariants()}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const TypewriterText = ({ text, speed = 40, className = '' }: { text: string, speed?: number, className?: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, speed, text]);
  
  return <span className={className}>{displayText}</span>;
};

export const FloatingElement = ({ 
  children, 
  amplitude = 10,
  duration = 3, 
  className = ''
}: { 
  children: React.ReactNode,
  amplitude?: number,
  duration?: number,
  className?: string
}) => {
  return (
    <motion.div
      animate={{ y: [0, amplitude, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const GlowingPulse = ({ 
  children, 
  className = '',
  glowColor = 'rgba(59, 130, 246, 0.5)'
}: { 
  children: React.ReactNode,
  className?: string,
  glowColor?: string
}) => {
  return (
    <motion.div
      animate={{ 
        boxShadow: [
          `0 0 5px ${glowColor}`,
          `0 0 20px ${glowColor}`,
          `0 0 5px ${glowColor}`
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// New AI-related animations

export const NeuralNetworkAnimation = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network parameters
    const nodes: { x: number, y: number }[] = [];
    const numNodes = 30;
    const connectionDistance = 150;
    
    // Create random nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
      });
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(100, 149, 237, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 149, 237, 0.8)';
        ctx.fill();
        
        // Move nodes slightly
        node.x += (Math.random() - 0.5) * 0.5;
        node.y += (Math.random() - 0.5) * 0.5;
        
        // Keep nodes within bounds
        if (node.x < 0) node.x = 0;
        if (node.x > canvas.width) node.x = canvas.width;
        if (node.y < 0) node.y = 0;
        if (node.y > canvas.height) node.y = canvas.height;
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isMounted]);
  
  if (!isMounted) return null;
  
  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
};

export const DataFlowAnimation = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles
    const particles: { x: number, y: number, size: number, speed: number }[] = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1
      });
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 200, 255, 0.7)';
        ctx.fill();
        
        // Move particles from left to right
        particle.x += particle.speed;
        
        // Reset particles that go off screen
        if (particle.x > canvas.width) {
          particle.x = 0;
          particle.y = Math.random() * canvas.height;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isMounted]);
  
  if (!isMounted) return null;
  
  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
};

export const TextGenerationEffect = ({ texts, className = "", speed = 50 }: { texts: string[], className?: string, speed?: number }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(prev => prev.substring(0, prev.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      } else {
        const currentText = texts[currentTextIndex];
        setDisplayedText(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
        
        if (currentCharIndex >= currentText.length) {
          setIsDeleting(true);
          setCurrentCharIndex(0);
          setTimeout(() => {}, 1000); // Pause before deleting
        }
      }
    }, isDeleting ? speed / 2 : speed);
    
    return () => clearTimeout(timeout);
  }, [currentTextIndex, currentCharIndex, displayedText, isDeleting, texts, speed, isMounted]);
  
  if (!isMounted) return null;
  
  return <div className={className}>{displayedText}<span className="animate-blink">|</span></div>;
};

export const KnowledgeGraphAnimation = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  if (!isMounted) return null;

  // Sample knowledge graph data
  const nodes: Array<{ id: string; label: string; x: number; y: number }> = [
    // { id: 'docs', label: 'Documentation', x: 10, y: 50 },
    // { id: 'wiki', label: 'Wiki', x: 30, y: 20 },
    // { id: 'chat', label: 'Chat History', x: 70, y: 40 },
    // { id: 'email', label: 'Emails', x: 50, y: 80 },
    // { id: 'tickets', label: 'Support Tickets', x: 80, y: 70 },
    // { id: 'kb', label: 'Knowledge Base', x: 50, y: 50 },
  ];
  
  const connections: Array<{ from: string; to: string }> = [
    // { from: 'kb', to: 'docs' },
    // { from: 'kb', to: 'wiki' },
    // { from: 'kb', to: 'chat' },
    // { from: 'kb', to: 'email' },
    // { from: 'kb', to: 'tickets' },
  ];
  
  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {nodes.map(node => (
        <div 
          key={node.id}
          className="absolute flex flex-col items-center"
          style={{ 
            left: `${node.x}%`, 
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <motion.div 
            className={`w-12 h-12 rounded-full flex items-center justify-center ${node.id === 'kb' ? 'bg-blue-500' : 'bg-slate-700'}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
          >
            <span className="text-xs text-white font-medium">{node.id.toUpperCase()}</span>
          </motion.div>
          <motion.div 
            className="mt-2 text-sm text-slate-300 bg-slate-800/70 px-2 py-1 rounded"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + Math.random() * 0.5 }}
          >
            {node.label}
          </motion.div>
        </div>
      ))}
      
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {connections.map((conn, i) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          
          if (!fromNode || !toNode) return null;
          
          return (
            <motion.line
              key={`${conn.from}-${conn.to}`}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="rgba(100, 149, 237, 0.5)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export const PulsatingCircle = ({ 
  size = 200, 
  color = "rgba(59, 130, 246, 0.5)",
  duration = 4,
  className = '' 
}: { 
  size?: number,
  color?: string,
  duration?: number,
  className?: string 
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ opacity: 0.7, scale: 0.5 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: i * (duration / 3),
            ease: "easeOut"
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-600 bg-opacity-30 backdrop-blur-sm">
        <div className="text-white font-medium">AI Core</div>
      </div>
    </div>
  );
};

export const KnowledgeGraphNode = ({ 
  x, 
  y, 
  text, 
  size = 50,
  delay = 0
}: { 
  x: number, 
  y: number, 
  text: string,
  size?: number,
  delay?: number
}) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-lg bg-blue-900/80 text-white text-xs text-center p-2 shadow-lg backdrop-blur-sm border border-blue-500/30"
      style={{ 
        width: size, 
        height: size, 
        left: `${x}%`, 
        top: `${y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {text}
    </motion.div>
  );
};

export const ServiceFlowAnimation = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Service flow particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
      direction: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1.5 + 0.5,
        color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
          Math.random() * 100 + 100
        )}, 255, ${Math.random() * 0.5 + 0.3})`,
        direction: Math.random() * Math.PI * 2
      });
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw service flow paths
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)';
      ctx.lineWidth = 2;

      // Draw a grid pattern for service flow
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }

      ctx.stroke();

      // Draw and update particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Update position
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.direction = Math.PI - particle.direction;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.direction = -particle.direction;
        }

        // Draw connections between nearby particles
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 149, 237, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isMounted]);

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
};
