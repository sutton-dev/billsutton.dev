"use client";

import experienceData from "../data/experience";
import Experience from "../experience/experience";
import { useState } from "react";

export default function PreviousPositions(){
    const [expandedCompany, setExpandedCompany] = useState<number | null>(null);

    const handleCompanyToggle = (index: number) => {
        setExpandedCompany(expandedCompany === index ? null : index);
    };

    return (
        <div className="space-y-6 w-full max-w-4xl">
          {experienceData.map((exp, index) => (
            <Experience 
              key={index}
              companyLogo={exp.companyLogo}
              company={exp.company}
              roles={exp.roles}
              isExpanded={expandedCompany === index}
              onToggle={() => handleCompanyToggle(index)}
            />
          ))}
        </div>
    );
}
