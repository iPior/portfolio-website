import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

export function MusicStandardPackageCard() {
  const equipmentList = [
    "Two speaker tops",
    "Basic lighting setup",
    "Professional DJ equipment",
    "Setup & breakdown included",
  ];

  // Split the equipment list into two halves
  const firstHalf = equipmentList.slice(0, Math.ceil(equipmentList.length / 2));
  const secondHalf = equipmentList.slice(Math.ceil(equipmentList.length / 2));

  return (
    <Card className="pt-4 h-full hover:bg-muted/90">
      <CardHeader className="@container">
        <CardTitle className="">
          <div className="flex w-full flex-col @lg:flex-row @lg:items-center space-y-2">
            <span className="text-3xl @lg:text-4xl font-bold">Standard Package</span>
            <span className="text-3xl font-bold hidden @lg:block">&nbsp;-&nbsp;</span>
            <div className="">
              <span className="text-2xl @lg:text-3xl font-bold">$200</span>
              <span className="text-md text-muted-foreground"> minimum</span>
            </div>
          </div>
        </CardTitle>
        <CardDescription>Perfect for small to medium gatherings, $100 per additional hour.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Separator />
        <div>
          <h4 className="font-medium mb-2">Equipment Included:</h4>
          <div className="flex gap-2 flex-col md:flex-row">
            {/* First Half */}
            <ul className="space-y-2 text-sm">
              {firstHalf.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {/* Second Half */}
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