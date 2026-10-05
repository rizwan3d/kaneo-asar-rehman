import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
};

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="h-svh w-full overflow-y-auto bg-background flex flex-col items-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-sm space-y-4 my-auto">
        <div className="space-y-1.5 text-center">
          <img
            src="/asar-motion-graphics-logo.webp"
            alt="ASAR Motion Graphics"
            className="mx-auto h-auto w-full max-w-[280px] object-contain"
          />
          <p className="text-[11px] text-muted-foreground">
            Powered by{" "}
            <a
              href="https://growbitlabs.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              growbitlabs.com
            </a>
          </p>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{title}</CardTitle>
            {subtitle ? <CardDescription>{subtitle}</CardDescription> : null}
          </CardHeader>
          <CardContent className="pt-0">{children}</CardContent>
        </Card>
      </div>
    </div>
  );
}
