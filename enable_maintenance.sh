#!/bin/bash

# Enable Maintenance Mode
# This script deploys the 'maintenance' directory to the gh-pages branch.

echo "🚧 Enabling Maintenance Mode..."

# Ensure we are in the project root
if [ ! -d "maintenance" ]; then
    echo "Error: 'maintenance' directory not found. Please run this script from the project root."
    exit 1
fi

# Deploy the maintenance folder
npx gh-pages -d maintenance -m "Deploy maintenance mode"

echo "✅ Maintenance mode enabled."
echo "The site should show the 'Under Construction' page shortly."
