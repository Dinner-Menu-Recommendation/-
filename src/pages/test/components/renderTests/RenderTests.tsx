import useChooseFood from "../../../../hooks/useChooseFood";
import styles from "./RenderTests.module.scss";
import CalorieTest from "./calorieTest/CalorieTest";
import CountryFoodTest from "./countryFoodTest/CountryFoodTest";
import MealOrSnacks from "./mealOrSnacks/MealOrSnacks";
import MeatOrSeafoodTest from "./meatOrSeafoodTest/MeatOrSeafoodTest";
import OilyTest from "./oilyTest/OilyTest";
import PriceTest from "./priceTest/PriceTest";
import RiceOrBreadOrNoodleTest from "./riceOrBreadOrNoodleTest/RiceOrBreadOrNoodleTest";
import SoupTest from "./soupTest/SoupTest";
import SpicyTest from "./spicyTest/SpicyTest";

function RenderTests() {
  const { testCount, handleClickCard } = useChooseFood();

  return (
    <div className={styles.container}>
      {testCount === 1 && <SpicyTest handleClickCard={handleClickCard} />}
      {testCount === 2 && <MealOrSnacks handleClickCard={handleClickCard} />}
      {testCount === 3 && <CountryFoodTest handleClickCard={handleClickCard} />}
      {testCount === 4 && (
        <MeatOrSeafoodTest handleClickCard={handleClickCard} />
      )}
      {testCount === 5 && (
        <RiceOrBreadOrNoodleTest handleClickCard={handleClickCard} />
      )}
      {testCount === 6 && <PriceTest handleClickCard={handleClickCard} />}
      {testCount === 7 && <CalorieTest handleClickCard={handleClickCard} />}
      {testCount === 8 && <SoupTest handleClickCard={handleClickCard} />}
      {testCount === 9 && <OilyTest handleClickCard={handleClickCard} />}
    </div>
  );
}

export default RenderTests;
