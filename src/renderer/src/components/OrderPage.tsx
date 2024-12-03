import book from "../assets/image/open-book.png";
import CustomerModal from "./CustomerModal";
import { useEffect, useState } from "react";
import { AllCustomers, CreateSaleData, Customer, Product } from "@renderer/types/api.types";
import { apiService } from "@renderer/services/apiService";
import left from "../assets/icons/icon-left.png";
import right from "../assets/icons/icon-right.png";
import toast from "react-hot-toast";

const OrderPage = (): JSX.Element => {
  const [customers, setCustomers] = useState<AllCustomers>({ customers: [], total: 0 });
  const [products, setProducts] = useState<Product>({ product: [], total: 0 });
  const emptySale = { customer_id: 0, products: [], outstanding: 0, customer_name: '', total_paid: 0 };
  const [order, setOrder] = useState<CreateSaleData>(emptySale);
  const [selectedCustomer, setSelectedCustomer] = useState<Partial<Customer> | null>(null);
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    limit: 9,
    page: 1,
    sort: "",
    name: "",
  });

  useEffect(() => {
    fetchCustomers();
    fetchProducts();
  }, [filters.page, filters.limit]);

  const fetchCustomers = async () => {
    try {
      const response = await apiService.getCustomers({ limit: 2000 });
      if (response.data) setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await apiService.getProducts(filters);
      if (response.data) setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const id = value.split("[")[1].split("]")[0];
    const customer_name = value.split(" {")[0];
    console.log(id, customer_name);
    setSelectedCustomer({ id: Number(id), name: customer_name });
  };
  const handlePageChange = (direction: "next" | "prev") => {
    setFilters((prev) => ({
      ...prev,
      page: direction === "next" ? prev.page + 1 : Math.max(prev.page - 1, 1),
    }));
  };

  const handleAddProductToOrder = (productId: string, productName: string, price: number) => {
    setOrder((prev): any => {
      const existingProduct = prev.products.find((p) => p.product_id === productId);
      if (existingProduct) {
        return {
          ...prev,
          products: prev.products.map((p) =>
            p.product_id === productId ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }
      return {
        ...prev,
        products: [...prev.products, { product_id: productId, name: productName, price, quantity: 1 }],
      };
    });
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    console.log(productId, quantity)
    setOrder((prev) => ({
      ...prev,
      products: prev.products.map((p) =>
        p.product_id === productId ? { ...p, quantity: Math.max(quantity, 0) } : p
      ),
    }));
  };

  const completeOrder = async () => {
    if (!selectedCustomer) {
      toast.error("Please select a customer");
      return;
    }
    // if (order.products.length === 0) {
    //   toast.error("Please add at least one product to the order");
    //   return;
    // }
    // if (order.total_paid > order.products.reduce(
    //   (total, product) => total + product.price! * product.quantity,
    //   0
    // )) {
    //   toast.error("Total paid cannot be more than the total amount");
    //   return;
    // }
    try {
      for (const product of order.products) {
        delete product.price;
      }
      const response = await apiService.createSale({
        ...order,
        customer_id: selectedCustomer.id!,
        customer_name: selectedCustomer.name!,
      });
      toast.success("Order completed successfully!");
      clearOrder();
    } catch (error) {
      toast.error("Error completing order");
      console.error("Error submitting order:", error);
    }
  };

  const clearOrder = () => {
    setOrder(emptySale);
    setSelectedCustomer(null);
  };

  return (
    <div className="bg-slate-100 ml-16 pt-2 pl-4 pr-16 grid grid-cols-2 w-screen gap-x-1 h-screen">
      <div>
        <h1 className="font-bold">Select Books</h1>
        <div className="flex flex-wrap gap-2 max-w-md py-4 text-center">
          {products.product.map((product) => (
            <div
              className="card bg-base-100 w-28 h-50 shadow-md cursor-pointer"
              key={product.uuid}
              onClick={() => handleAddProductToOrder(product.uuid, product.name, product.price)}
            >
              <figure className="px-6 pt-0">
                <img src={book} alt="book" />
              </figure>
              <div className="card-body pt-0 items-center text-center">
                <h2>{product.name}</h2>
                <p>#{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row mt-2 ml-2 gap-x-2 align-center items-center">
          <button
            className="btn btn-xs btn-ghost btn-square"
            onClick={() => handlePageChange("prev")}
            disabled={filters.page === 1}
          >
            <img src={left} alt="Previous" />
          </button>
          <div className="flex flex-row gap-x-2 items-center ml-4">
            <label htmlFor="page" className="block text-sm font-medium">
              Page: {filters.page}
            </label>
          </div>
          <button
            className="btn btn-xs btn-ghost btn-square"
            onClick={() => handlePageChange("next")}
            disabled={products.product.length < filters.limit}
          >
            <img src={right} alt="Next" />
          </button>
        </div>
      </div>

      <div className="min-w-md">
        <h1 className="font-bold">Current Order</h1>
        <div className="py-4">
          <form>
            <div className="flex gap-x-2">
              <input
                placeholder="Search Customer"
                list="select"
                name="select"
                className="input input-bordered w-full max-w-xs"
                onChange={handleCustomerChange}
              />
              <datalist id="select">
                {customers.customers.map((customer) => (
                  <option
                    key={customer.id}
                    // value={JSON.stringify(customer)}
                    // onClick={() => {console.log(customer); setSelectedCustomer(customer)}}
                  >
                    {customer.name} {'{'}{customer.phone}{'}'} [{customer.id}]
                  </option>
                ))}
              </datalist>
              <button
                className="btn btn-accent btn-sm h-12 w-16 ml-2"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCustomer(null); // Reset selected customer when clicking on Add New
                  const modal = document.getElementById('add_customer') as HTMLDialogElement
                  modal.showModal()
                }}
              >
                +
              </button>
            </div>
            
            <div className="mt-6 max-h-80 overflow-x-auto">
              <table className="table table-sm table-pin-rows">
                <thead>
                  <tr>
                    <th>Books</th>
                    <th>Quantity</th>
                    <th>Sub-total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((product) => (
                    <tr key={product.product_id}>
                      <td>{product.name}</td>
                      <td>
                        <input
                          className="input input-bordered input-accent h-8 w-16"
                          type="number"
                          value={product.quantity}
                          onChange={(e) =>
                            handleQuantityChange(product.product_id, Number(e.target.value))
                          }
                        />
                      </td>
                      <td>#{(product.price! * product.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn text-red-600 btn-square btn-xs"
                          onClick={() =>
                            setOrder((prev) => ({
                              ...prev,
                              products: prev.products.filter((p) => p.product_id !== product.product_id),
                            }))
                          }
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* Total Price Row */}
                  <tr>
                    <td className="font-bold">Total</td>
                    <td></td>
                    <td className="font-bold">
                      #{
                        order.products.reduce(
                          (total, product) => total + product.price! * product.quantity,
                          0
                        ).toFixed(2)
                      }
                    </td>
                  </tr>
                  {/* Total Paid Row */}
                  <tr>
                    <td className="font-bold">Total Paid</td>
                    <td></td>
                    <td className="text-500">
                      <input name="total_paid" type="number" className="input input-bordered input-accent h-8 w-32" value={order.total_paid} onChange={(e) => setOrder((prev) => ({ ...prev, total_paid: Number(e.target.value), outstanding: order.products.reduce((total, product) => total + product.price! * product.quantity, 0) - Number(e.target.value) }))} />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>

                  {/* Outstanding Row */}
                  {/* <tr>
                    <td className="font-bold">Outstanding</td>
                    <td></td>
                    <td className="text-500">
                      {
                        order.products.reduce(
                          (total, product) => total + product.price! * product.quantity,
                          0
                        ) - order.total_paid
                      }
                      </td>
                    <td></td>
                    <td></td>
                  </tr> */}
                </tbody>

              </table>
            </div>

            <div className="flex flex-col pt-4 gap-y-2">
              <button className="btn btn-accent w-3/6" onClick={(e) => {e.preventDefault(); completeOrder()}}>
                Complete Order
              </button>
              <button className="btn btn-accent btn-outline w-3/6" onClick={clearOrder}>
                Clear Order
              </button>
            </div>
          </form>
          <CustomerModal />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
