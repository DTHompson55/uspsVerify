# uspsVerify
REST service to verify ZIP+4

https://app.swaggerhub.com/apis/dataday/uspsVerify/0.0.1


## Usage
docker run -p 3000:3000 dthompson55/uspsverify

For testing try this - http://localhost:3000/dataday/uspsVerify/1.0.0/verify?address={"Address1": "3614 Church","Address2": "","City": "Evanston", "State": "IL", "ZIP": ""}

{
    "Address2": "3614 CHURCH ST",
    "City": "EVANSTON",
    "State": "IL",
    "Zip5": "60203",
    "Zip4": "1633"
}

Or error path if it cannot resolve the state 

{
    "Error": {
        "Number": "-2147219402",
        "Source": "clsAMS",
        "Description": "Invalid State Code.  ",
        "HelpFile": "",
        "HelpContext": ""
    }
}
or address

{
    "Error": {
        "Number": "-2147219401",
        "Source": "clsAMS",
        "Description": "Address Not Found.  ",
        "HelpFile": "",
        "HelpContext": ""
    }
}


## Developing



### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
