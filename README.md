### Reflection

1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?

- for security and simplfication of data hanlding purposes

2. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?

- for security and better user experience purposes

3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?

- i would make a get request to the url="https://uselessfacts.jsph.pl/api/v2/facts/random?language=de"
