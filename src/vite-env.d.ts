/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GEMINI_BOT_API_KEY: string
  // Add other VITE_ prefixed environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}/// <reference types="vite/client" />
