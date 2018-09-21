#Answers

for Slicing Test (html, css, js) and Javascript Coding Test
go to https://syahrulrmdhon.github.io/dreamcubes

#What does a Doctype do?

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
