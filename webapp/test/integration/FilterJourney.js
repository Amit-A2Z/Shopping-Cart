sap.ui.define(["sap/ui/test/opaQunit","./pages/Home","./pages/Category"],function(e){"use strict";QUnit.module("Filter Journey");e("Should start the app and go to the category view I should see a filter button",function(e,o,t){e.iStartMyApp();o.onHome.iPressOnTheFlatScreensCategory();t.onTheCategory.iShouldSeeAFilterButton()});e("Should filter the products on availability",function(e,o,t){o.onTheCategory.iFilterOnAvailability();t.onTheCategory.iShouldOnlySeeAvailableAndDiscontinuedProductsWithInfoToolbar()});e("Should remove the availability filters",function(e,o,t){o.onTheCategory.iRemoveTheAvailabilityFilters();t.onTheCategory.iShouldSeeAllProductsAndNoInfoToolbar()});e("Should filter on both availability and price",function(e,o,t){o.onTheCategory.iFilterOnAvailabilityAndPrice();t.onTheCategory.iShouldOnlySeeOutOfStockAndCheapProductsWithInfoToolbar()});e("Should change the price filter and then cancel the change",function(e,o,t){o.onTheCategory.iCancelAPriceFilterChange();t.onTheCategory.iShouldOnlySeeOutOfStockAndCheapProductsWithInfoToolbar();o.onTheCategory.iPressTheFilterButton();o.onTheCategory.iPressTheBackButtonInDialog();t.onTheCategory.iShouldTestTheFilterCount(1)});e("Should change the price filter values to the default ones",function(e,o,t){o.onTheCategory.iChangeToTheDefaultFilterPriceValues();t.onTheCategory.iShouldOnlySeeOutOfStockProductsAndAnInfoToolbar();o.onTheCategory.iPressTheFilterButton();o.onTheCategory.iPressTheBackButtonInDialog();t.onTheCategory.iShouldTestTheFilterCount(0)});e("Should reset price custom filter",function(e,o,t){o.onTheCategory.iPressResetButton();t.onTheCategory.iShouldTestTheFilterCount(0);o.onTheCategory.iPressOkButton();t.onTheCategory.iShouldSeeAllProductsAndNoInfoToolbar()});e("Should filter the products on supplier",function(e,o,t){o.onTheCategory.iFilterOnSupplier();t.onTheCategory.iShouldOnlySeeTechnoComProductsAndAnInfoToolbar()});e("Should remove the supplier filter",function(e,o,t){o.onTheCategory.iRemoveTheSupplierFilter();t.onTheCategory.iShouldSeeAllProductsAndNoInfoToolbar();t.onTheCategory.iTeardownMyApp()})});