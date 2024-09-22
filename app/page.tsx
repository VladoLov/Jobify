import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Button>Home</Button>
      <Button variant="outline" size="icon">
        <Camera />
      </Button>
    </div>
  );
}
