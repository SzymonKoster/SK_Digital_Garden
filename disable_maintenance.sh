#!/bin/bash

# Disable Maintenance Mode
# This script rebuilds and redeploys the main application to the gh-pages branch.

echo "🚀 Disabling Maintenance Mode..."

# Run the standard deploy script defined in package.json
# This usually runs 'npm run build' and then 'gh-pages -d dist'
npm run deploy

echo "✅ Maintenance mode disabled."
echo "The main application has been redeployed."
