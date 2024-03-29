/*
C4C REST API

Access to the Crowd4Cash Crowdlending Platform through an API

The version of the OpenAPI document: 2.0.0
Contact: info@crowd4cash.ch

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Transacions
 */
export interface Transacions {
    /**
     * Id of the transaction
     * @type {string}
     * @memberof Transacions
     */
    'transactionId'?: string | null;
    /**
     * Date when the transaction is made
     * @type {string}
     * @memberof Transacions
     */
    'transactionDate'?: string | null;
    /**
     * Type of the transaction - deposit, interest, withdrawal, etc.
     * @type {string}
     * @memberof Transacions
     */
    'transactionType'?: string | null;
    /**
     * Loan Id
     * @type {number}
     * @memberof Transacions
     */
    'loanId'?: number;
    /**
     * Amount of the transaction
     * @type {number}
     * @memberof Transacions
     */
    'amount'?: number;
    /**
     * Currency
     * @type {string}
     * @memberof Transacions
     */
    'currency'?: string | null;
    /**
     * Description of the transaction
     * @type {string}
     * @memberof Transacions
     */
    'remarks'?: string | null;
}

