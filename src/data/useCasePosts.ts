import documentProcesingContent from "./markdown-use-cases/use-case-document-processing";
import documentProcessingImage from "@/assets/document-processing-800x600.jpg"

export interface UseCasePost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;

}

export const useCasePosts: UseCasePost[] = [
  {
    id: "document-processing",
    title: "Document Processing with Workflow Automations",
    excerpt: "Using workflow automations to reduce pain-points, improve procesing efficiency, and reducing costs",
    content: documentProcesingContent,
    date: "2026-02-09",
    category: "USE CASES",
    image: documentProcessingImage,
  
  },

];