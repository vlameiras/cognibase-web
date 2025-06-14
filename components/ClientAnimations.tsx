'use client';

import dynamic from 'next/dynamic';

export const TextGenerationEffect = dynamic(
  () => import("./animations").then(mod => mod.TextGenerationEffect),
  { ssr: false }
);

export const NeuralNetworkAnimation = dynamic(
  () => import("./animations").then(mod => mod.NeuralNetworkAnimation),
  { ssr: false }
);

export const DataFlowAnimation = dynamic(
  () => import("./animations").then(mod => mod.DataFlowAnimation),
  { ssr: false }
);

export const PulsatingCircle = dynamic(
  () => import("./animations").then(mod => mod.PulsatingCircle),
  { ssr: false }
);

export const KnowledgeGraphAnimation = dynamic(
  () => import("./animations").then(mod => mod.KnowledgeGraphAnimation),
  { ssr: false }
);

export const ServiceFlowAnimation = dynamic(
  () => import("./animations").then(mod => mod.ServiceFlowAnimation),
  { ssr: false }
);
