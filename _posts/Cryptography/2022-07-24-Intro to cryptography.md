---
layout: post
title:  "Intro to cryptography"
author: gaetano
categories: [ university, cryptography, security, steganography, nist, crypto]
image: assets/images/cryptography.png

---
Information is a physical quantity and as such subject to various transformation processes, including those relating to its protection.

##### But what is cryptography?

Cryptography (or cryptography, from the Greek [krypts], 'hidden', and [grapha], 'writing') is the branch of cryptology that deals with 'hidden writings', i.e. methods of making a message 'obfuscated' so that it is not comprehensible/intelligible to persons not authorised to read it; such a message is commonly called a cryptogram and the methods used are called encryption techniques.

##### Cryptography vs steganography
Steganography is a technique for concealing communication by hiding the
secret message; the main idea behind steganography, therefore, is to prevent suspicion
on the existence of information.
Unlike cryptography, whose objective is to make a given channel protected
communication channel from a possible unauthorised listener, preventing the latter
from accessing the content of the channel, steganographic techniques strive to hide
the mere presence of the protected channel, using a public channel (whose content is
accessible to a malicious listener) as a vehicle for the exchange of messages that
must remain confidential.

### Security in three words: confidentiality, integrity and availability
Security is composed by three different concepts:
- Data integrity algorithms: these are used to protect blocks of data, e.g. messages, from manipulation or alteration;
- Authentication protocols: are schemes based on the use of cryptographic algorithms designed to authenticate the identity of interlocutors;
- Availability, finally, refers to the possibility for authorised parties to have access to the resources they need for a set time and in an uninterrupted manner.

#### Cryptonalisys
Cryptanalysis (from the Greek kryptos, 'hidden', and analyein, 'to break down'), or cryptanalysis, refers to the study of methods to obtain the meaning of encrypted information without having access to the secret information that is usually required to perform the operation.
Cryptanalysis refers not only to methods of breaking a cipher, but also to any attempt to circumvent the security of cryptographic algorithms and protocols.


### Security definition by NIST
>The protection provided to an automated information system in order to 
achieve the objectives of integrity, availability and confidentiality of information system resources 
(including hardware, software, firmware, information/data and telecommunications)

This is the definition of computer security given by NIST, in the Computer Security Handbook.