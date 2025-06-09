export interface BackgroundAnimationProps {
  theme: "Light" | "Dark";
}
export type ThemeType = "Light" | "Dark";

export interface AccueilProps {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}
