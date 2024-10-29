import { Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
}

const ExpandableText = ({ children }: Props) => {

    const [expanded, setExpanded] = useState(false);

    // If no children, then return null
    if (!children) return null;

    // Limit the whole text
    const limit = 300;

    // Convert the prop strictly into a string
    const text = children.toString();

    // Checking: If the character are less than the limit, then directly show the actual text
    if (text.length <= limit)
        return <Text>{text}</Text>

    // Applying a limit of 300 words and then render
    const summary = expanded ? text : text.substring(0, limit) + '...'

    // Otherwise, render the whole text with some logics and pre-defined styles
    return (
        <Text
            textIndent='30px'
            textAlign='justify'>
            {summary}
            <Button
                ml={1}
                size='xs'
                type="button"
                fontWeight='bold'
                colorScheme="yellow"
                // For toggling the button
                onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Show less' : 'Read More'}
            </Button>
        </Text>
    );
};

export default ExpandableText;
