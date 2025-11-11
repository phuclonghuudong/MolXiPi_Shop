import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/id/237/200/300",
    },
    {
      productId: 2,
      name: "T-Shirt",
      size: "L",
      color: "Blue",
      quantity: 12,
      price: 135,
      image: "https://picsum.photos/200/300?grayscale",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b border-gray-300"
        >
          <div className="flex justify-start">
            <img
              src={product?.image}
              alt={product?.name}
              className="h-16 w-20 sm:w-20 sm:h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product?.name}</h3>
              <p className="text-sm text-gray-600">
                size: {product?.size}| color: {product?.color}
              </p>

              <div className="flex items-center mt-2">
                <button className="border border-gray-300 rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4 text-sm">{product?.quantity}</span>
                <button className="border border-gray-300 rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>

          <div>
            <p>{product?.price.toLocaleString()} VND</p>
            <button>
              <RiDeleteBin3Line className="w-6 h-6 mt-2 text-red-800" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
