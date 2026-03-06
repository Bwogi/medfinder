-- CreateTable
CREATE TABLE "Medication" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "genericName" TEXT NOT NULL,
    "brandNames" TEXT NOT NULL DEFAULT '[]',
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "medicationId" TEXT NOT NULL,
    "strength" TEXT,
    "route" TEXT NOT NULL DEFAULT 'ORAL',
    "dosageForm" TEXT NOT NULL DEFAULT 'OTHER',
    "ndc" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProductVariant_medicationId_fkey" FOREIGN KEY ("medicationId") REFERENCES "Medication" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productVariantId" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "cassetteNumber" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Location_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Medication_genericName_idx" ON "Medication"("genericName");

-- CreateIndex
CREATE INDEX "ProductVariant_medicationId_idx" ON "ProductVariant"("medicationId");

-- CreateIndex
CREATE INDEX "ProductVariant_dosageForm_idx" ON "ProductVariant"("dosageForm");

-- CreateIndex
CREATE INDEX "ProductVariant_ndc_idx" ON "ProductVariant"("ndc");

-- CreateIndex
CREATE INDEX "Location_productVariantId_idx" ON "Location"("productVariantId");

-- CreateIndex
CREATE INDEX "Location_area_idx" ON "Location"("area");

-- CreateIndex
CREATE INDEX "Location_cassetteNumber_idx" ON "Location"("cassetteNumber");
