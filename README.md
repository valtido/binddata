binddata
========

A small script to allow an "binddata" html tag/element to another.

# Install

Add the following line anywhere on your HTML page (head,body/{bottom of body})
the script will fire as soon as possible, and on page load (once all elements have been downloaded).

    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="binddata.js"></script>
# Requirements

Just the usual jquery core file that's all.

# Useage

## External file: 

    <binddata type="text/binddata" src="data.json"></binddata>
  
## Inline data 

    <binddata type="text/binddata">{"I am":"inline baby"}</binddata>

## Attributes

`<databind selector=".classname">` Any jQuery selectors would do if selector not found then next sibling is used instead.

