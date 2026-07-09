/**
 * posthog-sdk TypeScript declarations
 */
export interface PosthogOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Posthog {
  constructor(options?: PosthogOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Posthog;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
