https://digitalstore-1.onrender.com/


template for email:
Order Details
From: Ohad raz

To: Company

Subject: New Order Created

Message:

Order Details:

{
  "products": [
    {
      "item": "65db35c8cdf4ebba0880c760",
      "quantity": 5
    },
    {
      "item": "65d728b41b3b969fcc1348e6",
      "quantity": 1
    },
    {
      "item": "65dc6cd3605f40031d2e6602",
      "quantity": 3
    },
    {
      "item": "664dbf0669b75738d2a06f83",
      "quantity": 2
    },
    {
      "item": "661d45b5b9288d5d314ac82f",
      "quantity": 1
    }
  ],
  "totalPrice": 18449.879999999997,
  "shippingAddress": {
    "shippingName": "Ohad raz",
    "companyName": "Ohad Raz",
    "shippingCountry": "IL",
    "shippingStreet": "hanotea",
    "houseNumber": "23",
    "shippingPostalCode": "4053223",
    "shippingCity": "ev"
  },
  "contactInfo": {
    "email": "ohadraz12@gmail.com",
    "phone": "+972543918238"
  },
  "shippingMethod": "standard",
  "senderEmail": "ohadraz12@gmail.com"
}
Shipping Address:

hanotea, ev, IL, 4053223

Contact Information:

Name: Ohad raz

Email: ohadraz12@gmail.com

Phone: +972543918238

Shipping Method: standard

Best wishes,
Your Store

<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    h1 { color: #333; }
    .container { max-width: 600px; margin: auto; }
    .section { margin-bottom: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Order Details</h1>
    
    <div class="section">
      <p><strong>From:</strong> {{from_name}}</p>
    </div>
    
    <div class="section">
      <p><strong>To:</strong> {{to_name}}</p>
    </div>
    
    <div class="section">
      <p><strong>Subject:</strong> {{subject}}</p>
    </div>
    
    <div class="section">
      <p><strong>Message:</strong></p>
      <pre>{{message}}</pre>
    </div>

    <div class="section">
      <p><strong>Shipping Address:</strong></p>
      <p>{{shipping_address}}</p>
    </div>

    <div class="section">
      <p><strong>Contact Information:</strong></p>
      <p>Name: {{contact_info.name}}</p>
      <p>Email: {{contact_info.email}}</p>
      <p>Phone: {{contact_info.phone}}</p>
    </div>

    <div class="section">
      <p><strong>Shipping Method:</strong> {{shipping_method}}</p>
    </div>

    <p>Best wishes,<br>Your Store</p>
  </div>
</body>
</html>
