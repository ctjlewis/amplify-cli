exports.handler = async (event, context) => {
  // disallowed domains
  const dld = process.env.DOMAINBLACKLIST.split(',').map(d => d.trim());

  const { email } = event.request.userAttributes;
  const domain = email.substring(email.indexOf('@') + 1);

  if (dld.includes(domain)) {
    throw new Error(`Invalid email domain: ${domain}`);
  }

  return event;
};
