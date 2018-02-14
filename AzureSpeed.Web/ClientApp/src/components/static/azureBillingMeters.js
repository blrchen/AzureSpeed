import React from 'react';
import { connect } from 'react-redux';

const AzureRegions = props => (
  <div class="container-fluid">
    <div class="page-header">
      <h3>Azure Billing Meters</h3>
      <small>Azure billing meter information with prices.</small>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            Azure Regions
          </div>
          <div class="panel-body">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>MeterCategory</th>
                  <th>MeterSubCategory</th>
                  <th>MeterId</th>
                  <th>MeterName</th>
                  <th>Unit</th>
                  <th>IncludedQuantity</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Networking</td><td>Traffic Manager</td><td>c7a0c9f2-b08a-4f54-955f-c2ba8c7b0837</td><td>DNS Queries (1M)</td><td>1M Queries</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A2 VM (Windows)</td><td>bd25a007-f0b4-4fd3-8b5e-bfd2cc0772f7</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>SQL Server Web (16 core)</td><td>d8f0abe0-ebe9-4181-9239-6b6f9d516e8d</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>2cf60c40-2347-4e28-8ac9-a8eba2c6c6f9</td><td>Premium P11 Secondary Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>173d538a-4e1d-431f-b6c4-f0a0194c8fb1</td><td>MP1 Read Replica Instance (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D4_v2 VM (Windows)</td><td>26955a57-5f45-44d0-99cd-56af2386e6af</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>4e38119e-b416-4bc5-992c-95120a689104</td><td>Standard C4 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D11 VM</td><td>d2bab9d0-a7cd-4a49-ab5a-ca4521d88e19</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Geo Redundant</td><td>ee5e203e-6b6a-4ba2-961a-683698d03a02</td><td>Standard IO - Cool Block Blob (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>b72c99cc-65a6-4e96-9ade-88af0d90fec9</td><td>Premium P15 Secondary Active Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_A2m_v2 Cloud Services</td><td>e96071a1-2139-4a30-a919-c0de7ddc9bd4</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>ff705a8d-5eb0-4327-9d2f-6df6a097dcea</td><td>Premium Unlimited Data - 200 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>99ce0a26-4339-426b-9f80-10d697f0f191</td><td>Standard IO - Cool Block Blob Data Write (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>76dfe260-5cbf-4df7-a887-3197b1c1d94c</td><td>Premium P11 Secondary Active Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Basic Application Gateway (Small)</td><td>153f1e57-2a58-4e97-94e9-1beea575e196</td><td>Data Processed (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>dcac3e65-3749-4b92-8e9a-99447efe4508</td><td>Standard Managed Disk/S40 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D1_v2 VM (Windows)</td><td>1bf68133-1ba4-4305-87d4-3a6968ade72e</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D11_v2 VM</td><td>923df1fd-7270-464a-8247-2c2f0f80b4e1</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>c0f5cb45-6fb1-41c9-8545-72ad400d9da4</td><td>Free App Service</td><td>Apps</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td>Geo Redundant</td><td>242ead45-9acf-4745-992e-6c7bc804a5e8</td><td>Standard IO - Hot Block Blob Write Operations (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Scheduler</td><td></td><td>b6b48f3c-29e9-4ca3-94e6-2a34c9246dbc</td><td>P10 Premium Scheduler Units</td><td>1 Unit</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>31997b13-d049-43f5-8bf7-cee61fbb6d54</td><td>Premium Metered Data - 2 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A1_v2 VM</td><td>5987802c-fd4a-4473-bd29-3c0247da4b60</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>ece3409d-6459-446f-abfd-c350d768b61d</td><td>Standard MS6 Database (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Basic Application Gateway (Small)</td><td>f93004ee-4135-4a00-b3a6-699c5b12da8b</td><td>Application Gateway Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D5_v2 VM (Windows)</td><td>2adbcf46-e061-45c4-888f-97936133d703</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>A2 Cloud Services</td><td>f13c5c53-769e-4e4f-b4dd-c0798c60bce7</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td>Geo Redundant</td><td>7790e1b7-6fea-4ec3-8303-dffe9dad8579</td><td>Standard IO - Cool Block Blob Data Write (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>6417d428-fe3b-4270-951d-5a67e6411a8f</td><td>Standard IO - Page Blob List Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Notification Hubs</td><td>Basic Notification Hubs</td><td>2be0cde9-a26f-41ec-8682-b0b9c3c37012</td><td>Pushes (in 1,000,000s)</td><td>1,000,000s</td><td>10.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>75f53448-65fd-4333-b0d4-ae2dda1db5f5</td><td>Metered Data - 10 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>7a3b96e3-1c68-4506-86d8-224b89b3347f</td><td>Premium Medium App Service Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D4 HDInsight</td><td>a48f58e1-fa30-44ff-8312-d3af67e18f32</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A8m_v2 VM</td><td>d797ba86-141a-47f8-937e-f7bb5c145018</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>345ad7b8-47cf-4fbc-9817-7863abd2af4c</td><td>Premium P6 Secondary Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>WAF Application Gateway (Medium)</td><td>d6333880-563b-4f03-8c9b-4e46770cc971</td><td>Application Gateway Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D11 Cloud Services</td><td>80cfc979-37e7-4eed-b814-26ea651341e4</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>c02481f5-526c-4869-8237-bbfcacaa9c14</td><td>Premium P4 Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>dd79f5ce-784b-4fb8-a4f2-251256e86d97</td><td>Premium P16 Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D4 VM</td><td>6a25b2dc-6b68-47ec-9160-ff7207a16aee</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D14 VM (Windows)</td><td>e71e9d78-c02e-4532-a3b1-72e2133499c0</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>11401df8-e39e-47f9-bfe8-6d0ae757a180</td><td>Premium P11 Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>391d4fb3-98bd-45c1-a81e-13d17fb0587a</td><td>Data Transfer Out - Metered Data (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A7 VM (Windows)</td><td>cbcb7604-78d6-41e0-bdfe-f6676bff8829</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D2_v2 VM (Windows)</td><td>e4fa4193-078d-4720-b328-aeadf1703dd9</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>be63f96a-ef4b-42c1-9365-f9fa0e7431d0</td><td>Standard IO - File List Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>06e16816-5010-4281-b15f-6e921c98de6e</td><td>Premium Metered Data - 10 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_F1 VM</td><td>41d5388b-d50c-40e6-a831-d249dd8fc2c6</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Read-Access Geo Redundant</td><td>3dfa2dd0-43d8-4445-90a9-3803eaf10ed2</td><td>Standard IO - Block Blob (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>923978e1-fd3f-4bd5-a798-f4b533057e46</td><td>Standard IO - Block Blob Delete Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>d8f22317-5495-4365-898d-96ca9e69f54d</td><td>Standard C6 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A6 VM (Windows)</td><td>4817d00a-40ed-44c1-9963-d70e32499efb</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Azure IoT Hub</td><td></td><td>a36d229a-595c-44ad-a66c-1287be4bf433</td><td>S2 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_F4 VM</td><td>6be81654-f419-4e70-b4c0-7c7981bb94b2</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>7ce53686-7c67-470b-ae6f-3996cbb02fbb</td><td>Basic Large App Service Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>A6 Cloud Services</td><td>68628f65-110b-40ed-9ded-1c724de31696</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Azure IoT Hub</td><td></td><td>a435c5fc-1ab7-4be4-8cf4-223a670cae26</td><td>Free (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>db2ae25a-4469-4fa3-9c27-63ac21da6b30</td><td>Premium Small App Service Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>a3dd3839-f638-493d-a529-e1e1427a5b78</td><td>Standard IO - Queue (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Virtual Network</td><td>c1fa2cdf-a2fb-4801-9224-67840621eeeb</td><td>HP1 Gateway Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>f5eaac8f-b96b-4aa4-a9e9-76cf04fd9d82</td><td>Data Transfer Out - Unlimited Data (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>f0076a96-54c4-4254-9a42-a56fa2c086f5</td><td>Premium P2 Secondary Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>A0 Cloud Services</td><td>acb6aa52-e8df-46eb-aa55-bb5433a00798</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>SQL Server Web (8 core)</td><td>f0185c96-1902-44c9-b4b5-9bf534862606</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Service Bus</td><td></td><td>dbb918c6-1fa9-4f27-a5ef-8f65c59ca333</td><td>Relay Hours (in 100s)</td><td>100s</td><td>0.0</td></tr>
                <tr><td>Azure IoT Hub</td><td></td><td>b42f9a44-d1d2-4792-bc98-fdaa614bdeac</td><td>S3 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td>Geo Redundant</td><td>ad22fac8-9da5-4577-8683-56ae94d39e42</td><td>Standard IO - Table Write Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>6a99015c-d33f-4f46-ae59-2e4d14091aa8</td><td>Standard IO - File Protocol Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>dd9396f2-223c-456c-bcdc-016c94ef3fb1</td><td>S3 Media Reserved Units</td><td>Hourly Reserved Units</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Traffic Manager</td><td>4e9518b1-3f80-4e8c-be0e-ff53c44a243b</td><td>Azure Endpoints</td><td>Azure Endpoints</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Virtual Network</td><td>c90286c8-adf0-438e-a257-4468387df385</td><td>Basic Gateway Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Basic Application Gateway (Medium)</td><td>9932036e-3aea-41ac-9972-01ec62d42b95</td><td>Application Gateway Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Recovery Services</td><td>Site Recovery</td><td>82a2e983-9683-4842-82b4-bb634c60c8be</td><td>VM Replicated to Azure</td><td>1 VM</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>DocumentDB</td><td>e80bd6e2-731d-4e39-92cf-06482af38e4a</td><td>S2 DocumentDB Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Virtual Network</td><td>f246df93-e03d-4e52-ae97-a43e8f3d542c</td><td>Standard Gateway Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>7c8f5b20-386c-4078-85de-14d64b3e059d</td><td>Standard C2 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>ba332add-78f9-4693-a8ae-522e2f0293a3</td><td>MS3 Read Replica Instance(Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>ce1e156d-8253-42f4-bb9e-409708366fea</td><td>Premium P1 Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>b0d6a4e5-da22-44a4-94bd-3648fb427e13</td><td>PlayReady Licenses (in 100s)</td><td>100 Licenses</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D11 HDInsight (Non-Windows)</td><td>1b90c524-7e82-4db4-8c41-406874dc197f</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>b29e8e93-2bf3-42c5-a171-6a4a56f9cb47</td><td>MS5 Read Replica Instance (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>54c6bbf3-322b-406d-8411-101bc4b9443a</td><td>Standard S1 Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>c7107dc5-43b9-4d42-9ba8-161345a976a3</td><td>Basic C0 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>923dd535-29fa-41b9-a505-2eccc1e54d07</td><td>Standard C5 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Geo Redundant</td><td>30ab1dae-8172-4b24-aa5b-3666d3f0fde1</td><td>Standard IO - Table/ Queue (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A1 VM (Windows)</td><td>19c6b5e3-4162-4be1-9911-fba6f27991c8</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>f90f81d2-238a-49d0-9f1b-9df13a859843</td><td>Standard IO - File Write Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D1 HDInsight (Non-Windows)</td><td>437025b7-d995-4efe-8b98-b48d0875d72e</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Virtual Network</td><td>bc234a3d-532e-4117-b6f6-a16dc199cfd6</td><td>Ultra-Performance Gateway Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>66ce8e33-adda-4e04-a0cb-0f1ce31849b6</td><td>Standard IO - Table List Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>SQL Server Enterprise (20 core)</td><td>f438a8b0-a0a8-4633-8cb1-21daba7270a0</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D3 VM</td><td>ceade8c9-8b65-45ee-8b96-a24d06d3c190</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D13 VM</td><td>6ece7666-4a01-47f2-9083-29bfc5c0a1a6</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>7e32ad83-9839-46c5-9d90-19399bbab832</td><td>Premium Unlimited Data - 1 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>23c32d2b-b75e-46fd-b0ee-80bd8327d834</td><td>Standard MS1 Database (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Notification Hubs</td><td>Standard Notification Hubs</td><td>5d75ae84-1488-4711-80a1-831f1e8bf851</td><td>Base Unit</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_F16 VM (Windows)</td><td>c3872490-accd-4a78-a3df-ed116e0b0f41</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Notification Hubs</td><td>Standard Notification Hubs</td><td>5d392d84-c8d6-45d4-a758-790ed34f49c7</td><td>Pushes (in 1,000,000s)</td><td>1,000,000s</td><td>10.0</td></tr>
                <tr><td>Virtual Machines</td><td>BASIC.A0 VM (Windows)</td><td>c418e9f8-66cd-4b69-a59f-b927c5cef57a</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>7ee5cf19-c864-4038-b4ad-bcfc8e63c508</td><td>Standard S3 Secondary Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>7cbad986-d03e-4531-acfb-70298465cbcd</td><td>MS2 Read Replica Instance (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>A1 HDInsight</td><td>b0b01749-c39b-4275-b283-6a92aabc3347</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>91ca2643-d874-4da6-a684-bbc95c756bc8</td><td>Standard Encoder (Output GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>0831c2bb-a6cc-4625-af33-f1ace5842337</td><td>Basic C4 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>7fadaaec-3afd-4afb-89a7-cdb1e3cb702b</td><td>Standard Large App Service Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_A2_v2 Cloud Services</td><td>4b92b434-319a-4afe-9f1c-ba1cd6076baa</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>0ee6fc6b-9705-427a-ab32-17598ededbea</td><td>Indexer Input Minutes</td><td>Content Minutes</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>b925488d-a109-4294-9d73-6f359f61ba5b</td><td>Standard S2 Secondary Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>34b1ff9d-ff18-4e62-af3f-9c63b26a4978</td><td>Premium Elastic DTU Pack</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>a73351c5-a8d4-4007-83b7-6ec4665ab9e3</td><td>MP2 Read Replica Instance (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>f944287f-b55b-4e88-8c17-a13a31521f35</td><td>Standard MS4 Database (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>37c8dbd7-412b-4892-a31a-915b96a66885</td><td>Standard C1 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A3 VM</td><td>bffbce65-8a40-4ab1-a329-fc3fd0e29131</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>e5d08ee7-4d8a-49dc-8e46-f818d0499298</td><td>Unlimited Data - 500 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>f8c187bb-5a47-46ae-b874-f186d207fff4</td><td>Standard IO - Block Blob List Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>A1 HDInsight (Non-Windows)</td><td>0c6206c1-0315-42b5-9dfe-5a97cc653f9a</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>b6f6c71e-4321-47ff-bcf2-dda2a8dc2654</td><td>Metered Data - 500 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>839e838f-8288-49b2-a11d-7a6f076371db</td><td>Basic C3 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>64f7258b-c009-4c05-9468-837ea36b8dc1</td><td>Premium Storage - Page Blob/P70 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Recovery Services</td><td>Backup</td><td>6551548b-7e61-4f51-896e-eb907d256b95</td><td>Protected Instances</td><td>Instances</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>e496f65a-d0a4-4ff9-b5ae-e89170d61a01</td><td>Premium Unlimited Data - 50 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>4cc4d7fa-73db-43d6-a07d-c11657032822</td><td>Standard Managed Disk/S10 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>b9e5e77c-a0b3-4a2c-9b8b-57fa54f31c52</td><td>Standard IO - Table Batch Write Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>8795ab57-9cf7-482f-ab5e-f549536af7cd</td><td>Standard MS2 Database (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>A2 HDInsight</td><td>a8fccba6-1070-483d-a82b-88bbabcb409f</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>d23a5753-ff85-4ddf-af28-8cc5cf2d3882</td><td>Standard IO - Page Blob/Disk (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>c212cac3-156f-4b68-81c0-ababa07ba911</td><td>Basic C2 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D1 HDInsight</td><td>98fc2852-0ad8-4a09-9799-865c144578db</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Recovery Services</td><td>Site Recovery</td><td>6c1ae29e-ea4c-43f3-a25d-55c78b8db13e</td><td>VM replicated to System Center</td><td>VM</td><td>0.0</td></tr>
                <tr><td>Cognitive Services</td><td>Computer Vision API</td><td>a68b7c67-c7da-4f84-9a5d-52568d253684</td><td>Standard S2</td><td>1K Transactions</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>f980daf6-9fdb-40d4-bb94-8c53acf80f62</td><td>Standard Managed Disk/S4 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_F2 VM</td><td>758686a1-82b3-4daf-bfc0-cb63f0895fd3</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td>Geo Redundant</td><td>88300ab6-0e31-45bd-af34-50fd487cb801</td><td>Standard IO - Cool Block Blob Write Operations (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>72e1ff70-a459-4238-b994-0995ed29e4ec</td><td>Premium Storage - Page Blob/P40 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>DocumentDB</td><td>bb8a035f-5ff5-44bf-aeb6-77b2fc1de144</td><td>S3 DocumentDB Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A4m_v2 VM (Windows)</td><td>e1b77cb6-9cde-47e8-b0b3-c69b4250a436</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D12_v2 VM</td><td>32f925ae-e640-4db0-aa52-e6d4f3e0607b</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>A4 Cloud Services</td><td>5c583d6e-1538-44e3-9dac-b699951a8084</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A1 VM</td><td>953fe2ae-f932-4f3d-b34d-b5d1f950fa25</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>5540a591-0993-432b-9840-28f0130444c3</td><td>Premium MP1 Database (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Stretch Database</td><td>ec512cda-5778-4fb9-b9f8-cac82ff35b17</td><td>Compute DSU (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>0c3885bd-351d-4c28-830a-446d7bb4295c</td><td>Shared App Service Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>BASIC.A4 VM (Windows)</td><td>feea5525-a1b9-4f00-bcc9-a5db4e7927cf</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>SQL Server Web (20 core)</td><td>c44e509d-63cf-4ee5-8ba2-ad5a6bd6061d</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Reserved IP</td><td>b1e1e5b4-4bde-428c-a22e-9e94faeec6d2</td><td>Remaps</td><td>Remaps</td><td>100.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>943e338a-003d-408e-838a-1998caf3f163</td><td>Premium Unlimited Data - 5 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>0fce87c2-1eb6-4f6c-90bf-60aa0e40576b</td><td>Standard IO - Cool Block Blob Data Retrieval (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D4_v2 VM</td><td>52abf0fe-d14f-451a-8275-b503dafeb0fb</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>BASIC.A0 VM</td><td>d4d98456-7fe3-45dc-aac3-05e2af2bbba4</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D11_v2 VM (Windows)</td><td>d6bd84f3-238f-4c4d-a8b9-bcda533e7392</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>2a8f5aeb-d518-4417-a262-f168e3204a84</td><td>Premium P6 Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>505db374-df8a-44df-9d8c-13c14b61dee1</td><td>Standard Small App Service Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Geo Redundant</td><td>d6eb6e09-ee00-4672-aa66-ed1219c1113d</td><td>Standard IO - Queue (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D5 HDInsight (Non-Windows)</td><td>a017bece-ced2-4a16-9939-993d40b086fd</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D4 HDInsight (Non-Windows)</td><td>1b962c90-79f4-4c53-96a4-d69db802e0a2</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>96788af6-5916-4792-9a5d-9186ec2556bf</td><td>AES Keys (in 100s)</td><td>100 Keys</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>BASIC.A2 VM (Windows)</td><td>7d46cdc5-51bb-4fec-8721-a73b923d6132</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A0 VM (Windows)</td><td>15998f24-ce11-4379-85f7-0ac898afb4ac</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D12_v2 Cloud Services</td><td>e36d0242-3d5f-4e92-8ebe-3706896ab38e</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>c63c9359-a1a9-40d4-a878-5190485648b3</td><td>Standard MS3 Database (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td>Geo Redundant</td><td>bb20dfda-6d18-4bb1-b7fc-86a05d9cfb8d</td><td>Standard IO - Table Write Batch Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>49a3e78b-fa72-4d46-beeb-3bb9032ea524</td><td>Premium Unlimited Data - 500 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Public IP Addresses</td><td>f114cb19-ea64-40b5-bcd7-aee474b62853</td><td>IP Address Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>187027f9-25fa-454f-83f1-20d267e5243c</td><td>MS6 Read Replica Instance (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A2m_v2 VM (Windows)</td><td>5f1dbc39-b562-4b6d-abee-c9677b029a1e</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>cd779ac8-48fa-4fe5-a90c-18ad2cfe7e08</td><td>Overage Storage (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>39df9b84-10b8-47da-b32a-0095e17b224e</td><td>Premium P15 Secondary Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>993126ae-d47b-465c-8ca1-f68b2a0d2046</td><td>Unlimited Data - 5 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>ef5d838f-bed0-4e72-8fb2-ec32d6a715f1</td><td>Premium Large App Service Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>15b2ed74-d530-4521-a813-a32d069e4bf3</td><td>FairPlay Licenses (in 100s)</td><td>100 Licenses</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D12 VM</td><td>c26be806-fbbf-47c7-9aa5-ca0eb7531ac6</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_A4_v2 Cloud Services</td><td>2afc855e-9aa1-406f-8097-ec3792d9e4f0</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>9f52fc4e-7cfe-4d6c-92df-3c39b549cbec</td><td>Standard Managed Disk/S50 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>22c53c77-198b-4357-b1f8-59b9fb790b5a</td><td>Standard IO - Cool Block Blob (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D5_v2 Cloud Services</td><td>48956865-9fac-4f10-8d30-c8c422b259a7</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D12 HDInsight</td><td>5331cf2d-64e2-4b55-9275-96d5f2219bee</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td>Geo Redundant</td><td>45ff39f6-c7a6-40fb-a124-cf5b280ba092</td><td>Standard IO - Block Blob Write Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D1_v2 VM</td><td>10df8c44-7da8-4abc-8ab6-e97dc3cdc71c</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>f7629f2b-f909-44b9-acd4-d7c77decf6e0</td><td>Premium Storage - Page Blob/P50 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>557495ef-6150-4699-91f4-cf0e62cf16dd</td><td>Custom Domain Resale (Domains)</td><td>Annual Domains</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>DocumentDB</td><td>424aa64e-dc25-49c4-8565-b86222279260</td><td>S1 DocumentDB Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>SQL Server Enterprise (up to 4c)</td><td>12699064-6912-437d-8cf7-9a50364cfb1d</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>74361c94-a459-4564-b3d2-dd8dfd79e704</td><td>Metered Data - 1 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Notification Hubs</td><td>Basic Notification Hubs</td><td>f6bdc96f-65a3-41c7-913b-34b518bff0ff</td><td>Base Unit</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>6160467e-233b-481a-8997-52b297ba896c</td><td>Premium Storage - Page Blob/P80 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Read-Access Geo Redundant</td><td>59d1ce45-9e3e-44b2-85c5-4677230ecc88</td><td>Standard IO - Queue (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D4 VM (Windows)</td><td>8e3e613d-4a68-4667-8eab-ff658d123680</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D14 HDInsight</td><td>6d149115-d739-4a2d-a346-9412d3c93d32</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>c93b3016-1dfe-4347-a67c-1bc6a1ffcd36</td><td>Standard S1 Secondary Active Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>9cb0bde8-bc0d-468c-8423-a25fe06779d3</td><td>Standard IO - Table Write Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>538201b5-1e82-43c3-9043-9a19f9ce16f0</td><td>Standard IO - Cool Block Blob Read Operations (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td></td><td>8b8c895b-bca0-4f0e-9fbb-16c13512b8d0</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>94db869d-b0ed-486a-8995-ddff0eba7412</td><td>IP SSL</td><td>Sites</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D5_v2 VM</td><td>ae59a14b-209b-4901-aeb0-2afe2c93e999</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>365c9dda-c9f6-4213-b87b-0cfa21158af9</td><td>Metered Data - 100 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>HDInsight Premium</td><td>a20f0805-7d55-4674-899f-10907b9bbe7c</td><td>Surcharge</td><td>Core Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A7 VM</td><td>f7f05aaf-c250-4fa1-b883-4682ddff86e4</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Geo Redundant</td><td>fda24285-b1d0-4f58-b957-e1685125aff7</td><td>Standard IO - Files (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>c1635534-1c1d-4fc4-b090-88fc2672ef87</td><td>Standard IO - Block Blob (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Service Bus</td><td>Standard Messaging</td><td>d5034e45-00c1-48c6-8c00-c866f788e033</td><td>Base Unit</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A5 VM (Windows)</td><td>e9e6a774-4e00-4f33-91df-06eae1e584c2</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Mobile Services</td><td></td><td>c8e0bab1-3e3c-4814-bb8b-9df53501d690</td><td>Basic Mobile Services Units</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>64d48263-32ab-4359-b05b-8626b0974e17</td><td>Standard Medium App Service Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>A3 Cloud Services</td><td>36baac80-9e06-4b23-ab28-94c865225fde</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Read-Access Geo Redundant</td><td>6fe6a770-9d2b-45ba-b76d-1b18c4b6eebf</td><td>Standard IO - Table/ Queue (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Basic Application Gateway (Large)</td><td>714b1d62-a63b-4cfb-afde-70cdbf47f42e</td><td>Application Gateway Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>SQL Server Web (up to 4 cores)</td><td>8e9af6db-7104-4f1a-830e-93eabb955444</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Geo Redundant</td><td>0f521674-5ebd-4679-bd97-8bc2ac4a9040</td><td>Standard IO - Block Blob (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>3bec1178-9944-4e69-a543-72ebb78f38c3</td><td>Unlimited Data - 50 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>fe8170f4-b698-4d4d-ba84-d6ee6ff74c97</td><td>Standard Live Encoder Input Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Read-Access Geo Redundant</td><td>817e52af-0065-43a3-b2eb-2ab33482bbf3</td><td>Standard IO - Hot Block Blob (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D2 Cloud Services</td><td>726d22f4-ef01-4f79-b5ce-753595e0652e</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>890e299e-a0cc-405d-85b4-6ef047599028</td><td>Standard Managed Disk/S6 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Service Bus</td><td>Basic Event Hubs</td><td>177ee643-5434-4c04-ae11-9e01672ed87e</td><td>Throughput Units (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D3_v2 VM (Windows)</td><td>dec9098e-cece-4148-a376-166b4d0ea1bf</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>BASIC.A2 VM</td><td>ea3fdc40-2029-44fd-959a-60f04f73c58a</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D14_v2 Cloud Services</td><td>66454ee7-dec0-47a7-bdb0-ee46503470ef</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_F2 VM (Windows)</td><td>981077f0-5788-4240-b6bc-2a8419312d25</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>4f1fa8fe-ffed-48fa-9969-26a150775b60</td><td>Basic Medium App Service Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>d9b8457f-9fd0-431f-b4e6-beb0315888a1</td><td>Premium Unlimited Data - 2 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>52c400e7-7180-481b-8aa7-5c021661d031</td><td>Standard S2 Secondary Active Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A2_v2 VM</td><td>8f20a15c-d06e-477e-bedd-b06a31347501</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>7c0222db-46b3-47b8-b42e-5eedcf3cb93e</td><td>Standard Managed Disk/S30 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>App Services</td><td>Automation</td><td>95eca2c1-9519-4c55-baa1-9a0e0b201e25</td><td>Basic Automation Minutes</td><td>Minutes</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>067023b9-5c2b-428e-a4f7-f13e655f5e10</td><td>Data Transfer In (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A6 VM</td><td>8e7ca98f-0214-4f5b-9b2e-10fe4596798e</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D14_v2 VM (Windows)</td><td>6904fce2-285e-4954-8304-267679241611</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>c9e287dc-2557-494e-9be3-40de4e85ae82</td><td>Live Channel Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D1_v2 Cloud Services</td><td>6bd923ad-d7cf-471c-a5d8-c74c7eae3dc6</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>d157603d-989a-46c6-8371-c514ab123367</td><td>Premium Storage - Page Blob/P90 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>c53a5ff2-fc5a-4e37-a087-271a5ada2554</td><td>Unlimited Data - 1 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Networking</td><td></td><td>9995d93a-7d35-4d3f-9c69-7a7fea447ef4</td><td>Data Transfer Out (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Reserved IP</td><td>26ce34b7-67b3-480d-9d1b-54a7fb80f67a</td><td>IP Address Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A8m_v2 VM (Windows)</td><td>7ecb216a-9ca1-4928-b309-5fe88e7fb486</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>A4 HDInsight</td><td>06fb8bad-0653-4cd7-bfb0-8fcd3ac50371</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Azure IoT Hub</td><td></td><td>2885a6b2-5013-4fa9-8f3b-fc3ead8d136d</td><td>S1 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>95861166-e640-457a-a6e9-bfeacdd0ca2c</td><td>Unlimited Data - 2 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>5983e870-e59d-443a-829d-13530a2ee1c2</td><td>Premium P4 Secondary Active Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_A8_v2 Cloud Services</td><td>c384502a-6e0b-444d-adb7-8d1f00a186ec</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D11_v2 Cloud Services</td><td>82830f5d-4286-4dfe-b25a-b42e4195795f</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Scheduler</td><td></td><td>02e3908e-c446-48df-97c2-be94bab1951f</td><td>P20 Premium Scheduler Units</td><td>1 Unit</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>283f166f-fa2b-4466-aaca-e77b730e70c5</td><td>Premium P1 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>fea0de99-4dcb-4387-82b9-fc3348238b27</td><td>Basic C1 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D12_v2 VM (Windows)</td><td>9aeae6c7-6a83-4ff4-822a-0f65bdf16bfa</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>61c94f93-033b-4b1e-843e-87a3bde1ec16</td><td>Premium P15 Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>SQL Server Standard (20 core)</td><td>8f89de2d-5e65-4560-8d94-208ad84b4881</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A1_v2 VM (Windows)</td><td>efd78fcd-2af1-4b1e-8e64-8a2572e420f6</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>fed0286c-5505-4f37-b1ef-89edf04239ee</td><td>Standard S0 Secondary Active Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Service Bus</td><td>Basic Messaging</td><td>3c5657c6-28c7-49f0-9456-9a165161954d</td><td>Operations (in 1,000,000s)</td><td>1,000,000s</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D11 HDInsight</td><td>2fee86b7-7c49-46ac-851f-95094c188ef6</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>BASIC.A3 VM</td><td>9267dd5e-4917-47bb-9652-13d42abec6fe</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Data Warehouse</td><td>732e96a2-d15f-44fa-a205-a5b7396630c3</td><td>DWU</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>62d6fa0e-34e0-4dbd-87d5-179e4d5298a6</td><td>Standard Encoder Minutes</td><td>Minutes</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>Stream Analytics</td><td>58112973-4292-4891-b7a2-3853e88dab34</td><td>Standard SU (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D13_v2 VM (Windows)</td><td>dc2f8c69-3f2c-4001-8ce4-e6534bab9085</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Data Warehouse</td><td>245d2c23-2308-4b39-b5f7-c5dfd9c6d3ee</td><td>DWU - Free</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Traffic Manager</td><td>7bcaed13-b9c9-408c-a66f-a357e3dba257</td><td>External Endpoints</td><td>External Endpoints</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_F8 VM</td><td>bc215d53-b6f3-4e4e-8619-5f83df3c7dd7</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>App Services</td><td>Automation</td><td>02f4525d-e44e-433d-b8ac-bc0c4e4048fa</td><td>Free Automation Minutes</td><td>Minutes</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>82cb02e8-be25-420a-9d4b-46a612b1d82f</td><td>Premium P16 Secondary Active Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>DocumentDB</td><td>97f0c44f-9c62-49b6-b35d-261d4c5c8cc1</td><td>Requests Per Minute (1000)</td><td>1 Hour</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D2 VM</td><td>e44f4174-8aa9-4ebc-83e2-2f1d935dd20d</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>6e6fcacb-5f0d-4d19-afdc-9ff9931a6c40</td><td>Premium P2 Secondary Active Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Cognitive Services</td><td>Face API</td><td>ecff4b9d-5d93-456c-a0d0-16439bf99e65</td><td>Standard (in 1,000s)</td><td>1K Transactions</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>A5 Cloud Services</td><td>0c1492a2-8db8-44c6-b0ed-cc6188c72b34</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>514d2095-d1d3-4c1d-a136-c38886a08ae5</td><td>Basic Secondary Active Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Service Bus</td><td>Standard Event Hubs</td><td>62d94a65-9300-48a6-8c15-0e70fc41eb44</td><td>Throughput Units (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>550bd1ca-4d90-4b87-95e1-7746b5d6d655</td><td>Standard Managed Disk/S20 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>6171d033-0c11-4834-8abf-c43f552684ce</td><td>Premium Storage - Page Blob/P10 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>SQL Server Standard (8 core)</td><td>734b802a-0a4e-490c-98dd-a4ca285d835b</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D14 HDInsight (Non-Windows)</td><td>aa0a44ba-fdec-4c16-9b16-44a99b5b473c</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D14 VM</td><td>7ad46b68-fad5-4d1f-8bd2-47032acabf9a</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A8_v2 VM</td><td>20769dcd-6e1d-4b6f-9013-ea9c96b3194f</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D15_v2 VM (Windows)</td><td>7af6950b-29e5-45a9-8584-5d3bd8f0a618</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Service Bus</td><td>Basic Event Hubs</td><td>3c95dd0f-555c-4caa-9d03-958a6778df30</td><td>Ingress Events (in 1,000,000s)</td><td>1,000,000s</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_A8m_v2 Cloud Services</td><td>fa05fcf2-a64f-4014-ab57-2285eda3a0bb</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>1d032c17-0d1b-40c9-84fa-0eb133dbdf71</td><td>MS1 Read Replica Instance (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>BASIC.A3 VM (Windows)</td><td>5911f30f-0878-4405-b878-d205e2fbe684</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>SQL Server Standard (16 core)</td><td>339fc49d-f3cc-4c6d-83f9-44cf9c0c9d38</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D1 VM</td><td>e60caf26-9ba0-413d-a422-6141f58081d6</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A8_v2 VM (Windows)</td><td>b12abd57-da7c-44bf-bfc6-916d2c7e16e5</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>e3a600a6-5a85-4679-9721-1c0d192ed142</td><td>Standard IO - Table Delete Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>d4a1726f-2b95-4355-9907-b6b2123f8a37</td><td>Standard S1 Secondary Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A4 VM (Windows)</td><td>ddcf5d0a-f81a-4e29-8fb6-feab48089b35</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>ea2b0820-5830-4d94-a3be-ea525fe6adfa</td><td>MS4 Read Replica Instance (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>4c43072f-2450-4665-848d-3ae403c3bba6</td><td>Standard S3 Secondary Active Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_A1_v2 Cloud Services</td><td>18ef76d1-b0fd-4dd2-a202-e286937765a4</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>67cf08ec-f742-4d89-ba10-60ff525dd71f</td><td>Premium Extra Large App Service Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Mobile Services</td><td></td><td>6a279f31-1940-461c-aa66-3fdc5ff5a7ab</td><td>Free Mobile Services Units</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A0 VM</td><td>516b993b-ba97-4670-9ed4-efdb0e1d42e8</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D4_v2 Cloud Services</td><td>b66ef22a-1ee8-481c-aa22-0a21c71e67f1</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>f5fe1051-c0d6-488e-a583-d75411029187</td><td>Premium Storage - Snapshots (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>2a472850-9a78-4e31-b8b4-146cf6b1f663</td><td>Premium Storage - Page Blob/P20 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>adc54be1-0921-481b-90c3-2d7938e4c5ff</td><td>Standard S0 Secondary Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>c379c9b2-304e-42b6-b43a-c088ddd71c60</td><td>Standard Managed Disk/Snapshots (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>b065882b-982f-43ba-bba1-1308221cf860</td><td>Geo-Replicated Data Transfer (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>42a5d99e-5f77-4f56-98c2-08b2db5b7f95</td><td>Unlimited Data - 100 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>964c283a-83a3-4dd4-8baf-59511998fe8b</td><td>Storage Transactions (in 10,000s)</td><td>10,000s</td><td>1000000.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>93d53c01-f180-44d6-a5ae-00fd565bd256</td><td>Free Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Cognitive Services</td><td></td><td>dc5d40f7-474d-482a-b47e-ebb934547535</td><td>Standard Emotion APIs (in 1,000s)</td><td>1,000s</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>f303a21a-05f1-4563-b2ad-7523eebc4058</td><td>Standard S2 Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>f3ffc04c-ba8d-45d0-aaf1-6baab8669279</td><td>Metered Data - 200 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>a149966f-73b4-4e1d-b335-d2a572b1e6bd</td><td>Standard S0 Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>16336d11-4cef-4d26-a3f5-43b7ffa896d8</td><td>Metered Data - 50 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_F4 VM (Windows)</td><td>d8fee01a-8b5c-4723-b841-c05a0a1a47f9</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>edc74778-714f-4c0a-bea8-c9298f96b447</td><td>Premium Unlimited Data - 10 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>b4b1d0a8-509c-40b5-ba9b-fc3683619d5e</td><td>Premium Storage - Page Blob/P30 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>f556bec2-a286-4171-bbf5-4fddaaafef99</td><td>Premium Metered Data - 5 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>beffb77f-1238-4149-a78a-bfc782c0b68f</td><td>Premium Metered Data - 1 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>Stream Analytics</td><td>8771fb57-295b-4766-9d6f-b729c922af17</td><td>Streaming Units (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>343bb34a-1b70-4f9b-a52f-1dc1dabe5012</td><td>Premium P16 Secondary Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Scheduler</td><td></td><td>be2eb73c-cc40-4a0b-9511-af1c5a247fbc</td><td>Free Scheduler Units</td><td>1 Unit</td><td>0.0</td></tr>
                <tr><td>Service Bus</td><td>Notification Hub</td><td>c2ec93b6-fffd-473f-b03b-99ec0f014230</td><td>Free Notification Hub Units</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>ba302f7a-078b-4141-a636-a76315ba44ce</td><td>Basic Small App Service Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A4_v2 VM</td><td>d67cf728-79f3-4bb5-af33-171ad11493cc</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>f14382b0-1838-48e9-9314-c7b6eababc81</td><td>Standard IO - Page Blob Delete Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_F16 VM</td><td>e6fb8820-181a-4754-9b84-ca2930dba3f1</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D1 VM (Windows)</td><td>96cbeb60-b981-46b1-8ae6-101fd3367c34</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D13 Cloud Services</td><td>635c8a01-efc7-4e30-8f49-383f17b4a7a6</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>A7 Cloud Services</td><td>100e40ce-2ab9-47e6-bf59-500d17602826</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D3 HDInsight</td><td>a4b3fde1-3fa6-476d-ac12-36af7cf416d2</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>A7 HDInsight</td><td>0e77ab82-88a5-4351-a87a-c196e46fb84b</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D2 VM (Windows)</td><td>260dc52e-7c61-4544-8085-cdd731c7289b</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>08bdde57-7811-467c-b4f7-ccc2e367eee7</td><td>S2 Media Reserved Units</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>6d0831d3-6574-4a77-a5e1-880606246088</td><td>S2 Media Reserved Units</td><td>Hourly Reserved Units</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_F8 VM (Windows)</td><td>09e29b51-e3dc-4a96-b674-b90a63501d17</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Service Bus</td><td></td><td>caa99e81-fbba-459b-a269-36d39b4a7472</td><td>Messages (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>b2d3ed0d-64b0-4a41-8c5a-cb49dfbb84f9</td><td>Premium P2 Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_A4m_v2 Cloud Services</td><td>d35a2577-cd8c-42e5-b5ac-dc370e873ca6</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>BASIC.A1 VM</td><td>b8b227a6-d291-423a-8dbf-423c9dd94a94</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>99f0c54e-8bf7-40d5-9c2e-7ec5300c4fd8</td><td>Premium Metered Data - 50 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D12 VM (Windows)</td><td>124d2682-8556-46e4-bb7a-a6beffba98bb</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>4225a259-3557-464c-a76c-6f3e0672735a</td><td>Standard IO - Hot Block Blob (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D13 VM (Windows)</td><td>165b4150-2f7a-4e66-bd55-9c32d3792e93</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D13 HDInsight</td><td>8ae60c37-2b1a-4798-9c19-dd0f4ec6b878</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Azure App Service</td><td></td><td>878bced4-6856-46c1-a3df-15641b31057a</td><td>SNI SSL</td><td>Sites</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Basic Application Gateway (Medium)</td><td>c31b2562-1c9f-4a13-9c0b-f00848068558</td><td>Data Processed (GB)</td><td>GB</td><td>10240.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>e36c98f8-8de4-4323-a576-7a41898e87b3</td><td>Standard C3 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D4 Cloud Services</td><td>a50e87b8-e5ac-44dc-96aa-bcc262931204</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D1 Cloud Services</td><td>f7d00335-a859-43f2-9007-1ffffa571369</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A5 VM</td><td>4afe8ef6-63c8-4741-8a8d-b06234b67ad9</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cognitive Services</td><td>Lang Understanding Intelligent Srv</td><td>82d4564e-133d-4699-b0b9-81f82a8f27ec</td><td>S1</td><td>1,000s</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>58addb81-4c03-4db1-adbd-bbde0b43fdce</td><td>Premium Metered Data - 100 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>29d77a31-e360-483b-a3b3-3b4f3f05bc38</td><td>Premium P1 Secondary Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>WAF Application Gateway (Large)</td><td>b91f50b9-0e35-4a96-8b4a-32f4915712f5</td><td>Application Gateway Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>42fb7fdb-e89f-49d4-854b-aad60b7e8c93</td><td>Premium P2 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>App Services</td><td>Key Vault</td><td>0f824807-2376-435c-95c9-f992b67a07b0</td><td>Operations (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A2m_v2 VM</td><td>43d22ba9-7605-4ea4-8c42-1ed9e1eddf91</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Recovery Services</td><td>Backup</td><td>fbadd0ef-6666-4d56-a827-fe1bd8769d15</td><td>Storage (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D2_v2 VM</td><td>23dfac9e-36b0-47c2-b0a1-8a4f528de408</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>1819735c-d31b-4a60-890e-e91a3ea516ef</td><td>Premium Streaming Units</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Geo Redundant</td><td>92567832-8613-47c4-9e8a-b2b9461a4875</td><td>Standard IO - Table (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>ed8a651a-e0a3-4de6-a8ae-3b4ce8cb72cf</td><td>Standard IO - Files (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>211e620c-ebcf-4db5-a7fd-996abebe9546</td><td>Standard IO - Block Blob Write Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D11 VM (Windows)</td><td>42864dbd-3460-4db4-b885-fcf23219170a</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D2_v2 Cloud Services</td><td>f43bde45-146d-4811-b0f3-fedcccedb42e</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D13 HDInsight (Non-Windows)</td><td>25e78bdc-41af-43e0-ac56-aeba945f6ba7</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A3 VM (Windows)</td><td>2bd3935c-26d3-4700-881f-967ea10e99c7</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td>Geo Redundant</td><td>b2048190-2afb-43a5-b5f4-af7a885396c1</td><td>Standard IO - File Write Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A2 VM</td><td>7890f5dc-e715-4216-88f9-2c80da9954fb</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>BASIC.A1 VM (Windows)</td><td>a51ac8a1-8bfe-4979-9488-658ede49f108</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>173739ee-a128-4270-8831-1d03deb1596e</td><td>Standard Managed Disk/S60 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D15_v2 VM</td><td>d8387905-8ec6-4da4-b23a-3d9d77807088</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>A2 HDInsight (Non-Windows)</td><td>848e5302-c41a-4431-8b57-1ebd3603c7d8</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Geo Redundant</td><td>0e9d0c9b-ab6d-4312-9c7e-3794e22af9c4</td><td>Standard IO - Page Blob/Disk (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>A4 VM</td><td>4d6d4916-214b-4f65-9530-0d2e5d39a427</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Read-Access Geo Redundant</td><td>14bd8294-0eb7-4eba-a383-39bf8d000caa</td><td>Standard IO - Cool Block Blob (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>2e7e68c6-6ee8-4c78-bb27-551240cf729b</td><td>Premium P4 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>f622d0e3-d20d-4fa4-85f3-5e8010b3d421</td><td>Basic C5 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>6876ecb6-f509-472c-83d5-2f1d7971d338</td><td>Basic C6 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D3_v2 VM</td><td>8e6c7ea0-f3d6-4721-87cf-0bd10220ada7</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>d6775764-05f3-4ab6-9424-088f1934cda3</td><td>Unlimited Data - 200 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Service Bus</td><td>Standard Event Hubs</td><td>d0a685ee-f093-4c5c-ba76-3ec342a75de7</td><td>Ingress Events (in 1,000,000s)</td><td>1,000,000s</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>d23b222d-e065-4aa9-8d5e-8c3990b4b0f7</td><td>Standard C0 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D2 HDInsight (Non-Windows)</td><td>d2814d47-36d4-4e71-b2be-9140c3d09f28</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D12 HDInsight (Non-Windows)</td><td>95e9dcdd-4a5a-46b8-ac41-593121295732</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>63174926-619a-4027-9b67-1db346d5899c</td><td>Premium MP2 Database (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Scheduler</td><td></td><td>2d7eeaf7-2c4b-4229-a6a1-b6de0153f5d3</td><td>Standard Scheduler Units</td><td>1 Unit</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>6bafdc11-b964-4895-9d4e-a0e548db1b2b</td><td>Standard S3 Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Read-Access Geo Redundant</td><td>6c76daf0-aeb1-4238-b8b4-18820c91eeef</td><td>Standard IO - Table (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>b11c3146-9d8d-42b6-ad94-1d0234bbde8a</td><td>Premium Unlimited Data - 100 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D14_v2 VM</td><td>ff511702-e684-41d8-89e5-31286614e177</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>A3 HDInsight</td><td>945b8bdc-4942-45f4-bb2d-65b849304aff</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>9a56b4f4-1d78-416e-a19b-815490ad7910</td><td>Standard IO - Table Scan Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>12da282f-7e96-49e2-983a-9a65da2a4866</td><td>Standard IO - Table Read Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>2a402785-cf3c-4911-aba4-1e280a892d96</td><td>Metered Data - 2 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>4e71882a-4851-45b0-895d-a66b3190d845</td><td>Premium Storage - Page Blob/P60 (Units)</td><td>Units</td><td>0.0</td></tr>
                <tr><td>CDN</td><td></td><td>4d555982-7f9a-4884-a128-780030263ab5</td><td>Premium CDN Data Transfer - S1 (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Basic Application Gateway (Large)</td><td>acac7492-1c40-4088-bf01-40d582b85b63</td><td>Data Processed (GB)</td><td>GB</td><td>40960.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>cae64797-9ecf-4906-b517-6238c80c045f</td><td>Basic Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>CDN</td><td></td><td>d394a1c6-43bb-43e8-a5dc-9fcf98bf82c6</td><td>Standard CDN Data Transfer - S1 (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Stretch Database</td><td>963858e4-b3ba-46bd-90cc-b509518302d5</td><td>Storage (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>D3 HDInsight (Non-Windows)</td><td>99c83182-0ebc-4eba-99a6-80e0c0fa572b</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>53f2de3e-7e5f-4ebd-a3ee-f27e6840820b</td><td>Premium Metered Data - 200 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D3 Cloud Services</td><td>56b51124-ff8a-459c-a152-f8fcbea1b3bd</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>ed5ea410-f2d6-45fa-9fcc-5ff1621c874d</td><td>Basic Elastic DTU Pack</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>9fff85ca-d247-4c0c-b841-9e8dc6dbaad3</td><td>S1 Media Reserved Units</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D14 Cloud Services</td><td>69c87573-c4f4-4375-aa01-d503c997df40</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>Stream Analytics</td><td>89b769d0-4522-4dbd-9395-c67e4dee596e</td><td>Data Processed (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D13_v2 Cloud Services</td><td>db404476-cbe7-4eba-8ccf-76b728125764</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>a6eebb9d-d376-4864-9abb-023b81026acc</td><td>S3 Media Reserved Units</td><td>Units</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>48c5e1c5-2278-40ec-858f-d94c3d01f2af</td><td>Premium Metered Data - 500 Mbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>SQL Server Enterprise (8 core)</td><td>7f3e1d2c-74d6-4f47-b1f5-f929290ece86</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A4_v2 VM (Windows)</td><td>43d75858-1ae6-40b6-b72b-08451a61a48e</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Geo Redundant</td><td>6413bc9f-b929-4d93-b0c6-f37fc0e7bad2</td><td>Standard IO - Hot Block Blob (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>912f9c7b-beec-42fb-a1f4-36f029343488</td><td>Standard IO - Cool Block Blob Write Operations (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Service Bus</td><td>Standard Messaging</td><td>2a9992f8-e914-490b-a7a6-6d21ba55acda</td><td>Operations (in 1,000,000s)</td><td>1,000,000s</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>A6 HDInsight</td><td>4223937e-516f-4ff1-9dfc-0e2ff39ec8aa</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Networking</td><td></td><td>32c3ebec-1646-49e3-8127-2cafbd3a04d8</td><td>Data Transfer In (GB)</td><td>GB</td><td>1024.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>748d0c9d-f81d-44ac-9c18-1bcd1cc20a68</td><td>Unlimited Data - 10 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Cache</td><td>Azure Redis Cache</td><td>8b9422d3-7c2d-4a16-8732-91eb7d1abdd7</td><td>Premium P3 (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cognitive Services</td><td></td><td>05649c84-73d2-440e-8cf9-6b13639bd019</td><td>Basic Emotion APIs (in 1,000s)</td><td>1,000s</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>940e92c1-bdae-44b5-807c-c1ab2d3a05b7</td><td>Premium P1 Secondary Active Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D3 VM (Windows)</td><td>7a0aab29-70ba-4127-8a69-2da83f90ef73</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>40551b4c-e8be-48ed-b70b-f8d25c7de724</td><td>Standard IO - Block Blob Read Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_F1 VM (Windows)</td><td>d1d14abe-a566-44c9-b4f9-9bc634f3c901</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>26c98145-3131-4e0a-8c2b-bed1246c8adc</td><td>Encoding Data Processed (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>d3824379-dc7e-472b-9e67-3f4a7eadc05b</td><td>Standard IO - Page Blob Read Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>5d2ce9e0-3e31-4726-93fe-9f7ce4d04d99</td><td>Standard IO - Hot Block Blob Write Operations (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>ExpressRoute</td><td>54e8283a-8b9d-4811-89a7-d278869e234c</td><td>Metered Data - 5 Gbps</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D3_v2 Cloud Services</td><td>01542e73-bbe0-4d14-bf4f-4ca06eac209d</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>bd69546d-19b0-4776-865f-8753b800883b</td><td>Standard IO - Table/ Queue (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>761abab8-259d-4206-a6ae-707ed03fc540</td><td>Standard IO - File Read Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>BASIC.A4 VM</td><td>e043378d-3200-4647-a9e4-efafe17e98e1</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A2_v2 VM (Windows)</td><td>3e169aa9-b251-46fe-8300-25b177509d23</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D12 Cloud Services</td><td>ef8fe5fd-2a1f-4dfd-943b-8b22b03cd693</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>DocumentDB</td><td>56f07b6a-c7d9-490f-a196-a7ee08e28712</td><td>Storage (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_D13_v2 VM</td><td>ca0c048a-736b-4b4f-acfb-fa23f0e171d2</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Read-Access Geo Redundant</td><td>5e7a80e5-0273-44b8-a179-e4f62ea6ec9f</td><td>Standard IO - Page Blob/Disk (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>6ab4b21f-3ee9-4229-85a5-9bdba2b1319b</td><td>Premium P4 Secondary Geo Database Days</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>SQL Server Enterprise (16 core)</td><td>2f6d02be-a7f9-4918-96d1-c291793047e6</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>c61d4186-f542-4ddc-af12-68e97afef4b1</td><td>Standard Elastic DTU Pack</td><td>Days</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>c01a1eed-b19a-4aad-bb83-8d62cdc29778</td><td>Standard IO - Page Blob Write Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>5e946cfc-acc9-4a96-895b-92386fa63c9c</td><td>Standard IO - Queue Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>Standard_A4m_v2 VM</td><td>585fca1e-08d2-41cf-9b65-0c21f3962a73</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>DocumentDB</td><td>65d4ded2-41ae-43a8-bb68-3c200e1ba864</td><td>100 Request Units (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>767660fa-525b-436f-a375-6da3e26f09b2</td><td>Standard IO - File Delete Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Virtual Machines</td><td>SQL Server Standard (up to 4 cores)</td><td>6b44a2ed-1103-41f3-90fe-8aaf147c3e41</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Service Bus</td><td>Standard Messaging</td><td>85f84482-123e-44a9-a2d5-cb53f2abe0f8</td><td>Connections</td><td>Connections</td><td>0.0</td></tr>
                <tr><td>Media</td><td>Media Services</td><td>0354d12b-d4a0-4d78-9029-a6d3715fa464</td><td>S1 Media Reserved Units</td><td>Hourly Reserved Units</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td>Geo Redundant</td><td>11278850-f161-4a6e-86ef-d650a29fb62f</td><td>Standard IO - Page Blob Write Operation Units (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>MySQL Database on Azure</td><td>fcb374b3-8987-41d3-ab61-2f2efcf03211</td><td>Standard MS5 Database (Hours)</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Business Analytics</td><td>A3 HDInsight (Non-Windows)</td><td>fa9dc70f-f562-44af-b965-b4576aefed95</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Storage</td><td>Locally Redundant</td><td>3f2b1e1c-c886-4ec6-ad6f-dd0ef38819c9</td><td>Standard IO - Table (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Networking</td><td>Virtual Network</td><td>740bac0f-0db5-4b89-b8af-270bacc2c8da</td><td>Inter VNET Data Transfer Out (GB)</td><td>GB</td><td>0.0</td></tr>
                <tr><td>Cloud Services</td><td>Standard_D15_v2 Cloud Services</td><td>5a559e39-54f3-4d68-bb80-376cc16e8153</td><td>Compute Hours</td><td>Hours</td><td>0.0</td></tr>
                <tr><td>Data Management</td><td></td><td>2e60d458-756e-41a6-8747-8b3f7eff2c62</td><td>Standard IO - Hot Block Blob Read Operations (in 10,000s)</td><td>10,000s</td><td>0.0</td></tr>
                <tr><td>Data Services</td><td>SQL Database</td><td>5df0b68a-14df-4e53-b4d7-80a5d839a07e</td><td>Premium P6 Secondary Active Geo Database Days</td><td>Days</td><td>0.0</td></tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3>References</h3>
        <p>
          <ul>
            <li>
              <a href="https://github.com/Azure-Samples/billing-dotnet-ratecard-api" target="_blank" rel="noopener noreferrer">
              Microsoft Azure Billing API Code Samples: RateCard API</a>
            </li>
            <li>
              <a href="https://msdn.microsoft.com/en-us/library/azure/mt219005.aspx" target="_blank" rel="noopener noreferrer">
              Resource RateCard REST API</a>
            </li>
            <li>
              <a href="https://github.com/Azure/BillingCodeSamples" target="_blank" rel="noopener noreferrer">
              Microsoft Azure Billing API Code Samples</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </div>
);

export default connect()(AzureRegions);
