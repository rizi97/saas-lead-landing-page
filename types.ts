
export interface FormData {
  name: string;
  email: string;
  projectName: string;
  description: string;
  stage: 'idea' | 'mvp' | 'live' | '';
}

export interface FAQItem {
  question: string;
  answer: string;
}
