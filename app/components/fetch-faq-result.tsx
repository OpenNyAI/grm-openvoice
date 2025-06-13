import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

interface FaqItem {
  id: string;
  code: string;
  question: string;
  answer: string;
}

interface FetchFaqResultProps {
  status: string;
  faqs: FaqItem[];
  count: number;
}

export function FetchFaqResult({ status, faqs, count }: FetchFaqResultProps) {
  if (!faqs || faqs.length === 0) {
    return (
      <Card className="bg-muted/50 border-muted">
        <CardContent className="pt-4">
          <p className="text-sm text-muted-foreground">No FAQs found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-blue-50/50 border-blue-200">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-blue-500" />
            <CardTitle className="text-sm font-medium">Related FAQs</CardTitle>
          </div>
          <Badge variant="outline" className="bg-blue-100 text-blue-700">
            {count} {count === 1 ? "result" : "results"}
          </Badge>
        </div>
        <CardDescription className="text-xs text-blue-700">
          Status: {status}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-blue-200"
            >
              <AccordionTrigger className="text-sm font-medium text-blue-800 hover:text-blue-900 hover:no-underline">
                <div className="flex items-start gap-2 text-left">
                  <Badge
                    variant="outline"
                    className="shrink-0 bg-blue-100 text-blue-700 text-xs py-0 h-5"
                  >
                    {faq.code}
                  </Badge>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-blue-800 bg-white/80 p-3 rounded-md mt-1">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
