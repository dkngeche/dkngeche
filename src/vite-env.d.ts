/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMBOLD_FORM_ID?: string;
  readonly VITE_FORMBOLD_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
