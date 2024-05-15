/// <reference types="vite/client" />

interface metaInterface {
    readonly VITE_API_URL: string
    readonly VITE_API_KEY: string
}

interface ImportMeta {
    readonly env:metaInterface;
}