# EmailJS Setup Instructions

To receive emails from your contact form, you need to set up EmailJS. Here's how:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact from {{name}}

From: {{name}}
Email: {{email}}
Message: {{message}}

Sent from your portfolio website.
```

4. Save and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**

## 5. Update Contact Component
Replace the placeholder values in `src/components/contact/Contact.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## 6. Update Your Contact Details
In the same file, update your actual contact information:
- Email address
- WhatsApp number
- Messenger username

## 7. Test the Form
1. Run your application
2. Fill out the contact form
3. Check your email inbox for the message

## Template Variables
Make sure your EmailJS template uses these variable names:
- `{{name}}` - for the sender's name
- `{{email}}` - for the sender's email
- `{{message}}` - for the message content

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Perfect for portfolio websites

Need help? Check the EmailJS documentation at https://www.emailjs.com/docs/