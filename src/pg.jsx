import { load } from "@cashfreepayments/cashfree-js";

function Checkout() {
    let cashfree;
    var initializeSDK = async function () {          
        cashfree = await load({
            mode: "sandbox"
        });
    }
    initializeSDK();

    const doPayment = async () => {
        let checkoutOptions = {
            paymentSessionId: "session_pWTFgqA1od0tWEMtNRN2OZBIH6x0rAnIxlEcfz9DVgtgfJiQbxNOhs2jq5HTZDSbY3Qlmev0yX6mo9edozg5xvnF4l-fuuECDPFzaL0hSbu6",
            redirectTarget: "_self",
        };
        cashfree.checkout(checkoutOptions);
    };

    return (
        <div class="row">
            <p>Click below to open the checkout page in current tab</p>
            <button type="submit" class="btn btn-primary" id="renderBtn" onClick={doPayment}>
                Pay Now
            </button>
        </div>
    );
}
export default Checkout;