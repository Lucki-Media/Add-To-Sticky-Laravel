import {
    Autocomplete,
    BlockStack,
    Box,
    Icon,
    InlineStack,
    Text,
    Thumbnail,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import { SearchIcon } from "@shopify/polaris-icons";
import noImage from "../../../assets/no_image.jpg";

export default function CollectionSelection(props) {
    const [selectedCollectionID, setSelectedCollectionID] = useState(
        [props.selectedCollectionID]
    );
    const [defaultCollections, setDefaultCollections] = useState([]);
    const [collectionInput, setCollectionInput] = useState("");
    const [collectionOptions, setCollectionOptions] = useState([]);
    const [selectedCollection, setSelectedCollection] = useState([]);

    const updateCollectionSelection = useCallback(
        (selected) => {
            // Find the object with the matching id
            const collection = props.collectionResponse.find(
                (option) => String(option.id) === String(selected)
            );

            // Transform the found product into the desired structure
            const selectedObject = collection
                ? {
                      id: String(collection.id),
                      handle: collection.handle,
                      title: collection.title,
                      image:
                          collection.image !== "" ? collection.image : noImage,
                  }
                : null;

            // Update the selected options and item state
            setSelectedCollectionID(selected);
            setSelectedCollection(selectedObject);
        },
        [props.collectionResponse]
    );

    const updateCollectionText = useCallback(
        (value) => {
            setCollectionInput(value);

            if (value === "") {
                setCollectionOptions(defaultCollections);
                return;
            }

            const filterRegex = new RegExp(value, "i");
            const resultOptions = defaultCollections.filter((option) =>
                option.label.match(filterRegex)
            );
            setCollectionOptions(resultOptions);
        },
        [defaultCollections]
    );

    const collectionTextField = (
        <Autocomplete.TextField
            onChange={updateCollectionText}
            label="Search Collection"
            labelHidden
            value={collectionInput}
            prefix={<Icon source={SearchIcon} tone="base" />}
            placeholder="Search Collection"
            autoComplete="off"
        />
    );

    // USE EFFECT
    useEffect(() => {
        var collectionArray = props.collectionResponse.map((collection) => ({
            media: (
                <Thumbnail
                    source={
                        collection.image !== "" ? collection.image : noImage
                    }
                    size="small"
                />
            ),
            value: String(collection.id),
            label: collection.title,
        }));
        setDefaultCollections(collectionArray);
        setCollectionOptions(collectionArray);

        // set product showcase code start
        let selected = [props.selectedCollectionID];

        // Find the object with the matching id
        const collection = props.collectionResponse.find(
            (option) => String(option.id) === String(selected)
        );

        // Transform the found product into the desired structure
        const selectedObject = collection
            ? {
                  id: String(collection.id),
                  handle: collection.handle,
                  title: collection.title,
                  image:
                      collection.image !== "" ? collection.image : noImage,
              }
            : null;

        // Update the selected options and item state
        setSelectedCollectionID(selected);
        setSelectedCollection(selectedObject);

    }, []);

    useEffect(() => {
        props.collectionCallback(selectedCollectionID);
    }, [selectedCollectionID]);

    return (
        <BlockStack gap="200">
            <Text variant="headingMd" as="span" fontWeight="medium">
                Select Collection you want to show on Upsell
            </Text>
            <div style={{ maxHeight: "225px" }}>
                <Autocomplete
                    options={collectionOptions}
                    selected={selectedCollectionID}
                    onSelect={updateCollectionSelection}
                    textField={collectionTextField}
                />
            </div>
            {selectedCollection && selectedCollection.id !== undefined && (
                <Box
                    padding="200"
                    background="bg-surface-secondary-hover"
                    borderRadius="100"
                >
                    <InlineStack align="start" blockAlign="center" gap={400}>
                        <Thumbnail
                            source={selectedCollection.image ?? noImage}
                            size="small"
                        />
                        <Text variant="bodyMd" fontWeight="medium" as="span">
                            {selectedCollection.title}
                        </Text>
                    </InlineStack>
                </Box>
            )}
        </BlockStack>
    );
}
