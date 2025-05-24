import type { IconType } from 'react-icons';

export interface Animal {
  id: number;
  nome: string;
  descricao: string[];
}

export interface Answers {
  id: number;
  pergunta: string;
  resposta: string;
}

export interface StatCard {
  id: number;
  title: string;
  icon?: IconType;
  value: number | string;
  color?: string;
}
