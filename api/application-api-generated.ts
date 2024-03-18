/* tslint:disable */
/* eslint-disable */
/*
C4C REST API

Access to the Crowd4Cash Crowdlending Platform through an API

The version of the OpenAPI document: 2.0.0
Contact: info@crowd4cash.ch

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ApplicationResult } from '../models';
// @ts-ignore
import { IntermediaryLoanApplication } from '../models';
// @ts-ignore
import { IntermediaryLoanHandoverDate } from '../models';
// @ts-ignore
import { RentalApplicationResult } from '../models';
// @ts-ignore
import { RentalLoanApplication } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ApplicationApi - axios parameter creator
 * @export
 */
export const ApplicationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * **Note**: It\'s valid only for loans made indirectly through the intermediary.
         * @summary Set the definitive Handover Date (a date when the item is handed over to the customer)
         * @param {IntermediaryLoanHandoverDate} [intermediaryLoanHandoverDate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setDefinitiveHandoverDate: async (intermediaryLoanHandoverDate?: IntermediaryLoanHandoverDate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/IntermediaryLoan`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "bearer", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: intermediaryLoanHandoverDate,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/IntermediaryLoan',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(intermediaryLoanHandoverDate, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * **Note**: Approval and funding times vary, but typically it takes only 24 hours.
         * @summary Apply for a regular loan - 100% online application
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitLoanApplication: async (body?: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Loan`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "bearer", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: body,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/Loan',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * **Note**: Each successful application creates a binding obligation on you. Once you apply you may not retract the application.
         * @summary Apply for a loan on behalf of your partners e.g. garages/shops/stores
         * @param {IntermediaryLoanApplication} [intermediaryLoanApplication] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitPartnerLoanApplication: async (intermediaryLoanApplication?: IntermediaryLoanApplication, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/IntermediaryLoan`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "bearer", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: intermediaryLoanApplication,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/IntermediaryLoan',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(intermediaryLoanApplication, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * **Note**: Each successful application creates a binding obligation on you. Once you apply you may not retract the application.
         * @summary Apply for a rental loan
         * @param {RentalLoanApplication} [rentalLoanApplication] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitRentalLoanApplication: async (rentalLoanApplication?: RentalLoanApplication, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/RentalLoan`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "bearer", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: rentalLoanApplication,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/RentalLoan',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(rentalLoanApplication, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApplicationApi - functional programming interface
 * @export
 */
export const ApplicationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApplicationApiAxiosParamCreator(configuration)
    return {
        /**
         * **Note**: It\'s valid only for loans made indirectly through the intermediary.
         * @summary Set the definitive Handover Date (a date when the item is handed over to the customer)
         * @param {ApplicationApiSetDefinitiveHandoverDateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setDefinitiveHandoverDate(requestParameters: ApplicationApiSetDefinitiveHandoverDateRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApplicationResult>> {
            const intermediaryLoanHandoverDate: IntermediaryLoanHandoverDate = {
                loanId: requestParameters.loanId,
                handoverDate: requestParameters.handoverDate
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.setDefinitiveHandoverDate(intermediaryLoanHandoverDate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * **Note**: Approval and funding times vary, but typically it takes only 24 hours.
         * @summary Apply for a regular loan - 100% online application
         * @param {ApplicationApiSubmitLoanApplicationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitLoanApplication(requestParameters: ApplicationApiSubmitLoanApplicationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApplicationResult>> {
            const body: object = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitLoanApplication(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * **Note**: Each successful application creates a binding obligation on you. Once you apply you may not retract the application.
         * @summary Apply for a loan on behalf of your partners e.g. garages/shops/stores
         * @param {ApplicationApiSubmitPartnerLoanApplicationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitPartnerLoanApplication(requestParameters: ApplicationApiSubmitPartnerLoanApplicationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApplicationResult>> {
            const intermediaryLoanApplication: IntermediaryLoanApplication = {
                partnerId: requestParameters.partnerId,
                purchaseItem: requestParameters.purchaseItem,
                itemStatus: requestParameters.itemStatus,
                itemName: requestParameters.itemName,
                itemType: requestParameters.itemType,
                itemBrand: requestParameters.itemBrand,
                itemModel: requestParameters.itemModel,
                itemColor: requestParameters.itemColor,
                itemMarketValue: requestParameters.itemMarketValue,
                manufactureDate: requestParameters.manufactureDate,
                firstRegistration: requestParameters.firstRegistration,
                mileage: requestParameters.mileage,
                itemCertificate: requestParameters.itemCertificate,
                serialNumber: requestParameters.serialNumber,
                identificationNumber: requestParameters.identificationNumber,
                rentalAmount: requestParameters.rentalAmount,
                handoverDate: requestParameters.handoverDate
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitPartnerLoanApplication(intermediaryLoanApplication, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * **Note**: Each successful application creates a binding obligation on you. Once you apply you may not retract the application.
         * @summary Apply for a rental loan
         * @param {ApplicationApiSubmitRentalLoanApplicationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitRentalLoanApplication(requestParameters: ApplicationApiSubmitRentalLoanApplicationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RentalApplicationResult>> {
            const rentalLoanApplication: RentalLoanApplication = {
                apiRequester: requestParameters.apiRequester,
                renteeGender: requestParameters.renteeGender,
                renteeFirstName: requestParameters.renteeFirstName,
                renteeLastName: requestParameters.renteeLastName,
                renteeBirthdate: requestParameters.renteeBirthdate,
                renteeEmail: requestParameters.renteeEmail,
                renteeMobilePhoneNumber: requestParameters.renteeMobilePhoneNumber,
                renteeStreetAddress: requestParameters.renteeStreetAddress,
                renteeHouseNumber: requestParameters.renteeHouseNumber,
                renteeZipCode: requestParameters.renteeZipCode,
                renteeCity: requestParameters.renteeCity,
                purchaseItem: requestParameters.purchaseItem,
                itemStatus: requestParameters.itemStatus,
                itemName: requestParameters.itemName,
                itemType: requestParameters.itemType,
                itemBrand: requestParameters.itemBrand,
                itemModel: requestParameters.itemModel,
                itemColor: requestParameters.itemColor,
                itemMarketValue: requestParameters.itemMarketValue,
                serialNumber: requestParameters.serialNumber,
                identificationNumber: requestParameters.identificationNumber,
                rentalAmount: requestParameters.rentalAmount,
                rentDate: requestParameters.rentDate,
                idFrontPhoto: requestParameters.idFrontPhoto,
                idFrontExtension: requestParameters.idFrontExtension,
                idBackPhoto: requestParameters.idBackPhoto,
                idBackExtension: requestParameters.idBackExtension,
                selfiePhoto: requestParameters.selfiePhoto,
                selfieExtension: requestParameters.selfieExtension,
                contractFile: requestParameters.contractFile,
                contractFileExtension: requestParameters.contractFileExtension
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitRentalLoanApplication(rentalLoanApplication, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ApplicationApi - factory interface
 * @export
 */
export const ApplicationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApplicationApiFp(configuration)
    return {
        /**
         * **Note**: It\'s valid only for loans made indirectly through the intermediary.
         * @summary Set the definitive Handover Date (a date when the item is handed over to the customer)
         * @param {ApplicationApiSetDefinitiveHandoverDateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setDefinitiveHandoverDate(requestParameters: ApplicationApiSetDefinitiveHandoverDateRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ApplicationResult> {
            return localVarFp.setDefinitiveHandoverDate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * **Note**: Approval and funding times vary, but typically it takes only 24 hours.
         * @summary Apply for a regular loan - 100% online application
         * @param {ApplicationApiSubmitLoanApplicationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitLoanApplication(requestParameters: ApplicationApiSubmitLoanApplicationRequest, options?: AxiosRequestConfig): AxiosPromise<ApplicationResult> {
            return localVarFp.submitLoanApplication(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * **Note**: Each successful application creates a binding obligation on you. Once you apply you may not retract the application.
         * @summary Apply for a loan on behalf of your partners e.g. garages/shops/stores
         * @param {ApplicationApiSubmitPartnerLoanApplicationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitPartnerLoanApplication(requestParameters: ApplicationApiSubmitPartnerLoanApplicationRequest, options?: AxiosRequestConfig): AxiosPromise<ApplicationResult> {
            return localVarFp.submitPartnerLoanApplication(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * **Note**: Each successful application creates a binding obligation on you. Once you apply you may not retract the application.
         * @summary Apply for a rental loan
         * @param {ApplicationApiSubmitRentalLoanApplicationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitRentalLoanApplication(requestParameters: ApplicationApiSubmitRentalLoanApplicationRequest, options?: AxiosRequestConfig): AxiosPromise<RentalApplicationResult> {
            return localVarFp.submitRentalLoanApplication(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for setDefinitiveHandoverDate operation in ApplicationApi.
 * @export
 * @interface ApplicationApiSetDefinitiveHandoverDateRequest
 */
export type ApplicationApiSetDefinitiveHandoverDateRequest = {
    
} & IntermediaryLoanHandoverDate

/**
 * Request parameters for submitLoanApplication operation in ApplicationApi.
 * @export
 * @interface ApplicationApiSubmitLoanApplicationRequest
 */
export type ApplicationApiSubmitLoanApplicationRequest = object

/**
 * Request parameters for submitPartnerLoanApplication operation in ApplicationApi.
 * @export
 * @interface ApplicationApiSubmitPartnerLoanApplicationRequest
 */
export type ApplicationApiSubmitPartnerLoanApplicationRequest = {
    
} & IntermediaryLoanApplication

/**
 * Request parameters for submitRentalLoanApplication operation in ApplicationApi.
 * @export
 * @interface ApplicationApiSubmitRentalLoanApplicationRequest
 */
export type ApplicationApiSubmitRentalLoanApplicationRequest = {
    
} & RentalLoanApplication

/**
 * ApplicationApiGenerated - object-oriented interface
 * @export
 * @class ApplicationApiGenerated
 * @extends {BaseAPI}
 */
export class ApplicationApiGenerated extends BaseAPI {
    /**
     * **Note**: It\'s valid only for loans made indirectly through the intermediary.
     * @summary Set the definitive Handover Date (a date when the item is handed over to the customer)
     * @param {ApplicationApiSetDefinitiveHandoverDateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationApiGenerated
     */
    public setDefinitiveHandoverDate(requestParameters: ApplicationApiSetDefinitiveHandoverDateRequest = {}, options?: AxiosRequestConfig) {
        return ApplicationApiFp(this.configuration).setDefinitiveHandoverDate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * **Note**: Approval and funding times vary, but typically it takes only 24 hours.
     * @summary Apply for a regular loan - 100% online application
     * @param {ApplicationApiSubmitLoanApplicationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationApiGenerated
     */
    public submitLoanApplication(requestParameters: ApplicationApiSubmitLoanApplicationRequest, options?: AxiosRequestConfig) {
        return ApplicationApiFp(this.configuration).submitLoanApplication(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * **Note**: Each successful application creates a binding obligation on you. Once you apply you may not retract the application.
     * @summary Apply for a loan on behalf of your partners e.g. garages/shops/stores
     * @param {ApplicationApiSubmitPartnerLoanApplicationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationApiGenerated
     */
    public submitPartnerLoanApplication(requestParameters: ApplicationApiSubmitPartnerLoanApplicationRequest, options?: AxiosRequestConfig) {
        return ApplicationApiFp(this.configuration).submitPartnerLoanApplication(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * **Note**: Each successful application creates a binding obligation on you. Once you apply you may not retract the application.
     * @summary Apply for a rental loan
     * @param {ApplicationApiSubmitRentalLoanApplicationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationApiGenerated
     */
    public submitRentalLoanApplication(requestParameters: ApplicationApiSubmitRentalLoanApplicationRequest, options?: AxiosRequestConfig) {
        return ApplicationApiFp(this.configuration).submitRentalLoanApplication(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
