import React from 'react';
import Description from "@/components/description/Description";

const PrivacyPolicy = () => {
    return (
        <>
            <Description
                title="PRIVACY POLICY FOR ELDERBREAKS.COM"
                description={`
                    ELDERBREAKS.COM ("we," "us," or "our") is committed to protecting the privacy and security of our website visitors and users ("you" or "your"). This Privacy Policy describes how we collect, use, disclose, and protect personal information that we receive from website visitors and users. By using our website, you consent to the terms of this Privacy Policy.
                `}
                subDescriptions={[
                    {
                        title: "Information We Collect",
                        list: [
                            "Usage information, such as your IP address, browser type, and device type, when you visit our website;",
                            "Any other information you choose to provide us.",
                            "We also collect general purpose analytic data, which may include information such as the pages you visit on our website, the time and date of your visit, and the type of browser you use. We collect this data to analyze and improve the performance of our website.",
                            "We also collect your Twitch username if you choose to log in to our website using your Twitch account. We do not collect your Twitch password or any other personal information from your Twitch account."
                        ]
                    },
                    {
                        title: "How We Use Your Information",
                        list: [
                            "To provide you with the products or services you request;",
                            "To communicate with you about your orders, products, or services;",
                            "To improve our website, products, or services;",
                            "To customize your experience on our website;",
                            "To send you marketing communications about our products or services that may interest you;",
                            "To comply with legal obligations or protect our legal rights.",
                            "We also collect general purpose analytic data, which may include information such as the pages you visit on our website, the time and date of your visit, and the type of browser you use. We collect this data to analyze and improve the performance of our website."
                        ]
                    },
                    {
                        title: "How We Share Your Information",
                        list: [
                            "We may share your personal information with third-party service providers that help us operate our website or provide products or services to you.",
                            "We may also share your personal information with government authorities or law enforcement officials to comply with legal requirements or protect our legal rights."
                        ]
                    },
                    {
                        title: "Your Choices",
                        content: `You can choose not to provide personal information to us, but this may limit your ability to use certain features of our website or receive certain products or services. You can do the following at any time by contacting us at admin@onlytk.xyz.`
                    },
                    {
                        title: "Security",
                        content: `We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. However, we cannot guarantee the security of your personal information, and you provide your personal information at your own risk.`
                    },
                    {
                        title: "Changes to this Privacy Policy",
                        content: `We may update this Privacy Policy from time to time by posting the revised policy on our website. The revised policy will be effective as of the date it is posted.`
                    },
                    {
                        title: "Contact Us",
                        content: `If you have any questions about this Privacy Policy, please contact us at admin@onlytk.xyz.`
                    }
                ]}
            />
        </>
    );
};

export default PrivacyPolicy;
