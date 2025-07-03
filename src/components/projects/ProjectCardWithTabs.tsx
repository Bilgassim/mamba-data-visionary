import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabContent {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface ProjectCardWithTabsProps {
  title: string;
  description: string;
  borderColor: string;
  gradientColor: string;
  tabs: TabContent[];
  defaultTab: string;
}

const ProjectCardWithTabs = ({ 
  title, 
  description, 
  borderColor, 
  gradientColor, 
  tabs, 
  defaultTab 
}: ProjectCardWithTabsProps) => {
  return (
    <Card className={`shadow-lg border-t-4 ${borderColor} overflow-hidden`}>
      <CardHeader className={`bg-gradient-to-r ${gradientColor} to-transparent`}>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <Tabs defaultValue={defaultTab} className="w-full">
        <div className="px-6">
          <TabsList className="w-full justify-start">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        <CardContent className="pt-6">
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              {tab.content}
            </TabsContent>
          ))}
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default ProjectCardWithTabs;