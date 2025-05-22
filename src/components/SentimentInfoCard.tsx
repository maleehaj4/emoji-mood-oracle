
import React from "react";
import { Card } from "@/components/ui/card";

interface SentimentInfoCardProps {
  title: string;
  description: string;
  className?: string;
}

const SentimentInfoCard: React.FC<SentimentInfoCardProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <Card className={`p-4 ${className}`}>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default SentimentInfoCard;
