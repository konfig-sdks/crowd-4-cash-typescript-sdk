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
import { Portfolio } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PortfolioApi - axios parameter creator
 * @export
 */
export const PortfolioApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * __Note__: If the standard portfolio doesn\'t suit your needs, please [contact C4C](https://crowd4cash.ch/contact) to request customization
         * @summary Get your customized investment portfolio
         * @param {string} [from] 
         * @param {string} [to] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomizedPortfolio: async (from?: string, to?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/CustomPortfolio`;
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
            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/CustomPortfolio',
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
         * @summary Get your investment portfolio
         * @param {string} [from] 
         * @param {string} [to] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvestments: async (from?: string, to?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Portfolio`;
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
            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/Portfolio',
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
 * PortfolioApi - functional programming interface
 * @export
 */
export const PortfolioApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PortfolioApiAxiosParamCreator(configuration)
    return {
        /**
         * __Note__: If the standard portfolio doesn\'t suit your needs, please [contact C4C](https://crowd4cash.ch/contact) to request customization
         * @summary Get your customized investment portfolio
         * @param {PortfolioApiGetCustomizedPortfolioRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomizedPortfolio(requestParameters: PortfolioApiGetCustomizedPortfolioRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Portfolio>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomizedPortfolio(requestParameters.from, requestParameters.to, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get your investment portfolio
         * @param {PortfolioApiGetInvestmentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInvestments(requestParameters: PortfolioApiGetInvestmentsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Portfolio>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInvestments(requestParameters.from, requestParameters.to, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PortfolioApi - factory interface
 * @export
 */
export const PortfolioApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PortfolioApiFp(configuration)
    return {
        /**
         * __Note__: If the standard portfolio doesn\'t suit your needs, please [contact C4C](https://crowd4cash.ch/contact) to request customization
         * @summary Get your customized investment portfolio
         * @param {PortfolioApiGetCustomizedPortfolioRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomizedPortfolio(requestParameters: PortfolioApiGetCustomizedPortfolioRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Portfolio> {
            return localVarFp.getCustomizedPortfolio(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get your investment portfolio
         * @param {PortfolioApiGetInvestmentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvestments(requestParameters: PortfolioApiGetInvestmentsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Portfolio> {
            return localVarFp.getInvestments(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCustomizedPortfolio operation in PortfolioApi.
 * @export
 * @interface PortfolioApiGetCustomizedPortfolioRequest
 */
export type PortfolioApiGetCustomizedPortfolioRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof PortfolioApiGetCustomizedPortfolio
    */
    readonly from?: string
    
    /**
    * 
    * @type {string}
    * @memberof PortfolioApiGetCustomizedPortfolio
    */
    readonly to?: string
    
}

/**
 * Request parameters for getInvestments operation in PortfolioApi.
 * @export
 * @interface PortfolioApiGetInvestmentsRequest
 */
export type PortfolioApiGetInvestmentsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof PortfolioApiGetInvestments
    */
    readonly from?: string
    
    /**
    * 
    * @type {string}
    * @memberof PortfolioApiGetInvestments
    */
    readonly to?: string
    
}

/**
 * PortfolioApiGenerated - object-oriented interface
 * @export
 * @class PortfolioApiGenerated
 * @extends {BaseAPI}
 */
export class PortfolioApiGenerated extends BaseAPI {
    /**
     * __Note__: If the standard portfolio doesn\'t suit your needs, please [contact C4C](https://crowd4cash.ch/contact) to request customization
     * @summary Get your customized investment portfolio
     * @param {PortfolioApiGetCustomizedPortfolioRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortfolioApiGenerated
     */
    public getCustomizedPortfolio(requestParameters: PortfolioApiGetCustomizedPortfolioRequest = {}, options?: AxiosRequestConfig) {
        return PortfolioApiFp(this.configuration).getCustomizedPortfolio(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get your investment portfolio
     * @param {PortfolioApiGetInvestmentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortfolioApiGenerated
     */
    public getInvestments(requestParameters: PortfolioApiGetInvestmentsRequest = {}, options?: AxiosRequestConfig) {
        return PortfolioApiFp(this.configuration).getInvestments(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}