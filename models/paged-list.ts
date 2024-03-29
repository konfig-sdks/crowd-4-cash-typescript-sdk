/*
C4C REST API

Access to the Crowd4Cash Crowdlending Platform through an API

The version of the OpenAPI document: 2.0.0
Contact: info@crowd4cash.ch

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Loan } from './loan';

/**
 * 
 * @export
 * @interface PagedList
 */
export interface PagedList {
    /**
     * 
     * @type {Array<Loan>}
     * @memberof PagedList
     */
    'loans'?: Array<Loan> | null;
    /**
     * 
     * @type {number}
     * @memberof PagedList
     */
    'currentPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedList
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedList
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof PagedList
     */
    'totalLoansCount'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PagedList
     */
    'hasPreviousPage'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagedList
     */
    'hasNextPage'?: boolean;
}

