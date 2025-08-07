# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{name}}` - Customer's name
   - `{{email}}` - Customer's email
   - `{{phone}}` - Customer's phone
   - `{{service}}` - Selected service
   - `{{message}}` - Customer's message
4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Contact.tsx
Replace the placeholder values in your `Contact.tsx` file:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual public key
```

## Example Email Template
```
Subject: New Contact Form Submission - {{name}}

Hello,

You have received a new contact form submission:

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Service Interest: {{service}}
Message: {{message}}

Best regards,
Your Website
```

## Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the received message
4. Check the browser console for any error messages

## Troubleshooting
- Make sure all IDs are correct and without quotes
- Ensure your email service is properly connected
- Check that your template variables match the form field names
- Verify your public key is correct 