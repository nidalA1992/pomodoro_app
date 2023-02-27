export const getPosition = (element: HTMLButtonElement) => {
  const { top, left } = element.getBoundingClientRect();
  return { top: top + window.scrollY, left };
};
