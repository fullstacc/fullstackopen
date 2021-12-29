# Legacy Web Pages vs Single Page Applications

## Retrieving Pages: Legacy Web Pages

This part is already covered in the [2021 Fullstack Open](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#forms-and-http-post) course, so I'll move on past this for now. The short and easy version here is that pre-single page applications (SPA's), what you would have is retrieving multiple documents from the server and also retrieving documents from the server for the sake of refreshing content in the DOM.

The diagram used by the Fullstack open curriculum looks like this:

![legacy-get-diagram](./legacy_diagram_get.png 'legacy get diagram')

## Retrieving Pages: Single Page Applications

The SPA version of the above diagram looks something like this:
![spa-get-diagram](./spa_get.png 'spa get diagram')

Note that this doesn't look very different from the legacy, non-SPA version. That's ok, the differences will become more apparent in the differences between using the forms on the HTML page to send information to the server.

---

## Submitting Forms: Legacy Web Pages

Submitting forms in the days before RESTful practices looked something like the diagram below.

![legacy-diagram](./legacy_diagram_form.png 'legacy diagram')

When the user is ready to submit form data, they click a "Submit" button. This triggers an HTTP POST request to an endpoint specified in the form.

The server responds with a redirect to a different endpoint (Code 302), and the browser sends a GET request the HTML document for that endpoint. In the example here, the "new" endpoint is just the same page that hosted the form. This has the effect of sending data to the server and refreshing the same page the user was on.

The HTML retrieved contains links to CSS and Javascript files. After the browser loads the HTML, it sends subsequent requests for those CSS/JS files and renders the document object (DOM).

The Javascript file references `data.json`, so this is also retrieved by the browser and rendered based on the instructions in the javascript.

# Submitting Forms: Single Page Applications

Based on the processes illustrated above, you can get the impression that interactive web pages with lots of dynamic interaction could very quickly result in a lot of conversations between a user's browser and a server. A really popular website might have had to support tens/hundreds/thousands of these conversations simultaneously, which can create burden for both sides and potentially a whole lot of network latency.

To solve this issue, Single Page Applications (SPA's) emerged. These web pages use practices that cut down on unnecessary communication between the browser and the server.

![spa-form-diagram](./spa_diagram_form.png 'spa form diagram')

What a difference! The `spa.js` file that was retrieved when the HTML document was loaded in the original GET request contained logic which allows the browser to rewrite the DOM after sending a POST request to the server.

Because there were no additional redirects required, there were no additional communications required between the browser and the server other than sending form data once.
