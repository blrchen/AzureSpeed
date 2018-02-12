import React from 'react';
import { connect } from 'react-redux';

const About = props => (
  <div class="container-fluid">
    <div class="page-header">
      <h3>PsPing Network Latency Test</h3>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p>
          The major drawback of this web based Azure speed test tool is that this tool does not measure latency with ICMP ping or TCP ping, due to browser limitation.
        </p>
        <p>
          If you want to measure ICMP ping latency to Azure datacenters, you might want to check a great tool called PsPing from PsTools suite. PsPing is a command-line utility for measuring network performance, it implements Ping functionality, TCP ping, latency and bandwidth measurement.
        </p>
        <p>
          Here is how to run your network latency test using PsPing tool:
          <ol>
            <li>Download PsTools from <a href="http://technet.microsoft.com/en-us/sysinternals/bb896649.aspx">http://technet.microsoft.com/en-us/sysinternals/bb896649.aspx</a></li>
            <li>
              Extract the whole package, open a command prompt and run the following command
              <pre>psping target:port</pre>
              The target can be ip or dns name of Virtual Machine, Storage, SQL Database and other endpoints that is public accessable
            </li>
          </ol>
          At the end, you will see an output similar to the one below (here I am using a storage endpoint and port 80 as target), with latency results (in milliseconds)
        </p>
        <p>
          <img class="img-responsive center-block" src="/image/psping.png" />
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3>Read more</h3>
        <p>
          <ul>
            <li>You can learn the meaning of each parameter of psping in the web page where you downloaded the tool</li>
            <li>Azure blocks external ICMP protocol so general ping.exe which uses ICMP protocol does not work. PsPing test connectivity to a specific TCP port directly which is not blocked</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
);

export default connect()(About);
