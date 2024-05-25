/*
  Warnings:

  - You are about to drop the column `Productname` on the `Product` table. All the data in the column will be lost.
  - Added the required column `productName` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sellerName" TEXT NOT NULL,
    "sellerEmail" TEXT NOT NULL,
    "sellerCellphone" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "creatAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Product" ("creatAt", "description", "id", "price", "sellerCellphone", "sellerEmail", "sellerName") SELECT "creatAt", "description", "id", "price", "sellerCellphone", "sellerEmail", "sellerName" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check("Product");
PRAGMA foreign_keys=ON;
