import { useNavigate } from "react-router-dom";
import useTasteStore from "../stores/useTasteStore";
import useTestCountStore from "../stores/useTestCountStore";
import PATH from "../routes/path";
import foodData from "../data";

function useChooseFood() {
  const { testCount, setTestCount } = useTestCountStore();
  const { taste, setTaste } = useTasteStore();
  const navigate = useNavigate();

  const handleClickCard = (title: string) => {
    let updatedTaste = { ...taste };

    if (testCount === 1) {
      updatedTaste = { ...updatedTaste, spicy: title === "매운 음식" };
    } else if (testCount === 2) {
      updatedTaste = { ...updatedTaste, meal: title === "식사" };
    } else if (testCount === 3) {
      updatedTaste = { ...updatedTaste, cuisine: title as Food["cuisine"] };
    } else if (testCount === 4) {
      if (title === "고기") {
        updatedTaste = {
          ...updatedTaste,
          containsMeat: true,
          containsSeafood: false,
        };
      } else {
        updatedTaste = {
          ...updatedTaste,
          containsMeat: false,
          containsSeafood: true,
        };
      }
    } else if (testCount === 5) {
      updatedTaste = { ...updatedTaste, base: title as Food["base"] };
    } else if (testCount === 6) {
      updatedTaste = { ...updatedTaste, expensive: title === "가격 노상관" };
    } else if (testCount === 7) {
      updatedTaste = { ...updatedTaste, lowCalorie: title !== "칼로리 노상관" };
    } else if (testCount === 8) {
      updatedTaste = { ...updatedTaste, withSoup: title === "국물 있는 음식" };
    } else if (testCount === 9) {
      updatedTaste = { ...updatedTaste, light: title !== "느끼한 음식" };

      const filteredFood = foodData.filter((food) =>
        Object.entries(updatedTaste).every(([key, value]) => {
          if (value === null || value === undefined) {
            return true;
          }
          return food[key as keyof Food] === value;
        })
      );

      const queryString = new URLSearchParams({
        food: JSON.stringify(filteredFood),
      }).toString();

      navigate(`${PATH.RESULT}?${queryString}`);
      return;
    }

    const filteredFood = foodData.filter((food) =>
      Object.entries(updatedTaste).every(([key, value]) => {
        if (value === null || value === undefined) {
          return true;
        }
        return food[key as keyof Food] === value;
      })
    );

    console.log(filteredFood);

    setTaste(updatedTaste);
    setTestCount(testCount + 1);
  };

  return { testCount, handleClickCard };
}

export default useChooseFood;
