import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

// 1. Move and declare orderItems before demoOrders
const orderItems = [
  "Coffee", "Bagel", "Latte", "Sandwich", "Espresso", "Croissant",
  "Cappuccino", "Muffin", "Mocha", "Brownie", "Tea", "Scone",
  "Macchiato", "Danish", "Flat White", "Toast", "Hot Chocolate",
  "Green Tea", "Cookies", "Iced Coffee",
];

const demoOrders = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  customerName: `Customer ${index + 1}`,
  date: new Date(
    2025,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1
  )
    .toISOString()
    .split("T")[0],
  paymentMessage: ["Success", "Pending"][Math.floor(Math.random() * 2)],
  total: (Math.random() * 150).toFixed(2),
  items: orderItems[Math.floor(Math.random() * orderItems.length)],
  delivery: [
    "Delivered", "In Transit", "Pending", "Out for Delivery", "Shipped",
  ][Math.floor(Math.random() * 5)],
}));

const OrderList = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === demoOrders.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(demoOrders.map((o) => o.id));
    }
  };

  const handleEdit = (order) => {
    // TODO: open modal or navigate
    console.log("Edit", order);
  };

  const handleDelete = (order) => {
    // TODO: show delete confirmation
    console.log("Delete", order);
  };

  return (
    <section className="text-white bg-primary2/10 overflow-x-auto cursor-pointer hide-scrollbar min-w-[890px]">
      <div className="min-w-[700px]">
        <OrderListHeader
          allSelected={selectedIds.length === demoOrders.length}
          toggleSelectAll={toggleSelectAll}
        />
      </div>
      <div className="mt-5  space-y-2 text-white/70 min-w-[700px] font-medium text-[12px]">
        {demoOrders.map((od, idx) => (
          <div
            key={od.id}
            className="bg-primary1 flex items-center flex-nowrap gap-5 border-t border-b border-grayText/10 py-2 justify-between px-2 text-center"
          >
            <div className="flex-1 flex items-center gap-2 justify-center">
              <input
                type="checkbox"
                checked={selectedIds.includes(od.id)}
                onChange={() => toggleSelect(od.id)}
                className="w-4 h-4"
              />
              <h2>#{idx + 1}</h2>
            </div>
            <div className="flex-1 text-nowrap">{od.date}</div>
            <div className="flex-1 text-nowrap">{od.customerName}</div>
            {/* Show items */}
            <div className="flex-1 text-nowrap">{od.items}</div>
            <div className="flex-1">
              <button
                className={`px-2 py-1 rounded-sm ${
                  od.paymentMessage === "Success"
                    ? "bg-green-600/5 border text-green-600/70 border-green-400/30"
                    : "bg-amber-500/5 border text-amber-500/50 border-amber-400/30"
                }`}
              >
                {od.paymentMessage}
              </button>
            </div>
            <div className="flex-1">${od.total}</div>
            <div className="flex-1">{od.delivery}</div>
            <div className="flex-1 text-xl flex justify-center gap-5">
              <button onClick={() => handleDelete(od)}>
                <MdDeleteOutline className="text-red-500/70" />
              </button>
              <button onClick={() => handleEdit(od)}>
                <CiEdit className="text-green-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderList;

const OrderListHeader = ({ allSelected, toggleSelectAll }) => (
  <div className="bg-primary2/30 shadow-md shadow-white/5 flex flex-nowrap justify-between px-2 py-2 font-semibold text-center text-grayText">
    <div className="flex flex-1 gap-2 items-center justify-center">
      <input
        type="checkbox"
        checked={allSelected}
        onChange={toggleSelectAll}
        className="w-4 h-4"
      />
      <p>Order</p>
    </div>
    <div className="flex-1">Date</div>
    <div className="flex-1">Customer</div>
    <div className="flex-1">Items</div>
    <div className="flex-1">Payment</div>
    <div className="flex-1">Total</div>
    <div className="flex-1">Delivery</div>
    <div className="flex-1">Action</div>
  </div>
);
