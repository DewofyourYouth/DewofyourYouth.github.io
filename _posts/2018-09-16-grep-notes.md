---
layout: post
title: "GREP Notes"
date: 2018-09-16
comments: true
---

Here are some notes from a while back about GREP commands. Maybe it will be helpful.

GREP is a standard Unix/Linux bash program - it stands for **G**lobally search a **R**egular **E**xpression and **P**rint.

```bash
grep "Yaakov Shore" names.txt
```

will return every occurrence of "Yaakov Shore" in the file names.txt (including Yaakov Shorestein, Yaakov Shorester etc.)

```bash
grep -w "Yaakov Shore" names.txt
```

Will only return full words.

Not case sensitive:

```bash
grep -i "Yaakov Shore" names.txt
```

Return line number also:

```bash
grep -n "Yaakov Shore" names.txt
```
