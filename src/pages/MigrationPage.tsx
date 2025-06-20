
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Database, CheckCircle, AlertCircle } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { migrateProductData, checkExistingProducts, clearAllProducts } from "@/scripts/migrateData";

const MigrationPage = () => {
  usePageTitle("Database Migration");
  
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<{ success: number; errors: number } | null>(null);
  const [existingCount, setExistingCount] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isClearing, setIsClearing] = useState(false);

  const handleCheckExisting = async () => {
    setIsChecking(true);
    try {
      const count = await checkExistingProducts();
      setExistingCount(count);
    } catch (error) {
      console.error('Error checking existing products:', error);
    } finally {
      setIsChecking(false);
    }
  };

  const handleRunMigration = async () => {
    setIsRunning(true);
    setResult(null);
    try {
      const migrationResult = await migrateProductData();
      setResult(migrationResult);
    } catch (error) {
      console.error('Migration error:', error);
      setResult({ success: 0, errors: 1 });
    } finally {
      setIsRunning(false);
    }
  };

  const handleClearProducts = async () => {
    setIsClearing(true);
    try {
      await clearAllProducts();
      setExistingCount(0);
      setResult(null);
    } catch (error) {
      console.error('Error clearing products:', error);
    } finally {
      setIsClearing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#113C5A] mb-4">Database Migration</h1>
          <p className="text-gray-600">
            Manage your product database migration process
          </p>
        </div>

        <div className="space-y-6">
          {/* Check Existing Products */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Check Existing Products
              </CardTitle>
              <CardDescription>
                Check how many products are currently in the database
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={handleCheckExisting} 
                disabled={isChecking}
                className="w-full"
              >
                {isChecking ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  'Check Existing Products'
                )}
              </Button>
              
              {existingCount !== null && (
                <div className="flex items-center gap-2">
                  <Badge variant={existingCount > 0 ? "destructive" : "default"}>
                    {existingCount} products found
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Run Migration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Run Migration
              </CardTitle>
              <CardDescription>
                Import sample product data into the database
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={handleRunMigration} 
                disabled={isRunning}
                className="w-full bg-[#3498DB] hover:bg-[#1F669D]"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Running Migration...
                  </>
                ) : (
                  'Run Migration'
                )}
              </Button>
              
              {result && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {result.success > 0 ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    )}
                    <span className="text-sm">
                      Success: {result.success}, Errors: {result.errors}
                    </span>
                  </div>
                  
                  {result.success > 0 && (
                    <div className="text-sm text-green-600 bg-green-50 p-3 rounded">
                      Migration completed successfully! You can now visit your application to see the products.
                    </div>
                  )}
                  
                  {result.errors > 0 && (
                    <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
                      Some errors occurred during migration. Check the console for details.
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Clear Products */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                Clear All Products
              </CardTitle>
              <CardDescription>
                Remove all products from the database (use with caution)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleClearProducts} 
                disabled={isClearing}
                variant="destructive"
                className="w-full"
              >
                {isClearing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Clearing...
                  </>
                ) : (
                  'Clear All Products'
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            This is a temporary migration page for development purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MigrationPage;
