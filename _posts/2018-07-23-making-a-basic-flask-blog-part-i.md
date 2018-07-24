---
layout: post
title: "Making A Basic Flask Blog: Part I"
date: 2018-07-23
comments: true
---

Hi Folks! This is part one of a series which will go through how to make a basic flask blog from scratch.

In this part, we'll discuss setting up the database. I've never done a sqlite database for a blog before, so I thought it would be fun to make a very, very basic schema for the blog.

First we'll make a table for the authors like this:

```sql
create table authors(
  id integer primary key autoincrement,
  firstname text not null,
  lastname text not null
);
```

Then, we'll make a table for the the blog posts like this:

```sql
create table blog_posts(
  id integer primary key autoincrement,
  author_id integer not null,
  title text not null,
  content text not null,
  post_date date datetime
);
```

Then we'll insert an author:

```sql
insert into authors(firstname, lastname) values("Yaakov", "Shore");
```

Next, we'll insert some blog posts.

```sql
insert into blog_posts(
  author_id,
  title,
  content,
  post_date
  ) values (
    1,
    "A Blog Title",
    "This is a blog post. Really, it is!",
    "2018-07-23 23:52");
insert into blog_posts(
  author_id,
  title,
  content,
  post_date
) values (
  1,
  "Another Blog Title",
  "This is a blog post. Really, it is!",
  "2018-07-27 07:35"
  );
```

The `author_id` correspondes to the id in the `authors` table.

To select the author by `firstname` and `lastname` we must join the `author_id` to the `id` in the `authors` table. Let's do that here:

```sql
SELECT title, firstname, lastname, post_date, content
FROM blog_posts LEFT OUTER JOIN authors
   ON blog_posts.author_id = authors.id
ORDER BY post_date DESC;
```

The result should look like this:

| title              | firstname | lastname | post_date           | content                             |
|--------------------|-----------|----------|---------------------|-------------------------------------|
| Another Blog Title | Yaakov    | Shore    | 2018-07-27 07:35    | This is a blog post. Really, it is! |
| A Blog Title       | Yaakov    | Shore    | 2018-07-23 23:52    | This is a blog post. Really, it is! |
|                    |           |          |                     |                                     |

Here is a link to the code on [DB Fiddle](https://www.db-fiddle.com/f/k3mRqJwFRWVoPEaKAqQyV3/2).

{% if page.comments %}
<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://dewofyouryouth-github-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                            
{% endif %}
