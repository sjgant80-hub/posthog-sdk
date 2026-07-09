/**
 * posthog-sdk · sovereign wrapper for PostHog
 * Analytics
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://posthog.com/docs/api
 * Homepage: https://posthog.com
 */

export class Posthog {
  constructor({ apiKey, baseURL = 'https://posthog.com', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://posthog.com/docs/api. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('posthog ' + res.status);
    return res.json();
  }
}

export default Posthog;

// Metadata
export const meta = {
  "name": "PostHog",
  "category": "Analytics",
  "homepage": "https://posthog.com",
  "docs_url": "https://posthog.com/docs/api",
  "endpoints_count": 0
};
