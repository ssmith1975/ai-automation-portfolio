
import knowledgeBaseChatbotCoverImage from '@/assets/knowledge-base-chatbot/knowledge-base-chatbot-800x600.jpg';
import knowledgeBaseChatbotWorkflowThumbnail from "@/assets/knowledge-base-chatbot/lesson-19-workflow-knowledge-base-chatbot.png";
import knowledgeBaseChatbotMapping from "@/assets/knowledge-base-chatbot/lesson-19-knowledge-base-chatbot-mapping.png"
import knowledgeBaseChatbotSlack from "@/assets/knowledge-base-chatbot/lesson-19-knowledge-base-chatbot-slack.png"

const knowledgeBaseChatbotWorkflow = '/json-workflows/knowledge-base-chatbot/workflow-knowledge-base-chatbot-qdrant.json'

const knowledgeBaseChatbotContent = `
## Autonomous Knowledge Base Chatbot

The **Autonomous Knowledge Base Chatbot** is a production-grade AI solution designed for GreenBite Kitchen (a vegan fast-food restaurant) to handle internal and customer inquiries. By utilizing **Retrieval-Augmented Generation (RAG)**, the bot acts as a "smart librarian," answering questions about menu pricing, services, and company policies using only verified internal data.

## Problem Statement

Standard Large Language Models (LLMs) lack access to specific, up-to-date internal documentation, which often leads to "hallucinations"—generating convincing but false facts. For a business like GreenBite Kitchen, providing inaccurate information regarding menu prices or health policies can lead to customer dissatisfaction and operational errors.

## Current AS-IS Workflow

* **Manual Inquiry Handling:** Customers or employees must contact HR, management, or support teams for routine questions about prices and policies.  
* **Information Silos:** Critical data (FAQs, Menu Pricing) is stored in static PDF documents in Google Drive, making it difficult to search quickly.  
* **Inaccurate AI Responses:** Without RAG, standard AI bots provide general rules from public sources (like Wikipedia) rather than specific company standards.  
* **High Operational Load:** Experts and managers spend significant time repeating the same information, reducing their capacity for strategic work.

## Proposed Workflow

* **Automated Ingestion:** The system monitors Google Drive for new PDF documents (Menu, FAQ, Product Knowledge) and downloads them automatically.  
* **Data Preparation:** Documents are broken into "chunks" to ensure the AI finds specific paragraphs rather than entire pages.  
* **Vector Encoding:** Text chunks are converted into **embeddings** (numerical representations of meaning) and stored in a vector database.  
* **Trigger & Retrieval:** When a user asks a question via **Slack**, the agent converts the query into a vector and instantly retrieves the most relevant fragments from the vector store.  
* **Grounded Generation:** The LLM receives the question along with the retrieved fragments (the "lifeline") to formulate an answer based *only* on that verified context.  
* **Verified Response:** The final answer is sent back to the user in Slack, often including source references to ensure information verifiability.

![Proposed Workflow for Knowledge Base Chatbot](${knowledgeBaseChatbotMapping})
![Interaction with Chatbot Using Slack](${knowledgeBaseChatbotSlack})


## Development Process

* **Persona Configuration:** Defining the AI agent as a helpful GreenBite Kitchen assistant focused on core menu categories and nutritional standards.  
* **Knowledge Base Architecture:** Setting up **Supabase** (with pgvector) or **Qdrant** to store and search semantic data.  
* **RAG Implementation:** Building the n8n workflow to orchestrate the "Trigger-Search-Generate-Respond" sequence.  
* **Context Optimization:** Implementing **Cohere Reranking** and **Redis Chat Memory** to improve retrieval accuracy and conversation continuity.  
* **Automation Logic:** Designing a loop to process multiple documents simultaneously, checking against a database table to avoid duplicate uploads.

## Technology Used

* **n8n** (Workflow orchestration)  
* **Slack** (User communication interface)  
* **Qdrant / Supabase** (Vector databases for semantic search)  
* **GPT-4o-mini (via OpenRouter)** (LLM for grounded response generation)  
* **OpenAI Embeddings** (Translating text into computer-readable vectors)  
* **Redis** (Maintaining session-based chat memory)  
* **Cohere** (Reranking retrieved data for higher precision)

## Impact & ROI

* **Elimination of Hallucinations:** Answers are grounded strictly in company data, ensuring high reliability and relevance.  
* **24/7 Instant Access:** Employees and customers receive accurate answers immediately without waiting for human intervention.  
* **Reduced Support Workload:** Significantly lowers the burden on HR and support teams by automating FAQ management.  
* **Rapid Deployment:** Using pre-built API services like Pinecone Assistant can allow production-grade RAG solutions to launch in under 30 minutes.

## KPI Comparisons

* **88% Accuracy** for queries grounded in the provided internal knowledge base.  
* **Up to 12% Higher Precision** in retrieval when using optimized reranking systems.  
* **Near 94% Reduction** in manual lookup time for frequently asked policy or pricing questions.
`;

export {
    knowledgeBaseChatbotContent,
    knowledgeBaseChatbotCoverImage,
    knowledgeBaseChatbotWorkflow,
    knowledgeBaseChatbotWorkflowThumbnail,
    knowledgeBaseChatbotMapping       
}

