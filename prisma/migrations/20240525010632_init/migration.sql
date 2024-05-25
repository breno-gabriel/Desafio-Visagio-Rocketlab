/*
  Warnings:

  - You are about to drop the `Notebook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Notebook";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Productname" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sellerName" TEXT NOT NULL,
    "sellerEmail" TEXT NOT NULL,
    "sellerCellphone" TEXT NOT NULL,
    "price" DECIMAL NOT NULL DEFAULT 0.0,
    "creatAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
