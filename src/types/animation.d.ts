export interface BackgroundAnimationProps {
  theme: "Light" | "Dark";
}
export type ThemeType = "Light" | "Dark";

export interface WelcomeProps {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}
