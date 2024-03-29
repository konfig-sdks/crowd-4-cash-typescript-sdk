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
import { Contract } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ContractsApi - axios parameter creator
 * @export
 */
export const ContractsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all your contracts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Contracts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "bearer", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/Contracts',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get specific rental loan contract
         * @param {number} loanId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoanContract: async (loanId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('getLoanContract', 'loanId', loanId)
            const localVarPath = `/Contracts/RentalLoan/{loanId}`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId !== undefined ? loanId : `-loanId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "bearer", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/Contracts/RentalLoan/{loanId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get specific contract
         * @param {number} loanId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecific: async (loanId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('getSpecific', 'loanId', loanId)
            const localVarPath = `/Contracts/{loanId}`
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId !== undefined ? loanId : `-loanId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "bearer", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/Contracts/{loanId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get specific intermediary loan contract
         * @param {number} partnerId 
         * @param {number} loanId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificIntermediaryLoanContract: async (partnerId: number, loanId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'partnerId' is not null or undefined
            assertParamExists('getSpecificIntermediaryLoanContract', 'partnerId', partnerId)
            // verify required parameter 'loanId' is not null or undefined
            assertParamExists('getSpecificIntermediaryLoanContract', 'loanId', loanId)
            const localVarPath = `/Contracts/{partnerId}/{loanId}`
                .replace(`{${"partnerId"}}`, encodeURIComponent(String(partnerId !== undefined ? partnerId : `-partnerId-`)))
                .replace(`{${"loanId"}}`, encodeURIComponent(String(loanId !== undefined ? loanId : `-loanId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "bearer", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/Contracts/{partnerId}/{loanId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContractsApi - functional programming interface
 * @export
 */
export const ContractsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContractsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get all your contracts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contract>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get specific rental loan contract
         * @param {ContractsApiGetLoanContractRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLoanContract(requestParameters: ContractsApiGetLoanContractRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contract>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLoanContract(requestParameters.loanId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get specific contract
         * @param {ContractsApiGetSpecificRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecific(requestParameters: ContractsApiGetSpecificRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contract>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecific(requestParameters.loanId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get specific intermediary loan contract
         * @param {ContractsApiGetSpecificIntermediaryLoanContractRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecificIntermediaryLoanContract(requestParameters: ContractsApiGetSpecificIntermediaryLoanContractRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contract>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecificIntermediaryLoanContract(requestParameters.partnerId, requestParameters.loanId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ContractsApi - factory interface
 * @export
 */
export const ContractsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContractsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get all your contracts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(options?: AxiosRequestConfig): AxiosPromise<Contract> {
            return localVarFp.getAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get specific rental loan contract
         * @param {ContractsApiGetLoanContractRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoanContract(requestParameters: ContractsApiGetLoanContractRequest, options?: AxiosRequestConfig): AxiosPromise<Contract> {
            return localVarFp.getLoanContract(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get specific contract
         * @param {ContractsApiGetSpecificRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecific(requestParameters: ContractsApiGetSpecificRequest, options?: AxiosRequestConfig): AxiosPromise<Contract> {
            return localVarFp.getSpecific(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get specific intermediary loan contract
         * @param {ContractsApiGetSpecificIntermediaryLoanContractRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificIntermediaryLoanContract(requestParameters: ContractsApiGetSpecificIntermediaryLoanContractRequest, options?: AxiosRequestConfig): AxiosPromise<Contract> {
            return localVarFp.getSpecificIntermediaryLoanContract(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getLoanContract operation in ContractsApi.
 * @export
 * @interface ContractsApiGetLoanContractRequest
 */
export type ContractsApiGetLoanContractRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof ContractsApiGetLoanContract
    */
    readonly loanId: number
    
}

/**
 * Request parameters for getSpecific operation in ContractsApi.
 * @export
 * @interface ContractsApiGetSpecificRequest
 */
export type ContractsApiGetSpecificRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof ContractsApiGetSpecific
    */
    readonly loanId: number
    
}

/**
 * Request parameters for getSpecificIntermediaryLoanContract operation in ContractsApi.
 * @export
 * @interface ContractsApiGetSpecificIntermediaryLoanContractRequest
 */
export type ContractsApiGetSpecificIntermediaryLoanContractRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof ContractsApiGetSpecificIntermediaryLoanContract
    */
    readonly partnerId: number
    
    /**
    * 
    * @type {number}
    * @memberof ContractsApiGetSpecificIntermediaryLoanContract
    */
    readonly loanId: number
    
}

/**
 * ContractsApiGenerated - object-oriented interface
 * @export
 * @class ContractsApiGenerated
 * @extends {BaseAPI}
 */
export class ContractsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get all your contracts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApiGenerated
     */
    public getAll(options?: AxiosRequestConfig) {
        return ContractsApiFp(this.configuration).getAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get specific rental loan contract
     * @param {ContractsApiGetLoanContractRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApiGenerated
     */
    public getLoanContract(requestParameters: ContractsApiGetLoanContractRequest, options?: AxiosRequestConfig) {
        return ContractsApiFp(this.configuration).getLoanContract(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get specific contract
     * @param {ContractsApiGetSpecificRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApiGenerated
     */
    public getSpecific(requestParameters: ContractsApiGetSpecificRequest, options?: AxiosRequestConfig) {
        return ContractsApiFp(this.configuration).getSpecific(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get specific intermediary loan contract
     * @param {ContractsApiGetSpecificIntermediaryLoanContractRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApiGenerated
     */
    public getSpecificIntermediaryLoanContract(requestParameters: ContractsApiGetSpecificIntermediaryLoanContractRequest, options?: AxiosRequestConfig) {
        return ContractsApiFp(this.configuration).getSpecificIntermediaryLoanContract(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
