import React from 'react';
import { connect } from 'react-redux';

const About = props => (
  <div class="container-fluid">
    <div class="page-header">
      <h3>Reference</h3>
      <small>Useful links for building this site</small>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ul class="list-unstyled">
          <li>
            <a href="https://azure.microsoft.com/en-us/regions/" target="_blank" rel="noopener noreferrer">
              Azure Datacenter Regions</a>
          </li>
          <li>
            <a href="https://docs.microsoft.com/en-us/azure/cdn/cdn-pop-locations" target="_blank" rel="noopener noreferrer">
              Azure Content Delivery Network (CDN) Node Locations</a>
          </li>
          <li>
            <a href="https://docs.microsoft.com/en-us/azure/storage/storage-scalability-targets" target="_blank" rel="noopener noreferrer">
              Azure Storage Scalability and Performance Targets</a>
          </li>
          <li>
            <a href="http://azure.microsoft.com/en-us/documentation/articles/azure-subscription-service-limits" target="_blank" rel="noopener noreferrer">
              Azure Subscription and Service Limits, Quotas, and Constraints</a>
          </li>
          <li>
            <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html" target="_blank" rel="noopener noreferrer">
              AWS Regions and Availability Zones</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default connect()(About);
