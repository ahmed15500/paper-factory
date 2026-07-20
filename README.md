# The Brothers Factory Website | موقع مصنع الأخوه

A responsive bilingual website for **The Brothers Factory — مصنع الأخوه**, a paper cutting and converting factory.

## Features

- Arabic-first responsive design with full English translation
- Professional paper-industry visual identity
- Services and work-process sections
- Quote request form with dimensions and quantity fields
- WhatsApp integration ready to activate
- Mobile navigation, accessibility support and reduced-motion support
- No framework or build process required

## Run locally

Open `index.html` directly in a browser, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Add the factory contact details

Open `script.js` and edit the object at the top:

```js
const FACTORY_CONTACT = {
  whatsapp: "", // country code + number, without + or spaces
  phone: "",
  email: "",
  addressAr: "",
  addressEn: ""
};
```

Example Egyptian WhatsApp format: `201001234567`.

After a WhatsApp number is added, the quote form opens WhatsApp with a formatted customer request. Until then, the website copies the request summary without transmitting customer data.

## Publish with GitHub Pages

1. Upload all files to the repository root.
2. Open repository **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)`, then save.
