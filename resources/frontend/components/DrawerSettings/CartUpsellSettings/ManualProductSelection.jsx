import {
    Autocomplete,
    Tag,
    Icon,
    BlockStack,
    Text,
    Thumbnail,
} from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import { SearchIcon } from "@shopify/polaris-icons";
import noImage from "../../../assets/no_image.jpg";

export default function ManualProductSelection(props) {
    const paginationInterval = 5;

    const [selectedProductIDs, setSelectedProductIDs] = useState(
        props.selectedProductIDs
    );
    const [defaultProducts, setDefaultProducts] = useState([]);
    const [productInput, setProductInput] = useState("");
    const [productOptions, setProductOptions] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [willLoadMoreResults, setWillLoadMoreResults] = useState(true);
    const [visibleOptionIndex, setVisibleOptionIndex] =
        useState(paginationInterval);

    const handleLoadMoreResults = useCallback(() => {
        if (willLoadMoreResults) {
            setIsLoading(true);

            setTimeout(() => {
                const remainingOptionCount =
                    productOptions.length - visibleOptionIndex;
                const nextVisibleOptionIndex =
                    remainingOptionCount >= paginationInterval
                        ? visibleOptionIndex + paginationInterval
                        : visibleOptionIndex + remainingOptionCount;

                setIsLoading(false);
                setVisibleOptionIndex(nextVisibleOptionIndex);

                if (remainingOptionCount <= paginationInterval) {
                    setWillLoadMoreResults(false);
                }
            }, 1000);
        }
    }, [willLoadMoreResults, visibleOptionIndex, productOptions.length]);

    const removeTag = useCallback(
        (tag) => () => {
            const productOptions = [...selectedProductIDs];
            productOptions.splice(productOptions.indexOf(tag), 1);
            setSelectedProductIDs(productOptions);
        },
        [selectedProductIDs]
    );

    const updateProductSelection = useCallback(
        (selectedProducts) => {
            setSelectedProductIDs(selectedProducts);
            const updatedSelectedProducts = selectedProducts
                .map((selected) => {
                    // Find the object with the matching id
                    const product = props.productResponse.find(
                        (option) => String(option.id) === String(selected)
                    ); // Transform the found product into the desired structure

                    return product
                        ? {
                              id: String(product.id),
                              title: product.title,
                              image:
                                  product.image && product.image.src
                                      ? product.image.src
                                      : noImage,
                          }
                        : null;
                })
                .filter((item) => item !== null);

            // Update the state with the array of selected products
            setSelectedProduct(updatedSelectedProducts);
        },
        [props.productResponse]
    );

    const updateProductText = useCallback(
        (value) => {
            setProductInput(value);

            if (value === "") {
                setProductOptions(defaultProducts);
                return;
            }

            const filterRegex = new RegExp(value, "i");
            const resultOptions = defaultProducts.filter((option) =>
                option.label.match(filterRegex)
            );

            setProductOptions(resultOptions);
            setProductInput;
        },
        [defaultProducts]
    );

    const productTextField = (
        <Autocomplete.TextField
            onChange={updateProductText}
            label="Search Product"
            labelHidden
            value={productInput}
            prefix={<Icon source={SearchIcon} tone="base" />}
            placeholder="Search Product"
            autoComplete="off"
        />
    );

    const hasSelectedOptions = selectedProduct.length > 0;

    const tagsMarkup = hasSelectedOptions
        ? selectedProduct.map((option) => {
              return (
                  <Tag
                      key={`option${option.id}`}
                      onRemove={removeTag(option.id)}
                  >
                      {option.title}
                  </Tag>
              );
          })
        : null;
    const optionList = productOptions.slice(0, visibleOptionIndex);
    const selectedTagMarkup = hasSelectedOptions ? (
        <BlockStack spacing="extraTight">{tagsMarkup}</BlockStack>
    ) : null;

    // USE EFFECT
    useEffect(() => {
        var productArray = props.productResponse.map((product) => ({
            media: (
                <Thumbnail
                    source={
                        product.image && product.image.src
                            ? product.image.src
                            : noImage
                    }
                    size="small"
                />
            ),
            value: String(product.id),
            label: product.title,
        }));
        setDefaultProducts(productArray);
        setProductOptions(productArray);

        // set product showcase code start
        let selectedProducts = props.selectedProductIDs;
        setSelectedProductIDs(selectedProducts);

        const updatedSelectedProducts = selectedProducts
            .map((selected) => {
                // Find the object with the matching id
                const product = props.productResponse.find(
                    (option) => String(option.id) === String(selected)
                ); // Transform the found product into the desired structure

                return product
                    ? {
                          id: String(product.id),
                          title: product.title,
                          image:
                              product.image && product.image.src
                                  ? product.image.src
                                  : noImage,
                      }
                    : null;
            })
            .filter((item) => item !== null);

        // Update the state with the array of selected products
        setSelectedProduct(updatedSelectedProducts);
    }, []);

    return (
        <BlockStack gap="200">
            <Text variant="headingMd" as="span" fontWeight="medium">
                Select upto 3 products for Upsell
            </Text>
            <div style={{ maxHeight: "225px" }}>
                <Autocomplete
                    allowMultiple
                    options={optionList}
                    selected={selectedProductIDs}
                    textField={productTextField}
                    onSelect={updateProductSelection}
                    loading={isLoading}
                    onLoadMoreResults={handleLoadMoreResults}
                    willLoadMoreResults={willLoadMoreResults}
                />
            </div>
            {selectedTagMarkup}
        </BlockStack>
    );
}
