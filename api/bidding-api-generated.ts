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
import { Bid } from '../models';
// @ts-ignore
import { BiddingResult } from '../models';
// @ts-ignore
import { ConnectorBid } from '../models';
// @ts-ignore
import { MultipleBiddingResult } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BiddingApi - axios parameter creator
 * @export
 */
export const BiddingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * **Note**: Each successful bid creates a binding obligation on you. Once you place you may not retract your bid.
         * @summary Place a bid on certain loan
         * @param {Bid} [bid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        placeBid: async (bid?: Bid, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Bid`;
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
                requestBody: bid,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/Bid',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(bid, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * **Note**: Crowd4Cash allows you to invest as agent on behalf of other investors. You can submit multiple bids on the same request.
         * @summary Place bids on behalf of your connected investor(s)
         * @param {Array<ConnectorBid>} [connectorBid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitBids: async (connectorBid?: Array<ConnectorBid>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Bids`;
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
                requestBody: connectorBid,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/Bids',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(connectorBid, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BiddingApi - functional programming interface
 * @export
 */
export const BiddingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BiddingApiAxiosParamCreator(configuration)
    return {
        /**
         * **Note**: Each successful bid creates a binding obligation on you. Once you place you may not retract your bid.
         * @summary Place a bid on certain loan
         * @param {BiddingApiPlaceBidRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async placeBid(requestParameters: BiddingApiPlaceBidRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BiddingResult>> {
            const bid: Bid = {
                loanId: requestParameters.loanId,
                amount: requestParameters.amount
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.placeBid(bid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * **Note**: Crowd4Cash allows you to invest as agent on behalf of other investors. You can submit multiple bids on the same request.
         * @summary Place bids on behalf of your connected investor(s)
         * @param {BiddingApiSubmitBidsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitBids(requestParameters: BiddingApiSubmitBidsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultipleBiddingResult>> {
            const connectorBid: Array<ConnectorBid> = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitBids(connectorBid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BiddingApi - factory interface
 * @export
 */
export const BiddingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BiddingApiFp(configuration)
    return {
        /**
         * **Note**: Each successful bid creates a binding obligation on you. Once you place you may not retract your bid.
         * @summary Place a bid on certain loan
         * @param {BiddingApiPlaceBidRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        placeBid(requestParameters: BiddingApiPlaceBidRequest, options?: AxiosRequestConfig): AxiosPromise<BiddingResult> {
            return localVarFp.placeBid(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * **Note**: Crowd4Cash allows you to invest as agent on behalf of other investors. You can submit multiple bids on the same request.
         * @summary Place bids on behalf of your connected investor(s)
         * @param {BiddingApiSubmitBidsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitBids(requestParameters: BiddingApiSubmitBidsRequest, options?: AxiosRequestConfig): AxiosPromise<MultipleBiddingResult> {
            return localVarFp.submitBids(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for placeBid operation in BiddingApi.
 * @export
 * @interface BiddingApiPlaceBidRequest
 */
export type BiddingApiPlaceBidRequest = {
    
} & Bid

/**
 * Request parameters for submitBids operation in BiddingApi.
 * @export
 * @interface BiddingApiSubmitBidsRequest
 */
export type BiddingApiSubmitBidsRequest = Array<ConnectorBid>

/**
 * BiddingApiGenerated - object-oriented interface
 * @export
 * @class BiddingApiGenerated
 * @extends {BaseAPI}
 */
export class BiddingApiGenerated extends BaseAPI {
    /**
     * **Note**: Each successful bid creates a binding obligation on you. Once you place you may not retract your bid.
     * @summary Place a bid on certain loan
     * @param {BiddingApiPlaceBidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BiddingApiGenerated
     */
    public placeBid(requestParameters: BiddingApiPlaceBidRequest, options?: AxiosRequestConfig) {
        return BiddingApiFp(this.configuration).placeBid(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * **Note**: Crowd4Cash allows you to invest as agent on behalf of other investors. You can submit multiple bids on the same request.
     * @summary Place bids on behalf of your connected investor(s)
     * @param {BiddingApiSubmitBidsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BiddingApiGenerated
     */
    public submitBids(requestParameters: BiddingApiSubmitBidsRequest, options?: AxiosRequestConfig) {
        return BiddingApiFp(this.configuration).submitBids(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
