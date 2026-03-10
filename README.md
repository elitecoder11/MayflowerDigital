# Mayflower Digital – Portfolio Website

**Modern Digital Real Estate from the Motor City**

One-page portfolio site for Mayflower Digital, built with Next.js and Tailwind CSS. Tailored for small business clients in the Detroit area.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What’s included

- **Hero** – Headline, subheadline, “See Packages” and “Request a Free Demo Homepage” CTAs, placeholder desktop + mobile mockup
- **Packages** – Starter ($800), Pro ($1,800), Done-for-You Hosting ($100/mo), plus optional add-ons
- **Sample Projects** – Placeholder cards (Restaurant, Dentist, Gym) with CTA to request a demo
- **How We Work** – 4 steps: Free Demo → Approve → Go Live in 3–7 Days → Ongoing Support
- **Testimonials** – “Coming soon” placeholder for real client feedback
- **Contact / Demo Request** – Form (name, business, email, phone, message) posting to `/api/contact`
- **Footer** – Short about, tagline, LinkedIn/Instagram, Privacy/Terms links

Smooth scroll is enabled for in-page CTAs.

## Next steps

1. **Contact form** – Replace `src/app/api/contact/route.ts` with your backend (e.g. [Formspree](https://formspree.io), [Resend](https://resend.com), or Netlify Forms).
2. **Copy** – Update footer email/phone and “Schedule a call” link in `src/components/Contact.tsx`.
3. **Images** – Add real hero mockup and portfolio screenshots under `public/` and use Next.js `Image` where needed.
4. **CMS** – Optional: add Sanity or Strapi for editable copy and portfolio items.
5. **Deploy** – Deploy to [Vercel](https://vercel.com) or Netlify (SSL and easy demos).

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Fonts: DM Sans, Outfit (Google Fonts)
