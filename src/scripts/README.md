
# Data Migration Scripts

This directory contains scripts to populate your Supabase database with sample product data.

## Files

- `migrateData.ts` - Contains the sample product data and migration functions
- `runMigration.ts` - Main script runner with safety checks
- `README.md` - This documentation file

## How to Use

### Option 1: Run from Browser Console (Recommended)

1. Open your application in the browser
2. Open Developer Tools (F12)
3. Go to the Console tab
4. Import and run the migration:

```javascript
// Import the migration functions
import { runMigration, clearAllProducts } from './src/scripts/runMigration.ts';

// Check what's in the database first
import { checkExistingProducts } from './src/scripts/migrateData.ts';
await checkExistingProducts();

// Run the migration
await runMigration();

// If you need to clear the database first:
// await clearAllProducts();
```

### Option 2: Modify the Script File

1. Open `src/scripts/runMigration.ts`
2. Uncomment the last line: `// runMigration();`
3. Save the file
4. The migration will run automatically when the module is imported

### Option 3: Create a Temporary Component

Create a temporary component that runs the migration on button click:

```tsx
import { useState } from 'react';
import { migrateProductData } from '@/scripts/migrateData';
import { Button } from '@/components/ui/button';

export const MigrationRunner = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<any>(null);

  const runMigration = async () => {
    setIsRunning(true);
    try {
      const migrationResult = await migrateProductData();
      setResult(migrationResult);
    } catch (error) {
      console.error('Migration failed:', error);
    }
    setIsRunning(false);
  };

  return (
    <div className="p-4">
      <Button onClick={runMigration} disabled={isRunning}>
        {isRunning ? 'Running Migration...' : 'Run Product Migration'}
      </Button>
      
      {result && (
        <div className="mt-4">
          <p>Success: {result.success}</p>
          <p>Errors: {result.errors}</p>
        </div>
      )}
    </div>
  );
};
```

## Sample Data Included

The migration includes sample products for all categories:

- **3D Printers**: Bambu Lab A1 mini, Prusa MK4
- **3D Scanners**: SHINING 3D EinScan-SE  
- **Robotic Dogs**: Unitree Go2
- **Humanoid Robots**: NAO6
- **Robotic Arms**: UR5e
- **Laser Cutters**: xTool D1 Pro

Each product includes:
- Complete product information
- Pricing details
- Stock status
- Features list
- Sample reviews
- High-quality images

## Safety Features

- Checks for existing products to prevent duplicates
- Proper error handling and logging
- Transaction-safe operations
- Clear success/failure reporting

## Troubleshooting

If you encounter errors:

1. Check your Supabase connection in the browser console
2. Verify your database schema matches the expected structure
3. Check the console for detailed error messages
4. Ensure you have proper permissions to insert data

## After Migration

Once the migration is complete:

1. Visit your application homepage
2. Navigate to different category pages
3. Check individual product pages
4. Verify all data displays correctly

The sample data is designed to showcase all features of your application.
