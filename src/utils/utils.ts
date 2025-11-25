export const languages = [
  { name: "Spanish (Preferred)", value: "spanish_preferred" },
  { name: "German", value: "german" },
  { name: "Polish", value: "polish" },
  { name: "Portugal", value: "portugal" },
  { name: "Russian", value: "russian" },
  { name: "Japanese", value: "japanese" },
  { name: "Kyrgyz", value: "kyrgyz" },
  { name: "Latin", value: "latin" },
  { name: "Cantonese", value: "cantonese" },
  { name: "Thai", value: "thai" },
  { name: "Swedish", value: "swedish" },
  { name: "Danish", value: "danish" },
  { name: "Luo", value: "luo" },
];

export function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function formatUsername(username: string) {
  if (username.length > 12) {
    return username.slice(0, 12) + "...";
  } else {
    return username;
  }
}
