# Portfolio: Tebibu Solomon Mulugeta
## Run locally
    npm install
    npm run dev
## Update your info
Edit `src/data/portfolio.js`. Search for PLACEHOLDER to find items to replace.
Put your photo/resume/screenshots in `public/` and reference them as `/me.jpg`, `/resume.pdf`.
## Contact form
Create a free form at formspree.io, copy `.env.example` to `.env`, and set `VITE_FORMSPREE_ID`.
Without it, the form opens the visitor's email app instead.
## Deploy
Push to GitHub, then import the repo on vercel.com or netlify.com (build: `npm run build`, output: `dist`).
For the Formspree ID, add `VITE_FORMSPREE_ID` in the host's environment variables.
