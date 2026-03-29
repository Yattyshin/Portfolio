# Portfolio Site

This is a simple static portfolio scaffold you can deploy to GitHub + Vercel.

What's included:

- `index.html` — static single-page portfolio
- `styles.css` — lightweight styling
- `script.js` — injects projects and handles the contact form (demo only)
- `assets/profile-placeholder.png` — placeholder profile image

Getting started

1. Initialize a Git repository and commit the files:

   git init
   git add .
   git commit -m "Initial commit: portfolio scaffold"

2. Create a new repository on GitHub and push:

   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main

3. Deploy with Vercel:

   - Sign in to Vercel (https://vercel.com) and choose "Import Project".
   - Select the GitHub repository you pushed.
   - Use the defaults for a static site. Vercel will deploy automatically on push.

Notes

- This is a starter template. Replace text, images, and links with your own content.
- For contact forms you'll need to connect a backend or use Vercel Serverless Functions / Form services.
