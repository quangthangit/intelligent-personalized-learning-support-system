import HeaderClient from "@/components/header-client";
import BaseLayout from "@/components/layout/base-layout";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function QuizzesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Dashboard");

  return (
    <BaseLayout>
      <div className="flex min-h-screen flex-col">
        <HeaderClient />
        <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>

        {/* Main Content */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          {/* <DashboardContent /> */}
          {/* <p>{t("welcomeMessage")}</p> */}
        </div>
      </div>
    </BaseLayout>
  );
}
