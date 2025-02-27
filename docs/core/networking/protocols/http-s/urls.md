---
tags:
  - http
  - https
  - networking
  - url
comments: true
---

# URLs

## What is a URL?

A URL or Uniform Resource Locator comprises a Fully Qualified Domain Name ([FQDN](https://en.wikipedia.org/wiki/Fully_qualified_domain_name)) with optional resources and/or components. We use URLs to access webpages over [HTTP/s](index.md).

---
## URL Structure

Let’s take the following URL as an example and break it down into its parts:

```
<http://user:password@acme.org:80/dashboard.php?login=true#status>
```
<br>

| **COMPONENT** | **EXAMPLE**                    | **DESCRIPTION**                                                                                                                                                                       |
| ------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme        | `http://` or `https://`        | This is used to identify the protocol being accessed by the client, and ends with a colon and a double slash (`://`)                                                                  |
| User Info     | `user:password@`               | This is an optional component that contains the credentials (separated by a colon `:`) used to authenticate to the host, and is separated from the host with an at sign (`@`)         |
| Host          | [`acme.org`](http://acme.org/) | The host signifies the resource location. This can be a hostname or an IP address                                                                                                     |
| Port          | `:80`                          | The `Port` is separated from the `Host` by a colon (`:`). If no port is specified, `http` schemes default to port `80` and `https` default to port `443`                              |
| Path          | `/dashboard.php`               | This points to the resource being accessed, which can be a file or a folder. If there is no path specified, the server returns the default index (e.g. `index.html`).                 |
| Query String  | `?login=true`                  | The query string starts with a question mark (`?`), and consists of a parameter (e.g. `login`) and a value (e.g. `true`). Multiple parameters can be separated by an ampersand (`&`). |
| Fragments     | `#status`                      | Fragments are processed by the browsers on the client-side to locate sections within the primary resource (e.g. a header or section on the page).                                     |

  

!!! note

	The only mandatory components are scheme and host; the rest are optional.