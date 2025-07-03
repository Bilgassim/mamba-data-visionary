import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SimpleProjectCardProps {
  title: string;
  description: string;
  borderColor: string;
  gradientColor: string;
  content: React.ReactNode;
  buttonText?: string;
  buttonColor?: string;
}

const SimpleProjectCard = ({ 
  title, 
  description, 
  borderColor, 
  gradientColor, 
  content,
  buttonText = "En savoir plus →",
  buttonColor = "text-blue-600"
}: SimpleProjectCardProps) => {
  return (
    <Card className={`shadow-lg border-t-4 ${borderColor} overflow-hidden`}>
      <CardHeader className={`bg-gradient-to-r ${gradientColor} to-transparent`}>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        {content}
        
        <button className={`w-full mt-4 text-sm ${buttonColor} hover:underline`}>
          {buttonText}
        </button>
      </CardContent>
    </Card>
  );
};

export default SimpleProjectCard;