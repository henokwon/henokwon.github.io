# Development and deployment

Use Node.js 22 and npm. Install the exact dependencies with `npm ci`, then run `npm run dev`. Before
pushing, run `npm run lint` and `npm run build`. `npm run preview` serves the production build
locally.

The contact section uses direct WhatsApp, Telegram, and email links. No EmailJS account, API keys,
or environment variables are required.

## Automatic deployment

The `.github/workflows/deploy.yml` workflow runs on pushes to `master`, pull requests targeting
`master`, and manual dispatches from the Actions tab.

1. Install dependencies from `package-lock.json` with `npm ci` on Node.js 22.
2. Run ESLint and the production build (which also checks TypeScript).
3. For a push or manual dispatch, upload `dist` and deploy to GitHub Pages. Pull requests run checks
   only and never publish.

In repository **Settings → Pages → Build and deployment**, the source must be **GitHub Actions**.
Previously the site published from the root of `gh-pages`, which required a separate
`npm run deploy`; a source push alone did not publish. The new workflow uses the repository's
built-in `GITHUB_TOKEN`, with scoped Pages and OIDC permissions. No personal access token or added
repository secret is needed.

After pushing, check **Actions → Check and deploy portfolio**. A successful deploy publishes at
<https://henokwon.github.io/>. If environment protection requires approval, approve the
`github-pages` deployment in that run. To redeploy a previous version, revert the source change on
`master` and push the revert.

The Vite `base` is `/` because this is a GitHub user site. Keep generated `dist` and `node_modules`
out of source control. The old `npm run deploy` script is a legacy branch-publishing path and is
unnecessary with the Actions publishing source.

See
[GitHub's Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
and [Vite's static deployment guide](https://vite.dev/guide/static-deploy.html).
