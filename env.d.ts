/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_NL_API: string
  readonly VITE_NL_NLIB: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
