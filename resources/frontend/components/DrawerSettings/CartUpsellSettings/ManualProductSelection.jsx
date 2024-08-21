import {
    Autocomplete,
    Icon,
    BlockStack,
    Text,
    Thumbnail,
    Box,
    InlineStack,
    Button,
    Toast,
} from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import { SearchIcon, XIcon } from "@shopify/polaris-icons";
import noImage from "../../../assets/no_image.jpg";

export default function ManualProductSelection(props) {
    const paginationInterval = 10;

    const [SelectedProductIDs, setSelectedProductIDs] = useState(
        props.SelectedProductIDs
    );
    const [defaultProducts, setDefaultProducts] = useState([]);
    const [productInput, setProductInput] = useState("");
    const [productOptions, setProductOptions] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [willLoadMoreResults, setWillLoadMoreResults] = useState(true);
    const [visibleOptionIndex, setVisibleOptionIndex] =
        useState(paginationInterval);

    // TOAST LOGIC START
    const [toastActive, setToastActive] = useState(false);
    const toggleActive = useCallback(
        () => setToastActive((toastActive) => !toastActive),
        []
    );
    const toastMarkup = toastActive && (
        <Toast content="Select up to 3 products." onDismiss={toggleActive} />
    );
    // TOAST LOGIC END

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
        (productID) => () => {
            // update selected IDs
            const productOptions = [...SelectedProductIDs];
            productOptions.splice(productOptions.indexOf(productID), 1);
            setSelectedProductIDs(productOptions);

            // update selected IDs Details Object Array
            let selectedProductArray = [...selectedProduct];
            selectedProductArray = selectedProductArray.filter(
                (item) => item.id !== productID
            );
            setSelectedProduct(selectedProductArray);
        },
        [SelectedProductIDs]
    );

    const updateProductSelection = useCallback(
        (selectedProducts) => {
            // setup limitation upto 3 products
            if (selectedProducts.length <= 3) {
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
            } else {
                toggleActive();
            }
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
                  <Box
                      padding="400"
                      background="bg-surface-secondary-hover"
                      borderRadius="100"
                  >
                      {/* <Tag
                          key={`option${option.id}`}
                          onRemove={removeTag(option.id)}
                      >
                          {option.title}
                      </Tag> */}
                      <InlineStack align="space-between" blockAlign="center">
                          <InlineStack align="start" gap={200}>
                              <Thumbnail
                                  source={option.image ?? noImage}
                                  size="small"
                              />
                              <Text
                                  variant="bodyMd"
                                  fontWeight="medium"
                                  as="span"
                              >
                                  {option.title}
                              </Text>
                          </InlineStack>
                          <Button
                              icon={XIcon}
                              variant="plain"
                              tone="base"
                              onClick={removeTag(option.id)}
                          />
                      </InlineStack>
                  </Box>
              );
          })
        : null;
    const optionList = productOptions.slice(0, visibleOptionIndex);
    const selectedTagMarkup = hasSelectedOptions ? (
        <BlockStack gap={100}>{tagsMarkup}</BlockStack>
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
    }, []);

    useEffect(() => {
        // callback start
        callbackFunction();
        // callback end

        const updatedSelectedProducts = SelectedProductIDs.map((selected) => {
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
        }).filter((item) => item !== null);

        // Update the state with the array of selected products
        setSelectedProduct(updatedSelectedProducts);
    }, [SelectedProductIDs]);

    const callbackFunction = useCallback(() => {
        props.productCallback(SelectedProductIDs);
    }, [SelectedProductIDs]);

    return (
        <BlockStack gap="200">
            <Text variant="headingMd" as="span" fontWeight="medium">
                Select upto 3 products for Upsell
            </Text>
            <div style={{ maxHeight: "225px" }}>
                <Autocomplete
                    allowMultiple
                    options={optionList}
                    selected={SelectedProductIDs}
                    textField={productTextField}
                    onSelect={updateProductSelection}
                    loading={isLoading}
                    onLoadMoreResults={handleLoadMoreResults}
                    willLoadMoreResults={willLoadMoreResults}
                />
            </div>
            {selectedTagMarkup}

            {/* Toast Markup */}
            {toastMarkup}
        </BlockStack>
    );
}
