export interface FAQItemProps {
    question: string;
    answer: string;
    listItems: string[];
    isOpen: boolean;
    onClick: () => void;
}