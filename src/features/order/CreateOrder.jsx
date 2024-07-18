// import { useState } from "react";

import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
console.log(isValidPhone);

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submitting";
  const formError = useActionData();
  console.log(formError);
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  console.log(cart);

  return (
    <div className="px-4 py-6">
      <h2 className="font-semibold mb-8 text-xl">Ready to order? go!</h2>

      {/* <Form method="POST" action="/order/:orderId"> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-3 sm:flex sm:flex-row sm:items-center sm:justify-center transition-all duration-300">
          <label className="sm:basis-40">First Name</label>
          <div className="grow">
            <input
              type="text"
              name="customer"
              defaultValue={username}
              className="input w-full"
              required
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-3 sm:flex sm:flex-row sm:items-center sm:justify-center transition-all duration-300">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" className="input w-full" required />
            {formError?.phone && (
              <p className="text-xs mt-2 bg-red-200 text-red-600 px-3 rounded-md">
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-3 sm:flex sm:flex-row sm:items-center sm:justify-center transition-all duration-300">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              className="input w-full"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-5 mb-12">
          <input
            className="h-6 w-6 accent-yellow-400 focus: outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmiting} type="primary">
            {isSubmiting ? "Placing Order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number, we might need it to contact you";
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  //we can't use navigate bcoz it not a component
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
