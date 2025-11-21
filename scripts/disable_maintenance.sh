#!/bin/bash
# ------------------------------------------------------------------------------
# Disable Maintenance Mode Script
#
# Purpose: Rebuilds and redeploys the main Digital Garden application to 
#          GitHub Pages, restoring the live portfolio site.
#
# Usage: ./disable_maintenance.sh
#
# What it does:
#   1. Runs the build process (compiles TypeScript, bundles with Vite)
#   2. Deploys the production build (dist folder) to the gh-pages branch
#   3. GitHub Pages will refresh and display the full application within 1-2 minutes
#
# Note: This uses the 'deploy' script from package.json (predeploy + deploy)
# ------------------------------------------------------------------------------

# Disable Maintenance Mode
# This script rebuilds and redeploys the main application to the gh-pages branch.

echo "🚀 Disabling Maintenance Mode..."

# Run the standard deploy script defined in package.json
# This usually runs 'npm run build' and then 'gh-pages -d dist'
npm run deploy

echo "✅ Maintenance mode disabled."
echo "The main application has been redeployed."
