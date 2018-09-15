---
layout: post
title: "GREP Notes"
date: 2018-09-16
comments: true
---

Here are some notes from a while back about GREP commands. Maybe it will be helpful to someone.

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

so  **grep -win** means w = only whole words, i = not case sensitive, n = also print line # to terminal

These commands are separate (like this grep -win -C 2 "Yaakov Shore" names.txt)

**grep -A 4** : returns match w/ 4 lines after it
**grep -B 4** : returns match w/ 4 lines before it
**grep -C 2*** : returns match w/ 2 lines b4 and 2 lines after


To search directories w/o sub directories use wildcard :  grep -win "Yaakov Shore" ./*  or  grep -win "Yaakov Shore" ./*.txt  to search only text files

To search sub directories do a recursive search with r like this:

```bash
grep -r "Yaakov Shore"
```

If you just want the files and not the text printed use -l like this:  grep -rl "Yaakov Shore" and if you want a count of the matches use -c

```bash
history | grep "git commit" 
history | grep "git commit" | grep "dotfile"  narrows it down further
```

grep -P is for Perl compatible regular expressions on Linux
grep -P "\d{3}-\d{3}-\d{4}" names.txt returns phone numbers in names.txt (3 digits then "-" then another 3 d then "-" then 4 d).
