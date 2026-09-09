/**
 * EmailJS configuration
 * ------------------------------------------------------------------
 * The contact form on this site sends messages straight to your Gmail
 * using EmailJS (https://www.emailjs.com) — no backend server needed.
 *
 * HOW TO GET THESE VALUES (one-time setup, ~5 minutes):
 *
 * 1. Create a free account at https://www.emailjs.com
 * 2. Dashboard -> + Add Service -> choose "Gmail" -> connect
 *    harinivadivel492@gmail.com and confirm via the link they email you.
 * 3. Dashboard -> + Create Template -> use the default "Contact" template.
 *    The default template uses these parameter names, which this code
 *    already maps from the form: from_name, reply_to, subject, message
 *    (rename them below in templateParams if you change your template).
 * 4. Copy the Service ID (shown next to your service) and Template ID
 *    (shown next to your template) into the placeholders below.
 * 5. Dashboard -> API Keys -> copy your Public Key into PUBLIC_KEY.
 *
 * NOTE: The public key is meant to be public and safe to keep in code —
 * EmailJS stores your real Gmail credentials on their servers.
 * ------------------------------------------------------------------
 */
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_2sft42b',
  TEMPLATE_ID: 'template_f9oyumm',
  PUBLIC_KEY: 'lNaP8P8VnuWeBCYlV'
};