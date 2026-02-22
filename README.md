# M&G Telemarketing

A modern, responsive landing page for M&G Telemarketing built with Next.js, React, and Tailwind CSS. The site features a professional, high-conversion design with a fully functional contact form powered by EmailJS.

## Features

- **Next.js & React:** Fast, optimized, and SEO-friendly framework.
- **Tailwind CSS:** Fully responsive, utility-first styling with custom aesthetics.
- **EmailJS Integration:** Serverless email automation for contact form submissions. No backend database required.
- **Radix UI Components:** Accessible, unstyled UI components configured under the `components/ui` directory.
- **Form Handling:** Robust form validation and submission handling via React Hook Form and Next.js Server Actions.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Set up your environment variables.
   Extract your keys from [EmailJS](https://dashboard.emailjs.com/) and create a `.env` file in the root directory:

   ```env
   EMAILJS_SERVICE_ID=your_emailjs_service_id
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   EMAILJS_PRIVATE_KEY=your_emailjs_private_key
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

Then, you can start the production server with:

```bash
npm start
```

## EmailJS Configuration

The contact form is configured to send inquiries directly to `mg.telemarketing.llc@gmail.com`.

If you need to edit the email template or reconnect the sending account:
1. Log in to your [EmailJS Dashboard](https://dashboard.emailjs.com/).
2. Under **Email Services**, ensure your Gmail account is connected and has a valid grant.
3. Under **Email Templates**, ensure your template variables match the fields being passed in `app/actions/contact.ts` (`from_name`, `reply_to`, `agency_name`, `primary_state`, `budget`, `message`).
4. Ensure the **"To Email"** in the template settings is set to your destination address.

## Deployment

This project is configured to be easily deployed on Next.js hosting platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

If deploying to Netlify, ensure your Domain Settings have your custom domain set as the Primary Domain to prevent unexpected URL redirects to the `.netlify.app` subdomain. Ensure all environment variables from your `.env` file are added to the hosting platform's environment variables dashboard.
