
import { migrateProductData, checkExistingProducts, clearAllProducts } from './migrateData';

// Main migration runner
const runMigration = async () => {
  console.log('🚀 Starting Product Data Migration');
  console.log('=====================================');
  
  // Check if products already exist
  const existingCount = await checkExistingProducts();
  
  if (existingCount === null) {
    console.log('❌ Unable to check existing products. Please check your database connection.');
    return;
  }
  
  if (existingCount > 0) {
    console.log(`⚠️  Found ${existingCount} existing products in the database.`);
    console.log('To avoid duplicates, please run clearAllProducts() first if you want to start fresh.');
    console.log('Or comment out this check if you want to add products anyway.');
    return;
  }
  
  console.log('✅ Database is ready for migration.');
  
  // Run the migration
  const result = await migrateProductData();
  
  console.log('\n📊 Migration Summary:');
  console.log(`Success: ${result.success}`);
  console.log(`Errors: ${result.errors}`);
  
  if (result.success > 0) {
    console.log('\n🎉 Migration completed successfully!');
    console.log('You can now visit your application to see the products.');
  } else {
    console.log('\n❌ Migration failed. Please check the error messages above.');
  }
};

// Uncomment the line below to run the migration
// runMigration();

// Export functions for manual use
export { runMigration, migrateProductData, checkExistingProducts, clearAllProducts };
