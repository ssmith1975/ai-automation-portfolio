import useCaseAsIsProcessMapping from "@/assets/use-case-AS-IS-Process-Mapping.jpg";
import useCaseProposedMapping from "@/assets/use-case-Proposed-Process-Mapping.jpg";


// Document Processing Markup Content
const documentProcesingContent = `
## Invoice Processing System

   
The **Document Processing** collects client details of leads and creates proposals for clients to review and return a confirmation to a company's Sales representative.  The Sales team responds to client clarifications and requests for pricing changes.  
 

## Problem Statement

   
Currently, the process is highly manual, requiring sales representatives to collect client details from a *Fillout* web form, manually copy data into spreadsheets, and prepare proposals from PDF templates.  
   
It costs the company $30/hour for one specialist to complete this 3 hour task overall. It typically takes up to 10 minutes to produce a proposal PDF file. It’s not uncommon for contract errors, such as incorrect data entry, to occur. Contract status is unclear.  
 

## Current Documentation Processing As-Is Workflow
 

* Lead expresses interest  
* Sales rep manually collects client details  
* Lead data is copied into spreadsheet  
* Sales rep manually prepares proposal using a template  
* Proposal is sent via email as a PDF  
* Client requests clarification or pricing changes (optional call)  
* Sales rep waits for client confirmation via email  
* Upon confirmation, sales rep notifies internal team

![AS-IS Process Mapping](${useCaseAsIsProcessMapping})

__Miro Link:__
[AS-IS Processing Map](https://miro.com/app/live-embed/uXjVGH3A3Jo=/?focusWidget=3458764658909560917&embedMode=view_only_without_ui&embedId=154104003484)


## Proposed Document Processing Workflow

   
The proposed workflow helps to eliminate the pain points by implementing AI automation to do the following:   
 

* Processing details from **Fillout** web form and stores the data into a spreadsheet.  
* Creating PDF proposals based on templates for package plans: Starter, Growth, and Premium Plans.  
* Emailing the client the proposal automatically.  
* Notifying the Sales manager when the client wants more information.

![Proposed Process Mapping](${useCaseProposedMapping})

__Miro Link:__
[Proposed Processg Mapping](https://miro.com/app/live-embed/uXjVGH3A3Jo=/?focusWidget=3458764658909560502&embedMode=view_only_without_ui&embedId=464995172269)


## Development Process
 

* Business Process Mapping \- Creating AS-IS workflow diagram  
* Discovery Interview \- Gather requirements  
* Solution Design Brief (SDB) \- Propose a solution  
* Workflow Design  
* Solution Development  
* Security Compliance  
* Building Monitoring Dashboard  
* Documentation \- design specs  
* ROI and KPI  
* Presentation Demo  
* Handoff


## Technology Used


* Fillout \- captures  client details  
* n8n \- runs workflow automation for document processing, error handling, and logging  
* PDF.co \- generates proposals from PDF templates  
* Google Sheets \- stores client details, monitoring dashboards, and ROI calculations  
* Google Drive \- stores PDF templates and generated proposals  
* Google Docs \- stores documentations  
* AirTable \- captures error data and logging  
* ChatGPT (Open Router) \- classifies error types for logging  
* Slack \- notifies Sales team  
* Gmail \- sends email and proposal PDF to client


## Benefits


### Impact & ROI   

* Potentially saves $1140.00 in one month  
* Pays for itself in 1.8 months  
* Can possibly save 585.00% in one mon


### KPI Comparisons


* Reduce Proposal (PDF) creation time by 80%  
* Increase orders per employee/day by 400%  
* Practically eliminate data entry errors such as duplications and missing fields


## Security Considerations


* Protecting sensitive data such as client names and email addresses  
* Securing API Keys using key management systems in n8n  
* Implementing access controls on AI workflows, spreadsheets, databases, and generated documents

`;

export default documentProcesingContent;