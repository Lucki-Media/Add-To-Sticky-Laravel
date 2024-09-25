const recommendedProducts = [
    {
        id: 1,
        image: "../../assets/product_image_1.jpg",
        title: "Orange juice bottle mockup",
        actual_price: "$39.99",
        compare_price: "$45.99",
        options: [
            {
                name: "Color",
                values: ["Red", "Green", "Yellow"],
            },
            {
                name: "Size",
                values: ["SM", "MD", "LG", "XL"],
            },
        ],
    },
    {
        id: 2,
        image: "../../assets/product_image_2.jpg",
        title: "Fruit juice combo",
        actual_price: "$129.99",
        compare_price: "",
        options: [],
    },
    {
        id: 3,
        image: "../../assets/product_image_3.jpg",
        title: "Orange bottle mockup",
        actual_price: "$24.99",
        compare_price: "$25.99",
        options: [
            {
                name: "Size",
                values: ["SM", "MD", "LG", "XL"],
            },
        ],
    },
];

export default recommendedProducts;
