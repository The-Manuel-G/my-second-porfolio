// $lib/utils.js
export function onCopyToClipboard(text) {
    navigator.clipboard.writeText(text);

  }
  
  export function onSendEmail(email) {
    window.location.href = `mailto:${email}`;
  }
