import React, { useState, createContext } from "react";

export const FormContext = createContext<any>('');

export const FormProvider: React.FC = ({ children }) => {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [shopify, setShopify] = useState<string>('');
    const [google, setGoogle] = useState<string>('');
    const [shopifyStep, setShopifyStep] = useState<string>('connect');
    const [googleStep, setGoogleStep] = useState<string>('connect');
    const [pageStatus, setPageStatus] = useState<boolean>(false);
    

    return (
        <FormContext.Provider
            value={{
                email,
                setEmail,
                name,
                setName,
                password,
                setPassword,
                shopify,
                setShopify,
                google,
                setGoogle,
                shopifyStep,
                setShopifyStep,
                googleStep,
                setGoogleStep,
                pageStatus,
                setPageStatus
            }}
        >{children}</FormContext.Provider>
    )
};