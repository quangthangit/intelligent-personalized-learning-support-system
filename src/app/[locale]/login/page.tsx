import BaseLayoutServer from "@/components/layout/base-layout-server";
import LoginContent from "@/components/login";

export default function LoginPage() {
  return (
    <BaseLayoutServer showFooter={false}>
      <LoginContent/>
    </BaseLayoutServer>
  );
}
