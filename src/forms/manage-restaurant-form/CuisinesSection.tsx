import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckbox from "./CuisineCheckbox";

function CuisinesSection() {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Cuisins</h2>
        <FormDescription>
          Select the cuisines that your restaurant serves
        </FormDescription>
      </div>

      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid gap-1 md:grid-cols-5">
              {cuisineList.map((cuisineItem) => (
                <CuisineCheckbox
                  key={cuisineItem}
                  cuisine={cuisineItem}
                  field={field}
                />
              ))}
            </div>
          </FormItem>
        )}
      />
    </div>
  );
}

export default CuisinesSection;
