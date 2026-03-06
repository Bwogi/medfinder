-- CreateTable
CREATE TABLE "StorageLocation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "kind" TEXT NOT NULL DEFAULT 'OTHER',
    "area" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "VariantPlacement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productVariantId" TEXT NOT NULL,
    "storageLocationId" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT true,
    "cassetteNumber" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "VariantPlacement_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "VariantPlacement_storageLocationId_fkey" FOREIGN KEY ("storageLocationId") REFERENCES "StorageLocation" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "StorageLocation_area_idx" ON "StorageLocation"("area");

-- CreateIndex
CREATE INDEX "StorageLocation_label_idx" ON "StorageLocation"("label");

-- CreateIndex
CREATE INDEX "VariantPlacement_productVariantId_idx" ON "VariantPlacement"("productVariantId");

-- CreateIndex
CREATE INDEX "VariantPlacement_storageLocationId_idx" ON "VariantPlacement"("storageLocationId");

-- CreateIndex
CREATE INDEX "VariantPlacement_cassetteNumber_idx" ON "VariantPlacement"("cassetteNumber");
