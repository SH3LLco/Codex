---
tags:
  - general-networking
  - 3-way-handshake
comments: true
---
# The 3-way Handshake
## TCP, UDP, and the 3-Way Handshake

A deep-dive technical explanation of TCP, UDP, and the 3-Way Handshake at an advanced networking level, along with their placement in the OSI model and their classification in terms of ports, protocols, services, functions, and technologies.

---

## 1. Placement in the OSI Model

- **OSI Layer**: TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) both operate at **Layer 4** of the OSI model, the **Transport Layer**.
- **Purpose of Layer 4**: Responsible for end-to-end communication control, reliability, flow control, multiplexing (via ports), and segmentation of data.

---

## 2. TCP (Transmission Control Protocol)

### 2.1 Overview

TCP is a **connection-oriented**, **reliable** transport protocol that establishes a virtual circuit (session) between two endpoints before transferring data.

### 2.2 Key Technical Aspects

1. **Connection-Oriented**
    - Initiates a handshake (the 3-Way Handshake) to establish parameters and maintain state.
    - Negotiates sequence numbers, window sizes, and optional features (e.g., MSS, window scaling).
2. **Reliable Data Transfer**
    - Uses **sequence numbers** to ensure ordered delivery.
    - Employs **ACK** (acknowledgment) packets and **retransmissions** for lost or corrupted segments.
3. **Flow Control**
    - Utilizes a **sliding window** to prevent a sender from overwhelming a receiver.
    - Dynamically adjusts the send window based on the receiver's buffer.
4. **Congestion Control**
    - Implements mechanisms such as **Slow Start**, **Congestion Avoidance**, **Fast Retransmit**, and **Fast Recovery** to detect and respond to network congestion.
5. **Header Structure**
    - Includes **Source Port**, **Destination Port**, **Sequence Number**, **Acknowledgment Number**, **Data Offset**, flags (SYN, ACK, FIN), **Window Size**, **Checksum**, **Urgent Pointer**, and optional fields.

### 2.3 Classification of TCP

- **Protocol**: Functions as a Transport Layer protocol.
- **Ports**: Uses **port numbers** (1–65535) for multiplexing services on a single host.
- **Services**: Underpins many application-layer services (HTTP, SSH, SMTP, etc.).
- **Function**: Provides **reliable**, **ordered**, and **error-checked** delivery of a byte stream.
- **Technology**: Often discussed alongside IP as part of the **TCP/IP** technology stack.

---

## 3. UDP (User Datagram Protocol)

### 3.1 Overview

UDP is a **connectionless**, **best-effort** transport protocol that does not guarantee ordered delivery, reliability, or flow control.

### 3.2 Key Technical Aspects

1. **Connectionless Communication**
    - No handshake required; data (datagrams) are sent immediately.
    - Minimal overhead with no need for maintaining connection state.
2. **Best-Effort Delivery**
    - Basic checksum is included, but no sequence numbers or retransmissions.
    - Packets may arrive out of order, be duplicated, or be lost without detection at the transport layer.
3. **Header Structure**
    - Contains **Source Port**, **Destination Port**, **Length**, **Checksum**, and the data payload.

### 3.3 Classification of UDP

- **Protocol**: Serves as a Transport Layer protocol (Layer 4).
- **Ports**: Like TCP, UDP uses **port numbers** (1–65535) for distinguishing services.
- **Services**: Suitable for applications where low latency is more important than reliability (DNS, SNMP, streaming).
- **Function**: Provides a **simple, fast** transport mechanism without overhead for error correction or sequencing.
- **Technology**: Part of the broader **UDP/IP** suite.

---

## 4. The TCP 3-Way Handshake

### 4.1 Purpose

The 3-Way Handshake establishes a **connection-oriented** session in TCP, synchronizing sequence numbers and negotiating parameters for reliable data exchange.

### 4.2 Steps

1. **SYN**
    - **Client → Server**: Sends a TCP segment with the **SYN** flag set and an **Initial Sequence Number** (ISN_C).
    - Signals the start of the connection request.
2. **SYN-ACK**
    - **Server → Client**: Responds with **SYN** and **ACK** flags set.
    - Includes the server's **Initial Sequence Number** (ISN_S) and acknowledges the client's SYN (ACK = ISN_C + 1).
3. **ACK**
    - **Client → Server**: Sends a final ACK, acknowledging the server's SYN (ACK = ISN_S + 1).
    - Completes connection setup; both sides move to the **ESTABLISHED** state.

### 4.3 Significance

- **Sequence Number Synchronization**: Ensures proper ordering and reliability.
- **Negotiation of Options**: Exchanges settings like Maximum Segment Size (MSS), window scaling, and more.
- **State Machine**: Each endpoint manages states (e.g., `SYN_SENT`, `SYN_RECEIVED`, `ESTABLISHED`) until the handshake completes.

### 4.4 Classification of the 3-Way Handshake

- **Function**: An internal mechanism within **TCP** for establishing a reliable connection.
- **Not a Separate Protocol**: Part of the **TCP** specification, not an autonomous service or technology.

---

## 5. Classification Table

| **Concept** | **Layer / Category** | **Definition** | **Classification** |
| --- | --- | --- | --- |
| **TCP** | Transport (Layer 4) | Connection-oriented, reliable data transport. | **Protocol**(part of TCP/IP technology) |
| **UDP** | Transport (Layer 4) | Connectionless, best-effort data transport. | **Protocol**(part of UDP/IP technology) |
| **Ports** | Transport (Layer 4) | Numerical identifiers (1–65535) for multiplexing multiple services on one host. | **Function**(mechanism used by transport protocols) |
| **3-Way Handshake** | Transport (Layer 4) / TCP | Process used by TCP to establish a reliable connection (SYN, SYN-ACK, ACK). | **Function**within the TCP protocol |
| **Application Service** | Application (Layer 7) | A user-facing/application-facing capability built on top of transport protocols. | **Service** |
| **TCP/IP** | Protocol Suite | Foundational set of technologies for internet-based communication (includes IP, TCP, UDP). | **Technology** |

---

## 6. Summary

TCP and UDP are both **Transport Layer protocols**.

- **TCP** provides a reliable, connection-oriented data stream with error checking, flow control, and congestion control.
- **UDP** offers a simpler, connectionless approach with less overhead, ideal for time-sensitive or high-volume traffic.

The **3-Way Handshake** is the process that **TCP** uses to establish a session, synchronizing sequence numbers and negotiating connection options.

- It is classified as a **function** (or mechanism) within TCP rather than a protocol of its own.

Ports (1–65535) are used by **TCP** and **UDP** to differentiate multiple services running on the same host, acting as a **function** at the Transport Layer.

In a broader context, **services** (such as HTTP, DNS, or SMTP) run on top of these protocols (TCP or UDP) at the Application Layer (Layer 7). The entire environment—often called the **TCP/IP** or **UDP/IP** stack—is considered a **technology** suite that forms the backbone of modern computer networking.