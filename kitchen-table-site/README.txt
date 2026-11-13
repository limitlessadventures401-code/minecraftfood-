KITCHEN TABLE MENU - setup (free)
1. Put these files in a GitHub repo: index.html, admin.html, and the functions folder (keep the folder layout).
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git > pick the repo. Framework: None. Build command: leave empty. Output directory: / (or leave blank). Deploy.
3. Dashboard > Storage & Databases > D1 > Create database (any name).
4. Your Pages project > Settings > Bindings > Add > D1 database. Variable name: DB (capital letters). Pick your database.
5. Same Settings page > Variables and Secrets > Add: ADMIN_PASSWORD = a password only you know (type: Secret).
6. Deployments > Retry deployment (or push any small change) so the settings take effect.
Customers use:  https://YOURPROJECT.pages.dev/
You manage orders at:  https://YOURPROJECT.pages.dev/admin.html
