import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function PaymentModal({ isOpen, setIsOpen, price}) {

  function closeModal() {
    setIsOpen(false);
  }

  const launchRazorpay = () => {
    setIsOpen(false);
    let options = {
      key: process.env.REACT_APP_PAYMENTKEY,
      amount: price * 100,
      currency: "INR",
      name: "Book My Show Clone",
      description: "Payment testing",
      image:
        "https://s2.qwant.com/thumbr/0x380/7/2/ca65f8c28df2768fa5ffae272b42a00104ea7f06c6f49966d95da0421bc180/book-my-show-logo-png-9.png?u=https%3A%2F%2Fclipground.com%2Fimages%2Fbook-my-show-logo-png-9.png&q=0&b=1&p=0&a=0",
      handler: ()=>{
        alert("Payment successfull");
      },
      theme: {color: "#c4242d"},
    };

    const RazorPay = new window.Razorpay(options);

    RazorPay.open();
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Please make a payment
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Click Pay to make the payment or Cancel to cancel the
                    payment
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="mr-5 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-red-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={launchRazorpay}
                  >
                    Pay Rs {price}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-red-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
