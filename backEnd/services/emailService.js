// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail', // You can use other services
//   auth: {
//     user: 'companydev23@gmail.com',
//     pass: '1234568Oo',
//   },
// });

// const sendOrderEmail = async (orderDetails) => {
//   const mailOptions = {
//     from: 'companydev23@gmail.com',
//     to: 'ohadazure@gmail.com',
//     subject: 'New Order Created',
//     text: `Order Details: ${JSON.stringify(orderDetails, null, 2)}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Order email sent successfully');
//   } catch (error) {
//     console.error('Error sending order email:', error);
//   }
// };

// module.exports = { sendOrderEmail };
