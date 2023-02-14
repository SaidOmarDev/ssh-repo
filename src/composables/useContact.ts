export function useContact() {
  const number = "920003694";
  const mobile = "0570003694";
  const email = "Info@wareedlab.com";

  function callus() {
    const call = new CustomEvent("event:call");
    document.dispatchEvent(call);

    window.open(`tel:${number}`);
  }

  function whatsapp() {
    const whatsapp = new CustomEvent("event:whatsapp");
    document.dispatchEvent(whatsapp);

    window.open(`https://wa.me/966${mobile}`);
  }

  function mailto() {
    const mailto = new CustomEvent("event:mailto");
    document.dispatchEvent(mailto);

    window.open(`mailto:${email}`);
  }

  return { callus, whatsapp, mailto, number, mobile, email };
}
