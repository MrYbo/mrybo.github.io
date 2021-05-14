---
title: go语言变量申明
subtitle: go语言变量申明
author: BoYang
date: 2021-15-14
header_style: image
header_img: /img/in-post/2020-10/header.jpg
header_mask: rgba(40, 57, 101, .4)
catalog: true
tags:
  - GoLang
---

## 变量申明

声明变量的一般形式是使用 `var` 关键字：`var identifier type`

需要注意的是，Go 和许多编程语言不同，它在声明变量时将变量的类型放在变量的名称之后。原因是首先，它是为了避免像 C 语言中那样含糊不清的声明形式，例如：`int* a, b;`。在这个例子中，只有 a 是指针而 b 不是。如果你想要这两个变量都是指针，则需要将它们分开书写。

而在 Go 中，则可以很轻松地将它们都声明为指针类型：
```go
var a, b *int
```

其次，按照从左到右的顺序，让代码更加容易理解。
```go
var a int
var b bool
var str string
```

也可以改写成：
```go
var (
    a int
    b bool
    str string
)
```

这种因式分解关键字的写法一般用于声明全局变量。

### 默认赋值
当一个变量被声明之后，系统自动赋予它该类型的零值：

::: tip
- int 为 0，
- float 为 0.0，
- bool 为 false，
- string 为空字符串 ""，
- 指针为 nil。
:::

记住，所有的内存在 Go 中都是经过初始化的。

变量的命名规则遵循 **骆驼命名法**，即首个单词小写，每个新单词的首字母大写，例如：`numShips` 和 `startDate`。

==但如果你的全局变量希望能够被外部包所使用，则需要将首个单词的首字母也大写==

一个变量（常量、类型或函数）在程序中都有一定的作用范围，称之为作用域。如果一个变量在函数体外声明，则被认为是全局变量。

### 声明的时候自己赋值
```go
var a int = 3
var s string = "abc"
```

### 不指定数据类型
Go 编译器可以根据变量的值来自动推断其类型
```go
var a, b, c, d = 2, 2.3, true, "def"
var e = 15
var f = false
```

或者：
```go
var (
    a = 15
    b = false
    str = "Go says hello to the world!"
    numShips = 50
    city string
)
```

不过自动推断类型并不是任何时候都适用的，当你想要给变量的类型并不是自动推断出的某种类型时，你还是需要显式指定变量的类型，例如：
```go
var n int64 = 2
```

### 使用 := 代替 var 声明变量（在函数内部）
如上的格式声明变量都需要使用var 关键字比较繁琐，可以写成如下形式：
```go
func variableTypeDeduction() {
	var a, b, c, d = 2, 2.3, true, "def"
	fmt.Println(a, b, c, d)
}

可以写成
func variableTypeDeduction() {
    a, b, c, d := 2, 2.3, true, "def"
	fmt.Println(a, b, c, d)
}
```

但是这种形式只是这个变量第一次出现的时候才能使用 `:=` 来初始化变量。 当给初始化好的变量重新赋值的时候，就不能使用 `:=` 的形式。

### 函数外部声明变量
当我们在函数外部声明变量的时候，不能使用 `:=` 的形式,必须使用 `var` 等关键字开头。
