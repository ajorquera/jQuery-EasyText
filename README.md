EasyText Plugin for the jQuery Library 
=======================================
  
<!---Image-->
![Image.png...](http://static.jortech.com.ve/jquery-easytext/image.png)
  
EasyText is a plugin built on top of jQuery. It enhances the behaviour 
of the HTML input element of type text. It's inspired by the input in Google 
Contacts. It is still in beta. 

This plugin was built using the jQuery UI Widget Factory. For more information
[click here](http://learn.jquery.com/jquery-ui/widget-factory/)

**Current Version:** 0.1

Features
------------------------------------------------------------------------------
- Auto-resize input.

- Overall look of the input for intuitive editing.

- Store all the values the user has typed in for the session or permanently.

- Ajax capabilities to send requests to a RESTful service, enabling the 
  possibility to store the value in a database as soon as the user has typed in 
  a value  

Requirements
--------------------------------------------------------------------------------
- [jQuery](http://jquery.com/) 
- [jQuery UI](http://jqueryui.com/) 

Browser Compatibility
--------------------------------------------------------------------------------
Chrome: **```34+```**

Firefox: **```28+```**

Internet Explorer &nbsp;&nbsp;&nbsp;&nbsp;**`Not yet tested`**

Safari &nbsp;&nbsp;&nbsp;&nbsp;**`Not yet tested`**

Opera &nbsp;&nbsp;&nbsp;&nbsp;**`Not yet tested`**

Usage 
--------------------------------------------------------------------------------

<!---Code-->
```javascript
$('input[type="text"]').EasyText(attributes);
```

```attributes``` is an optional javascript object with the parameters explained 
                 below:

Attributes
--------------------------------------------------------------------------------

- **maxWidth** ```number``` *(Default: 200)* 

    The maximum size in pixels for the input.

- **minWidth** ```number``` *(Default: 80)* 

    The minimum size for the input.

- **values** ```array```

    It is an array containing all the values of the input in the same order the 
    user has typed in. The plugin will store all the values, regardless the type 
    of storage used. To delete the values, use the public method 
    *deleteStorage()*

- **maxChars** ```number``` *(Default 200)*

    The maximum amount of characters that are allowed in the input. 


- **storage** ```string``` *(Default 'array')*

    It can have 3 different values: 

    1. **array**: it will store all values from the input in an array. 

    2. **localStorage**: it will store all the values in the browser local storage 
                       so it can be accessed later

    3. **ajax**: It uses ajax capabilities to send request to a RESTful service. 
               This way,the value can be store in a database behind the scenes.
               For more information about RESTful philosophy see the wiki page 
               -> [RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer)


- **ajaxConfig** 

    Single level object that contains:

    - **url**:`string` the url where to send the RESTful requests; 
             e.g., ```domain/API/```

    - **id**:`string` The identification string to form the uri; 
            e.g., ```domain/API/id```

    - **GETCallback**:`function` it process the GET request response. 
                     This function corresponds to the success parameter in the 
                     $.ajax() method described 
                     [here](https://api.jquery.com/jQuery.ajax/). If this 
                     parameter is not set, the plugin will not send a GET 
                     request when it is instantiated. The parameters are:
                     
        * **data:** ```PlainObject```javaScript object containing zero or more 
                    key-value pairs. 
                     
        * **status:** ```String``` a string describing the status of the 
                      request. More [Info](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
        * **jqXHR:** ```jqXHR```  a superset of the browser's native 
                     XMLHttpRequest object. More [info](http://api.jquery.com/jQuery.ajax/#jqXHR).

        e.g.
        ```javascript
        function callback(data,status,jqXHR) {
            //code...
        }
        ```


    - **UPDATETemplate**: `string` string using John's Resig javascript 
                    [Micro-Templating](http://ejohn.org/blog/javascript-micro-templating/) 
                    function. Using this templating system, allows to transfer 
                    any information using any type of format like for example 
                    JSON,XML,YAML,etc. For refering to the input's value, in the 
                    string should be a value key that will be replace with actual
                    value. e.g. "<%= value %>"

    - **UPDATEData**: ```PlainObject``` javaScript object containing zero or 
                      more key-value pairs. 
                      It will contain all the parameters for the UPDATETemplate. 
                      For each request, the object will contain the actual value
                      of the input in the form " value: 'string' "
                    
Methods
--------------------------------------------------------------------------------
- **getNextBackValue:**
gets the previous or the next value of all the values that have been store in 
the values attribute. Has a direction parameter that acts like a flag. If it is 
true it will get the next value otherwise the previous one. Return -1 if it gets
to the extreme of the array.

- **deleteStorage**
It will delete all the saved values. It will have different behaviours depending 
on the type of storage.
    - **array**: it will delete the values store in the values attribute.
    - **localStorage**: it will delete the information store in the browser's local storage
    - **ajax**: it will send a delete request to the RESTful service.

####Method Invocation
 
Because the plugin uses the jQuery UI Widget Factory, there are two especific 
ways of calling the public methods. More
[information](http://learn.jquery.com/jquery-ui/widget-factory/widget-method-invocation/). 

#####Plugin Invocation
To invoke a method using the widget's plugin, pass the name of the method as a 
string. If the method requires arguments, pass them as additional parameters 
to the plugin.

```javascript
$('input[type="text"]').easyText('getNextBackValue','true')
```

#####Instance Invocation
Under the hoods, every instance of every widget is stored on the element using 
[jQuery.data()](http://api.jquery.com/jQuery.data/). To retrieve the instance 
object, call jQuery.data() using the 
widget's full name "easyInputEasyText".

```javascript
var jQueryObject = $('input[type="text"]').easyText();

var easyText = jQueryObject.data('easyInputEasyText');

easyText.deleteStorage();

```

Demo
--------------------------------------------------------------------------------
You can see an example in the following 
[link](http://static.jortech.com.ve/jquery-easytext/).

