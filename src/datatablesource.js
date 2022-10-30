//user
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "fullname",
    headerName: "Full Name",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.fullname}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    fullname: "Ha",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    phone: "0909888123",
    address: "Ho Chi Minh",
    status: "active",
  },
  {
    id: 2,
    fullname: "Vuong",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    phone: "0909888123",
    address: "Ho Chi Minh",
    status: "pending",
  },
  {
    id: 3,
    fullname: "Luat",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    phone: "0909888123",
    address: "Ho Chi Minh",
    status: "passive",
  },
  {
    id: 4,
    fullname: "Hung",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    phone: "0909888123",
    address: "Ho Chi Minh",
    status: "active",
  },
  {
    id: 5,
    fullname: "Long",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    phone: "0909888123",
    address: "Ho Chi Minh",
    status: "active",
  },
];

//service
export const serviceColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "service",
    headerName: "Service",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 230,
  },
  {
    field: "price",
    headerName: "Price",
    width: 230,
  },
];

export const serviceRows = [
  {
    id: 1,
    service: "Combo 1",
    desc: "giat, ui (10k/1kg)",
    price: "10.000"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    service: "Combo 2",
    desc: "giat, ui, hap (20k/1kg)",
    price: "20.000"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    service: "Combo 3",
    desc: "full service (40k/1kg)",
    price: "40.000"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

//voucher
export const voucherColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "voucher",
    headerName: "Voucher",
    width: 100,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "startdate",
    headerName: "Start Date",
    width: 120,
  },
  {
    field: "enddate",
    headerName: "End Date",
    width: 120,
  },
  {
    field: "serv",
    headerName: "Service support",
    width: 160,
  },
  {
    field: "cond",
    headerName: "Condition",
    width: 150,
  },
  {
    field: "quant",
    headerName: "Quantity",
    width: 100,
  },
];

export const voucherRows = [
  {
    id: 1,
    voucher: "voucher1",
    desc: "voucher giam 50k",
    startdate: "10/10/2022",
    enddate: "12/10/2022",
    serv: "Combo1",
    cond: "tren 2kg",
    quant: "10"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    voucher: "voucher2",
    desc: "voucher giam 100k",
    startdate: "10/10/2022",
    enddate: "12/10/2022",
    serv: "Combo2",
    cond: "tren 5kg",
    quant: "10"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    voucher: "voucher3",
    desc: "voucher giam 150k",
    startdate: "10/10/2022",
    enddate: "12/10/2022",
    serv: "Combo3",
    cond: "tren 10kg",
    quant: "10"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

//vendor
export const vendorColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "vendor",
    headerName: "Vendor",
    width: 160,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "email",
    headerName: "Email",
    width: 170,
  },
  {
    field: "street",
    headerName: "Street",
    width: 180,
  },
  {
    field: "district",
    headerName: "District",
    width: 140,
  },
  {
    field: "city",
    headerName: "City",
    width: 140,
  },
  {
    field: "z_code",
    headerName: "Zip Code",
    width: 120,
  },
];

export const vendorRows = [
  {
    id: 1,
    vendor: "Ha Laundry",
    phone: "0909888123",
    email: "HLDS@gmail.com",
    street: "Pham Van Hai",
    district: "10",
    city: "Ho Chi Minh",
    z_code: "123456"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    vendor: "Luat Laundry",
    phone: "0909888123",
    email: "LLDS@gmail.com",
    street: "Nguyen Van Dau",
    district: "Binh Thanh",
    city: "Ho Chi Minh",
    z_code: "123006"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    vendor: "Vuong Laundry",
    phone: "0909888123",
    email: "VLDS@gmail.com",
    street: "No Trang Long",
    district: "Binh Thanh",
    city: "Ho Chi Minh",
    z_code: "123226"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
    {
    id: 4,
    vendor: "Hung Laundry",
    phone: "0909888123",
    email: "HLDS@gmail.com",
    street: "Pham Van Hai",
    district: "10",
    city: "Ho Chi Minh",
    z_code: "123456"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 5,
    vendor: "Long Laundry",
    phone: "0909888123",
    email: "HLDS@gmail.com",
    street: "Pham Van Hai",
    district: "10",
    city: "Ho Chi Minh",
    z_code: "123456"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

//product
export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
];

export const productRows = [
  {
    id: 1,
    product: "Ao thun",
    price: "20.000"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    product: "Quan Jean",
    price: "100.000"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    product: "Vest",
    price: "1000.000"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

//transaction
export const transactionColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "order",
    headerName: "Order",
    width: 230,
  },
  {
    field: "pmethod",
    headerName: "Payment Method",
    width: 230,
  },
  {
    field: "date",
    headerName: "Day",
    width: 230,
  },
];

export const transactionRows = [
  {
    id: 1,
    order: "1011",
    pmethod: "momo",
    date: "10/10/2022"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    order: "1021",
    pmethod: "cash",
    date: "10/10/2022"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    order: "2000",
    pmethod: "Zalo pay",
    date: "10/10/2022"
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

//payment method
export const methodColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "method",
    headerName: "Method",
    width: 230,
  },
];

export const methodRows = [
  {
    id: 1,
    method: "Momo",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    method: "Zalo Pay",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    method: "Cash",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];