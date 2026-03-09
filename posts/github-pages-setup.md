GitHub Pages is a true blessing to the developer community. In short, it provides absolutely free, lightning-fast static hosting natively integrated into your GitHub repository.

## How does it work?
When you commit code to a repository named `username.github.io`, GitHub automatically provides a publicly accessible domain name where your static code like HTML, CSS, JavaScript, or Markdown gets published.

### 1. Initializing your repository
If your username is "harsha", you need to create a new repository strictly named `harsha.github.io`.

Once you initialize it, push an `index.html` file with your basic structure. It really is that easy.

> Pro tip: If your repository is not named via the special username convention, you can still host your site on `username.github.io/repo-name`.

### 2. Custom Domains
One of the most impressive parts of GitHub Pages is the configuration of custom domains. All you need to do is add a `CNAME` record pointing to `username.github.io` from your DNS provider, and add a file named exactly `CNAME` at the root of your project.

And best of all? GitHub automatically provisions a Let's Encrypt SSL certificate for you.

Now that you have everything set up, just push the code and watch the GitHub Actions automatically handle your build pipeline.
