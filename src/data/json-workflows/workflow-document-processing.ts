export const documentProcessingWorkflow = {
  "name": "Document Processing - Clean Up",
  "nodes": [
    {
      "parameters": {
        "content": "## Trigger from For Submission ",
        "height": 288,
        "color": 4
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        416,
        2208
      ],
      "typeVersion": 1,
      "id": "b7b0eef1-6716-4006-a75c-a1223a73ab53",
      "name": "Sticky Note"
    },
    {
      "parameters": {
        "path": "543c0982-4ee3-4685-914a-9a3bc8b623d8"
      },
      "type": "n8n-nodes-preview-fillout.filloutTrigger",
      "typeVersion": 1,
      "position": [
        480,
        2304
      ],
      "id": "bea0ae79-6949-4b85-a83d-a8f80479638e",
      "name": "Fillout Trigger",
      "webhookId": "543c0982-4ee3-4685-914a-9a3bc8b623d8",
      "notesInFlow": true,
      "credentials": {},
      "onError": "continueRegularOutput",
      "notes": "Error occurred upon receiving data from webhook."
    },
    {
      "parameters": {
        "content": "## Add additional fields for package plan\n",
        "height": 288,
        "width": 208,
        "color": 6
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1072,
        2176
      ],
      "typeVersion": 1,
      "id": "6653aee3-70de-4bd5-841f-b9b84ac87b89",
      "name": "Sticky Note1"
    },
    {
      "parameters": {
        "content": "### Get proposal generated file from PDF.co   ",
        "height": 416,
        "width": 224,
        "color": 7
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        3664,
        2096
      ],
      "typeVersion": 1,
      "id": "17ed412b-e2b0-4be8-abc9-8c05928c44cb",
      "name": "Sticky Note2"
    },
    {
      "parameters": {
        "content": "## Set status -\n### *\"Preparing Slack messaging\"*",
        "height": 288,
        "color": 6
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        2416,
        960
      ],
      "typeVersion": 1,
      "id": "44178d3f-93f5-4987-8aae-021eb2858a93",
      "name": "Sticky Note3"
    },
    {
      "parameters": {
        "content": "## Enter data into spreadsheet",
        "height": 288,
        "width": 272,
        "color": 6
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1392,
        2176
      ],
      "typeVersion": 1,
      "id": "7466199e-039f-4f62-b0eb-49770e9bead9",
      "name": "Sticky Note4"
    },
    {
      "parameters": {
        "content": "Is *\"I'd like to learn more before deciding. Could your sales team contact me?\"* selected?",
        "height": 272,
        "width": 224,
        "color": 5
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1696,
        2176
      ],
      "typeVersion": 1,
      "id": "909d8dc4-8bfc-4884-bb9b-1b5d516a31de",
      "name": "Sticky Note10"
    },
    {
      "parameters": {
        "content": "## Generate Proposal",
        "height": 544,
        "width": 1824,
        "color": 3
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        2448,
        2064
      ],
      "typeVersion": 1,
      "id": "85ff9376-0fcd-4552-9966-57702df2e3dd",
      "name": "Sticky Note11",
      "disabled": true
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict",
            "version": 3
          },
          "conditions": [
            {
              "id": "b436f59c-c430-48fd-8f64-082ff3f62f39",
              "leftValue": "={{ $('Setup fields for processing').item.json.learnMore }}",
              "rightValue": true,
              "operator": {
                "type": "boolean",
                "operation": "equals"
              }
            }
          ],
          "combinator": "and"
        },
        "options": {}
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 2.3,
      "position": [
        1744,
        2272
      ],
      "id": "bd9242d6-3c84-4a49-93d6-9d6988550a7b",
      "name": "If Checkbox Selected"
    },
    {
      "parameters": {
        "operation": "appendOrUpdate",
        "documentId": {
          "__rl": true,
          "value": "10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI",
          "mode": "list",
          "cachedResultName": "Data Processing ",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Details",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI/edit#gid=0"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Email": "={{ $json.repEmail }}",
            "Name": "={{ $json.repName }}",
            "Plan": "={{ $json.packagePlan }}",
            "Form Submisison Timestamp": "={{ $json.submissionTime }}",
            "Company Name": "={{ $json.companyName }}",
            "Company Website": "={{ $json.companyWebsite }}",
            "Industry": "={{ $json.industry }}",
            "Submission Id": "={{ $json.submissionId }}",
            "Last Form Submission Timestamp": "={{ $json.lastUpdatedAt }}",
            "Created Timestamp": "={{ $now.toISO() }}",
            "Last Updated Timestamp": "={{ $now.toISO() }}",
            "Status": "={{ !$json.learnMore ? \"Plan Selected\":\"Consultation Requested\" }}\n",
            "Workflow Status": "Saving client details"
          },
          "matchingColumns": [
            "Email"
          ],
          "schema": [
            {
              "id": "Name",
              "displayName": "Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Email",
              "displayName": "Email",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Company Name",
              "displayName": "Company Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Company Website",
              "displayName": "Company Website",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Industry",
              "displayName": "Industry",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Status",
              "displayName": "Status",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Plan",
              "displayName": "Plan",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Proposal",
              "displayName": "Proposal",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Workflow Status",
              "displayName": "Workflow Status",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Submission Id",
              "displayName": "Submission Id",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Form Submisison Timestamp",
              "displayName": "Form Submisison Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Last Form Submission Timestamp",
              "displayName": "Last Form Submission Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Created Timestamp",
              "displayName": "Created Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Last Updated Timestamp",
              "displayName": "Last Updated Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        1472,
        2288
      ],
      "id": "4e6fbaa2-9e61-4b86-ba56-3cc68b185b4d",
      "name": "Add Client Details Record to Google Sheet",
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "Error occurred while saving client details."
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=workflowStatus",
              "value": "=Validation passed",
              "type": "string"
            }
          ]
        },
        "includeOtherFields": true,
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        1120,
        2288
      ],
      "id": "f8441a81-9a6d-4ad5-a5f4-2c373b1ba094",
      "name": "Setup fields for processing"
    },
    {
      "parameters": {
        "content": "### Generate proposal PDF from template",
        "height": 416,
        "width": 224,
        "color": 7
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        3056,
        2096
      ],
      "typeVersion": 1,
      "id": "94e685c7-9625-4004-ac41-12c02a5b243b",
      "name": "Sticky Note5"
    },
    {
      "parameters": {
        "content": "### Save proposal PDF to storage",
        "height": 416,
        "width": 208,
        "color": 7
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        3968,
        2096
      ],
      "typeVersion": 1,
      "id": "6eddf54e-b092-4135-a78b-aa35ade04b8f",
      "name": "Sticky Note6"
    },
    {
      "parameters": {
        "content": "### Find proposal PDF template",
        "height": 416,
        "width": 208,
        "color": 7
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        2528,
        2096
      ],
      "typeVersion": 1,
      "id": "c9aa93ef-22d3-4bdd-8137-6895f302c9a3",
      "name": "Sticky Note7"
    },
    {
      "parameters": {
        "content": "## Update record to add proposal PDF file link -\n### set workflow status to *\"Proposal complete*\"",
        "height": 448,
        "width": 256,
        "color": 6
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        4368,
        1984
      ],
      "typeVersion": 1,
      "id": "4e715348-d1f4-4173-8c55-02b655e9629f",
      "name": "Sticky Note12"
    },
    {
      "parameters": {
        "operation": "update",
        "documentId": {
          "__rl": true,
          "value": "10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI",
          "mode": "list",
          "cachedResultName": "Data Processing ",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Details",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI/edit#gid=0"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Email": "={{ $('Setup fields for processing').item.json.repEmail }}",
            "Last Updated Timestamp": "={{ $now.toISO() }}",
            "Proposal": "==HYPERLINK(\"{{ $json.webViewLink }}\", \"{{ $json.name }}\")\n",
            "Workflow Status": "Emailing proposal to client"
          },
          "matchingColumns": [
            "Email"
          ],
          "schema": [
            {
              "id": "Name",
              "displayName": "Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Email",
              "displayName": "Email",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Company Name",
              "displayName": "Company Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Company Website",
              "displayName": "Company Website",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Industry",
              "displayName": "Industry",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Status",
              "displayName": "Status",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Plan",
              "displayName": "Plan",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Proposal",
              "displayName": "Proposal",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Workflow Status",
              "displayName": "Workflow Status",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Submission Id",
              "displayName": "Submission Id",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Form Submisison Timestamp",
              "displayName": "Form Submisison Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Last Form Submission Timestamp",
              "displayName": "Last Form Submission Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Created Timestamp",
              "displayName": "Created Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Last Updated Timestamp",
              "displayName": "Last Updated Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "row_number",
              "displayName": "row_number",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "number",
              "canBeUsedToMatch": true,
              "readOnly": true,
              "removed": true
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        4432,
        2192
      ],
      "id": "a9871d6c-7158-4197-b05a-bcd72dd52b9f",
      "name": "Update  Google Sheet record",
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "Error while updating record with proposal link"
    },
    {
      "parameters": {
        "content": "## Email proposal to client",
        "height": 448,
        "width": 224,
        "color": 6
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        4720,
        1984
      ],
      "typeVersion": 1,
      "id": "26dca25b-2aa4-46d2-acc3-5864958065a4",
      "name": "Sticky Note13"
    },
    {
      "parameters": {
        "sendTo": "={{ $('Setup fields for processing').item.json.repEmail }}",
        "subject": "The Company - Lead Proposal",
        "emailType": "text",
        "message": "=\nDear {{$('Setup fields for processing').item.json.repName}}\nThank you for reaching out to [Company name] and selecting our {{ $('Setup fields for processing').item.json.packagePlan }} package.\n\nWe're excited to have you on board! Our team has received your application and will be in touch shortly to discuss the next steps. Your success is our priority, and we're committed to delivering results that exceed your expectations.\n\nPlease find your proposal here: {{ $('Upload PDF file to Google Drive').item.json.webViewLink }}\n\nTo move forward, schedule a call with our team to finalize your plan: 📅 Book Your Call: [calendar_link]\n\nIf you have any questions in the meantime, feel free to reply to this email\n\nWe look forward to speaking with you soon!",
        "options": {
          "senderName": "Document Processing Team",
          "replyTo": "no-reply@thecompany.example.com"
        }
      },
      "type": "n8n-nodes-base.gmail",
      "typeVersion": 2.2,
      "position": [
        4784,
        2176
      ],
      "id": "dab4b94c-ca88-4d0f-b82d-f0ab959e1ba7",
      "name": "Send a message",
      "webhookId": "1292d4b6-3ea3-4c16-859f-8d1c2442ae4a",
      "retryOnFail": true,
      "maxTries": 2,
      "waitBetweenTries": 5000,
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "Error while sending email proposal PDF file"
    },
    {
      "parameters": {
        "content": "## Notify Sales manager",
        "height": 288,
        "color": 6
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        2816,
        960
      ],
      "typeVersion": 1,
      "id": "2f148f24-b263-407d-89f8-ff6c848d0f2e",
      "name": "Sticky Note14"
    },
    {
      "parameters": {
        "authentication": "oAuth2",
        "select": "channel",
        "channelId": {
          "__rl": true,
          "value": "C0A9A3WJQ13",
          "mode": "list",
          "cachedResultName": "internship-document-processing-output"
        },
        "text": "=💡 Consultation Request \n\nHello manager,\n\nLead wants to know more about our product before choosing a package plan.\n\nRepresentative's Name: {{ $('Setup fields for processing').item.json.repName }}\nRepresentative's Email: {{ $('Setup fields for processing').item.json.repEmail }}\n\nRepressentative's Company Name: {{ $('Setup fields for processing').item.json.companyName }}\nCompany Website: {{ $('Setup fields for processing').item.json.companyWebsite }}\n\n",
        "otherOptions": {}
      },
      "type": "n8n-nodes-base.slack",
      "typeVersion": 2.4,
      "position": [
        2880,
        1072
      ],
      "id": "389d58bc-b204-451b-851c-298a84de84ff",
      "name": "Send a Slack message to Manager",
      "webhookId": "e5c618c6-3de9-4e9f-a05d-553a4e98dbc1",
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "Error while sending slack notification to manager."
    },
    {
      "parameters": {
        "content": "# Case 1: Document Processing Workflow Design\n## AI Automations\nSamantha Smith\n1/15/2026\n\n### Purpose\nPart 1\n- Accept client details from web form \n(https://forms.fillout.com/t/8N7RWhu1YDus)\n- Store client details into spreadsheet\n- Prepare proposal PDF\n- Send proposal PDF to client\n\nPart 2\n- Accept confirmation from web form\n- Update spread sheet\n- If accepted, notify internal team\n\n\n### *Changes*\n- Configure Fillout form to allow users to edit their own details, \nsuch as package plan, and re-submit. The workflow should detect \nthe submission through webhook.\n- Include a link in the email containing the proposal that will direct\nclient to a chatbot in case they need more clarifications.",
        "height": 3360,
        "width": 5712,
        "color": 5
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        0,
        0
      ],
      "typeVersion": 1,
      "id": "fa0cdaaf-3e41-4e5d-b303-e8eae988ad66",
      "name": "Sticky Note17"
    },
    {
      "parameters": {
        "jsCode": "// Get raw JSON payload from form input\nconst items = $input.all();\n\n// Extraxt properties that we want\nconst {\n  submissionId, \n  submissionTime, \n  lastUpdatedAt, \n  questions} = items[0]?.json;\n\nlet result = {};\n\n// Map form field questions to new JSON properties\nfor(const [_, val] of Object.entries(questions)){\n   switch (val.name) {\n       case \"Company Name\":\n          result[\"companyName\"] = val.value || \"\";\n          break;\n       case \"Company Website\":\n         result[\"companyWebsite\"] = val.value || \"\";\n         break;        \n       case \"Industry\":\n         result[\"industry\"] = val.value || \"\";\n         break;\n       case \"Representative's Name\":\n         result[\"repName\"] = val.value || \"\";\n         break;\n       case \"Representative's Email\":\n         result[\"repEmail\"] = val.value || \"\";\n         break;\n       case \"Pick your Plan\":\n         \n         result[\"plan\"] = val.value || \"\";\n  \n           if(result.plan === \"starter\") {\n             \n             result[\"planAlias\"] = \"Starter\";\n             result[\"packagePlan\"] = \"Starter Plan\";\n             result[\"planTemplate\"] = \"Starter Template.pdf\";\n             result[\"proposalFilenamePrefix\"] = \"Starter_Plan\";\n             \n           } else if(result.plan === 'growth') {\n             \n             result[\"planAlias\"] = \"Growth\";\n             result[\"packagePlan\"] = \"Growth Plan\";\n             result[\"planTemplate\"] = \"Growth Template.pdf\";\n             result[\"proposalFilenamePrefix\"] = \"Growth_Plan\";  \n             \n           } else if(result.plan === 'premium') {\n             \n             result[\"planAlias\"] = \"Premium\";\n             result[\"packagePlan\"] = \"Premium Plan\";\n             result[\"planTemplate\"] = \"Premium Template.pdf\";\n             result[\"proposalFilenamePrefix\"] = \"Premium_Plan\";\n             \n           }\n\n       \n         break;\n       case \"I'd like to learn more before deciding. Could your sales team contact me?\":\n         result[\"learnMore\"] = val.value || false;\n         break;\n    \n     default:        \n         break;\n   }\n}\n\n /// Validation\n   // Check company name\n   if(!result.companyName) {\n     throw new Error('Invalid representative name');\n    \n   }\n\n   // Check repName\n   if(!result.repName) {\n     throw new Error('Missing representative name');\n   }\n\n   // Check representative name length\n    if(result.repName.length < 2) {\n      throw new Error('Invalid representative name');\n    }\n\n   // Check email format\n   if(!validateEmail(result.repEmail)) {\n     throw new Error('Invalid email format');\n   } \n\n   // Check if package selected when \"learn more\" checkbox is unchecked\n   if(!result.learnMore && !result.plan) {\n    throw new Error ('Missing package plan selection');    \n   }\n\n/// Transform input\n// Capitalize first letter in words (ie. \"hello world\" --> \"Hello World\")\nresult.companyName = capitalizeWordsRegex(result.companyName);\nresult.repName = capitalizeWordsRegex(result.repName);\n\n// Convert date format of timestamps (UTC)\nconst submissionTimeUTC = DateTime.fromISO(submissionTime); //DateTime.fromISO(submissionTime).toUTC();\nconst lastUpdatedAtUTC  = DateTime.fromISO(lastUpdatedAt);\n\n\n// Add workflow execution data\n$execution.customData.set(\"submissionId\", \"xxxTESTxxx\");\n\n\n// Return JSON\nreturn [ {\n  json: {\n     ...result, \n    submissionId, \n    submissionTime:submissionTimeUTC, \n    lastUpdatedAt: lastUpdatedAtUTC \n  }      \n}];\n\n/**\n * Validates an email address format using a regular expression.\n * @param {string} email The email address to validate.\n * @returns {boolean} True if the format is valid, false otherwise.\n */\nfunction validateEmail(email) {\n  // Pattern checks for:\n  // ^[a-zA-Z0-9._%+-]+ : username part\n  // @                 : literal \"@\" symbol\n  // [a-zA-Z0-9.-]+    : domain name\n  // \\\\.[a-zA-Z]{2,}$  : top-level domain (e.g., .com, .org) with at least 2 letters\n  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;\n  return emailPattern.test(email);\n}\n\n/**\n * Capitalizes the first letter of each word in a string\n * @param {string} sentence to transform.\n * @returns {string} formatted string.\n */\nfunction capitalizeWordsRegex(sentence) {\n  // The regex /\\b\\w/g matches the first letter of each word\n  // \\b matches a word boundary, \\w matches a word character, and g is for a global search\n  return sentence.replace(/\\b\\w/g, char => char.toUpperCase());\n}\n"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        880,
        2304
      ],
      "id": "524a77b2-ac6b-407b-8be5-94a7c5871b8b",
      "name": "Get Form fields",
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "An error occurred while getting form fields"
    },
    {
      "parameters": {
        "content": "## Process form fields\n",
        "height": 288,
        "width": 192,
        "color": 6
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        832,
        2176
      ],
      "typeVersion": 1,
      "id": "5ed15ab2-9943-4750-84ae-f8d260d0748f",
      "name": "Sticky Note9"
    },
    {
      "parameters": {
        "content": "\n### Tech Implemented\n* Fillout form and webhook\n* Google Sheets\n* Google Drive\n* Google Email\n* PDF.co\n* HTTP Request\n* Slack\n* Error Handling\n* Logging\n",
        "height": 272,
        "width": 368,
        "color": 5
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        608,
        208
      ],
      "id": "39b7d061-87ff-42d9-b08b-bbeb55fc1670",
      "name": "Sticky Note24"
    },
    {
      "parameters": {
        "operation": "appendOrUpdate",
        "documentId": {
          "__rl": true,
          "value": "10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI",
          "mode": "list",
          "cachedResultName": "Data Processing ",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Details",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI/edit#gid=0"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Email": "={{ $('Setup fields for processing').item.json.repEmail }}",
            "Last Updated Timestamp": "={{ $now.toISO() }}",
            "Workflow Status": "Preparing Slack messaging"
          },
          "matchingColumns": [
            "Email"
          ],
          "schema": [
            {
              "id": "Name",
              "displayName": "Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Email",
              "displayName": "Email",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Company Name",
              "displayName": "Company Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Company Website",
              "displayName": "Company Website",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Industry",
              "displayName": "Industry",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Status",
              "displayName": "Status",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Plan",
              "displayName": "Plan",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Proposal",
              "displayName": "Proposal",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Workflow Status",
              "displayName": "Workflow Status",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Submission Id",
              "displayName": "Submission Id",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Form Submisison Timestamp",
              "displayName": "Form Submisison Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Last Form Submission Timestamp",
              "displayName": "Last Form Submission Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Created Timestamp",
              "displayName": "Created Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Last Updated Timestamp",
              "displayName": "Last Updated Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        2480,
        1088
      ],
      "id": "5f9ce705-28be-46a5-a927-f35f9eb503c3",
      "name": "Update spreadsheet workflow status - slack",
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "Error occurred while updating spreadsheet consultation status"
    },
    {
      "parameters": {
        "operation": "update",
        "documentId": {
          "__rl": true,
          "value": "10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI",
          "mode": "list",
          "cachedResultName": "Data Processing ",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Details",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI/edit#gid=0"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Email": "={{ $('Setup fields for processing').item.json.repEmail }}",
            "Workflow Status": "Preparing proposal PDF",
            "Last Updated Timestamp": "={{ $now.toISO() }}"
          },
          "matchingColumns": [
            "Email"
          ],
          "schema": [
            {
              "id": "Name",
              "displayName": "Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Email",
              "displayName": "Email",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Company Name",
              "displayName": "Company Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Company Website",
              "displayName": "Company Website",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Industry",
              "displayName": "Industry",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Status",
              "displayName": "Status",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Plan",
              "displayName": "Plan",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Proposal",
              "displayName": "Proposal",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Workflow Status",
              "displayName": "Workflow Status",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Submission Id",
              "displayName": "Submission Id",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Form Submisison Timestamp",
              "displayName": "Form Submisison Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Last Form Submission Timestamp",
              "displayName": "Last Form Submission Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Created Timestamp",
              "displayName": "Created Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Last Updated Timestamp",
              "displayName": "Last Updated Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "row_number",
              "displayName": "row_number",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "number",
              "canBeUsedToMatch": true,
              "readOnly": true,
              "removed": true
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        2112,
        2288
      ],
      "id": "88821b81-023d-4286-b570-a2c9c2dbc909",
      "name": "Update spreadsheet workflow status - proposal",
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "Error while updating workflow status for proposal"
    },
    {
      "parameters": {
        "content": "## Set status -\n### *\"Preparing proposal PDF\"* ",
        "height": 288,
        "color": 6
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        2048,
        2176
      ],
      "typeVersion": 1,
      "id": "344088f4-cde3-4774-a205-962700bb9a83",
      "name": "Sticky Note23"
    },
    {
      "parameters": {
        "content": "## Set status -\n### set workflow status to *\"Proposal complete*\"",
        "height": 448,
        "width": 256
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        5040,
        1984
      ],
      "typeVersion": 1,
      "id": "af42fd36-0737-4a68-a85a-4aa3a113aab4",
      "name": "Sticky Note26"
    },
    {
      "parameters": {
        "operation": "update",
        "documentId": {
          "__rl": true,
          "value": "10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI",
          "mode": "list",
          "cachedResultName": "Data Processing ",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Details",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI/edit#gid=0"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Email": "={{ $('Setup fields for processing').item.json.repEmail }}",
            "Last Updated Timestamp": "={{ $now.toISO() }}",
            "Workflow Status": "Proposal completed"
          },
          "matchingColumns": [
            "Email"
          ],
          "schema": [
            {
              "id": "Name",
              "displayName": "Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Email",
              "displayName": "Email",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Company Name",
              "displayName": "Company Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Company Website",
              "displayName": "Company Website",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Industry",
              "displayName": "Industry",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Status",
              "displayName": "Status",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Plan",
              "displayName": "Plan",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Proposal",
              "displayName": "Proposal",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Workflow Status",
              "displayName": "Workflow Status",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Submission Id",
              "displayName": "Submission Id",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Form Submisison Timestamp",
              "displayName": "Form Submisison Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Last Form Submission Timestamp",
              "displayName": "Last Form Submission Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Created Timestamp",
              "displayName": "Created Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Last Updated Timestamp",
              "displayName": "Last Updated Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "row_number",
              "displayName": "row_number",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "number",
              "canBeUsedToMatch": true,
              "readOnly": true,
              "removed": true
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        5136,
        2160
      ],
      "id": "97128ec8-f5f5-4d95-977b-6885ec930fd4",
      "name": "Update spreadsheet workflow status - proposal completed",
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "Error while updating workflow status to \"proposal complete\""
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        1120,
        2592
      ],
      "id": "217cf5d5-d66f-42d9-a5e9-bcf81b60d3fa",
      "name": "Stop and Error - Get Form fields"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        1696,
        2608
      ],
      "id": "b89e97d1-f9ee-4e57-970b-9537d52788f2",
      "name": "Stop and Error - Add Client Details Record to Google Sheet"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        2752,
        1312
      ],
      "id": "5e626d5b-846e-4e23-9e68-64b13349498e",
      "name": "Stop and Error - Update spreadsheet workflow status - slack"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        2352,
        2560
      ],
      "id": "57719a93-ec3d-439b-b021-c5a79c0f2882",
      "name": "Stop and Error - process"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        3152,
        1312
      ],
      "id": "dfe9d7cb-35c0-4ef9-9cb8-247632fe1fd7",
      "name": "Stop and Error - Send a Slack message to Manager"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        2784,
        2944
      ],
      "id": "43f4c314-ca0d-4ecf-a6f2-cff3e1d3d488",
      "name": "Stop and Error - Search Google Drive for PDF template"
    },
    {
      "parameters": {
        "resource": "fileFolder",
        "queryString": "={{ $('Setup fields for processing').item.json.planTemplate }}",
        "limit": 1,
        "filter": {
          "folderId": {
            "__rl": true,
            "value": "1HWyngMD4XBISk2LS1zi3k9G414mgBz6E",
            "mode": "list",
            "cachedResultName": "Templates",
            "cachedResultUrl": "https://drive.google.com/drive/folders/1HWyngMD4XBISk2LS1zi3k9G414mgBz6E"
          }
        },
        "options": {
          "fields": [
            "name",
            "webViewLink",
            "id"
          ]
        }
      },
      "type": "n8n-nodes-base.googleDrive",
      "typeVersion": 3,
      "position": [
        2576,
        2272
      ],
      "id": "7c28098f-e740-4e3e-ae8b-92011825e840",
      "name": "Search Google Drive for PDF template",
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "Error while searching for PDF template in Google Drive"
    },
    {
      "parameters": {
        "operation": "Search & Replace Text or Delete"
      },
      "type": "n8n-nodes-preview-pdfco.PDFco Api",
      "typeVersion": 1,
      "position": [
        3120,
        2240
      ],
      "id": "d8b67b49-8475-4f29-b59f-f0bd26e77d74",
      "name": "PDFco Api - Replace placeholder text",
      "retryOnFail": true,
      "waitBetweenTries": 5000,
      "notesInFlow": true,
      "alwaysOutputData": false,
      "credentials": {},
      "onError": "continueErrorOutput",
      "notes": "Error while connecting to PDF.co API"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={ \n  \"submissionId\": \"{{ $('Fillout Trigger').item.json.submissionId }}\",\n  \"error\": \"{{ $('Setup fields for processing').item.json.packagePlan }}: {{ $json.error }}\"\n}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        3360,
        2944
      ],
      "id": "d8c53a1d-9ab7-4ea4-b581-0f378103934a",
      "name": "Stop and Error - PDFco Api - Replace placeholder text"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        4064,
        2832
      ],
      "id": "914ec0e7-120c-4c85-9e60-0e158b7f2ed2",
      "name": "Stop and Error - HTTP Request to PDF.co"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        4736,
        2576
      ],
      "id": "61244854-1a79-44cd-aa85-045f62f20574",
      "name": "Stop and Error - Update  Google Sheet record"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        5104,
        2576
      ],
      "id": "f779d67a-eb74-438b-afec-20d6c9aa1a70",
      "name": "Stop and Error - Send a message"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        5440,
        2576
      ],
      "id": "7ccf9b42-85e7-4206-8c17-a09423444c02",
      "name": "Stop and Error - Update spreadsheet workflow status - proposal completed"
    },
    {
      "parameters": {
        "resource": "fileFolder",
        "queryString": "={{ $('Setup fields for processing').item.json.planAlias }}",
        "filter": {
          "folderId": {
            "__rl": true,
            "value": "1VcTVpYtb4GTrAdj_XEnoHSbGc0C4GhCv",
            "mode": "list",
            "cachedResultName": "Proposals",
            "cachedResultUrl": "https://drive.google.com/drive/folders/1VcTVpYtb4GTrAdj_XEnoHSbGc0C4GhCv"
          },
          "whatToSearch": "folders"
        },
        "options": {
          "fields": [
            "id",
            "name",
            "webViewLink"
          ]
        }
      },
      "type": "n8n-nodes-base.googleDrive",
      "typeVersion": 3,
      "position": [
        2832,
        2256
      ],
      "id": "8c87d7a2-9262-4966-b8d1-2c8862aa28f1",
      "name": "Search files and folders",
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "Error while finding folder to upload to"
    },
    {
      "parameters": {
        "name": "={{ $('PDFco Api - Replace placeholder text').item.json.name }}",
        "driveId": {
          "__rl": true,
          "mode": "list",
          "value": "My Drive"
        },
        "folderId": {
          "__rl": true,
          "value": "={{ $('Search files and folders').item.json.id }}",
          "mode": "id"
        },
        "options": {
          "simplifyOutput": false
        }
      },
      "type": "n8n-nodes-base.googleDrive",
      "typeVersion": 3,
      "position": [
        4032,
        2208
      ],
      "id": "5f12b60b-6859-44b8-8cd1-16b3adac0950",
      "name": "Upload PDF file to Google Drive",
      "alwaysOutputData": false,
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "Error while uploading PDF file into Google Drive"
    },
    {
      "parameters": {
        "content": "### Find upload folder in Google Drive",
        "height": 416,
        "width": 208,
        "color": 7
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        2800,
        2096
      ],
      "typeVersion": 1,
      "id": "7173f109-63f6-40d3-b592-5efab8c93ea0",
      "name": "Sticky Note15"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        3072,
        2944
      ],
      "id": "0872c3d9-aa31-4691-bb98-2922802a5447",
      "name": "Stop and Error - Search Google Drive for PDF template1"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        4384,
        2832
      ],
      "id": "61c55e42-2339-4dce-baf7-e43d3762cbba",
      "name": "Stop and Error - Search Google Drive for PDF template2"
    },
    {
      "parameters": {
        "content": "## Set status -\n### set workflow status to *\"Proposal complete*\"",
        "height": 352,
        "width": 256
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        3216,
        896
      ],
      "typeVersion": 1,
      "id": "e9a149bb-9005-421b-be23-b5697cc4d762",
      "name": "Sticky Note27"
    },
    {
      "parameters": {
        "operation": "update",
        "documentId": {
          "__rl": true,
          "value": "10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI",
          "mode": "list",
          "cachedResultName": "Data Processing ",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Details",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/10PnIungtEh2z7naWsrIBWg9fPUR7fkng8R1ocWjm0zI/edit#gid=0"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Email": "={{ $('Setup fields for processing').item.json.repEmail }}",
            "Last Updated Timestamp": "={{ $now.toISO() }}",
            "Workflow Status": "Manager notification completed"
          },
          "matchingColumns": [
            "Email"
          ],
          "schema": [
            {
              "id": "Name",
              "displayName": "Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Email",
              "displayName": "Email",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Company Name",
              "displayName": "Company Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Company Website",
              "displayName": "Company Website",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Industry",
              "displayName": "Industry",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Status",
              "displayName": "Status",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Plan",
              "displayName": "Plan",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Proposal",
              "displayName": "Proposal",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Workflow Status",
              "displayName": "Workflow Status",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Submission Id",
              "displayName": "Submission Id",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Form Submisison Timestamp",
              "displayName": "Form Submisison Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Last Form Submission Timestamp",
              "displayName": "Last Form Submission Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Created Timestamp",
              "displayName": "Created Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": true
            },
            {
              "id": "Last Updated Timestamp",
              "displayName": "Last Updated Timestamp",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "row_number",
              "displayName": "row_number",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "number",
              "canBeUsedToMatch": true,
              "readOnly": true,
              "removed": true
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        3264,
        1056
      ],
      "id": "7d7a1611-139c-4435-8b49-081f270929f6",
      "name": "Update spreadsheet workflow status - proposal completed1",
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "Error while updating workflow status to \"proposal complete\""
    },
    {
      "parameters": {
        "method": "=GET",
        "url": "={{ $('PDFco Api - Replace placeholder text').item.json.url }}",
        "options": {
          "response": {
            "response": {
              "fullResponse": true
            }
          },
          "timeout": 10000
        }
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.3,
      "position": [
        3712,
        2224
      ],
      "id": "178353e2-48ea-4089-ac06-4506ceef0c81",
      "name": "HTTP Request to PDF.co",
      "retryOnFail": true,
      "waitBetweenTries": 5000,
      "notesInFlow": true,
      "onError": "continueErrorOutput",
      "notes": "Error while connecting to PDF.co API  file download"
    },
    {
      "parameters": {
        "amount": "=15"
      },
      "type": "n8n-nodes-base.wait",
      "typeVersion": 1.1,
      "position": [
        3440,
        2224
      ],
      "id": "fe4667a4-0643-49f2-aaef-ba9a18918c99",
      "name": "Wait1",
      "webhookId": "e24c2ed9-6405-47f0-8e39-7fcac4f98a4c"
    },
    {
      "parameters": {
        "content": "### START_WORKFLOW\nLog form submission",
        "height": 272,
        "width": 208
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        528,
        1872
      ],
      "id": "5dc02274-5698-4491-be70-2f98e2acaf61",
      "name": "Sticky Note28"
    },
    {
      "parameters": {
        "content": "### COMPLETED_DATA_PROCESSING\nLog Data Processing\n\n",
        "height": 272,
        "width": 192
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        1072,
        1872
      ],
      "id": "baad0fec-75cd-4f09-9d40-e84624df8400",
      "name": "Sticky Note29"
    },
    {
      "parameters": {
        "content": "   ### COMPLETED_ADDING_DETAILS\nLog inserting records into spreadsheet\n\n",
        "height": 272,
        "width": 208
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        1696,
        1872
      ],
      "id": "430f96a6-6526-4a97-aa28-db74c5c65087",
      "name": "Sticky Note30"
    },
    {
      "parameters": {
        "content": "### START_NOTIFICATION_NO_PLAN\nSet status for no plan\n\n",
        "height": 288,
        "width": 208
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        2608,
        560
      ],
      "id": "4b6222ca-8b8a-41bc-873a-9eca68945047",
      "name": "Sticky Note31"
    },
    {
      "parameters": {
        "content": "### COMPLETED_NOTIFICATION_NO_PLAN\nSend slack notification completed\n\n",
        "height": 288,
        "width": 192
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        3008,
        560
      ],
      "id": "68a06996-4fb0-4dad-8a37-df02eec85433",
      "name": "Sticky Note32"
    },
    {
      "parameters": {
        "content": "### START_PDF_GENERATION\nCreating PDF file from template",
        "height": 288,
        "width": 192
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        3104,
        1728
      ],
      "id": "46bdb6f1-efd5-403f-8d5c-90f4b9378c81",
      "name": "Sticky Note33"
    },
    {
      "parameters": {
        "content": "### START_PROPOSAL_PROCESS\nSet status for preparing proposal PDF\n",
        "height": 288,
        "width": 208
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        2272,
        1728
      ],
      "id": "598af863-df8c-45d0-99b7-6271e3cc95a9",
      "name": "Sticky Note34"
    },
    {
      "parameters": {
        "content": "### START_SEND_PROPOSAL\nEmail proposal to client\n      ",
        "height": 288,
        "width": 192
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        4624,
        1648
      ],
      "id": "c971ebe5-fcff-4eb2-b2cf-e778f9062d5c",
      "name": "Sticky Note35"
    },
    {
      "parameters": {
        "content": "### START_DATA_PROCESSING\nLog Data Processing\n\n",
        "height": 272,
        "width": 192
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        832,
        1872
      ],
      "id": "517a0805-eb61-471e-aaf8-75598eaabc1f",
      "name": "Sticky Note36"
    },
    {
      "parameters": {
        "content": "### START_ADDING_DETAILS\nLog inserting records into spreadsheet\n\n",
        "height": 272,
        "width": 208
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        1392,
        1872
      ],
      "id": "95fe8770-c80c-4dca-bc09-81d450588d80",
      "name": "Sticky Note37"
    },
    {
      "parameters": {
        "content": "### COMPLETED_SEND_PROPOSAL\nEmail proposal to client\n      ",
        "height": 288,
        "width": 208
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        4944,
        1648
      ],
      "id": "88a56a97-7acc-4987-b820-abcb0c2f6c9e",
      "name": "Sticky Note38"
    },
    {
      "parameters": {
        "content": "### COMPLETED_WORKFLOW_WITH_PLAN\nEnd of workflow for package plan\n      ",
        "height": 288,
        "width": 224
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        5312,
        1648
      ],
      "id": "25286b1b-3685-4686-91ee-31c9fb117605",
      "name": "Sticky Note39"
    },
    {
      "parameters": {
        "content": "### COMPLETED_WORKFLOW_NO_PLAN\nEnd of workflow for no plan",
        "height": 288,
        "width": 192
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        3360,
        560
      ],
      "id": "00a6a54e-7155-4c85-83de-372f683cf1e9",
      "name": "Sticky Note41"
    },
    {
      "parameters": {
        "content": "### COMPLETED_PROPOSAL_PROCESS\nEnd of total proposal process",
        "height": 288,
        "width": 208
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        4144,
        1728
      ],
      "id": "0863886e-2284-4b2b-8413-86bb45d2f6d1",
      "name": "Sticky Note42"
    },
    {
      "parameters": {
        "content": "###  COMPLETED_PDF_RETRIEVAL\nRetrieved PDF file from API",
        "height": 288,
        "width": 208
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        3824,
        1728
      ],
      "id": "a9922c79-a173-4879-949f-79f6b3976a9a",
      "name": "Sticky Note43"
    },
    {
      "parameters": {
        "content": "### COMPLETED_PDF_GENERATION\nCompleted PDF generation",
        "height": 288,
        "width": 176
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        3344,
        1728
      ],
      "id": "f2bca998-1751-4cd5-9b15-d8cd14f4a959",
      "name": "Sticky Note40"
    },
    {
      "parameters": {
        "content": "### START_PDF_RETRIEVAL\nGet generated PDF file from API",
        "height": 288,
        "width": 192
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        3584,
        1728
      ],
      "id": "a8434b05-9d90-4d1a-a6b6-1cd08ab7c0e4",
      "name": "Sticky Note44"
    },
    {
      "parameters": {
        "content": "### Wait for PDF.co API to process PDF ",
        "height": 416,
        "width": 224,
        "color": 7
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        3376,
        2096
      ],
      "typeVersion": 1,
      "id": "4a72368d-5a56-4fee-a9f4-a2ba689ac1df",
      "name": "Sticky Note21"
    },
    {
      "parameters": {
        "workflowId": {
          "__rl": true,
          "value": "9G18lPvBeZvxDytn",
          "mode": "list",
          "cachedResultUrl": "/workflow/9G18lPvBeZvxDytn",
          "cachedResultName": "Document Processing - Logging"
        },
        "workflowInputs": {
          "mappingMode": "defineBelow",
          "value": {
            "executionId": "={{ $execution.id }}"
          },
          "matchingColumns": [
            "executionId"
          ],
          "schema": [
            {
              "id": "executionId",
              "displayName": "executionId",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "canBeUsedToMatch": true,
              "type": "string",
              "removed": false
            },
            {
              "id": "errorMessage",
              "displayName": "errorMessage",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "canBeUsedToMatch": true,
              "type": "string",
              "removed": false
            }
          ],
          "attemptToConvertTypes": true,
          "convertFieldsToString": true
        },
        "options": {
          "waitForSubWorkflow": false
        }
      },
      "type": "n8n-nodes-base.executeWorkflow",
      "typeVersion": 1.3,
      "position": [
        3568,
        1040
      ],
      "id": "32a2052f-7681-45d5-88b9-af7a69b8af99",
      "name": "Log Execution - No Plan"
    },
    {
      "parameters": {
        "workflowId": {
          "__rl": true,
          "value": "9G18lPvBeZvxDytn",
          "mode": "list",
          "cachedResultUrl": "/workflow/9G18lPvBeZvxDytn",
          "cachedResultName": "Document Processing - Logging"
        },
        "workflowInputs": {
          "mappingMode": "defineBelow",
          "value": {
            "executionId": "={{ $execution.id }}"
          },
          "matchingColumns": [
            "executionId"
          ],
          "schema": [
            {
              "id": "executionId",
              "displayName": "executionId",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "canBeUsedToMatch": true,
              "type": "string",
              "removed": false
            },
            {
              "id": "errorMessage",
              "displayName": "errorMessage",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "canBeUsedToMatch": true,
              "type": "string",
              "removed": false
            }
          ],
          "attemptToConvertTypes": true,
          "convertFieldsToString": true
        },
        "options": {
          "waitForSubWorkflow": false
        }
      },
      "type": "n8n-nodes-base.executeWorkflow",
      "typeVersion": 1.3,
      "position": [
        5376,
        2144
      ],
      "id": "61a69ebc-0c95-4574-8ca2-8da1935d3051",
      "name": "Log Execution - Proposal"
    },
    {
      "parameters": {
        "errorType": "errorObject",
        "errorObject": "={{ JSON.stringify({\n  \"submissionId\": $('Fillout Trigger').item.json.submissionId,\n  \"error\": $json.error\n}) }}"
      },
      "type": "n8n-nodes-base.stopAndError",
      "typeVersion": 1,
      "position": [
        3536,
        1296
      ],
      "id": "a6c1d6e2-63d3-4132-a151-4c813ab94d92",
      "name": "Stop and Error - Send a Slack message to Manager1"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=START_WORKFLOW",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        592,
        1968
      ],
      "id": "204db84f-2d2f-47e3-bb15-c81b61ad9505",
      "name": "Set START_WORKFLOW"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=START_DATA_PROCESSING",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        880,
        1984
      ],
      "id": "8603f391-db78-4ae1-8bf3-7061e44d5e1a",
      "name": "Set START_DATA_PROCESSING"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=COMPLETED_DATA_PROCESSING",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        1120,
        1984
      ],
      "id": "201d9a04-5940-468a-9c80-d4e67a4d5c20",
      "name": "Set COMPLETED_DATA_PROCESSING"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=START_ADDING_DETAILS",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        1440,
        2000
      ],
      "id": "b95d1e3a-33d6-42d2-95d1-2a7991699a19",
      "name": "Set START_ADDING_DETAILS"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=COMPLETED_ADDING_DETAILS",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        1744,
        2000
      ],
      "id": "6da8da21-f697-44e8-80d4-73f57aa25953",
      "name": "Set COMPLETED_ADDING_DETAILS"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=START_NOTIFICATION_NO_PLAN",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        2672,
        688
      ],
      "id": "0c61b50b-f43b-440d-9c98-1b7c7cbc9d5f",
      "name": "Set START_NOTIFICATION_NO_PLAN"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=COMPLETED_NOTIFICATION_NO_PLAN",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        3056,
        688
      ],
      "id": "3e21c7fa-5617-46e4-be4d-1d9276ad2cda",
      "name": "Set COMPLETED_NOTIFICATION_NO_PLAN"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=COMPLETED_WORKFLOW_NO_PLAN",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        3408,
        688
      ],
      "id": "ef7a0776-f880-451f-b427-9bd5f45ac8ef",
      "name": "Set COMPLETED_WORKFLOW_NO_PLAN"
    },
    {
      "parameters": {
        "content": "### START_RETRIEVING_TMPL\nCreating PDF file from template",
        "height": 288,
        "width": 192
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        2512,
        1728
      ],
      "id": "3e60798c-6b81-4915-bd76-f36f2b9b6b39",
      "name": "Sticky Note45"
    },
    {
      "parameters": {
        "content": "### COMPLETED_RETRIEVING_TMPL\nCreating PDF file from template",
        "height": 288,
        "width": 192
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        2880,
        1728
      ],
      "id": "d8a57136-4ab0-4f76-80ad-deaa46643734",
      "name": "Sticky Note46"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=START_PROPOSAL_PROCESS",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        2336,
        1840
      ],
      "id": "cd87e099-dee2-4a96-b9e2-6019059eb1da",
      "name": "Set START_PROPOSAL_PROCESS"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=START_RETRIEVING_TMPL",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        2560,
        1840
      ],
      "id": "f5ec3a6a-da0f-454e-99e8-bfd819d2d7f1",
      "name": "Set START_RETRIEVING_TMPL"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=COMPLETED_RETRIEVING_TMPL",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        2944,
        1856
      ],
      "id": "434bd630-495a-4626-bb37-cac2311a2a8b",
      "name": "Set COMPLETED_RETRIEVING_TMPL"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=START_PDF_GENERATION",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        3152,
        1856
      ],
      "id": "16b33296-fdf8-49c9-bf14-32b4f2234dbb",
      "name": "Set START_PDF_GENERATION"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=COMPLETED_PDF_GENERATION",
              "type": "string"
            },
            {
              "id": "0b881c16-3eff-445c-bd7d-937872ac5f82",
              "name": "SubmissionId",
              "value": "={{ $json.submissionId }}",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        3376,
        1856
      ],
      "id": "57506b2d-156d-4c18-8601-aa98135dd0c7",
      "name": "Set COMPLETED_PDF_GENERATION"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=START_PDF_RETRIEVAL",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        3632,
        1856
      ],
      "id": "7e5de7d1-d976-4b66-8dd7-08cc0649f430",
      "name": "Set START_PDF_RETRIEVAL"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=COMPLETED_PDF_RETRIEVAL",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        3872,
        1856
      ],
      "id": "60fd6d05-03c5-41cb-9b8c-8ec62ae2d4a1",
      "name": "Set COMPLETED_PDF_RETRIEVAL"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=COMPLETED_PROPOSAL_PROCESS",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        4208,
        1856
      ],
      "id": "fe1df29f-1cb4-41c4-9064-1f2ac043aa01",
      "name": "Set COMPLETED_PROPOSAL_PROCESS"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=START_SEND_PROPOSAL",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        4688,
        1792
      ],
      "id": "76b05a36-220d-46f7-9ae6-9a1d0937a420",
      "name": "Set START_SEND_PROPOSAL"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=COMPLETED_SEND_PROPOSAL",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        4992,
        1760
      ],
      "id": "f5825aed-c046-4b7b-a64f-da6993ad345b",
      "name": "Set COMPLETED_SEND_PROPOSAL"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "12f91926-3758-4ade-acc8-ff4754251a09",
              "name": "=Event",
              "value": "=COMPLETED_WORKFLOW_WITH_PLAN",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        5360,
        1760
      ],
      "id": "c7e68b59-f61a-45c3-8a0a-427eb6bbeb8c",
      "name": "Set COMPLETED_WORKFLOW_WITH_PLAN"
    },
    {
      "parameters": {
        "operation": "create",
        "base": {
          "__rl": true,
          "value": "appgUq3lBSqCb0vOC",
          "mode": "list",
          "cachedResultName": "Document-Processing",
          "cachedResultUrl": "https://airtable.com/appgUq3lBSqCb0vOC"
        },
        "table": {
          "__rl": true,
          "value": "tblPGj8wBN5GwRctr",
          "mode": "list",
          "cachedResultName": "Event Logging",
          "cachedResultUrl": "https://airtable.com/appgUq3lBSqCb0vOC/tblPGj8wBN5GwRctr"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Event Id": "={{ $now.toFormat('X') }}",
            "Execution Id": "={{ $execution.id }}",
            "Timestamp UTC": "={{ $now.toUTC().format('yyyy-MM-dd HH:MM:ss') }}",
            "Submission Id": "={{ $('Fillout Trigger').item.json.submissionId }}",
            "Event": "={{ $json.Event }}"
          },
          "matchingColumns": [],
          "schema": [
            {
              "id": "Event Id",
              "displayName": "Event Id",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "number",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Timestamp UTC",
              "displayName": "Timestamp UTC",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "dateTime",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Execution Id",
              "displayName": "Execution Id",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "number",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Submission Id",
              "displayName": "Submission Id",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Event",
              "displayName": "Event",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.airtable",
      "typeVersion": 2.1,
      "position": [
        1936,
        1360
      ],
      "id": "788ab832-61ce-4b48-b57d-4caac5400dd3",
      "name": "Log Event 3"
    },
    {
      "parameters": {
        "operation": "create",
        "base": {
          "__rl": true,
          "value": "appgUq3lBSqCb0vOC",
          "mode": "list",
          "cachedResultName": "Document-Processing",
          "cachedResultUrl": "https://airtable.com/appgUq3lBSqCb0vOC"
        },
        "table": {
          "__rl": true,
          "value": "tblPGj8wBN5GwRctr",
          "mode": "list",
          "cachedResultName": "Event Logging",
          "cachedResultUrl": "https://airtable.com/appgUq3lBSqCb0vOC/tblPGj8wBN5GwRctr"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Event Id": "={{ $now.toFormat('X') }}",
            "Execution Id": "={{ $execution.id }}",
            "Timestamp UTC": "={{ $now.toUTC().format('yyyy-MM-dd HH:MM:ss') }}",
            "Submission Id": "={{ $('Fillout Trigger').item.json.submissionId }}",
            "Event": "={{ $json.Event }}"
          },
          "matchingColumns": [],
          "schema": [
            {
              "id": "Event Id",
              "displayName": "Event Id",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "number",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Timestamp UTC",
              "displayName": "Timestamp UTC",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "dateTime",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Execution Id",
              "displayName": "Execution Id",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "number",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Submission Id",
              "displayName": "Submission Id",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Event",
              "displayName": "Event",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.airtable",
      "typeVersion": 2.1,
      "position": [
        3744,
        256
      ],
      "id": "577169fd-df75-48a6-be5d-d294f8f8bdd8",
      "name": "Log Event - No Plan"
    },
    {
      "parameters": {
        "operation": "create",
        "base": {
          "__rl": true,
          "value": "appgUq3lBSqCb0vOC",
          "mode": "list",
          "cachedResultName": "Document-Processing",
          "cachedResultUrl": "https://airtable.com/appgUq3lBSqCb0vOC"
        },
        "table": {
          "__rl": true,
          "value": "tblPGj8wBN5GwRctr",
          "mode": "list",
          "cachedResultName": "Event Logging",
          "cachedResultUrl": "https://airtable.com/appgUq3lBSqCb0vOC/tblPGj8wBN5GwRctr"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Event Id": "={{ $now.toFormat('X') }}",
            "Execution Id": "={{ $execution.id }}",
            "Timestamp UTC": "={{ $now.toUTC().format('yyyy-MM-dd HH:MM:ss') }}",
            "Submission Id": "={{ $('Fillout Trigger').item.json.submissionId }}",
            "Event": "={{ $json.Event }}"
          },
          "matchingColumns": [],
          "schema": [
            {
              "id": "Event Id",
              "displayName": "Event Id",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "number",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Timestamp UTC",
              "displayName": "Timestamp UTC",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "dateTime",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Execution Id",
              "displayName": "Execution Id",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "number",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Submission Id",
              "displayName": "Submission Id",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Event",
              "displayName": "Event",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.airtable",
      "typeVersion": 2.1,
      "position": [
        5568,
        1216
      ],
      "id": "f2278aa5-cfc0-46a4-a4d9-a1fe4fa54c45",
      "name": "Log Event - Package Plan"
    }
  ],
  "pinData": {
    "Fillout Trigger": [
      {
        "json": {
          "submissionId": "33e14112-6a3e-4730-a78d-afa7e99a390a",
          "submissionTime": "2026-01-21T17:37:38.738Z",
          "lastUpdatedAt": "2026-01-21T17:37:38.738Z",
          "questions": {
            "c4NhzbNUQDndjrviiWedxK": {
              "name": "Company Name",
              "value": "No Plan Test.xyz"
            },
            "aVmqNfy99ndVMzWY3NE5Pk": {
              "name": "Company Website",
              "value": "noplan.xyz.com"
            },
            "i4EpVZ8zGwofnRMkPkRvti": {
              "name": "Industry",
              "value": "Forestry, Fishing  and Hunting"
            },
            "7bnH7Kr4A7LLWX37Ni3CLJ": {
              "name": "Representative's Name",
              "value": "no planner testtttt"
            },
            "2rqFeFKJthvNj1hnF8dNWw": {
              "name": "Representative's Email",
              "value": "noplan@nnn.com"
            },
            "9GHB": {
              "name": "Pick your Plan",
              "value": ""
            },
            "kX6z": {
              "name": "I'd like to learn more before deciding. Could your sales team contact me?",
              "value": true
            }
          },
          "calculations": {},
          "urlParameters": {},
          "quiz": {},
          "documents": {},
          "scheduling": {},
          "payments": {}
        }
      }
    ]
  },
  "connections": {
    "Fillout Trigger": {
      "main": [
        [
          {
            "node": "Get Form fields",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set START_WORKFLOW",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set START_DATA_PROCESSING",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If Checkbox Selected": {
      "main": [
        [
          {
            "node": "Update spreadsheet workflow status - slack",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Update spreadsheet workflow status - proposal",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Add Client Details Record to Google Sheet": {
      "main": [
        [
          {
            "node": "If Checkbox Selected",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set COMPLETED_ADDING_DETAILS",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - Add Client Details Record to Google Sheet",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Setup fields for processing": {
      "main": [
        [
          {
            "node": "Add Client Details Record to Google Sheet",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set START_ADDING_DETAILS",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Update  Google Sheet record": {
      "main": [
        [
          {
            "node": "Send a message",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set START_SEND_PROPOSAL",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - Update  Google Sheet record",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Get Form fields": {
      "main": [
        [
          {
            "node": "Setup fields for processing",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set COMPLETED_DATA_PROCESSING",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - Get Form fields",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Send a Slack message to Manager": {
      "main": [
        [
          {
            "node": "Update spreadsheet workflow status - proposal completed1",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set COMPLETED_NOTIFICATION_NO_PLAN",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - Send a Slack message to Manager",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Update spreadsheet workflow status - slack": {
      "main": [
        [
          {
            "node": "Send a Slack message to Manager",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set START_NOTIFICATION_NO_PLAN",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - Update spreadsheet workflow status - slack",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Update spreadsheet workflow status - proposal": {
      "main": [
        [
          {
            "node": "Search Google Drive for PDF template",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set START_RETRIEVING_TMPL",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set START_PROPOSAL_PROCESS",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - process",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Send a message": {
      "main": [
        [
          {
            "node": "Update spreadsheet workflow status - proposal completed",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set COMPLETED_SEND_PROPOSAL",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - Send a message",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Update spreadsheet workflow status - proposal completed": {
      "main": [
        [
          {
            "node": "Log Execution - Proposal",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set COMPLETED_WORKFLOW_WITH_PLAN",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - Update spreadsheet workflow status - proposal completed",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Search Google Drive for PDF template": {
      "main": [
        [
          {
            "node": "Search files and folders",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - Search Google Drive for PDF template",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "PDFco Api - Replace placeholder text": {
      "main": [
        [
          {
            "node": "Wait1",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set COMPLETED_PDF_GENERATION",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - PDFco Api - Replace placeholder text",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Search files and folders": {
      "main": [
        [
          {
            "node": "PDFco Api - Replace placeholder text",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set START_PDF_GENERATION",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set COMPLETED_RETRIEVING_TMPL",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - Search Google Drive for PDF template1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Upload PDF file to Google Drive": {
      "main": [
        [
          {
            "node": "Update  Google Sheet record",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set COMPLETED_PROPOSAL_PROCESS",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - Search Google Drive for PDF template2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "HTTP Request to PDF.co": {
      "main": [
        [
          {
            "node": "Upload PDF file to Google Drive",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set COMPLETED_PDF_RETRIEVAL",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - HTTP Request to PDF.co",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Wait1": {
      "main": [
        [
          {
            "node": "HTTP Request to PDF.co",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set START_PDF_RETRIEVAL",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Update spreadsheet workflow status - proposal completed1": {
      "main": [
        [
          {
            "node": "Log Execution - No Plan",
            "type": "main",
            "index": 0
          },
          {
            "node": "Set COMPLETED_WORKFLOW_NO_PLAN",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Stop and Error - Send a Slack message to Manager1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set START_WORKFLOW": {
      "main": [
        [
          {
            "node": "Log Event 3",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set START_DATA_PROCESSING": {
      "main": [
        [
          {
            "node": "Log Event 3",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set COMPLETED_DATA_PROCESSING": {
      "main": [
        [
          {
            "node": "Log Event 3",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set START_ADDING_DETAILS": {
      "main": [
        [
          {
            "node": "Log Event 3",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set COMPLETED_ADDING_DETAILS": {
      "main": [
        [
          {
            "node": "Log Event 3",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set START_NOTIFICATION_NO_PLAN": {
      "main": [
        [
          {
            "node": "Log Event - No Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set COMPLETED_NOTIFICATION_NO_PLAN": {
      "main": [
        [
          {
            "node": "Log Event - No Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set COMPLETED_WORKFLOW_NO_PLAN": {
      "main": [
        [
          {
            "node": "Log Event - No Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set START_PROPOSAL_PROCESS": {
      "main": [
        [
          {
            "node": "Log Event - Package Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set START_RETRIEVING_TMPL": {
      "main": [
        [
          {
            "node": "Log Event - Package Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set COMPLETED_RETRIEVING_TMPL": {
      "main": [
        [
          {
            "node": "Log Event - Package Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set START_PDF_GENERATION": {
      "main": [
        [
          {
            "node": "Log Event - Package Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set COMPLETED_PDF_GENERATION": {
      "main": [
        [
          {
            "node": "Log Event - Package Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set START_PDF_RETRIEVAL": {
      "main": [
        [
          {
            "node": "Log Event - Package Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set COMPLETED_PDF_RETRIEVAL": {
      "main": [
        [
          {
            "node": "Log Event - Package Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set COMPLETED_PROPOSAL_PROCESS": {
      "main": [
        [
          {
            "node": "Log Event - Package Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set START_SEND_PROPOSAL": {
      "main": [
        [
          {
            "node": "Log Event - Package Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set COMPLETED_SEND_PROPOSAL": {
      "main": [
        [
          {
            "node": "Log Event - Package Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Set COMPLETED_WORKFLOW_WITH_PLAN": {
      "main": [
        [
          {
            "node": "Log Event - Package Plan",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1",
    "binaryMode": "separate",
    "availableInMCP": false
  },
  "versionId": "34b6ccb2-4dbb-4020-8a51-44c31f8bdb31",
  "meta": {
    "instanceId": "d8cb1a7421949456d9f215275c27a4409e822a5c7084fc1d744285dd2f918525"
  },
  "id": "QBHitrVMv8NMVIB7",
  "tags": [
    {
      "updatedAt": "2026-02-09T13:34:12.481Z",
      "createdAt": "2026-02-09T13:34:12.481Z",
      "id": "IyFbFXs26X2f7Djc",
      "name": "Internship"
    },
    {
      "updatedAt": "2026-02-09T13:34:12.456Z",
      "createdAt": "2026-02-09T13:34:12.456Z",
      "id": "MuuaqKOduP8HrpMf",
      "name": "Case 1"
    }
  ]
}

;


