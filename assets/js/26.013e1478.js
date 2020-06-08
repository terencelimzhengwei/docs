(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{403:function(e,t,r){"use strict";r.r(t);var s=r(5),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"production-environment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#production-environment"}},[e._v("#")]),e._v(" Production Environment")]),e._v(" "),r("p",[e._v("This document explains how to set up your environment for running a production-quality full node. For the moment, this guide has only been tested against RPM-based Linux distributions.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),r("p",[e._v("This guide only covers general settings for a production-level full node. You can find further details on considerations for operating a validator node in our "),r("RouterLink",{attrs:{to:"/node/validator-intro.html"}},[e._v("Validator Guide")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"create-a-dedicated-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-dedicated-user"}},[e._v("#")]),e._v(" Create a Dedicated User")]),e._v(" "),r("p",[r("code",[e._v("terrad")]),e._v(" does not require the super user account. We "),r("strong",[e._v("strongly")]),e._v(" recommend using a normal user to run "),r("code",[e._v("terrad")]),e._v(". However, during the setup process you'll need super user permission to create and modify some files.")]),e._v(" "),r("h2",{attrs:{id:"firewall-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firewall-configuration"}},[e._v("#")]),e._v(" Firewall Configuration")]),e._v(" "),r("p",[r("code",[e._v("terrad")]),e._v(" uses several TCP ports for different purposes.")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("26656")]),e._v(" is the default port for the P2P protocol. This port is opened in order to communicate with other nodes, and must be open to join a network. "),r("strong",[e._v("However,")]),e._v(" it does not have to be open to the public. For validator nodes, we recommend configuring "),r("code",[e._v("persistent_peers")]),e._v(" and closing this port to the public.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("26657")]),e._v(" is the default port for the RPC protocol. This port is used for querying / sending transactions. In other words, this port needs to be opened for serving queries from "),r("code",[e._v("terracli")]),e._v(". It is safe to "),r("em",[e._v("NOT")]),e._v(" to open this port to the public unless you are planning to run a public node.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("1317")]),e._v(" is the default port for "),r("RouterLink",{attrs:{to:"/node/node-light-client.html"}},[e._v("Lite Client Daemon")]),e._v(" (LCD), which can be executed by "),r("code",[e._v("terracli rest-server")]),e._v(". LCD provides HTTP RESTful API layer to allow applications and services to interact with your "),r("code",[e._v("terrad")]),e._v(" instance through RPC. Check the "),r("a",{attrs:{href:"https://swagger.terra.money",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra REST API"),r("OutboundLink")],1),e._v(" for usage examples. You don't need to open this port unless you have use of it.")],1)]),e._v(" "),r("li",[r("p",[r("code",[e._v("26660")]),e._v(" is the default port for interacting with the "),r("a",{attrs:{href:"https://prometheus.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),r("OutboundLink")],1),e._v(" database which can be used for monitoring the environment. This port is not opened in the default configuration.")])])]),e._v(" "),r("h2",{attrs:{id:"increase-maximum-open-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#increase-maximum-open-files"}},[e._v("#")]),e._v(" Increase Maximum Open Files")]),e._v(" "),r("p",[r("code",[e._v("terrad")]),e._v(" can open more than 1024 files (which is default maximum) concurrently.\nYou wil want to increase this limit.")]),e._v(" "),r("p",[e._v("Modify "),r("code",[e._v("/etc/security/limits.conf")]),e._v(" to raise the "),r("code",[e._v("nofile")]),e._v(" capability.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("*                soft    nofile          65535\n*                hard    nofile          65535\n")])])]),r("h2",{attrs:{id:"running-server-as-a-daemon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-server-as-a-daemon"}},[e._v("#")]),e._v(" Running Server as a Daemon")]),e._v(" "),r("p",[e._v("It is important to keep "),r("code",[e._v("terrad")]),e._v(" running at all times. There are several ways to achieve this, and the simplest solution we recommend is to register "),r("code",[e._v("terrad")]),e._v(" as a "),r("code",[e._v("systemd")]),e._v(" service so that it will automatically get started upon system reboots and other events.")]),e._v(" "),r("h3",{attrs:{id:"register-terrad-as-a-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#register-terrad-as-a-service"}},[e._v("#")]),e._v(" Register terrad as a service")]),e._v(" "),r("p",[e._v("First, create a service definition file in "),r("code",[e._v("/etc/systemd/system")]),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"sample-file-etc-systemd-system-terrad-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sample-file-etc-systemd-system-terrad-service"}},[e._v("#")]),e._v(" Sample file: "),r("code",[e._v("/etc/systemd/system/terrad.service")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[Unit]\nDescription=Terra Daemon\nAfter=network.target\n\n[Service]\nType=simple\nUser=terra\nExecStart=/data/terra/go/bin/terrad start\nRestart=on-abort\n\n[Install]\nWantedBy=multi-user.target\n\n[Service]\nLimitNOFILE=65535\n")])])]),r("p",[e._v("Modify the "),r("code",[e._v("Service")]),e._v(" section from the given sample above to suit your settings.\nNote that even if we raised the number of open files for a process, we still need to include "),r("code",[e._v("LimitNOFILE")]),e._v(".")]),e._v(" "),r("p",[e._v("After creating a service definition file, you should execute "),r("code",[e._v("systemctl daemon-reload")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"controlling-the-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#controlling-the-service"}},[e._v("#")]),e._v(" Controlling the service")]),e._v(" "),r("p",[e._v("Use "),r("code",[e._v("systemctl")]),e._v(" to control (start, stop, restart)")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start")]),e._v("\nsystemctl start terrad\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Stop")]),e._v("\nsystemctl stop terrad\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Restart")]),e._v("\nsystemctl restart terrad\n")])])]),r("h3",{attrs:{id:"accessing-logs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessing-logs"}},[e._v("#")]),e._v(" Accessing logs")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Entire log")]),e._v("\njournalctl -t terrad\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Entire log reversed")]),e._v("\njournalctl -t terrad -r\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Latest and continuous")]),e._v("\njournalctl -t terrad -f\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);