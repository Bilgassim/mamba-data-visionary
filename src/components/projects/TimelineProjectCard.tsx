import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineStep {
  title: string;
  description: string;
}

interface TimelineProjectCardProps {
  title: string;
  description: string;
  borderColor: string;
  gradientColor: string;
  steps: TimelineStep[];
  skills: string[];
}

const TimelineProjectCard = ({ 
  title, 
  description, 
  borderColor, 
  gradientColor, 
  steps, 
  skills 
}: TimelineProjectCardProps) => {
  return (
    <Card className={`shadow-lg border-t-4 ${borderColor} overflow-hidden`}>
      <CardHeader className={`bg-gradient-to-r ${gradientColor} to-transparent`}>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-portfolio-gray-light"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`relative pl-8 ${index < steps.length - 1 ? 'pb-6' : ''}`}>
              <div className="absolute left-0 w-4 h-4 rounded-full bg-portfolio-blue-dark"></div>
              <h3 className="text-lg font-medium">{step.title}</h3>
              <p className="text-sm text-portfolio-gray-dark">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-6">
          {skills.map((skill, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineProjectCard;