import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

function LoadingButton() {
  return (
    <Button>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Load...
    </Button>
  );
}

export default LoadingButton;
