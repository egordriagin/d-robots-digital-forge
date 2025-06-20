
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { migrateProductData, checkExistingProducts, clearAllProducts } from '@/scripts/migrateData';

export const MigrationRunner = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [existingCount, setExistingCount] = useState<number | null>(null);

  const handleCheckExisting = async () => {
    const count = await checkExistingProducts();
    setExistingCount(count);
  };

  const handleRunMigration = async () => {
    setIsRunning(true);
    try {
      console.log('🚀 Starting Product Data Migration');
      console.log('=====================================');
      
      const migrationResult = await migrateProductData();
      setResult(migrationResult);
      
      console.log('\n📊 Migration Summary:');
      console.log(`Success: ${migrationResult.success}`);
      console.log(`Errors: ${migrationResult.errors}`);
      
      if (migrationResult.success > 0) {
        console.log('\n🎉 Migration completed successfully!');
      }
    } catch (error) {
      console.error('Migration failed:', error);
      setResult({ success: 0, errors: 1, error: error });
    }
    setIsRunning(false);
  };

  const handleClearData = async () => {
    if (!confirm('Are you sure you want to clear ALL products? This cannot be undone!')) {
      return;
    }
    
    setIsClearing(true);
    try {
      const success = await clearAllProducts();
      if (success) {
        setExistingCount(0);
        setResult(null);
        console.log('✅ All products cleared successfully');
      }
    } catch (error) {
      console.error('Failed to clear products:', error);
    }
    setIsClearing(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Database Migration Tool</CardTitle>
          <CardDescription>
            Populate your Supabase database with sample product data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Button 
              onClick={handleCheckExisting}
              variant="outline"
            >
              Check Existing Products
            </Button>
            
            <Button 
              onClick={handleRunMigration} 
              disabled={isRunning}
              className="bg-green-600 hover:bg-green-700"
            >
              {isRunning ? 'Running Migration...' : 'Run Product Migration'}
            </Button>
            
            <Button 
              onClick={handleClearData} 
              disabled={isClearing}
              variant="destructive"
            >
              {isClearing ? 'Clearing...' : 'Clear All Products'}
            </Button>
          </div>

          {existingCount !== null && (
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-blue-800">
                {existingCount === 0 
                  ? '✅ Database is empty and ready for migration' 
                  : `⚠️ Found ${existingCount} existing products`
                }
              </p>
            </div>
          )}
          
          {result && (
            <div className="p-3 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Migration Results:</h3>
              <p className="text-green-600">✅ Success: {result.success} products</p>
              {result.errors > 0 && (
                <p className="text-red-600">❌ Errors: {result.errors} products</p>
              )}
              {result.error && (
                <p className="text-red-600 text-sm mt-2">Error: {result.error.message}</p>
              )}
            </div>
          )}

          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Instructions:</strong></p>
            <ol className="list-decimal list-inside space-y-1">
              <li>First, check if you have existing products</li>
              <li>If the database is empty, run the migration</li>
              <li>If you want to start fresh, clear all products first</li>
              <li>Check the browser console for detailed logs</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
