
import aiVoiceAgentCoverImage from "@/assets/ai-voice-agent/lesson-17-ai-voice-agent-800x600.jpg";
import aiVoiceAgentDialogue from "@/assets/ai-voice-agent/lesson-17-retell-ai-voice-dialogue.png";
import aiVoiceAgentList from "@/assets/ai-voice-agent/lesson-17-retell-ai-voice-web-list.png";
import aiVoiceAgentDashboard from "@/assets/ai-voice-agent/lesson-17-retell-ai-voice-web-dashboard.png"
import aiVoiceAgentWorkflowThumbnail from "@/assets/ai-voice-agent/lesson-17-workflow-ai-voice-agent.png"


// JSON Workflow path for AI Voice Agent links
const aiVoiceAgentWorkflow =  "/json-workflows/ai-voice-agent/workflow-ai-voice-agent.json";

// Markdown content for AI Voice Agent Use Case
const aiVoiceAgentContent = `
## AI Voice Lead Qualification Agent

The **AI Voice Agent** handles inbound lead qualification for automation project inquiries. It automates the intake process by engaging callers in natural conversation, extracting critical project data, and instantly categorizing prospects based on budget and timeline before syncing them to a database.

## Problem Statement

Traditional lead intake often relies on manual processing, which is prone to data entry errors and inconsistent lead scoring. Without automation, lead qualification depends on staff availability, potentially leading to missed opportunities during off-hours and delayed follow-ups for high-value prospects.

## Current AS-IS Workflow

* **Inbound Call:** Staff member answers inquiries manually.  
* **Manual Qualification:** Staff asks for details (name, budget, timeline) without a standardized script.  
* **Manual Assessment:** Staff determines lead quality based on subjective judgment.  
* **Data Entry:** Information is manually typed into a spreadsheet or CRM, often resulting in errors.

## Proposed Workflow

* **AI Intake:** An automated voice agent ("Sally") answers calls 24/7 with a friendly, professional tone.  
* **Data Extraction:** The agent uses a GPT-powered engine to naturally capture name, email, company, and specific project requests.  
* **Automated Qualification:** Leads are instantly scored as "hot," "mid," or "low" based on defined budget (e.g., \>$5k) and timeline thresholds.  
* **Automated Sync:** Extracted data is sent via an **n8n webhook** to a centralized database.  
* **Centralized Storage:** Leads are stored in a **Supabase** table and displayed on a real-time dashboard for immediate sales team follow-up.

![AI Voice Agent Dialogue](${aiVoiceAgentDialogue})
![AI Voice Agent Website Dashboard](${aiVoiceAgentDashboard})
![AI Voice Agent Website List Display](${aiVoiceAgentList})


## Development Process

* **Logic Definition:** Establishing lead qualification thresholds (Hot, Mid, Low).  
* **Agent Persona Configuration:** Designing "Sally" as a calm, curious, and friendly inbound agent.  
* **Workflow Automation:** Building the **n8n** bridge to receive lead data from Retell AI.  
* **Database Schema Design:** Setting up the **Supabase** table with specific constraints for lead urgency.  
* **Dashboard Integration:** Deploying a **v0** interface for sales representatives to monitor and filter new leads.

## Technology Used

* **Retell AI** (Voice agent platform)  
* **GPT-4.1-mini** (LLM for conversation and extraction)  
* **n8n** (Workflow automation engine)   
* **Supabase** (Relational database storage)  
* **v0 by Vercel** (Leads Dashboard UI)

## Impact & ROI

* **24/7 Availability:** Qualifies leads at any time, ensuring no high-value inquiries are lost during off-hours.  
* **Eliminates Manual Data Entry:** Automates the transcription and entry process, removing the $30/hour cost associated with manual intake tasks.  
* **Instant Response Readiness:** Categorizes "hot leads" immediately, allowing sales teams to prioritize high-budget projects within seconds of the call ending.

## KPI Comparisons

* **100% Consistency** in lead qualification logic.  
* **Near 100% Reduction** in time spent on manual lead data entry.  
* **Zero Missing Fields** for required contact information (Email, Name, Requests)

`;


export {
    aiVoiceAgentCoverImage,
    aiVoiceAgentDialogue,
    aiVoiceAgentList,
    aiVoiceAgentDashboard,
    aiVoiceAgentWorkflowThumbnail,
    aiVoiceAgentWorkflow,
    aiVoiceAgentContent
};