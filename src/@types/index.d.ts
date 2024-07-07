type Food = {
  name: string | null;
  spicy: boolean | null;
  meal: boolean | null;
  cuisine: "한식" | "중식" | "양식" | "일식" | null;
  containsMeat: boolean | null;
  containsSeafood: boolean | null;
  base: "밥" | "빵" | "면" | null;
  expensive: boolean | null;
  lowCalorie: boolean | null;
  withSoup: boolean | null;
  light: boolean | null;
};
