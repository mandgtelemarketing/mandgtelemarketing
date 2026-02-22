'use server'

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const agency = formData.get('agency') as string
  const state = formData.get('state') as string
  const budget = formData.get('budget') as string
  const message = formData.get('message') as string

  try {
    const budgetLabels: Record<string, string> = {
      'under3k': 'Under $3,000',
      '3to6k': '$3,000 – $6,000',
      '6to10k': '$6,000 – $10,000',
      '10kplus': '$10,000+'
    };

    const budgetLabel = budget ? budgetLabels[budget] || budget : 'Not selected';

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          from_name: name,
          reply_to: email,
          agency_name: agency || 'Not provided',
          primary_state: state || 'Not provided',
          budget: budgetLabel,
          message: message || 'Not provided'
        }
      })
    })

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`EmailJS error: ${errorText || 'Failed to submit form'}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Form submission error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to submit form'
    return { success: false, error: errorMessage }
  }
}
