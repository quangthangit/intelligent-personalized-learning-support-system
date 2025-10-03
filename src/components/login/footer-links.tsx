import { useTranslations } from "next-intl";

export function FooterLinks() {
  const t = useTranslations("Login");
  return (
    <div className="text-center text-xs text-gray-500 dark:text-gray-400 space-y-1">
      <p>{t("descriptionFooter")}</p>
      <p>
        <a href="#" className="text-teal-600 hover:underline">
          {t("termsOfService")}
        </a>
        {" và "}
        <a href="#" className="text-teal-600 hover:underline">
          {t("privacyPolicy")}
        </a>
      </p>
    </div>
  )
}