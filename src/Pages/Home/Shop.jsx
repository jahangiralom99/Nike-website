const Shop = () => {
  const shoes = [
    {
      name: "Nike Air Max Infinity",
      model: "AM-INF24",
      price: 180,
      colorways: [
        {
          name: "Black",
          image:
            "https://i.ibb.co/Bg30jVJ/air-zoom-infinity-tour-next-golf-shoes-Gqt3-ZQ-3.webp",
        },
        {
          name: "White",
          image:
            "https://i.ibb.co/QmpBSyB/air-zoom-infinity-tour-next-golf-shoes-Gqt3-ZQ-2.webp",
        },
        {
          name: "Volt",
          image:
            "https://i.ibb.co/thZPndL/air-zoom-infinity-tour-next-golf-shoes-Gqt3-ZQ-1.webp",
        },
      ],
      description:
        "The Nike Air Max Infinity redefines comfort and performance with its innovative design. Featuring a full-length Air Max unit for ultimate cushioning, targeted support for a secure fit, and a breathable mesh upper for optimal airflow, this shoe is perfect for runners and athletes seeking the perfect balance of comfort and performance.",
      features: [
        {
          name: "Responsive Cushioning",
          description:
            "The Air Max unit provides exceptional shock absorption and responsiveness for a smooth and comfortable ride.",
        },
        {
          name: "Targeted Support",
          description:
            "Strategic reinforcements in the upper offer a secure and supportive fit for confident strides.",
        },
        {
          name: "Breathable Upper",
          description:
            "Lightweight and breathable materials help keep your feet cool and dry during your runs.",
        },
      ],
      technology: [
        {
          name: "Air Max Unit",
          description:
            "Full-length Air Max unit for maximum cushioning and impact protection.",
        },
        {
          name: "Flyknit Upper",
          description:
            "Engineered knit upper provides lightweight support and breathability.",
        },
      ],
    },
    {
      name: "Nike Zoom Pegasus 39",
      model: "ZP39-2024",
      price: 120,
      colorways: [
        {
          name: "Blue",
          image:
            "https://i.ibb.co/s9QQMQS/pegasus-41-blueprint-older-road-running-shoes-Dgghd5-1.webp",
        },
        {
          name: "Pink",
          image:
            "https://i.ibb.co/5RFfdjq/pegasus-41-blueprint-older-road-running-shoes-Dgghd5.webp",
        },
      ],
      description:
        "The Nike Zoom Pegasus 39 is a versatile running shoe that delivers a smooth and responsive ride. Its React foam midsole and Zoom Air unit provide cushioned comfort, while the breathable upper keeps your feet cool and comfortable. Whether you're training for a marathon or just going for a casual jog, the Pegasus 39 is a reliable choice.",
      features: [
        {
          name: "React Foam Midsole",
          description:
            "Offers a soft and springy feel for comfortable and responsive cushioning.",
        },
        {
          name: "Zoom Air Unit",
          description:
            "Provides additional responsiveness and energy return in the forefoot.",
        },
        {
          name: "Breathable Mesh Upper",
          description: "Lightweight and breathable for all-day comfort.",
        },
      ],
      technology: [
        {
          name: "React Foam",
          description:
            "A lightweight and durable foam that delivers a smooth and responsive ride.",
        },
        {
          name: "Zoom Air",
          description:
            "A responsive cushioning technology that provides a snappy and energetic feel.",
        },
      ],
    },
    {
      name: "Nike React Infinity Run Flyknit 3",
      model: "RIRFK3-2024",
      price: 160,
      colorways: [
        {
          name: "Black/White",
          image:
            "https://i.ibb.co/BKYbzZG/react-infinity-3-road-running-shoes-3-Vn30-D-1.webp",
        },
        {
          name: "Platinum/Pink",
          image:
            "https://i.ibb.co/7tHpB21/react-infinity-3-road-running-shoes-3-Vn30-D.webp",
        },
      ],
      description:
        "The Nike React Infinity Run Flyknit 3 is designed to help reduce injury and keep you running. Its high foam stack and rocker geometry provide a smooth and stable ride, while the Flyknit upper offers a comfortable and supportive fit. If you're looking for a shoe that can help you run longer and stronger, the React Infinity Run Flyknit 3 is a great option.",
      features: [
        {
          name: "High Foam Stack",
          description: "Offers plush cushioning and a soft feel underfoot.",
        },
        {
          name: "Rocker Geometry",
          description: "Promotes a smooth transition from heel to toe.",
        },
        {
          name: "Flyknit Upper",
          description: "Lightweight and breathable for a comfortable fit.",
        },
      ],
      technology: [
        {
          name: "React Foam",
          description:
            "A lightweight and durable foam that delivers a smooth and responsive ride.",
        },
        {
          name: "Flyknit",
          description:
            "An engineered knit upper that provides a comfortable and supportive fit.",
        },
      ],
    },
    {
      name: "Nike Air Zoom Alphafly NEXT% 2",
      model: "AZAN2-2024",
      price: 275,
      colorways: [
        {
          name: "Limelight/Volt",
          image:
            "https://i.ibb.co/7tHpB21/react-infinity-3-road-running-shoes-3-Vn30-D.webp",
        },
      ],
      description:
        "The Nike Air Zoom Alphafly NEXT% 2 is a high-performance racing shoe designed for speed and efficiency. It features a ZoomX foam midsole with two Zoom Air pods in the forefoot for maximum responsiveness and energy return. The lightweight and breathable Atomknit upper provides a secure and comfortable fit, while the carbon fiber plate in the midsole helps to propel you forward with every stride.",
      features: [
        {
          name: "ZoomX Foam Midsole",
          description:
            "Nike's lightest and most responsive foam for exceptional cushioning and energy return.",
        },
        {
          name: "Zoom Air Pods",
          description:
            "Two Zoom Air pods in the forefoot provide additional responsiveness and cushioning.",
        },
        {
          name: "Atomknit Upper",
          description:
            "A lightweight and breathable knit upper that conforms to your foot for a secure and comfortable fit.",
        },
        {
          name: "Carbon Fiber Plate",
          description:
            "A stiff plate in the midsole that helps to propel you forward with every stride.",
        },
      ],
      technology: [
        {
          name: "ZoomX Foam",
          description:
            "Nike's lightest and most responsive foam for exceptional cushioning and energy return.",
        },
        {
          name: "Zoom Air",
          description:
            "A responsive cushioning technology that provides a snappy and energetic feel.",
        },
        {
          name: "Atomknit",
          description:
            "A lightweight and breathable knit upper that conforms to your foot for a secure and comfortable fit.",
        },
      ],
    },
    {
      name: "Nike Air Vapormax 2023 Flyknit",
      model: "AV23FK-2024",
      price: 210,
      colorways: [
        {
          name: "Triple Black",
          image:
            "https://i.ibb.co/QmpBSyB/air-zoom-infinity-tour-next-golf-shoes-Gqt3-ZQ-2.webp",
        },
      ],
      description:
        "The Nike Air Vapormax 2023 Flyknit combines innovative Air cushioning with a lightweight and breathable Flyknit upper. The full-length Vapormax Air unit provides a plush and responsive feel, while the Flyknit upper hugs your foot for a comfortable and secure fit. With its futuristic design and cutting-edge technology, the Vapormax 2023 Flyknit is the perfect shoe for those who want to make a statement and experience the future of footwear.",
      features: [
        {
          name: "Vapormax Air Unit",
          description:
            "Full-length Vapormax Air unit for lightweight cushioning and a bouncy feel.",
        },
        {
          name: "Flyknit Upper",
          description:
            "Engineered knit upper provides lightweight support, breathability, and a sock-like fit.",
        },
        {
          name: "Sustainable Materials",
          description: "Made with at least 20% recycled content by weight.",
        },
      ],
      technology: [
        {
          name: "Vapormax Air",
          description:
            "Nike's most innovative cushioning technology, providing a lightweight and responsive feel.",
        },
        {
          name: "Flyknit",
          description:
            "An engineered knit upper that provides a comfortable and supportive fit.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid lg:grid-cols-4 gap-6 grid-cols-1 md:grid-cols-2 mt-8">
        {shoes.map((item, idx) => (
          <div key={idx}>
            <img className="w-96" src={item.colorways[0].image} alt="" />
                <p className="text-white mt-2">{item.name}</p>
                <p className="text-white mt-2">MRP : { item.price} $</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
