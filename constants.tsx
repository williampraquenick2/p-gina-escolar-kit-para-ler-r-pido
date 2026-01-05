
import React from 'react';
import { 
  BookOpen, 
  Brain, 
  CheckCircle, 
  Clock, 
  Download, 
  GraduationCap, 
  Heart, 
  Mail, 
  Monitor, 
  Printer, 
  Star, 
  Users 
} from 'lucide-react';

export const FAQ_DATA = [
  {
    question: "Como vou receber o Kit Grafismo Fonético?",
    answer: "O acesso é 100% digital. Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar todas as atividades em PDF."
  },
  {
    question: "O material serve para crianças com TDAH ou Autismo?",
    answer: "Sim! O método do Grafismo Fonético é altamente visual e estruturado, o que facilita o foco e a compreensão de crianças neurodivergentes."
  },
  {
    question: "Posso imprimir quantas vezes eu quiser?",
    answer: "Com certeza. O acesso é vitalício, então você pode baixar o arquivo e imprimir as atividades sempre que precisar."
  },
  {
    question: "Para qual idade é indicado?",
    answer: "O kit foi desenvolvido para crianças de 2 a 12 anos, cobrindo desde a estimulação precoce até o reforço escolar."
  }
];

export const FEATURES = [
  { icon: <Clock className="w-8 h-8 text-blue-500" />, text: "Apenas 10 minutos por dia" },
  { icon: <Brain className="w-8 h-8 text-green-500" />, text: "Estimula o desenvolvimento cognitivo" },
  { icon: <Star className="w-8 h-8 text-yellow-500" />, text: "Leitura até 5x mais rápido" },
  { icon: <Heart className="w-8 h-8 text-red-500" />, text: "Ideal para TDAH e Autismo" }
];
