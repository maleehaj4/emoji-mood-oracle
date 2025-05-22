
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Heart, Smile, Laugh, Angry, ThumbsDown, Meh, Frown } from "lucide-react";

const Index = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [sentiment, setSentiment] = useState<string | null>(null);

  const emojis = [
    { name: "Smile", icon: <Smile className="h-10 w-10" />, sentiment: "Positive" },
    { name: "Heart", icon: <Heart className="h-10 w-10" />, sentiment: "Positive" },
    { name: "Laugh", icon: <Laugh className="h-10 w-10" />, sentiment: "Positive" },
    { name: "Meh", icon: <Meh className="h-10 w-10" />, sentiment: "Neutral" },
    { name: "Frown", icon: <Frown className="h-10 w-10" />, sentiment: "Negative" },
    { name: "Angry", icon: <Angry className="h-10 w-10" />, sentiment: "Negative" },
    { name: "ThumbsDown", icon: <ThumbsDown className="h-10 w-10" />, sentiment: "Negative" },
  ];

  const handleSelectEmoji = (name: string, sentiment: string) => {
    setSelectedEmoji(name);
    setSentiment(sentiment);
    toast({
      title: "Analysis Complete",
      description: `The emoji "${name}" has been classified as ${sentiment}`,
    });
  };

  const getSentimentColor = (sentiment: string | null) => {
    if (!sentiment) return "bg-gray-100";
    switch (sentiment) {
      case "Positive":
        return "bg-green-100 border-green-300";
      case "Negative":
        return "bg-red-100 border-red-300";
      case "Neutral":
        return "bg-blue-100 border-blue-300";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-indigo-900">Emoji Mood Oracle</h1>
          <p className="text-xl text-gray-600">Select an emoji to analyze its sentiment</p>
        </div>

        <Card className="p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Choose an Emoji</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 justify-items-center">
            {emojis.map((emoji) => (
              <Button
                key={emoji.name}
                variant="outline"
                className={`h-20 w-20 flex flex-col items-center justify-center gap-1 ${selectedEmoji === emoji.name ? "ring-2 ring-indigo-500" : ""}`}
                onClick={() => handleSelectEmoji(emoji.name, emoji.sentiment)}
              >
                {emoji.icon}
                <span className="text-xs">{emoji.name}</span>
              </Button>
            ))}
          </div>
        </Card>

        {sentiment && (
          <Card className={`p-6 shadow-lg ${getSentimentColor(sentiment)}`}>
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Analysis Result</h2>
              <div className="text-5xl font-bold mb-4">{sentiment}</div>
              <p className="text-gray-600">
                The selected emoji "{selectedEmoji}" has been classified as {sentiment.toLowerCase()} sentiment.
              </p>
            </div>
          </Card>
        )}

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>This app simulates sentiment analysis based on emoji classification.</p>
          <p>In a real-world scenario, this would use a trained model from Lobe AI or similar tool.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
