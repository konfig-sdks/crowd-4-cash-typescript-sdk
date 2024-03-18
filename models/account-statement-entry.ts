/*
C4C REST API

Access to the Crowd4Cash Crowdlending Platform through an API

The version of the OpenAPI document: 2.0.0
Contact: info@crowd4cash.ch

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the each payment by the borrower
 * @export
 * @interface AccountStatementEntry
 */
export interface AccountStatementEntry {
    /**
     * Number of the borrower instalment
     * @type {number}
     * @memberof AccountStatementEntry
     */
    'annuityNumber'?: number;
    /**
     * Instalment due date
     * @type {string}
     * @memberof AccountStatementEntry
     */
    'dueDate'?: string | null;
    /**
     * A date when the instalment is paid by borrower
     * @type {string}
     * @memberof AccountStatementEntry
     */
    'messageDate'?: string | null;
    /**
     * A date when payment is booked in C4C system
     * @type {string}
     * @memberof AccountStatementEntry
     */
    'matchingDate'?: string | null;
    /**
     * An amount paid by the borrower
     * @type {number}
     * @memberof AccountStatementEntry
     */
    'amount'?: number;
}
