# num-trans

## A JavaScript Plugin for Number Transitions

If you want to show the transitions in a number, then this is the 
solution! Just give the DOM element, from-to values and consider the
work done!

####
### Installation


**Using script tag**

Include a script tag after jQuery library as below:
```
<script src="/{path}/numTrans.min.js"></script>
```

For default css, include the css file as below:
```
<link rel='stylesheet' href='/{path}/numTrans.min.css' />
```


---
####
### Usage

Know how to use the Num-Trans plugin!

### `Syntax`

```
numberTransition(element, final, initial);
```

---


### Parameters

**`element`**

The DOM element which contains the number and has to be transitioned

**`final`**

Integer. The final number to be shown at which the transition will stop.

**`initial`**

Optional. Integer. The initial number from which the transition will begin.
If not provided, then the plugin assumes the innerHTML of the element
as the initial value. 


