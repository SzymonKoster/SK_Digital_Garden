#!/bin/bash
# ------------------------------------------------------------------------------
# Enable Maintenance Mode Script
# 
# Purpose: Deploys a maintenance page to GitHub Pages, showing "Site Under 
#          Construction" message to all visitors. This is useful when you need
#          to temporarily take the site offline for updates or fixes.
#
# Usage: ./enable_maintenance.sh
#
# What it does:
#   1. Validates that the maintenance directory exists
#   2. Deploys the maintenance folder to the gh-pages branch
#   3. GitHub Pages will refresh and display the maintenance page within 1-2 minutes
#
# Note: To restore the site, run ./disable_maintenance.sh
# ------------------------------------------------------------------------------

# Enable Maintenance Mode
# This script deploys the 'maintenance' directory to the gh-pages branch.

echo "🚧 Enabling Maintenance Mode..."

# Ensure we are in the project root
if [ ! -d "src/maintenance" ]; then
    echo "Error: 'maintenance' directory not found. Please run this script from the project root."
    exit 1
fi

# Deploy the maintenance folder
npx gh-pages -d src/maintenance -m "Deploy maintenance mode"

echo "✅ Maintenance mode enabled."
echo "The site should show the 'Under Construction' page shortly."
