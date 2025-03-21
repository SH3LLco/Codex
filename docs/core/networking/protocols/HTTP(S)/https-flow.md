---
tags:
  - networking
  - flow
  - https
  - osi-7
comments: true
---

# HTTPS Flow

``` mermaid
sequenceDiagram
	autonumber
	participant User
	participant Browser
	participant DNS_Server as DNS Server
	participant Web_Server as ACME Web Server: 152.153.81.14

	User->>Browser: Go to acme.org
	Browser->>DNS_Server: DNS Query: Where is acme.org?
	DNS_Server->>Browser: DNS Response: 152.153.81.14
	Browser->>Web_Server: HTTP Request
	note over Browser,Web_Server: 152.153.81.14:80 GET / HTTP/1.1
	Web_Server->>Browser: HTTPS Redirect
	note over Web_Server,Browser: HTTP/1.1 301 Moved Permanently
	Browser->>Web_Server: HTTPS Request | Client Hello
	note over Browser,Web_Server: 152.153.81.14:443 GET / HTTP/2
	Web_Server->>Browser: HTTPS Response | Server Hello
	note over Web_Server,Browser: Server Key Exchange
	Browser->>Web_Server: HTTPS Request | Client Key Exchange
	note over Browser,Web_Server: Encrypted Handshake
	Web_Server->>Browser: HTTPS Response | Encrypted Handshake
	note over Web_Server,Browser: <- Encrypted HTTP Communication ->
```
!!! note "Notes on DNS"

	Browsers typically check local resources first for host records such as `/etc/hosts` on linux or <br> `c:\Windows\System32\Drivers\etc\hosts` on windows. <br> <br> Additionally, all domain names need to be resolved because servers typically can't communicate without an IP address. 

## Flow Breakdown

1. User enters URL (acme.org) into browser.
2. Browser sends request to DNS (Domain Name System) server to resolve the IP address. 
3. DNS server looks up the IP for acme.org and responds with the host's IP Address. 
4. Browser sends a `HTTP GET` request to the default HTTP port (80) on the host's IP address asking for the root `/` path. 
5. Web server receives the request, but if it enforces HTTPS, the web server will send a response to the browser to with a redirect. 
6. Browser receives the redirect response and sends a "client hello" packet request to the HTTPS port.  
7. Web server receives the "client hello" packet and sends a "server hello" packet response followed by a key exchange to exchange SSL certificates. 
8. Browser receives and verifies the key/certificate and responds with one of its own. 
9. Encrypted handshake is initiated to confirm whether the encryption and transfer are working correctly. 

!!! note "Handshake"
	
	After a successful handshake completes, normal HTTP communication is continued, however, it is now encrypted traffic. 

!!! danger "HTTP Downgrade"

	In some cases, an attacker may be able to perform an HTTP downgrade attack, sometimes referred to SSL Stripping or SSL downgrade, which downgrades HTTPS to HTTP communication resulting in clear-text data transactions. This attack is generally done using a Man-In-The-Middle (MITM) proxy. Most modern browsers, servers, and web apps protect against this attack. 

