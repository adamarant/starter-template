import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { configs as dsConfigs } from "@adamarant/designsystem/eslint";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Legge DS nel toolchain (ECOSYSTEM_ROADMAP Fase 4): phantom class,
  // controlli nativi nudi, budget utility. Tier 2: aggiungere
  // { ignores: ["src/art/**"] } dopo questo blocco.
  ...dsConfigs.recommended,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
