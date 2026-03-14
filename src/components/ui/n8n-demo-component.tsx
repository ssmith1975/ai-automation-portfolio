import React, { useState, useEffect } from 'react';
//import '@n8n_io/n8n-demo-component/n8n-demo.bundled.js';
//import n8n-demo from '@n8n_io/n8n-demo-component';
// Add this near the top with other imports
import "@/styles/n8n-overrides.css";



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'n8n-demo': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        clicktointeract?: string;
        showpreview?: string;
        frame?: string;
        showcode?: string;
        collapseformobile?: string;
        tidyup?: string;
        theme?: string;
        workflow?: string;
      }, HTMLElement>;
    }
  }
}

 const N8nDemoComponent = ({ title, workflowJson }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  //const [json, setJson] = useState(workflowJson);
  
  useEffect(() => {
    //setJson(workflowJson);
  }, []); 



  return (
    
    <div className={`w-full transition-all duration-300 bg-sky-800 text-white ${isExpanded ? 'fixed inset-0 z-50 p-6 h-min-screen' : 'p-6'}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-light text-architectural">{title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-4 py-2 bg-architectural text-white hover:bg-opacity-90 transition-all duration-300 rounded font-bold"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      <div className={isExpanded ? 'w-full h-screen' : 'w-full h-full'}>
        <n8n-demo
          clicktointeract="false"
          showpreview="false"
          frame="false"
          showcode="false"
          collapseformobile="true"
          tidyup="true"
          theme="dark"
          workflow={JSON.stringify(workflowJson)}
        />
      </div>
    </div>
  );
};

export  {N8nDemoComponent};
