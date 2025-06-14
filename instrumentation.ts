import { registerOTel } from "@vercel/otel";
import { LangfuseExporter } from "langfuse-vercel";

export function register() {
  registerOTel({
    serviceName: "zettabase-web",
    traceExporter: new LangfuseExporter({ debug: true }),
  });
}
