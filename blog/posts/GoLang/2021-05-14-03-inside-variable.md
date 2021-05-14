---
title: go内建变量
subtitle:  go语言的数据类型
author: BoYang
date: 2021-15-14
header_style: image
header_img: /img/in-post/2021-05/go/header2.png
header_mask: rgba(40, 57, 101, .4)
catalog: true
tags:
  - GoLang
---

```markmap
# 变量类型

## bool

## string

## byte

## 整形
### 无符号整形
- int

### 有符号整形

#### uint
##### 规定长度
- uint8
- uint16
- uint32
- uint64

##### 不规定长度
- 根据操作系统 uint32 or uint64

## uintptr
- 指针

## rune
- 32 位
- 字符型，等于一字节的char

## 浮点数
- float32
- float64
- complex32 复数，实数 32 位，虚数 32 位
- complex64 复数，实数 64 位，虚数 64 位
```