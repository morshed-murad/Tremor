import { Them_Types } from "./content";

export const applytoggle = (theme: string) => {
  const { Them_Dark, Them_Light } = Them_Types;
  const root = window.document.documentElement;
  const isDark = theme === Them_Dark;
  root.classList.remove(isDark ? Them_Light : Them_Dark);
};
