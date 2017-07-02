# Run above prior to running this script
# 1. Login-AzureRmAccount
# 2. Select-AzureRmSubscription -SubscriptionName "Your sub name"

$locations = Get-AzureRmLocation
$resourceGroupName = "AzureSpeed"

IF(!(Get-AzureRmResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue)){
	New-AzureRmResourceGroup -Name $resourceGroupName -Location "West US"
}

foreach ($location in $locations)
{
    $region = $location.DisplayName
    # Note: storage name length can not exceed 24 
    $storageAccountName = "azspd" + $location.Location

    # Create storage account in this region if it's not created yet.
    if((Get-AzureRmStorageAccountNameAvailability -Name $storageAccountName).NameAvailable)
    {
        # TODO: Switch to -Kind BlobStorage -AccessTier Hot when v2 storage is ready in all regions
        New-AzureRMStorageAccount -Name $storageAccountName -SkuName Standard_LRS -Kind Storage -Location $region -ResourceGroupName $resourceGroupName
    }

    $storageAccountKey = (Get-AzureRmStorageAccountKey -Name $storageAccountName -ResourceGroupName $resourceGroupName).Value[0]

    # This output can be used for generating outputs.json file
    Write-Host "{"
    Write-Host "  `"name`": `"$storageAccountName`","
    Write-Host "  `"key`": `"$storageAccountKey`","
    Write-Host "  `"region`": `"$region`""
    Write-Host "},"
}