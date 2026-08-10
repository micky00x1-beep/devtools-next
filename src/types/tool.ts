export type Tool = {
  title: string;
  description: string;
  href: string;

  seoTitle: string;
  seoDescription: string;

  seoContent: {
    intro: string;
    whatIs: string;
    howTo: string[];
    useCases: string[];
    faq: {
      question: string;
      answer: string;
    }[];
  };
};
