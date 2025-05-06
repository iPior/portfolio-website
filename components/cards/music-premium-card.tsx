import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

export function MusicPremiumPackageCard() {
  const equipmentList = [
    "Two speaker tops",
    "Subwoofer for enhanced bass",
    "Enhanced lighting package",
    "Fog Machine",
    "Microphone",
    "Professional DJ equipment",
    "Customized playlist",
    "Setup & breakdown included",
  ];

  // Split the equipment list into two halves
  const firstHalf = equipmentList.slice(0, Math.ceil(equipmentList.length / 2));
  const secondHalf = equipmentList.slice(Math.ceil(equipmentList.length / 2));

  return (
    <Card className="pt-0 h-full hover:bg-muted/90">
      <CardHeader className="pt-4 ">
        <CardTitle className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold">Premium Package - $400</span>
            <span className="text-md text-muted-foreground"> minimum</span>
          </div>
          <Badge className="ml-2 p-1 bg-accent/60 text-foreground h-1/2">Best Value</Badge>
        </CardTitle>
        <CardDescription>Ideal for larger events, $100 per additional hour.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Separator />
        <div>
          <h1 className="text-md font-medium mb-2">Equipment Included:</h1>
          <div className="flex gap-2 flex-col md:flex-row">
            <ul className="space-y-2 text-sm">
              {firstHalf.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-sm">
              {secondHalf.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}