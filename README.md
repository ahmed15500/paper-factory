# The Brothers Factory | مصنع الأخوه

Static bilingual website for The Brothers Factory, specializing in paper cutting and conversion.

## Cloudflare deployment

The project is configured for Cloudflare Workers static assets.

- Deploy command: `npx wrangler deploy`
- Static assets directory: `public`
- Configuration file: `wrangler.jsonc`

Every push to the connected production branch triggers a new Cloudflare deployment.

## Website imagery

Optimized WebP images are stored in `public/assets/images` and integrated across the website.
