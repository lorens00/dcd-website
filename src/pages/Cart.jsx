import React from 'react';

const Cart = ({ cartItems = [] }) => { // Default cartItems to an empty array if it's undefined
  // Initialize subtotal variable
  let subtotal = 0.00;

  // Calculate subtotal manually by iterating over cartItems
  cartItems.forEach(item => {
    subtotal += item.price;
  });

  // Define a fixed delivery fee
  const deliveryFee = 0.00;

  // Calculate the total (subtotal + delivery fee)
  const total = subtotal + deliveryFee;

  return (
    <div className="border p-6 rounded-lg shadow-lg bg-white max-w-lg mx-auto">
      {/* Cart Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h4 className="font-bold text-xl text-red-700">My Cart</h4>
        <span className="text-sm text-gray-500">{cartItems.length} items</span>
      </div>

      {/* Empty Cart View */}
      {cartItems.length === 0 ? (
        <div className="text-center pt-10">
          <p className="font-bold text-lg">Your cart is empty!</p>
          <p className="text-sm text-gray-600">
            What are you waiting for? Check out our menu now!
          </p>
          <img src="/assets/delivery.svg" alt="" className='py-5 w-2/3 h-1/3 mx-auto'/>
        </div>
      ) : (
        // Cart Items List
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="w-12 h-12 object-cover rounded mr-4"
                />
                <p className="text-sm font-medium">{item.heading}</p>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                ₱{item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Price Details */}
      <div className="mt-6 border-t pt-4 space-y-2">
        <div className="flex justify-between">
          <p className="font-semibold">Subtotal:</p>
          <p className="text-gray-600">₱{subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Delivery Fee:</p>
          <p className="text-gray-600">₱{deliveryFee.toFixed(2)}</p>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <p>Total:</p>
          <p>₱{total.toFixed(2)}</p>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-6">
        <button className="w-full py-3 rounded text-white bg-red-700 hover:bg-red-800">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
