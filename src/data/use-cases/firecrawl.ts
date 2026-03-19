
import firecrawlCoverImage from "@/assets/firecrawl/firecrawl-800x600.jpg";
import firecrawlProposedMapping from "@/assets/firecrawl/lesson-18-firecrawl-proposed-workflow.png"
import firecrawlWorkflowMainThumbnail from "@/assets/firecrawl/lesson-18-workflow-firecrawl-main.png";
import firecrawlWorkflowSubThumbnail from "@/assets/firecrawl/lesson-18-workflow-firecrawl-sub.png"; 


// JSON Workflow file paths
const firecrawlWorkflowMain = '/json-workflows/firecrawl/workflow-firecrawl-main.json'
const firecrawlWorkflowSub = '/json-workflows/firecrawl/workflow-firecrawl-sub.json'


const firecrawlContent = `
## Automated Competitor Price Monitoring & Intelligence

The **Price Intelligence System** implements an automated pipeline for tracking competitor pricing and analyzing market positioning. The solution uses a modular architecture (Main \+ Sub-workflows) to retrieve product lists, scrape web data into LLM-ready formats using Firecrawl, and extract structured insights through an AI agent before updating a centralized dashboard.

## Problem Statement

Regular web pages contain significant "noise," such as HTML tags, advertising, and navigation bars, which prevents Large Language Models (LLMs) from effectively processing information. Traditional web scraping is often too complex for rapid deployment, and manual market monitoring is labor-intensive, leading to high operational costs and outdated pricing data.

## Current AS-IS Workflow

* **Manual Search:** Staff members manually visit various competitor websites to locate specific product pages.  
* **Manual Extraction:** Relevant data, such as current prices and stock status, is manually copied from the browser.  
* **Subjective Analysis:** Staff must manually distinguish between current sale prices and original "compare at" values, leading to potential errors.  
* **Manual Data Entry:** Extracted information and calculated price differences are typed into spreadsheets, a process that is often inconsistent and slow.

## Proposed Workflow

* **Data Source Integration:** The system automatically retrieves a list of competitor URLs and current internal prices from **Google Sheets**.  
* **Optimization Layer:** The workflow checks **Redis** for cached data (6-hour TTL) to avoid redundant scraping and save API resources.  
* **Clean Data Collection:** If not in cache, **Firecrawl** converts the target web page into clean, structured Markdown, removing all non-essential "noise".  
* **Intelligent Extraction:** An **Extraction Agent** (AI) uses specific rules to identify the actual price (ignoring "compare at" values) and stock status.  
* **Automated Analytics:** A script calculates the price difference in both currency and percentage relative to the internal price.  
* **Automated Reporting:** Updated analytics, including the competitor price and check date, are written back to **Google Sheets** for real-time strategic use.


![Proposed Workflow for Firecrawl Scraping](${firecrawlProposedMapping})


## Development Process

* **Logic Definition:** Establishing extraction rules for sale prices and stock availability (e.g., "Add to Cart" \= True).  
* **API Configuration:** Setting up **Firecrawl** methods (Scrape, Extract, and Map) to handle various website structures.  
* **n8n Workflow Design:** Building a modular system with sub-workflows to ensure efficiency and scalability.  
* **Caching Strategy:** Implementing **Redis** to optimize performance and reduce API costs.  
* **Data Scripting:** Writing JavaScript code to transform AI outputs into strictly formatted JSON for the final report.

## Technology Used

* **Firecrawl** (API for converting web pages to LLM-ready Markdown)  
* **n8n** (Workflow automation engine)  
* **Redis** (High-speed caching layer)   
* **Google Sheets** (Input source and reporting dashboard)  
* **OpenRouter / GPT-4o-mini** (LLM for intelligent data parsing)

## Impact & ROI

* **Elimination of Manual Labor:** Automates the tedious task of market monitoring, freeing staff for strategic analysis.  
* **Cost Efficiency:** Caching via Redis minimizes API calls, significantly reducing the cost per product check.  
* **Real-Time Agility:** Provides immediate data for dynamic pricing strategies, ensuring the company remains competitive every hour.

## KPI Comparisons

* **Near 76% Reduction** in time spent on manual web data collection.  
* **99% Consistency** in price extraction logic, eliminating human error in identifying sale prices.  
* **Zero Missing Fields** in product monitoring reports due to structured AI extraction.

`;

export { 
    firecrawlContent, 
    firecrawlCoverImage, 
    firecrawlWorkflowMain, 
    firecrawlWorkflowSub ,
    firecrawlWorkflowMainThumbnail,
    firecrawlWorkflowSubThumbnail
,
}; 
