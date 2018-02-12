import React from 'react';
import { connect } from 'react-redux';

const About = props => (
  <div class="container-fluid">
    <div class="page-header">
      <h3>About</h3>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p>
          <a href="http://www.azurespeed.com">www.AzureSpeed.com</a> - Azure speed test tool. Test your network latency and speed to Azure datacenters around the world.
        </p>
        <p>
          <a href="http://www.azurespeed.com">www.AzureSpeed.com</a> is maintained by Blair Chen(<a href="https://twitter.com/blrchen" target="_blank" rel="noopener noreferrer">@@blrchen</a>), open source in <a href="https://github.com/blrchen/AzureSpeed">GitHub</a>, built on top of following open source projects
          <ul>
            <li><a href="https://github.com/aspnet/home" target="_blank" rel="noopener noreferrer">ASP.NET Core</a></li>
            <li><a href="https://github.com/twbs/bootstrap" target="_blank" rel="noopener noreferrer">Bootstrap</a></li>
            <li><a href="https://github.com/FortAwesome/Font-Awesome" target="_blank" rel="noopener noreferrer">Font Awesome</a></li>
            <li><a href="https://github.com/jquery/jquery" target="_blank" rel="noopener noreferrer">jQuery</a></li>
            <li><a href="https://github.com/angular/angular" target="_blank" rel="noopener noreferrer">Angular</a></li>
            <li><a href="https://github.com/angular-ui/bootstrap" target="_blank" rel="noopener noreferrer">UI Bootstrap</a></li>
            <li><a href="https://github.com/a8m/angular-filter" target="_blank" rel="noopener noreferrer">Angular-filter</a></li>
            <li><a href="https://github.com/vitalets/checklist-model" target="_blank" rel="noopener noreferrer">checklist-model</a></li>
            <li><a href="https://github.com/mbostock/d3" target="_blank" rel="noopener noreferrer">D3</a></li>
            <li><a href="https://github.com/blackrockdigital/startbootstrap-sb-admin-2/" target="_blank" rel="noopener noreferrer">SB Admin 2 Theme</a></li>
            <li><a href="https://github.com/orcame/jazure" target="_blank" rel="noopener noreferrer">jazure</a></li>
          </ul>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="panel-body">
        <h3>Feedback</h3>
        <p>
                Feedback is welcome, please create an issue in <a href="https://github.com/blrchen/AzureSpeed/issues">Github</a>
        </p>
        <h3>Contribution</h3>
        <p>
                Contribution is welcome, please fork on <a href="https://github.com/blrchen/AzureSpeed">GitHub</a> and send pull request
        </p>
        <h3>Change logs</h3>
        <h4>2014-04-10</h4>
        <ul>
          <li>Add Latency Test</li>
          <li>Add Upload Speed Test</li>
          <li>Add Download Speed Test</li>
        </ul>
        <h4>2014-07-30</h4>
        <ul>
          <li>Add East US 2, Japan East, Japan West datacenters</li>
          <li>Add CDN Test</li>
          <li>Add Large File Upload Speed Test</li>
        </ul>
        <h4>2014-08-21</h4>
        <ul>
          <li>Add Traffic Manager Test</li>
          <li>Add Cloud Region Finder tool</li>
          <li>Add Australia datacenters</li>
        </ul>
        <h4>2015-02-13</h4>
        <ul>
          <li>Add Media Service Live Streaming Latency Test</li>
        </ul>
        <h4>2015-09-30</h4>
        <ul>
          <li>Add India datacenters</li>
        </ul>
        <h4>2015-10-30</h4>
        <ul>
          <li>Add Datecenter IP Range page</li>
        </ul>
        <h4>2016-6-6</h4>
        <ul>
          <li>Add Canada datacenters</li>
        </ul>
        <h4>2016-10-4</h4>
        <ul>
          <li>Add UK datacenters</li>
          <li>Add region filters</li>
        </ul>
        <h4>2016-10-23</h4>
        <ul>
          <li>Add PsPing latency test page</li>
        </ul>
        <h4>2017-05-01</h4>
        <ul>
          <li>Upgrade to using ASP.NET Core 1.1</li>
        </ul>
        <h4>2017-05-08</h4>
        <ul>
          <li>Add korea regions</li>
        </ul>
        <h4>2017-05-29</h4>
        <ul>
          <li>Add environment and region pages</li>
        </ul>
      </div>
    </div>
  </div>
);

export default connect()(About);
