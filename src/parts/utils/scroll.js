export const scrollto = (value) => {
  const element = document.getElementById(value);
  element.scrollIntoView({
    behavior: "smooth",
  });
};
