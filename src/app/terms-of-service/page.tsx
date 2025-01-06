import React from 'react';
import Description from "@/components/description/Description";

const TermsOfService = () => {
    return (
        <>
            <Description
                title="TERMS OF SERVICE FOR ELDERBREAKS.COM"
                description={`
                    Welcome to ELDERBREAKS.COM! These terms of service ("TOS") govern your access to and use of our website and services. By using our website and services, you agree to be bound by these TOS. If you do not agree to these TOS, please do not use our website or services.
                `}
                subDescriptions={[
                    {
                        title: "1. User Conduct",
                        content: `You agree to use our website and services only for lawful purposes and in a manner that does not infringe the rights of any third party or restrict or inhibit anyone else's use and enjoyment of our website and services.`
                    },
                    {
                        title: "2. User Accounts",
                        content: `You may be required to create an account to access certain features of our website and services. You agree to provide accurate and complete information when creating your account and to keep your account information up to date. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.`
                    },
                    {
                        title: "3. Intellectual Property",
                        content: `All content and materials on our website and services, including but not limited to text, graphics, logos, images, and software, are the property of ELDERBREAKS.COM or our licensors and are protected by intellectual property laws. You may not use, reproduce, modify, distribute, or display any content or materials on our website and services without our prior written consent.`
                    },
                    {
                        title: "4. User Submissions",
                        content: `You may be able to submit content to our website and services, such as comments, reviews, or ratings. By submitting content, you grant us a non-exclusive, perpetual, irrevocable, royalty-free, worldwide license to use, reproduce, modify, distribute, and display your content in any media now known or hereafter developed. You represent and warrant that you own or have the necessary rights and permissions to submit your content and that your content does not infringe the rights of any third party.`
                    },
                    {
                        title: "5. Prohibited Conduct",
                        list: [
                            "Engage in any illegal, fraudulent, or malicious activities;",
                            "Impersonate any person or entity or falsely represent your affiliation with any person or entity;",
                            "Post, transmit, or distribute any content that is harmful, offensive, or discriminatory;",
                            "Collect or store personal information of other users without their consent;",
                            "Interfere with or disrupt our website and services or servers or networks connected to our website and services;",
                            "Use any automated means to access or use our website and services without our prior written consent."
                        ]
                    },
                    {
                        title: "6. Termination",
                        content: `We may terminate or suspend your access to our website and services at any time, without notice and for any reason, including but not limited to your breach of these TOS.`
                    },
                    {
                        title: "7. Disclaimer of Warranties",
                        content: `Our website and services are provided on an "as is" and "as available" basis. We do not warrant that our website and services will be uninterrupted, error-free, or secure. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`
                    },
                    {
                        title: "8. Limitation of Liability",
                        content: `We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website and services, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages.`
                    },
                    {
                        title: "9. Indemnification",
                        content: `You agree to indemnify and hold us harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of our website and services, your violation of these TOS, or your violation of any rights of another.`
                    },
                    {
                        title: "10. Governing Law and Jurisdiction",
                        content: `These TOS shall be governed by and construed in accordance with the laws of Europe/USA. Any legal action or proceeding arising out of or relating to these TOS shall be brought exclusively in the courts located in Europe/USA, and you consent to the jurisdiction of such courts.`
                    },
                    {
                        title: "11. Modifications to TOS",
                        content: `We reserve the right to modify these TOS at any time, in our sole discretion. If we modify these TOS, we will post the revised TOS on our website and indicate the date of the latest revision. Your continued use of our website and services after the date of the latest revision constitutes your acceptance of the revised TOS.`
                    },
                    {
                        title: "12. Miscellaneous",
                        content: `These TOS constitute the entire agreement between you and ELDERBREAKS.COM regarding your use of our website and services. If any provision of these TOS is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. Our failure to enforce any right or provision of these TOS shall not be deemed a waiver of such right or provision.`
                    }
                ]}
            />
        </>
    );
};

export default TermsOfService;
