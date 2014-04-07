binddata
========

A small script to allow an "`<binddata>`" html tag/element to bind data to another element (UI).

This process allows the seperation of data and UI component.

It works just like the script tag, to import data instead of scripts.

Databind utilises jQuery `$.getJson` to pull the file if external is used, and `JSON.parse` for inline usage.

For those who are worried the file is downloaded twice, I would not worry so much, as most browsers use the cache system and don't really download it twice.

*REASON*

I wanted a way to seperate my data from UI, I wanted a source code like import (once) and manipulate later with script.

I am hoping advanced users would give way to utilise this method, to use with unit testing, and validations, etc...

# Install

Add the following line anywhere on your HTML page (head,body/{bottom of body})
the script will fire as soon as possible, and on page load (once all elements have been downloaded).

    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="binddata.js"></script>
# Requirements

Just the usual jquery core file that's all.
also a one line of css (can go anywhere) `databind{display: none;}` this will hide any data from users.

# External file: 

Import data with an external file.

    <binddata type="text/binddata" src="data.json"></binddata>
    <input type="text" />
  
# Inline data: 

Import json data with an inline tag.

    <binddata type="text/binddata">{"I am":"inline baby"}</binddata>

# Attributes

## [selector="..."]

`<databind selector=".classname"></databind>` Any jQuery selectors would do if selector has not been defined then next sibling is used instead.

## [src="..."]

`<binddata src="data.json"></databind>` src wins over inline (inline is ignored when `src` is set).

## [type="text/binddata"] 

`<binddata type="text/binddata">` I would encourage to add this file as required, incase one day this gets popular enough it becomes built-in-browser functionality.



# EXAMPLE 1

    <body>
        <script type="text/javascript" src="jquery.js"></script>
        <script type="text/javascript" src="binddata.js"></script>
        <style>databind{display: none;}</style>
        
        
        <binddata type="text/binddata">
            [
            "item":1
            ]
        </databind>
        <input type="text" />
        <script>
        var data = $('input').data('binddata')//retrieve/get data
        $('input').autocomplete({data: data })//hypothetical usage...
        
        // override data
        $('input').data('binddata',{item:123456});
        $('input').data('binddata')//returns {item:123456}
        </script>
    </body>
    
    
    
