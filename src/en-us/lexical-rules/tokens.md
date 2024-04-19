---
title: Tokens
---

During lexical analyzing, the lexical analyzer read the source code and convert them into a token-list.

`token` is the base type of all the tokens. And it is derived by these children:

- entity
	- literal
		- number
		- string
		- boolean
		- null
	- identifier

- keyword
- symbol