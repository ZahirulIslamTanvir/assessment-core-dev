# Assessment By Core Dev Ltd

This is an assessment given by Core Dev Ltd which has a checkout page and the project is not complete along with some bugs in it.As a developer my task has to find the bugs and complete the project.

Bug 1:Front end is broken error in checkoutPage.js

solution: Added default before function checkout.
Explanation:When export a single value it we have to use default exports.

Bug 2:TbRow:`key` is not a prop.

solution:Removed key props from Handler components.
Explanation:We use key attributes when we want to render list of something in React.React keeps track of the item when rendered.

Bug 3: Stopped from sending automatic form data and price data to /api/bkash 

Changed code from handleSubmit(onSubmit()) to handleSubmit(onSubmit) in Checkout components.So the form submission will not run automatically.

Added button type submit in the Order component.So the checkout form will only submit its form data when an user clicks on continue to the payment button.

Task 1 : Integrate Bkash payment api.

Step 1:Choose bkash payment solution

The main difference between checkout and tokenized checkout is that the checkout user has to submit their bkash number along with their password. On the other hand for tokenized checkout users only have to give only their password.

As in this code base there are no sign in users so the checkout payment method will be best fit for this task.

Step 2 :Create Bkash router with the location baseurl/api/bkash

I have created a separate file called bkash router in the controller folder.So when a user submit their form data along with total cost of the products.The front end will send a post request to this end point.

Step 3:Grant token from bkash api
To get the payment page url we have send create payment request to the bkash api for that 
need a token provided by bkash api.
The codebase has already been provided with the Bkash class . I used this class and made a Bkash object from it.By using grantToken method I have successfully created a token.

Step 4 :Generate bkash payment url form bkash api(Not done)
After passing required information along with token id bkash api will send a response along with bkash payment url.
I have tried but got TVL data format error.But I can’t fixed it 🙁.

Ui and Ux improvement:
Added form validation along with error messages.

