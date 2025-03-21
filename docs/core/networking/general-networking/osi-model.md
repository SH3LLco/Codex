---
tags:
  - osi-model
  - general-networking
comments: true
---
# OSI Model
## Overview

The **OSI (Open Systems Interconnection) model** is a conceptual framework used to understand and standardize the functions of a telecommunication or networking system. It divides the communication process into **seven layers**, each with distinct functions, facilitating interoperability, modularity, and abstraction.

Each layer serves the layer above it and is served by the layer below it, ensuring that changes in one layer do not affect others.

---

## **Layer 1: Physical Layer**

### **Description:**

The Physical Layer deals with the physical and electrical aspects of communication. It specifies the hardware means of sending and receiving data over a carrier network, handling raw bit transmission.

### **Responsibilities:**

- Transmission and reception of raw binary data as electrical signals, light pulses, or radio waves.
- Defines hardware specifications (e.g., cables, connectors, voltage levels, and pin layouts).
- Specifies data rates, synchronization, and clocking mechanisms.

### **Examples:** Ethernet cables, fiber optics, RS-232, IEEE 802.3.

**Key Protocols/Technologies:** Ethernet, USB, DSL, Optical Transport Network (OTN).

---

## **Layer 2: Data Link Layer**

### **Description:**

This layer is responsible for node-to-node communication and error detection/correction. It provides a reliable link by structuring raw bits into frames for error detection and flow control.

### **Sub-layers:**

1. **Logical Link Control (LLC):** Manages flow control, error detection, and protocol multiplexing.
2. **Media Access Control (MAC):** Controls how devices share a transmission medium.

### **Responsibilities:**

- Frame synchronization and error detection (e.g., CRC checks).
- Medium access control (determining device access to the transmission medium).
- Addressing via MAC addresses for unique identification.

### **Key Protocols/Technologies:**

Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11), ARP, PPP, HDLC, MPLS.

---

## **Layer 3: Network Layer**

### **Description:**

Handles routing and forwarding of data packets across multiple networks. This layer determines the best physical path for data transmission.

### **Responsibilities:**

- Logical addressing (e.g., IP addressing with IPv4/IPv6).
- Routing using algorithms (e.g., Dijkstra, Bellman-Ford).
- Packet forwarding and fragmentation.
- Traffic congestion management and error reporting.

### **Key Protocols/Technologies:**

IP (IPv4, IPv6), ICMP, IGMP, RIP, OSPF, BGP, IS-IS.

---

## **Layer 4: Transport Layer**

### **Description:**

Ensures end-to-end communication, reliability, and data integrity between host devices. This layer abstracts the application layer from the complexities of the lower layers.

### **Responsibilities:**

- Reliable data delivery via acknowledgment and retransmission (e.g., TCP).
- Flow control and congestion avoidance.
- Multiplexing/demultiplexing using port numbers.

### **Key Protocols/Technologies:**

TCP (reliable, connection-oriented), UDP (unreliable, connectionless), SCTP.

---

## **Layer 5: Session Layer**

### **Description:**

Manages sessions or dialogs between applications. It establishes, maintains, and terminates communication sessions.

### **Responsibilities:**

- Session management, synchronization, and recovery (e.g., resuming interrupted data transfers).
- Maintains context and ensures orderly communication.
- Implements dialog control (simplex, half-duplex, or full-duplex).

### **Key Protocols/Technologies:**

NetBIOS, RPC, PPTP.

---

## **Layer 6: Presentation Layer**

### **Description:**

This layer translates, encrypts, or compresses data for the application layer. It ensures that data from one system's application layer can be interpreted by another.

### **Responsibilities:**

- Data encoding/decoding and conversion (e.g., ASCII to EBCDIC, JPEG compression).
- Encryption and decryption (e.g., SSL/TLS encryption).
- Compression and decompression.

### **Key Protocols/Technologies:**

SSL/TLS (partially operates here), MIME, XDR.

---

## **Layer 7: Application Layer**

### **Description:**

The closest layer to the end user, providing the interface for user applications to access network services.

### **Responsibilities:**

- High-level APIs for communication (e.g., file transfer, email, remote login).
- Network management functions (e.g., SNMP).
- Synchronization and resource availability checks.

### **Key Protocols/Technologies:**

HTTP, HTTPS, FTP, SMTP, SNMP, DNS, Telnet, SSH.

---