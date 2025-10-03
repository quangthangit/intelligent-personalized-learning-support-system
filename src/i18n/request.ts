import { getRequestConfig } from "next-intl/server";
import en from "../messages/en.json";
import vi from "../messages/vi.json";

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale || "en"; // Default to "en" if locale is undefined
  const messages = resolvedLocale === "vi" ? vi : en;
  return { locale: resolvedLocale, messages };
});
