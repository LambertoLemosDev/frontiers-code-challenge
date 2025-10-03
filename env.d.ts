interface ImportMetaEnv {
  readonly VITE_QUOTES_RANDOM_ENDPOINT: string;
  readonly VITE_INTERNAL_QUOTES_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
