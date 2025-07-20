import { useCreateMyRestaurant } from "@/api/restaurant/useCreateMyRestaurant";
import { useGetMyRestaurant } from "@/api/restaurant/useGetMyRestaurant";
import ManageRestaurnatForm from "@/forms/manage-restaurant-form/ManageRestaurnatForm";

function ManageRestaurantPage() {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();

  return (
    <ManageRestaurnatForm restaurant={restaurant} onSave={createRestaurant} isLoading={isLoading} />
  );
}

export default ManageRestaurantPage;
