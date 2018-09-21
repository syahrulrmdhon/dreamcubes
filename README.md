# Answers

for Slicing Test (html, css, js) and Javascript Coding Test
go to https://syahrulrmdhon.github.io/dreamcubes

# What does a Doctype do?

Doctype declaration tells the browser what kind of document to expect: HTML5, HTML4.0x, XHTML1.0 (Strict, Transitional or Frameset), XHTML1.1, and others.

But why is it required?

For legacy reasons.

In the early days of the Internet, two main browsers were competing against one another. Netscape Navigator and Internet Explorer. They kept coming up with new features that were often incompatible with the other, already existing features or other browsers.

So the founder of the World Wide Web, Sir Tim Berners-Lee, founded the World Wide Web Consortium (W3C) to standardize the protocols and technologies used to build the web and to make life easier for developers and users alike.

The new protocols were great for the new browsers and implementations, but they would totally break the existing sites.

Enter Document Type Definitions (DTDs).

DTDs tell the parser how to translate the code into what you see on the screen so that the look is uniform across different browsers.

To render a HTML4.01 document, use this code at the very top of your document:

```
<!DOCTYPE HTML PUBLIC “-//W3C//DTD HTML 4.01//EN” “http://www.w3.org/TR/html4/strict.dtd”>
```

To render a HTML5 document, include this code instead:

```
<!doctype html>
```

Using the doctype declaration is a requirement placed upon us by W3C; without it, the HTML validators won’t work (because they won’t know what standard to check your code against) and the browser might render the document in a quirks mode.

If you don’t declare the doctype, browsers can interpret the document as something else other than HTML and switch into quirks mode, which is, basically, a mode for documents with no doctype declaration.

There can be a lot of quirks in the quirks mode; it can pretty much mess up how your document appears on the screen.

Quirks mode, almost standard mode, and the full standard mode is something I am going to look into next time.

#What are data- attributes good for?

an attribute is anything in html that can modify, or provide more information for, an element. So, href, alt, class, id, etc are all attributes. data-* is also an attribute, but the cool thing is that you aren't boxed in by what is already available, and where the * is you can add (kindof) whatever you might want.

Before data-, people would just add their own attributes, which is not-so-standard. Data attributes provided a standardized way to extend the information that can be associated with a particular element.

They are written like:

```
<p data-category="fancy" data-is-cool="true">Fancy words</p>
```

# Describe the difference between a cookie, sessionStorage and localStorage

Cookies are small files which are stored on a user's computer. They are designed to hold a modest amount of data specific to a particular client and website, and can be accessed either by the web server or the client computer. This allows the server to deliver a page tailored to a particular user, or the page itself can contain some script which is aware of the data in the cookie and so is able to carry information from one visit to the website (or related site) to the next.

localStorage and sessionStorage are relatively new APIs (meaning, not all legacy browsers will support them) and are near identical (both in APIs and capabilities) with the sole exception of persistence. sessionStorage (as the name suggests) is only available for the duration of the browser session (and is deleted when the tab or window is closed) - it does, however, survive page reloads 
