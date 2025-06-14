import { registerOTel } from "@vercel/otel";
import { LangfuseExporter } from "langfuse-vercel";

export function register() {
  registerOTel({
    serviceName: "cognibase-web",
    traceExporter: new LangfuseExporter({ debug: true }),
  });
}
