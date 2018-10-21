---
layout: post
title: "Android Notes: Part One"
date: 2018-10-21
comments: true
---

#### Some Notes For Android Development (Beginners)

These notes are about developing native apps for Android in XML and Java.
## Views
---


The layout in an Android app is made of views. Views are  boxes on the screen. The views are generally made in XML.

XML stands for e**X**tensible **M**arkup **L**anguage. XML is similar to HTML.

#### Some examples of views:

- TextView: a view with text.
- ImageView: a view for an image.
- Button: a view for a button.

They are written with "tags" which can self closing or contain "children".

Example of self closing tag:

```xml
<TextView
    android:text="Hello, Android!"
    android:background="@android:color/darker_gray"
    android:layout_width="150dp"
    android:layout_height="75dp" />
```

Example of parent and child tag:

```xml
<LinearLayout
    android:layout_width="500dp"
    android:layout_height="500dp"
    android:orientation="vertical">
    <TextView
        android:text="Hello, Android!"
    	android:background="@android:color/darker_gray"
    	android:layout_width="150dp"
    	android:layout_height="75dp" />
</LinearLayout>
```


This is probably not a layout you'll ever make, but serves and as example.

The size measurement used is called **DP** which stands for **D**ensity Independent **P**ixel. Hard coding the size in dps is not always ideal. Some other ways to set the size are:

1. wrap-content - sets the parent view to contain the child view.
2. match-parent - sets the child view to fill the parent view.
3. layout-weight - sets the children to fill up the layout relative to the weight given.

All of these will be explained later.