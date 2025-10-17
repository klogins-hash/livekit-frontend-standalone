import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers"
import { APP_CONFIG_DEFAULTS } from "@/app-config"
import type { AppConfig } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Theme constants
export const THEME_STORAGE_KEY = 'theme'
export const THEME_MEDIA_QUERY = '(prefers-color-scheme: dark)'

// App config function
export async function getAppConfig(headers: ReadonlyHeaders): Promise<AppConfig> {
  // For now, just return the defaults
  // In a real app, this might read from environment variables or a database
  return APP_CONFIG_DEFAULTS
}

// Transcription to chat message function
export function transcriptionToChatMessage(transcription: any) {
  // Basic implementation - you may need to adjust based on your transcription format
  return {
    id: Date.now().toString(),
    message: transcription.text || transcription.transcript || '',
    timestamp: Date.now(),
    name: 'User',
  }
}
